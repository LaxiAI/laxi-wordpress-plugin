#!/bin/bash

# Set variables
PLUGIN_SLUG="laxi-ai"
BUILD_DIR="./dist/$PLUGIN_SLUG"

# Clean previous build
rm -rf ./dist
mkdir -p $BUILD_DIR/assets/js
mkdir -p $BUILD_DIR/assets
mkdir -p $BUILD_DIR/languages

# Install dependencies and build
npm install
npm run build

# Create security index files
echo "<?php // Silence is golden" > $BUILD_DIR/index.php
echo "<?php // Silence is golden" > $BUILD_DIR/assets/index.php
echo "<?php // Silence is golden" > $BUILD_DIR/assets/js/index.php

# Copy plugin files
cp ./assets/js/admin.js $BUILD_DIR/assets/js/

# Copy and rename screenshots for WordPress.org
cp ./assets/screenshot-1.png $BUILD_DIR/assets/screenshot-1.png
cp ./assets/screenshot-2.png $BUILD_DIR/assets/screenshot-2.png

cp ./assets/icon-256x256.png $BUILD_DIR/assets/
cp ./assets/icon-128x128.png $BUILD_DIR/assets/
cp ./assets/banner-772x250.png $BUILD_DIR/assets/
cp ./assets/banner-1544x500.png $BUILD_DIR/assets/

cp ./laxi-chatbot.php $BUILD_DIR/
cp ./readme.txt $BUILD_DIR/

# Copy language files
cp ./languages/laxi-chatbot.pot $BUILD_DIR/languages/

# Generate .pot file if WP-CLI is available
if command -v wp > /dev/null; then
    echo "Generating fresh POT file..."
    wp i18n make-pot . languages/laxi-chatbot.pot --domain=laxi-chatbot
fi

# Create the zip file
cd ./dist
zip -r $PLUGIN_SLUG.zip $PLUGIN_SLUG

echo "Plugin zip created at dist/$PLUGIN_SLUG.zip"