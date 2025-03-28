import React, { useState, useEffect } from 'react';
import { Switch } from './ui/Switch';
import { CheckCircle, XCircle, ExternalLink, LogIn } from 'lucide-react';

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

    // Define steps for confirmation display
    const steps = [
        {
            label: 'Connected',
            complete: status.user && status.present,
        },
        {
            label: 'Designed',
            complete: status.design,
        },
        {
            label: 'Trained',
            complete: status.data,
        }
    ];

    const allComplete = Object.values(status).every(value => value === true);
    const logoPath = `${laxiData.pluginUrl}assets/logo.svg`;
    const isAuthenticated = status.user && status.present;

    return (
        <div className="laxi-container">
            <header className="laxi-header">
                <img
                    src={logoPath}
                    alt="Laxi.ai"
                    className="laxi-logo"
                />
                <button
                    onClick={generateAuthUrl}
                    className={`laxi-auth-button ${isAuthenticated ? 'laxi-button-secondary' : ''}`}
                >
                    <LogIn className="w-4 h-4" />
                    <span>{isAuthenticated ? 'Manage Platform' : 'Log In'}</span>
                </button>
            </header>

            <div className="laxi-main-card">
                <div className="laxi-card-header">
                    <h2 className="laxi-title">Laxi.ai Chatbot</h2>
                    <p className="laxi-subtitle">AI-powered customer support for your WooCommerce store</p>
                </div>

                <div className="laxi-status-container">
                    <div className="laxi-status-indicators">
                        {steps.map((step, index) => (
                            <div key={index} className="laxi-status-item">
                                <span className={`laxi-status-icon ${step.complete ? 'laxi-status-complete' : 'laxi-status-pending'}`}>
                                    {step.complete ? (
                                        <CheckCircle className="w-5 h-5" />
                                    ) : (
                                        <XCircle className="w-5 h-5" />
                                    )}
                                </span>
                                <span className="laxi-status-label">{step.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="laxi-divider"></div>

                <div className="laxi-toggle-container">
                    <div className="laxi-toggle-content">
                        <h3 className="laxi-toggle-title">Enable Chatbot</h3>
                        <p className="laxi-toggle-description">
                            {allComplete
                                ? "Your AI assistant is ready! Toggle to activate on your store."
                                : "Complete setup to enable your AI assistant"}
                        </p>
                    </div>
                    <div className="laxi-toggle-control">
                        <span className="laxi-toggle-status">{isEnabled ? 'Active' : 'Inactive'}</span>
                        <Switch
                            checked={isEnabled}
                            onCheckedChange={toggleChatbot}
                            disabled={!allComplete}
                            className={`laxi-switch ${!allComplete ? 'laxi-switch-disabled' : ''}`}
                        >
                            <span className="switch-primitive-thumb" />
                        </Switch>
                    </div>
                </div>

                {!isAuthenticated && (
                    <div className="laxi-action-hint">
                        <p>Sign in to complete setup and activate your AI assistant</p>
                    </div>
                )}

                {isAuthenticated && !allComplete && (
                    <div className="laxi-action-hint">
                        <p>Complete setup in the Laxi platform to activate your AI assistant</p>
                        <a
                            href={`${laxiData.platformUrl}/studio`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="laxi-text-link"
                        >
                            Go to platform <ExternalLink className="w-3 h-3 inline" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminInterface;