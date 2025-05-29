#!/bin/bash
# Clean and complete deployment script for WordPress.org SVN

echo "Starting deployment process..."

# Build your project first
echo "Building project..."
npm run build

# SVN deployment variables
PLUGIN_SLUG="laxi-ai-for-woocommerce"
SVN_DIR="./svn-deploy"
SVN_REPO="https://plugins.svn.wordpress.org/$PLUGIN_SLUG"
VERSION=$(grep "Version:" laxi-chatbot.php | awk '{print $3}')

echo "Deploying version $VERSION to WordPress.org SVN"

# Check out SVN repo if it doesn't exist or update it
if [ ! -d "$SVN_DIR" ]; then
    echo "Checking out SVN repository..."
    svn co $SVN_REPO $SVN_DIR
else
    echo "Updating existing SVN checkout..."
    cd $SVN_DIR
    svn up
    cd ..
fi

# Clean up trunk
echo "Cleaning SVN trunk directory..."
rm -rf $SVN_DIR/trunk/*

# Create required directories with proper structure
echo "Creating directory structure..."
mkdir -p $SVN_DIR/trunk/assets/js
mkdir -p $SVN_DIR/trunk/assets/
mkdir -p $SVN_DIR/trunk/languages

# Ensure index.php files exist to prevent directory browsing
echo "<?php // Silence is golden" > $SVN_DIR/trunk/index.php
echo "<?php // Silence is golden" > $SVN_DIR/trunk/assets/index.php
echo "<?php // Silence is golden" > $SVN_DIR/trunk/assets/js/index.php

# Copy main plugin file with special care for line endings
echo "Copying main plugin file..."
cp -f laxi-chatbot.php $SVN_DIR/trunk/
# Ensure Unix line endings on the main plugin file
sed -i 's/\r$//' $SVN_DIR/trunk/laxi-chatbot.php

# Copy other main files
echo "Copying plugin files..."
cp -f readme.txt $SVN_DIR/trunk/
[ -f "uninstall.php" ] && cp -f uninstall.php $SVN_DIR/trunk/

# Copy JS assets
echo "Copying JS assets..."
cp -R assets/js/admin.js $SVN_DIR/trunk/assets/js/

# Copy logo and other assets
echo "Copying logo and other assets..."
[ -f "assets/logo.svg" ] && cp -f assets/logo.svg $SVN_DIR/trunk/assets/

# Copy language files if they exist
echo "Copying language files..."
[ -d "languages" ] && cp -R languages/* $SVN_DIR/trunk/languages/

# Copy license files if they exist
echo "Copying license files..."
[ -f "assets/js/admin.js.LICENSE.txt" ] && cp -f assets/js/admin.js.LICENSE.txt $SVN_DIR/trunk/assets/js/

# Copy WordPress.org assets to the assets directory (not trunk/assets)
echo "Setting up WordPress.org assets..."
mkdir -p $SVN_DIR/assets
find assets -name "banner-*.png" -exec cp {} $SVN_DIR/assets/ \; 2>/dev/null || true
find assets -name "icon-*.png" -exec cp {} $SVN_DIR/assets/ \; 2>/dev/null || true
find assets -name "icon-*.svg" -exec cp {} $SVN_DIR/assets/ \; 2>/dev/null || true
find assets -name "screenshot-*.png" -exec cp {} $SVN_DIR/assets/ \; 2>/dev/null || true

# Add all files to SVN
echo "Adding files to SVN..."
cd $SVN_DIR
svn status | grep '^\?' | awk '{print $2}' | xargs -I% svn add % 2>/dev/null || true
svn status | grep '^\!' | awk '{print $2}' | xargs -I% svn rm % 2>/dev/null || true

# Check if our main plugin file is being tracked
if ! svn status | grep -q "laxi-chatbot.php"; then
    echo "WARNING: Main plugin file not being tracked by SVN!"
    echo "Attempting to force add..."
    svn add trunk/laxi-chatbot.php --force
fi

# Create tag if it doesn't exist
if [ ! -d "tags/$VERSION" ]; then
    echo "Creating tag for version $VERSION..."
    svn mkdir tags/$VERSION
    svn cp trunk/* tags/$VERSION
fi

# Show status before commit
echo "SVN status before commit:"
svn status

# Ask for confirmation before committing
read -p "Ready to commit to WordPress.org? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Commit with a meaningful message
    svn ci -m "Release $VERSION - Update plugin files and assets"
    echo "Successfully deployed version $VERSION"
else
    echo "Deployment aborted by user"
fi

echo "Deployment script completed."