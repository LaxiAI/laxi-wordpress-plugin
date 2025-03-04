=== Laxi AI for WooCommerce ===
Contributors: laxi
Tags: woocommerce, ai, chatbot, customer support, product recommendations
Requires at least: 5.6
Tested up to: 6.7
Stable tag: 1.0.0
Requires PHP: 7.2
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Plugin URI: https://github.com/LaxiAI/laxi-wordpress-plugin

Integrate AI-powered chatbots with your WooCommerce store to provide instant customer support and product recommendations.

== Description ==

Laxi AI for WooCommerce adds an intelligent chatbot to your online store, helping customers find products, answer questions, and improve their shopping experience. Our AI chatbot learns from your product catalog and customer interactions to provide accurate and helpful responses.

= Features =
* Easy one-click setup
* AI-powered product recommendations
* 24/7 customer support automation
* Customizable chatbot appearance
* Detailed analytics on customer inquiries
* Seamless WooCommerce integration

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/laxi-ai-for-woocommerce` directory, or install the plugin through the WordPress plugins screen.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Use the Laxi AI menu item to configure the plugin and connect to your Laxi account.

== Frequently Asked Questions ==

= Do I need a Laxi account to use this plugin? =

No, a free account at [laxi.ai](https://laxi.ai) will be created when you connect to the laxi.ai platform through the plugin.

= Is the chatbot customizable? =

Yes, you can customize the appearance, behavior, and responses of your chatbot through the Laxi dashboard.

= What information is shared with Laxi? =

Please see the "External Services" section below for detailed information about data sharing.

= Does this work with all WooCommerce themes? =

Yes, the Laxi chatbot is designed to work with any WooCommerce theme. If you encounter any compatibility issues, please contact our support team.

= Can I control when and where the chatbot appears? =

Yes, through the Laxi dashboard you can configure which pages the chatbot appears on and set conditions for when it should be shown to customers.

== Screenshots ==

1. Chatbot on your WooCommerce store
2. Admin configuration panel
3. Laxi dashboard with analytics

== Changelog ==

= 1.0.0 =
* Initial release

== External Services ==

This plugin connects to the Laxi AI platform to provide AI-powered chatbot functionality for your WooCommerce store. These connections are necessary for the core features of the plugin to work.

= Laxi AI Platform (https://laxi.ai) =

**Purpose:** Provides the chatbot management interface, AI training, and analytics dashboard.

**Data Shared:**
* Store URL and name
* Store administrator email (for account creation/linking)
* WooCommerce API authentication credentials (consumer key and secret)
* Basic store information (theme, plugin list, WordPress version)

**When Data is Shared:**
* During initial plugin setup
* When configuring or updating chatbot settings
* When the Laxi AI dashboard is accessed

**Terms of Service:** [https://www.laxi.ai/legal/terms](https://www.laxi.ai/legal/terms)
**Privacy Policy:** [https://www.laxi.ai/legal/privacy](https://www.laxi.ai/legal/privacy)

= Laxi Chatbot Service (https://laxi-configurator-runner-843713389587.europe-west1.run.app) =

**Purpose:** Hosts and serves the chatbot script that is displayed on your website and processes customer interactions.

**Data Shared:**
* Store URL
* Product catalog data via WooCommerce API
* Customer chat messages (when customers interact with the chatbot)
* Order information (when relevant to customer inquiries)

**When Data is Shared:**
* When the chatbot script loads on your website pages
* During customer interactions with the chatbot
* When checking connection status in the admin dashboard

**Terms of Service:** [https://www.laxi.ai/legal/terms](https://www.laxi.ai/legal/terms)
**Privacy Policy:** [https://www.laxi.ai/legal/privacy](https://www.laxi.ai/legal/privacy)

= Data Transmission Summary =

The plugin transmits data to the following services:

* https://laxi.ai - Main service for account management and chatbot configuration
* https://laxi-configurator-runner-843713389587.europe-west1.run.app - API service for chatbot functionality and WooCommerce integration

The following data may be transmitted:
* Your site URL and store name
* WooCommerce product data to configure and train the chatbot
* Customer chat interactions (processed on Laxi servers to generate responses)

No customer personal data is stored permanently on Laxi servers beyond what is necessary to provide the service.

== User Data Storage ==

Customer chat transcripts and interactions are stored on Laxi AI's secure servers to improve the chatbot's responses and provide analytics. No credit card or payment information is stored or processed by Laxi AI.

You can delete all store data from Laxi's servers at any time by disconnecting your store in the plugin settings or contacting Laxi support.

== Support ==

For support inquiries, please visit [https://laxi.ai/contact](https://laxi.ai/contact) or email team@laxi.ai.

== How to Use ==

After installation and activation:

1. Navigate to the Laxi AI menu in your WordPress admin panel
2. Connect your store to your Laxi account
3. Configure your chatbot settings through the Laxi dashboard
4. Enable the chatbot on your site

The chatbot will now be available to your customers. You can monitor interactions and performance through the Laxi dashboard.