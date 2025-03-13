#!/bin/bash
set -e

# Wait for the database to be ready
if [ ! -z "$WORDPRESS_DB_HOST" ]; then
  WAIT_FOR_DB=30
  echo "Waiting for database connection..."
  while ! mysqladmin ping -h"$WORDPRESS_DB_HOST" -u"$WORDPRESS_DB_USER" -p"$WORDPRESS_DB_PASSWORD" --silent && [ $WAIT_FOR_DB -gt 0 ]; do
    sleep 1
    WAIT_FOR_DB=$((WAIT_FOR_DB-1))
    echo "Waiting for database connection... $WAIT_FOR_DB"
  done
fi

# Check if WordPress is installed, if not install it
cd /var/www/html
if ! wp core is-installed --allow-root; then
  echo "WordPress not installed. Installing WordPress core..."
  # Get domain from environment or use default
  DOMAIN=${WORDPRESS_SITE_URL:-demo.laxi.ai}
  SITE_TITLE=${WORDPRESS_SITE_TITLE:-"WordPress on Cloud Run"}
  ADMIN_USER=${WORDPRESS_ADMIN_USER:-admin}
  ADMIN_PASSWORD=${WORDPRESS_ADMIN_PASSWORD:-$(openssl rand -base64 12)}
  ADMIN_EMAIL=${WORDPRESS_ADMIN_EMAIL:-admin@example.com}

  # Install WordPress
  wp core install --url="https://$DOMAIN" --title="$SITE_TITLE" --admin_user="$ADMIN_USER" --admin_password="$ADMIN_PASSWORD" --admin_email="$ADMIN_EMAIL" --skip-email --allow-root

  echo "WordPress installed successfully!"
  echo "Admin URL: https://$DOMAIN/wp-admin/"
  echo "Username: $ADMIN_USER"
  echo "Password: $ADMIN_PASSWORD"
  echo "Please save these credentials!"

  # Set permalink structure to enable REST API
  echo "Setting permalink structure..."
  wp rewrite structure '/%postname%/' --allow-root
  wp rewrite flush --allow-root
fi

# Check/create .htaccess if needed
if [ ! -f "/var/www/html/.htaccess" ] || [ ! -s "/var/www/html/.htaccess" ]; then
  echo "Creating .htaccess file with rewrite rules..."
  cat > /var/www/html/.htaccess << 'EOF'
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
EOF
  chown www-data:www-data /var/www/html/.htaccess
  chmod 644 /var/www/html/.htaccess
fi

# Install WooCommerce if not already installed
if [ ! -d "/var/www/html/wp-content/plugins/woocommerce" ]; then
  echo "Installing WooCommerce..."
  wp plugin install woocommerce --activate --allow-root
  echo "WooCommerce installed successfully!"
fi

# Ensure REST API is working
echo "Testing REST API..."
curl -I http://localhost/wp-json/ || echo "REST API not responding locally - check after container is fully up"

# Ensure correct ownership
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

# Execute the command passed to docker run
exec "$@"