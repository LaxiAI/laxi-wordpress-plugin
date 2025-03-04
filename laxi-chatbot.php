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

        // Frontend script injection
        if (get_option('laxi_chatbot_enabled', '0') === '1') {
            add_action('wp_footer', [$this, 'inject_chatbot_script']);
        }
    }

    public function enqueue_admin_scripts($hook) {
        if ('toplevel_page_laxi-chatbot' !== $hook) {
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
            'ajaxUrl' => admin_url('admin-ajax.php')
        ));
    }

    public function add_admin_menu() {
        add_menu_page(
            'Laxi AI',
            'Laxi AI',
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

    public function generate_auth_url() {
        $api_keys = $this->create_wc_api_keys(get_current_user_id());

        if (is_wp_error($api_keys)) {
            return false;
        }

        $current_user = wp_get_current_user();
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

    private function create_wc_api_keys($user_id) {
        // Clean up any existing keys first
        $this->cleanup_existing_keys();

        // Check if user has required capabilities
        if (!user_can($user_id, 'manage_woocommerce')) {
            return new WP_Error('invalid-user', __('User does not have required capabilities', 'laxi-ai-for-woocommerce'));
        }

        try {
            // Generate description with timestamp for uniqueness
            /* translators: %s: Current timestamp when the API key was created */
            $description = sprintf(__('laxi.ai Integration - Created %s', 'laxi-ai-for-woocommerce'),current_time('mysql'));

            // Create API key data
            $key_data = [
                'user_id'      => $user_id,
                'description'  => $description,
                'permissions'  => 'read',
                'app_name'     => 'Laxi AI'
            ];

            // Use WooCommerce's API Key Manager
            $api_key = WC_API_Keys::create_key($key_data);

            if (is_wp_error($api_key)) {
                return $api_key;
            }

            // Store the key ID for future reference
            update_option('laxi_wc_api_key_id', $api_key['key_id'], false);

            return [
                'key_id'          => $api_key['key_id'],
                'consumer_key'    => $api_key['consumer_key'],
                'consumer_secret' => $api_key['consumer_secret']
            ];

        } catch (Exception $e) {
            /* translators: %s: Error message from the API key creation process */
            return new WP_Error('api-key-error',sprintf(__('Failed to create API key: %s', 'laxi-ai-for-woocommerce'),$e->getMessage()));
        }
    }

    private function cleanup_existing_keys() {
        $existing_key_id = get_option('laxi_wc_api_key_id');

        if ($existing_key_id) {
            try {
                // Use WooCommerce's API to revoke the key
                WC_API_Keys::remove_key($existing_key_id);
                delete_option('laxi_wc_api_key_id');
            } catch (Exception $e) {
                if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
                    /* translators: 1: API Key ID that failed to be cleaned up, 2: Error message from the cleanup process */
                    $message = sprintf(__('Laxi AI: Failed to cleanup existing API key (ID: %1$d): %2$s', 'laxi-ai-for-woocommerce'),$existing_key_id,$e->getMessage());
                }
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
    if (class_exists('\Automattic\WooCommerce\Utilities\FeaturesUtil')) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
    }
});