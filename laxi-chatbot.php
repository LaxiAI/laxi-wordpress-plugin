<?php
/**
 * Plugin Name: Laxi AI for WooCommerce
 * Plugin URI: https://github.com/LaxiAI/laxi-wordpress-plugin
 * Description: Integrate laxi.ai chatbots with your WooCommerce store
 * Version: 1.0.0
 * Author: laxi.ai Team
 * Text Domain: laxi-ai-for-woocommerce
 * Domain Path: /languages
 * WC requires at least: 3.0.0
 * WC tested up to: 8.0.0
 * Requires PHP: 7.2
 * Requires at least: 5.6
 * Tested up to: 6.7
 * Requires Plugins: woocommerce
 * License: GPL v3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * GitHub Plugin URI: https://github.com/LaxiAI/laxi-wordpress-plugin
 */

if (!defined('ABSPATH')) exit;

// Check if WordPress is running in playground mode
function laxi_is_playground_mode() {
    // Check for WordPress Playground specific constant or environment variable
    if (defined('WP_PLAYGROUND_MODE') && WP_PLAYGROUND_MODE) {
        return true;
    }

    // Check for WordPress.org playground URL patterns
    $host = isset($_SERVER['HTTP_HOST']) ? sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST'])) : '';
    if (strpos($host, 'playground.wordpress.net') !== false ||
        strpos($host, 'wp-playground') !== false ||
        strpos($host, 'playground.wordpress.org') !== false) {
        return true;
    }

    // Check for sandbox URLs or environments
    if (strpos($host, 'sandbox') !== false ||
        getenv('WP_SANDBOX_MODE') ||
        getenv('WP_PLAYGROUND')) {
        return true;
    }

    return false;
}

// Show admin notice if in playground mode
function laxi_playground_admin_notice() {
    echo '<div class="error"><p>Laxi AI for WooCommerce cannot be installed in WordPress playground mode. Please use a standard WordPress installation.</p></div>';
}

// Disable the plugin if in playground mode
if (laxi_is_playground_mode()) {
    add_action('admin_notices', 'laxi_playground_admin_notice');
    // Prevent the rest of the plugin from loading
    return;
}

class Laxi_Ai_Integration {
    private const PLUGIN_KEY = 'xDOvESCE2QfM5fzfRtUcyYOH1Rts38u9CwIiy6Z9XfGmuLZvFOgI8pBHK5wLuGe0';
    private const PLATFORM_URL = 'https://laxi.ai';
    private const CHATBOT_URL = 'https://laxi-configurator-runner-843713389587.europe-west1.run.app';

    public function __construct() {
        // Admin hooks
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
        add_action('wp_ajax_laxi_get_connection_status', [$this, 'ajax_get_connection_status']);
        add_action('wp_ajax_laxi_toggle_chatbot', [$this, 'ajax_toggle_chatbot']);
        add_action('wp_ajax_laxi_auth', [$this, 'generate_auth_url']);

        // Add this new AJAX endpoint
        add_action('wp_ajax_laxi_get_chatbot_status', [$this, 'ajax_get_chatbot_status']);

        // Frontend script injection
        if (get_option('laxi_chatbot_enabled', '0') === '1') {
            add_action('wp_footer', [$this, 'inject_chatbot_script']);
        }
    }

    /**
     * Ajax handler to get current chatbot status
     */
    public function ajax_get_chatbot_status() {
        check_ajax_referer('laxi_admin');

        // Get the current enabled state from options
        $enabled = get_option('laxi_chatbot_enabled', '0') === '1';

        wp_send_json_success(['enabled' => $enabled]);
    }



    public function enqueue_admin_scripts($hook) {
        if ('toplevel_page_laxi-ai-for-woocommerce' !== $hook) {
            return;
        }

        // First register React and ReactDOM
        wp_enqueue_script('react', plugin_dir_url(__FILE__) . 'assets/js/vendor/react.development.js', [], '18.0.0', true);
        wp_enqueue_script('react-dom', plugin_dir_url(__FILE__) . 'assets/js/vendor/react-dom.development.js', ['react'], '18.0.0', true);

        // Enqueue our admin script
        wp_enqueue_script(
            'laxi-admin',
            plugin_dir_url(__FILE__) . 'assets/js/admin.js',
            ['react', 'react-dom'],
            filemtime(plugin_dir_path(__FILE__) . 'assets/js/admin.js'),
            true
        );

        // Pass necessary data to JavaScript
        wp_localize_script('laxi-admin', 'laxiData', array(
            'nonce' => wp_create_nonce('laxi_admin'),
            'platformUrl' => self::PLATFORM_URL,
            'chatbotUrl' => self::CHATBOT_URL,
            'shopUrl' => urlencode(urlencode(get_site_url())),
            'plainUrl' => get_site_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'pluginUrl' => plugin_dir_url(__FILE__)
        ));
    }

    public function add_admin_menu() {
        add_menu_page(
            'laxi.ai',
            'laxi.ai',
            'manage_options',
            'laxi-ai-for-woocommerce',
            [$this, 'render_admin_page'],
            'dashicons-format-chat'
        );
    }

    public function render_admin_page() {
        ?>
        <div class="wrap">
            <div id="laxi-admin-root"></div>
        </div>
        <?php
    }

    public function ajax_toggle_chatbot() {
        check_ajax_referer('laxi_admin');

        $enabled = isset($_POST['enabled']) ? sanitize_text_field(wp_unslash($_POST['enabled'])) : '0';
        update_option('laxi_chatbot_enabled', $enabled);

        wp_send_json_success(['enabled' => $enabled === '1']);
    }

    public function ajax_get_connection_status() {
        check_ajax_referer('laxi_admin');

        $response = wp_remote_get(
            self::CHATBOT_URL . "/v1/frontend/woocommerce/status/" . urlencode(urlencode(get_site_url())),
            [
                'headers' => [
                    'X-Shop-Domain' => get_site_url()
                ]
            ]
        );

        if (is_wp_error($response)) {
            wp_send_json_error(['message' => 'Failed to check connection status']);
            return;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        wp_send_json_success($body);
    }

    /**
     * Register and enqueue the chatbot script properly
     */
    public function inject_chatbot_script() {
        // Register the script handler first
        wp_register_script(
            'laxi-chatbot-loader',
            '',  // Empty URL because we'll use inline script
            [],  // No dependencies
            '1.0.0',
            true  // Load in footer
        );

        // Enqueue the script
        wp_enqueue_script('laxi-chatbot-loader');

        // Add the inline JavaScript that will fetch and execute the chatbot script
        $inline_script = "
            const shopUrl = '" . esc_js(urlencode(urlencode(get_site_url()))) . "';
            const apiUrl = '" . esc_js(self::CHATBOT_URL) . "/v1/frontend/woocommerce/script/' + shopUrl;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) throw new Error('Failed to load Laxi chatbot');
                    return response.text();
                })
                .then(scriptText => {
                    const scriptElement = document.createElement('script');
                    scriptElement.textContent = scriptText;
                    document.body.appendChild(scriptElement);
                })
                .catch(error => {
                    console.error('Laxi.ai Error:', error);
                });
        ";

        wp_add_inline_script('laxi-chatbot-loader', $inline_script, 'after');
    }

    /**
     * Fallback implementation of wc_api_hash if the function is not available
     *
     * @param string $data Plain text to hash
     * @return string Hashed data
     */
    private function fallback_api_hash($data) {
        // This replicates WooCommerce's hashing for API keys
        $salt = wp_salt('auth');
        return hash_hmac('sha256', $data, $salt);
    }

    /**
     * Generate auth URL and create API keys using WooCommerce's proper hooks and functions
     */
    public function generate_auth_url() {
        // Clean up any existing keys first
        $this->cleanup_existing_keys();

        $current_user = wp_get_current_user();
        $user_id = get_current_user_id();

        // Check if user has required capabilities
        if (!user_can($user_id, 'manage_woocommerce')) {
            wp_send_json_error(array('message' => __('User does not have required capabilities', 'laxi-ai-for-woocommerce')));
            return;
        }

        /* translators: %s: timestamp of when the API key was created (in MySQL datetime format) */
        $description = sprintf(__('laxi.ai Integration - Created %s', 'laxi-ai-for-woocommerce'), current_time('mysql'));

        // Create API keys using proper WooCommerce function
        $api_keys = $this->create_wc_api_keys_proper($user_id, $description);

        if (is_wp_error($api_keys)) {
            wp_send_json_error(array('message' => 'Failed to create API keys: ' . $api_keys->get_error_message()));
            return;
        }

        $timestamp = time();
        $blog_name = get_bloginfo('name');

        // Build auth parameters
        $auth_data = [
            'shop' => get_site_url(),
            'platform' => 'woocommerce',
            'timestamp' => $timestamp,
            'consumer_key' => $api_keys['consumer_key'],
            'consumer_secret' => $api_keys['consumer_secret'],
            'user_email' => $current_user->user_email,
            'store_name' => $blog_name,
            'state' => wp_create_nonce('laxi_auth')
        ];

        $signature_string = mb_convert_encoding($blog_name . $timestamp, 'UTF-8');
        $plugin_key_utf = mb_convert_encoding(self::PLUGIN_KEY, 'UTF-8');

        // Sign the request
        $auth_data['signature'] = hash_hmac('sha256', $signature_string, $plugin_key_utf);

        $auth_url = self::PLATFORM_URL . '/studio/woocommerce/auth?' . http_build_query($auth_data);

        wp_send_json_success($auth_url);
    }

   /**
     * Create WooCommerce API keys using proper functions with fallbacks
     *
     * @param int $user_id User ID for whom to create the API keys
     * @param string $description Description for the API key
     * @return array|WP_Error The created API keys or error
     */
    private function create_wc_api_keys_proper($user_id, $description) {
        // Ensure WooCommerce is active
        if (!function_exists('WC')) {
            return new WP_Error('woocommerce-inactive', __('WooCommerce must be active to create API keys', 'laxi-ai-for-woocommerce'));
        }

        // First try to include the necessary WooCommerce API files
        if (!function_exists('wc_create_api_key')) {
            if (file_exists(WP_PLUGIN_DIR . '/woocommerce/includes/wc-api-functions.php')) {
                include_once WP_PLUGIN_DIR . '/woocommerce/includes/wc-api-functions.php';
            }

            // Also include admin functions which might be needed
            if (file_exists(WP_PLUGIN_DIR . '/woocommerce/includes/admin/wc-admin-functions.php')) {
                include_once WP_PLUGIN_DIR . '/woocommerce/includes/admin/wc-admin-functions.php';
            }
        }

        // Check again if the function exists after including files
        if (function_exists('wc_create_api_key')) {
            // Generate a random key and secret
            $consumer_key = 'ck_' . wc_rand_hash();
            $consumer_secret = 'cs_' . wc_rand_hash();

            // Create the API key using WooCommerce's function
            $key_id = wc_create_api_key(
                $user_id,
                $description,
                'read',
                $consumer_key,
                $consumer_secret
            );

            if (!$key_id || is_wp_error($key_id)) {
                if (is_wp_error($key_id)) {
                    return $key_id;
                }
                return new WP_Error('api-key-error', __('Failed to create API key', 'laxi-ai-for-woocommerce'));
            }

            $response = array(
                'key_id' => $key_id,
                'consumer_key' => $consumer_key,
                'consumer_secret' => $consumer_secret
            );
        } else {
            // Fallback method using direct database access if wc_create_api_key isn't available
            global $wpdb;

            // Generate a random key and secret
            if (function_exists('wc_rand_hash')) {
                $consumer_key = 'ck_' . wc_rand_hash();
                $consumer_secret = 'cs_' . wc_rand_hash();
            } else {
                // Even more basic fallback if wc_rand_hash doesn't exist
                $consumer_key = 'ck_' . wp_generate_password(12, false);
                $consumer_secret = 'cs_' . wp_generate_password(32, false);
            }

            /**
             * Note about $wpdb direct usage with WooCommerce API keys
             *
             * While WordPress best practices discourage using $wpdb directly for core tables
             * (posts, users, etc.) in favor of WordPress API functions, the WooCommerce API keys
             * table is a custom table created by WooCommerce. Therefore, direct $wpdb methods
             * are appropriate in this case.
             *
             * For WordPress core tables, you should use functions like:
             * - wp_insert_post(), wp_update_post(), wp_delete_post() for posts
             * - add_user_meta(), update_user_meta(), delete_user_meta() for user meta
             *
             * But for custom plugin tables like 'woocommerce_api_keys', direct $wpdb
             * methods are acceptable since no WordPress API functions exist for them.
             */


            // Insert the new API key into the database
            $wpdb->insert(
                $wpdb->prefix . 'woocommerce_api_keys',
                array(
                    'user_id'         => $user_id,
                    'description'     => $description,
                    'permissions'     => 'read',
                    'consumer_key'    => function_exists('wc_api_hash') ? wc_api_hash($consumer_key) : $this->fallback_api_hash($consumer_key),
                    'consumer_secret' => $consumer_secret,
                    'truncated_key'   => substr($consumer_key, -7),
                    'last_access'     => null
                ),
                array(
                    '%d',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                    '%s'
                )
            );

            $key_id = $wpdb->insert_id;

            if (!$key_id) {
                return new WP_Error('api-key-error', __('Failed to create API key in database', 'laxi-ai-for-woocommerce'));
            }

            $response = array(
                'key_id' => $key_id,
                'consumer_key' => $consumer_key,
                'consumer_secret' => $consumer_secret
            );
        }

        // Store the key ID for future reference
        update_option('laxi_wc_api_key_id', $response['key_id'], false);

        return $response;
    }

    /**
     * Clean up existing API keys using proper WooCommerce functions
     */
    private function cleanup_existing_keys() {
        $existing_key_id = get_option('laxi_wc_api_key_id');

        if ($existing_key_id) {
            // Use the WooCommerce function to delete API keys if available
            if (function_exists('wc_delete_api_key')) {
                wc_delete_api_key($existing_key_id);
                delete_option('laxi_wc_api_key_id');
            } else {
                // Fallback to WordPress functions
                global $wpdb;
                $wpdb->delete(
                    $wpdb->prefix . 'woocommerce_api_keys',
                    array('key_id' => $existing_key_id),
                    array('%d')
                );
                delete_option('laxi_wc_api_key_id');
            }
        }
    }

    // Add this new method to declare HPOS compatibility
    public static function declare_hpos_compatibility() {
        if (class_exists('\Automattic\WooCommerce\Utilities\FeaturesUtil')) {
            \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
        }
    }
}

// Initialize plugin
function laxi_init() {
    // Double-check again for playground mode
    if (laxi_is_playground_mode()) {
        return;
    }

    if (!class_exists('WooCommerce')) {
        add_action('admin_notices', function() {
            echo '<div class="error"><p>Laxi AI requires WooCommerce to be installed and active.</p></div>';
        });
        return;
    }

    new Laxi_Ai_Integration();
}

add_action('plugins_loaded', 'laxi_init');

add_action('before_woocommerce_init', function() {
    // Skip HPOS compatibility declaration if in playground mode
    if (laxi_is_playground_mode()) {
        return;
    }

    if (class_exists('\Automattic\WooCommerce\Utilities\FeaturesUtil')) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
    }
});