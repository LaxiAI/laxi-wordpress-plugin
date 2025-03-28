import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import { ExternalLink, LogIn } from 'lucide-react';

const AdminInterface = () => {
    const [status, setStatus] = useState({
        user: false,
        present: false,
        design: false,
        data: false
    });
    const [isEnabled, setIsEnabled] = useState(false);

    // Fetch connection status
    const checkStatus = async () => {
        try {
            const response = await fetch(laxiData.ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'laxi_get_connection_status',
                    _ajax_nonce: laxiData.nonce
                })
            });
            const data = await response.json();
            if (data.success) {
                setStatus(data.data);
            }
        } catch (error) {
            console.error('Failed to check status:', error);
        }
    };

    // Generate auth URL for login
    const generateAuthUrl = async () => {
        try {
            const response = await fetch(laxiData.ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'laxi_auth',
                    _ajax_nonce: laxiData.nonce
                })
            });
            const data = await response.json();
            if (data.success && data.data) {
                window.open(data.data, '_blank');
            }
        } catch (error) {
            console.error('Failed to generate auth URL:', error);
        }
    };

    // Toggle chatbot functionality
    const toggleChatbot = async (enabled) => {
        try {
            const response = await fetch(laxiData.ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'laxi_toggle_chatbot',
                    enabled: enabled ? '1' : '0',
                    _ajax_nonce: laxiData.nonce
                })
            });
            const data = await response.json();
            if (data.success) {
                setIsEnabled(enabled);
            }
        } catch (error) {
            console.error('Failed to toggle chatbot:', error);
        }
    };

    // Check status on load and periodically
    useEffect(() => {
        checkStatus();
        const interval = setInterval(checkStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    const allComplete = Object.values(status).every(value => value === true);
    const logoPath = `${laxiData.pluginUrl}assets/logo.svg`;
    const isAuthenticated = status.user && status.present;

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            {/* Header with logo and dashboard button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                    src={logoPath}
                    alt="Laxi.ai"
                    className="h-8 w-auto"
                />

                <button
                    onClick={generateAuthUrl}
                    className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all bg-purple-800 text-white hover:bg-purple-700"
                >
                    <LogIn className="w-4 h-4 mr-2" />
                    <span>{isAuthenticated ? 'Access Dashboard' : 'Connect Account'}</span>
                </button>
            </div>

            {/* Enable Chatbot - Simple toggle with antd Switch */}
            <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                    <div>
                        <p className="text-sm text-gray-700">
                            {isAuthenticated
                                ? (allComplete
                                    ? "Your AI Agent is ready to help customers find products and answer questions"
                                    : "Complete setup in the dashboard to enable your AI Agent")
                                : "Connect your account to set up your AI Agent"}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                        <span className="text-sm font-medium text-gray-600">
                            {isEnabled ? 'Active' : 'Inactive'}
                        </span>
                        <Switch
                            checked={isEnabled}
                            onChange={toggleChatbot}
                            disabled={!allComplete}
                            // Custom styling for Ant Design switch
                            style={{ backgroundColor: isEnabled ? '#9254de' : undefined }}
                        />
                    </div>
                </div>
            </div>

            {/* Authentication status */}
            <div className="px-6 pb-3">
                <div className="text-xs font-medium text-gray-500">
                    {isAuthenticated
                        ? "✓ Account connected"
                        : "⚠️ Authentication required"}
                </div>
            </div>

            {/* Action hint based on authentication and completion status */}
            <div className="px-6 pb-6 text-center">
                {!isAuthenticated ? (
                    <p className="text-sm text-gray-600">
                        Sign in to complete setup and activate your AI Agent
                    </p>
                ) : !allComplete ? (
                    <a
                        href={`${laxiData.platformUrl}/studio`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-purple-700 hover:text-purple-800"
                    >
                        Complete setup in dashboard
                        <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default AdminInterface;