"use strict";

/**
 * Accessibility Module for Stadium Genie
 * Handles toggling high contrast mode and text size adjustments.
 */
const Accessibility = {
    init: function() {
        const btnContrast = document.getElementById('btn-contrast');
        const btnTextSize = document.getElementById('btn-text-size');
        
        if (btnContrast) {
            btnContrast.addEventListener('click', () => {
                document.body.classList.toggle('high-contrast');
                const isHighContrast = document.body.classList.contains('high-contrast');
                btnContrast.classList.toggle('active', isHighContrast);
                btnContrast.setAttribute('aria-pressed', isHighContrast);
            });
        }
        
        if (btnTextSize) {
            btnTextSize.addEventListener('click', () => {
                document.body.classList.toggle('large-text');
                const isLargeText = document.body.classList.contains('large-text');
                btnTextSize.classList.toggle('active', isLargeText);
                btnTextSize.setAttribute('aria-pressed', isLargeText);
            });
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', Accessibility.init);
