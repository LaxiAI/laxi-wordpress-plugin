#!/bin/bash
set -e

# This script fixes common WordPress REST API issues

# 1. Connect to your Cloud Run service
echo "Connecting to WordPress container..."
gcloud run services describe wordpress-woocommerce --platform managed --region us-central1
SERVICE_NAME="wordpress-woocommerce"
DOMAIN="demo.laxi.ai"

# 2. Enable exec into Cloud Run container (requires proper IAM permissions)
# Create a new revision with debugging parameters
echo "Creating a new revision with debugging capabilities..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/adept-rock-414315/$SERVICE_NAME:latest \
  --command /bin/bash \
  --args "-c","sleep 3600" \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --cpu=1 \
  --memory=1Gi

# Get the container ID
REVISION_NAME=$(gcloud run revisions list --platform managed --region us-central1 --service $SERVICE_NAME --limit 1 --format="value(metadata.name)")
echo "Latest revision: $REVISION_NAME"

# 3. Fix WordPress issues
echo "Fixing WordPress REST API issues..."
echo "Run these commands inside the container:"

cat << 'EOF'
# Inside the container:

# 1. Check if WordPress is properly installed
wp core is-installed --allow-root
if [ $? -ne 0 ]; then
  echo "WordPress is not properly installed. Reinstalling..."
  wp core install --url="https://demo.laxi.ai" --title="WordPress on Cloud Run" --admin_user="admin" --admin_password="your_secure_password" --admin_email="admin@example.com" --skip-email --allow-root
fi

# 2. Update permalink structure to enable REST API
wp rewrite structure '/%postname%/' --allow-root
wp rewrite flush --allow-root

# 3. Check plugins that might interfere with REST API
wp plugin list --allow-root
# Consider disabling security plugins temporarily
# wp plugin deactivate plugin-name --allow-root

# 4. Create a proper .htaccess file if missing
if [ ! -f "/var/www/html/.htaccess" ]; then
  echo "Creating .htaccess file..."
  cat > /var/www/html/.htaccess << 'HTACCESS'
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
HTACCESS
  chown www-data:www-data /var/www/html/.htaccess
  chmod 644 /var/www/html/.htaccess
fi

# 5. Check wp-config.php for potential issues
grep -i "rest" /var/www/html/wp-config.php
# Make sure REST API is not disabled by adding this to wp-config.php if needed
# wp config set DISABLE_WP_REST_API false --allow-root

# 6. Test REST API manually
curl -I http://localhost/wp-json/

# 7. Check Apache configuration
apache2ctl -t
EOF

# 4. Rebuild and redeploy without debug parameters
echo "Once issues are fixed, redeploy the service:"
echo "gcloud run deploy $SERVICE_NAME --image gcr.io/adept-rock-414315/$SERVICE_NAME:latest --platform managed --region us-central1"

echo "5. Test REST API endpoint after deployment:"
echo "curl -I https://$DOMAIN/wp-json/"

echo "6. Verify domain DNS settings:"
echo "dig $DOMAIN +short"