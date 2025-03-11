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

    useEffect(() => {
        checkStatus();
        const interval = setInterval(checkStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        {
            number: 1,
            label: 'Connect your store',
            description: 'Link your store to enable AI-powered customer support',
            btnLabel: 'Sign In',
            complete: status.user && status.present,
            onClick: generateAuthUrl
        },
        {
            number: 2,
            label: 'Personalize your agent',
            description: 'Customize how your AI assistant looks and behaves',
            btnLabel: 'Design',
            complete: status.design,
            link: `${laxiData.platformUrl}/studio/design`
        },
        {
            number: 3,
            label: 'Train your agent',
            description: 'Add knowledge to make your AI assistant smarter',
            btnLabel: 'Update AI',
            complete: status.data,
            link: `${laxiData.platformUrl}/studio/knowledge`
        }
    ];

    const allComplete = Object.values(status).every(value => value === true);
    const logoPath = `${laxiData.pluginUrl}assets/logo.svg`;

    return (
        <div>
            <header className="laxi-header">
                <img
                    src={logoPath}
                    alt="Laxi.ai"
                    className="laxi-logo"
                />
                <button
                    onClick={generateAuthUrl}
                    className="laxi-auth-button"
                >
                    <LogIn className="w-4 h-4" />
                    <span>Log In to Platform</span>
                </button>
            </header>

            <div className="step-container">
                {steps.map((step) => (
                    <div key={step.number} className="step-item">
                        <div className="step-header">
                            <div className="step-number">{step.number}</div>
                            <div className="flex-1">
                                <h3 className="step-title">{step.label}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`status-icon ${step.complete ? 'status-complete' : 'status-pending'}`}>
                                    {step.complete ? (
                                        <CheckCircle className="w-6 h-6" />
                                    ) : (
                                        <XCircle className="w-6 h-6"/>
                                    )}
                                </span>
                                {step.onClick ? (
                                    <button
                                        onClick={step.onClick}
                                        disabled={step.complete}
                                        className="laxi-auth-button"
                                    >
                                        <span>{step.btnLabel}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <a
                                        href={step.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="laxi-auth-button"
                                    >
                                        <span>{step.btnLabel}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {allComplete && (
                <div className="step-item">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="step-title">Enable Chatbot</h3>
                            <p className="text-gray-600">Activate the AI assistant on your store</p>
                        </div>
                        <Switch
                            checked={isEnabled}
                            onCheckedChange={toggleChatbot}
                            className="laxi-switch"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminInterface;