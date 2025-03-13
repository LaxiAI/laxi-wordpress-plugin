FROM php:8.1-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    libicu-dev \
    mariadb-client \
    git \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql zip exif intl \
    && a2enmod rewrite

# Set upload limit
RUN echo "upload_max_filesize = 64M" > /usr/local/etc/php/conf.d/uploads.ini \
    && echo "post_max_size = 64M" >> /usr/local/etc/php/conf.d/uploads.ini

# Configure Apache for pretty permalinks
RUN { \
        echo '<Directory /var/www/html>'; \
        echo '    Options Indexes FollowSymLinks'; \
        echo '    AllowOverride All'; \
        echo '    Require all granted'; \
        echo '</Directory>'; \
    } > /etc/apache2/conf-available/wordpress.conf \
    && a2enconf wordpress

# Download WordPress
WORKDIR /var/www/html
RUN curl -O https://wordpress.org/latest.tar.gz \
    && tar -xzf latest.tar.gz \
    && mv wordpress/* . \
    && rmdir wordpress \
    && rm latest.tar.gz \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Create basic .htaccess file
RUN echo '# BEGIN WordPress' > /var/www/html/.htaccess \
    && echo '<IfModule mod_rewrite.c>' >> /var/www/html/.htaccess \
    && echo 'RewriteEngine On' >> /var/www/html/.htaccess \
    && echo 'RewriteBase /' >> /var/www/html/.htaccess \
    && echo 'RewriteRule ^index\.php$ - [L]' >> /var/www/html/.htaccess \
    && echo 'RewriteCond %{REQUEST_FILENAME} !-f' >> /var/www/html/.htaccess \
    && echo 'RewriteCond %{REQUEST_FILENAME} !-d' >> /var/www/html/.htaccess \
    && echo 'RewriteRule . /index.php [L]' >> /var/www/html/.htaccess \
    && echo '</IfModule>' >> /var/www/html/.htaccess \
    && echo '# END WordPress' >> /var/www/html/.htaccess \
    && chown www-data:www-data /var/www/html/.htaccess \
    && chmod 644 /var/www/html/.htaccess

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp

# Copy custom wp-config.php
COPY wp-config.php /var/www/html/wp-config.php

# Install WooCommerce (will be done at startup)
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]