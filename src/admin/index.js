import React from 'react';
import { createRoot } from 'react-dom/client';
import AdminInterface from './components/AdminInterface';
import '../styles/admin.css';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('laxi-admin-root');
    if (container) {
        const root = createRoot(container);
        root.render(
            <React.StrictMode>
                <AdminInterface />
            </React.StrictMode>
        );
    }
});