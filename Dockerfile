FROM wordpress:latest

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

# Install required PHP extensions
RUN apt-get update && apt-get install -y \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libzip-dev \
    && docker-php-ext-install zip

# WooCommerce will be installed later via WordPress admin

# Add Google Cloud SQL proxy support
COPY cloud-sql-proxy.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/cloud-sql-proxy.sh

# Set working directory back to the root
WORKDIR /var/www/html

# Copy custom wp-config.php if needed
# COPY wp-config.php /usr/src/wordpress/

# Set entrypoint
# ENTRYPOINT ["cloud-sql-proxy.sh"]
CMD ["apache2-foreground"]