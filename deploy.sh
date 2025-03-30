#!/bin/bash
# Build your project first
npm run build

# SVN deployment
SVN_DIR="./svn-deploy"
SVN_REPO="https://plugins.svn.wordpress.org/laxi-ai-for-woocommerce"
VERSION=$(grep "Version:" laxi-chatbot.php | awk '{print $3}')

# Check out SVN repo if it doesn't exist
if [ ! -d "$SVN_DIR" ]; then
    svn co $SVN_REPO $SVN_DIR
fi

# Clean up trunk
rm -rf $SVN_DIR/trunk/*

# Create required directories
mkdir -p $SVN_DIR/trunk/assets/js
mkdir -p $SVN_DIR/trunk/languages

# Copy main plugin files to trunk
cp laxi-chatbot.php $SVN_DIR/trunk/
cp index.php $SVN_DIR/trunk/
cp readme.txt $SVN_DIR/trunk/

# Copy uninstall.php if it exists
if [ -f "uninstall.php" ]; then
    cp uninstall.php $SVN_DIR/trunk/
fi

# Copy JS assets
cp -R assets/js/* $SVN_DIR/trunk/assets/js/

# Copy language files
cp -R languages/* $SVN_DIR/trunk/languages/

# Ensure all required license files are included
if [ -f "assets/js/admin.js.LICENSE.txt" ]; then
    cp assets/js/admin.js.LICENSE.txt $SVN_DIR/trunk/assets/js/
fi

# Copy WordPress.org assets to the assets directory (not trunk/assets)
mkdir -p $SVN_DIR/assets
cp assets/banner-*.png $SVN_DIR/assets/ 2>/dev/null || true
cp assets/icon*.{png,svg} $SVN_DIR/assets/ 2>/dev/null || true
cp assets/screenshot-*.png $SVN_DIR/assets/ 2>/dev/null || true

# Add all files to SVN
cd $SVN_DIR
svn status | grep '^\?' | awk '{print $2}' | xargs -I% svn add %
svn status | grep '^\!' | awk '{print $2}' | xargs -I% svn rm %

# Create tag if it doesn't exist
if [ ! -d "tags/$VERSION" ]; then
    svn mkdir tags/$VERSION
    svn cp trunk/* tags/$VERSION
fi

# Commit with a meaningful message
svn ci -m "Release $VERSION - Update plugin files and assets"

echo "Successfully deployed version $VERSION"