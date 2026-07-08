"use strict";

/**
 * Security Module for Stadium Genie
 * Handles input sanitization to prevent XSS attacks in the chat interface.
 */
const Security = {
    /**
     * Sanitizes a string by replacing potentially dangerous HTML characters.
     * @param {string} str - The raw user input.
     * @returns {string} The sanitized string.
     */
    sanitizeInput: function(str) {
        if (typeof str !== 'string') return '';
        
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return str.replace(reg, (match) => (map[match]));
    },

    /**
     * Validates that the input does not exceed a maximum length to prevent buffer/spam attacks.
     * @param {string} str - The raw user input.
     * @param {number} maxLength - Maximum allowed characters.
     * @returns {boolean} True if valid, false otherwise.
     */
    validateInputLength: function(str, maxLength = 200) {
        if (typeof str !== 'string') return false;
        return str.length <= maxLength;
    }
};

// Export to global scope for other scripts to use
window.Security = Security;
