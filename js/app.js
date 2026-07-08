"use strict";

/**
 * Translations Dictionary
 * Stores all localization strings.
 */
const Translations = {
    es: {
        appTitle: "FIFA",
        appSubtitle: "COPA MUNDIAL 2026",
        navFan: "Acompañante de Fan",
        navOps: "Operaciones del Estadio",
        navIncidents: "Incidentes (Soporte IA)",
        navHeatmap: "Mapa de Calor de Multitud",
        navDispatch: "Despacho de Personal",
        navTransit: "Transporte y Tránsito",
        commandCenter: "CENTRO DE MANDO",
        activeChannel: "Canal de Seguridad 4 Activo",
        titleOps: "Centro de Inteligencia de Operaciones",
        subtitleOps: "Consola de respuesta a incidentes en tiempo real",
        matchday: "DÍA DE PARTIDO 1 - INICIO EN 2H 20M",
        opsConsole: "Consola de Incidentes",
        activeAlerts: "3 alertas activas",
        liveOverlay: "Densidad de Multitud",
        thermalMapping: "Mapeo de matriz de sensores térmicos",
        clearZone: "Despejado (<30%)",
        crowdedZone: "Concurrido (60%)",
        bottleneckZone: "Cuello de botella (95%)",
        aiAdvisor: "Asesor de Despacho GenAI",
        autoGenerator: "Generador de respuesta automatizado",
        selectIncident: "Seleccione un incidente activo para analizar.",
        staffTracker: "Personal y Voluntarios",
        liveDeployment: "Rastreador de despliegue",
        sustainabilityTitle: "Métricas de Sostenibilidad",
        chatbotTitle: "Chatbot Asistente",
        chatbotSubtitle: "Pregunte sobre navegación, comida o reglas",
        chatbotGreeting: "¡Bienvenido! Soy su asistente GenAI.",
        pillRestroom: "🚻 Baño más cercano",
        pillNav: "📍 Navegar al asiento",
        pillFood: "🍔 Opciones de comida",
        pillTransitReq: "🚇 Tránsito en Vivo",
        chatPlaceholder: "Escriba su mensaje aquí..."
    },
    fr: {
        appTitle: "FIFA",
        appSubtitle: "COUPE DU MONDE 2026",
        navFan: "Compagnon de Fan",
        navOps: "Opérations du Stade",
        navIncidents: "Incidents (Support IA)",
        navHeatmap: "Carte Thermique",
        navDispatch: "Répartition",
        navTransit: "Transport et Transit",
        commandCenter: "CENTRE DE COMMANDEMENT",
        activeChannel: "Canal de Sécurité Actif",
        titleOps: "Centre d'Intelligence",
        subtitleOps: "Console de réponse aux incidents",
        matchday: "JOUR DE MATCH 1",
        opsConsole: "Console d'Incidents",
        activeAlerts: "3 alertes actives",
        liveOverlay: "Densité de Foule",
        thermalMapping: "Cartographie en temps réel",
        clearZone: "Dégagé (<30%)",
        crowdedZone: "Bondé (60%)",
        bottleneckZone: "Goulot (95%)",
        aiAdvisor: "Conseiller GenAI",
        autoGenerator: "Générateur de réponse",
        selectIncident: "Sélectionnez un incident actif.",
        staffTracker: "Personnel et Bénévoles",
        liveDeployment: "Suivi de déploiement",
        sustainabilityTitle: "Mesures de Durabilité",
        chatbotTitle: "Chatbot Assistant",
        chatbotSubtitle: "Demandez de l'aide",
        chatbotGreeting: "Bienvenue ! Je suis votre assistant.",
        pillRestroom: "🚻 Toilettes",
        pillNav: "📍 Naviguer",
        pillFood: "🍔 Nourriture",
        pillTransitReq: "🚇 Transport",
        chatPlaceholder: "Tapez votre message..."
    },
    de: {
        appTitle: "FIFA",
        appSubtitle: "WELTMEISTERSCHAFT 2026",
        navFan: "Fan-Begleiter",
        navOps: "Stadionbetrieb",
        navIncidents: "Vorfälle",
        navHeatmap: "Zuschauer-Heatmap",
        navDispatch: "Personaldisposition",
        navTransit: "Transport & Transit",
        commandCenter: "BEFEHLSZENTRALE",
        activeChannel: "Sicherheitskanal Aktiv",
        titleOps: "Intelligence Center",
        subtitleOps: "Konsole für Echtzeit-Reaktion",
        matchday: "SPIELTAG 1",
        opsConsole: "Ops-Konsole",
        activeAlerts: "3 aktive Alarme",
        liveOverlay: "Zuschauerdichte",
        thermalMapping: "Echtzeit-Mapping",
        clearZone: "Frei (<30%)",
        crowdedZone: "Überfüllt (60%)",
        bottleneckZone: "Engpass (95%)",
        aiAdvisor: "GenAI-Berater",
        autoGenerator: "Antwortgenerator",
        selectIncident: "Wählen Sie einen Vorfall aus.",
        staffTracker: "Personal & Freiwillige",
        liveDeployment: "Live-Einsatz",
        sustainabilityTitle: "Nachhaltigkeitskennzahlen",
        chatbotTitle: "Fan-Chatbot",
        chatbotSubtitle: "Fragen Sie nach Navigation",
        chatbotGreeting: "Willkommen! Ich bin Ihr Assistent.",
        pillRestroom: "🚻 Toilette",
        pillNav: "📍 Navigieren",
        pillFood: "🍔 Essen",
        pillTransitReq: "🚇 Transit",
        chatPlaceholder: "Nachricht eingeben..."
    }
};

/**
 * Service handling internationalization and text updates.
 */
class LocalizationService {
    /**
     * Translates the UI based on the selected language key.
     * @param {string} lang - The language code (e.g., 'en', 'es').
     */
    static translate(lang) {
        if (lang === 'en') {
            location.reload(); // Reset to base HTML
            return;
        }
        const t = Translations[lang];
        if (!t) return;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerText = t[key];
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.placeholder = t[key];
        });
    }
}

/**
 * Controller for the Staff Operations Dashboard.
 */
class DashboardController {
    constructor() {
        this.incidentList = document.getElementById('incident-list');
        this.advisorContent = document.getElementById('advisor-content');
    }

    /**
     * Fetches mock incidents and renders them to the DOM.
     */
    renderIncidents() {
        const incidents = window.GenAIEngine.getIncidents();
        this.incidentList.innerHTML = '';
        
        incidents.forEach(inc => {
            const card = document.createElement('div');
            card.className = `incident-card ${inc.severity}`;
            card.dataset.id = inc.id;

            const topDiv = document.createElement('div');
            topDiv.className = 'incident-card-top';
            const h4 = document.createElement('h4');
            h4.textContent = inc.title;
            const badge = document.createElement('span');
            badge.className = `badge ${inc.severity}`;
            badge.textContent = inc.severity.toUpperCase();
            topDiv.appendChild(h4);
            topDiv.appendChild(badge);

            const p = document.createElement('p');
            p.textContent = inc.description;

            const bottomDiv = document.createElement('div');
            bottomDiv.className = 'incident-card-bottom';
            const locDiv = document.createElement('div');
            locDiv.className = `location ${inc.severity}`;
            const dot = document.createElement('div');
            dot.className = 'dot';
            locDiv.appendChild(dot);
            locDiv.appendChild(document.createTextNode(' ' + inc.location));
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time';
            timeDiv.textContent = inc.time;
            bottomDiv.appendChild(locDiv);
            bottomDiv.appendChild(timeDiv);

            card.appendChild(topDiv);
            card.appendChild(p);
            card.appendChild(bottomDiv);

            // Must support keyboard interaction for accessibility
            card.tabIndex = 0;
            card.addEventListener('click', () => this.handleIncidentClick(card, inc.id));
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleIncidentClick(card, inc.id);
            });
            this.incidentList.appendChild(card);
        });
    }

    /**
     * Triggers the GenAI advisor for a specific incident.
     * @param {HTMLElement} cardElement - The clicked DOM node.
     * @param {string} incidentId - The ID of the incident.
     */
    async handleIncidentClick(cardElement, incidentId) {
        document.querySelectorAll('.incident-card').forEach(c => c.classList.remove('selected'));
        cardElement.classList.add('selected');
        
        this.advisorContent.innerHTML = '';
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'empty-state';
        loadingDiv.style.animation = 'pulse 1.5s infinite';
        const loadingP = document.createElement('p');
        loadingP.style.color = 'var(--accent-cyan)';
        loadingP.textContent = 'Analyzing incident data...';
        loadingDiv.appendChild(loadingP);
        this.advisorContent.appendChild(loadingDiv);
        
        try {
            const response = await window.GenAIEngine.getAdvisorRecommendation(incidentId);
            this.advisorContent.innerHTML = '';
            
            const aiResponseDiv = document.createElement('div');
            aiResponseDiv.className = 'ai-response';
            
            const textP = document.createElement('p');
            textP.textContent = response.text;
            
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'ai-actions';
            
            response.actions.forEach(action => {
                const btn = document.createElement('button');
                btn.className = 'btn-dispatch';
                btn.textContent = action;
                actionsDiv.appendChild(btn);
            });
            
            aiResponseDiv.appendChild(textP);
            aiResponseDiv.appendChild(actionsDiv);
            this.advisorContent.appendChild(aiResponseDiv);
        } catch (e) {
            console.error(e);
            this.advisorContent.innerHTML = '';
            const errorP = document.createElement('p');
            errorP.style.color = 'var(--accent-red)';
            errorP.textContent = 'Error analyzing incident.';
            this.advisorContent.appendChild(errorP);
        }
    }
}

/**
 * Controller for the Fan Companion Chatbot.
 */
class ChatbotController {
    constructor() {
        this.chatForm = document.getElementById('chat-form');
        this.chatInput = document.getElementById('chat-input');
        this.chatWindow = document.getElementById('chat-window');
        this.chatPills = document.querySelectorAll('.chat-pill');
        this.lastChatTimestamp = 0;
        this.chatRateLimitMs = 1500;
        this.bindEvents();
    }

    /**
     * Binds form and pill events to the chatbot handler.
     */
    bindEvents() {
        if (this.chatForm) {
            this.chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleChatSubmit();
            });
        }
        
        this.chatPills.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.chatInput.value = e.target.getAttribute('data-query');
                this.handleChatSubmit();
            });
        });
    }

    /**
     * Processes a user chat submission, applying security and rate limits.
     */
    async handleChatSubmit() {
        const now = Date.now();
        if (now - this.lastChatTimestamp < this.chatRateLimitMs) {
            this.appendChatMessage("Please wait a moment before sending another message.", 'ai');
            return;
        }
        
        const rawInput = this.chatInput.value.trim();
        if (!rawInput) return;
        
        if (!window.Security.validateInputLength(rawInput, 200)) {
            this.appendChatMessage("Your message is too long. Please keep it under 200 characters.", 'ai');
            return;
        }
        
        this.lastChatTimestamp = now;
        const sanitizedQuery = window.Security.sanitizeInput(rawInput);
        this.chatInput.value = '';
        
        this.appendChatMessage(sanitizedQuery, 'user');
        this.appendTypingIndicator();
        
        try {
            const aiResponse = await window.GenAIEngine.processFanQuery(sanitizedQuery);
            this.removeTypingIndicator();
            this.appendChatMessage(aiResponse, 'ai');
        } catch (error) {
            console.error(error);
            this.removeTypingIndicator();
            this.appendChatMessage("Service unavailable.", 'ai');
        }
    }
    
    /**
     * Appends a message bubble to the chat window.
     * @param {string} text - Message content.
     * @param {string} sender - 'user' or 'ai'.
     */
    appendChatMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        const p = document.createElement('p');
        p.textContent = text;
        msgDiv.appendChild(p);
        this.chatWindow.appendChild(msgDiv);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    }

    /** Renders a loading indicator. */
    appendTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ai-message typing-indicator`;
        msgDiv.id = 'typing-indicator';
        const p = document.createElement('p');
        p.textContent = '...';
        msgDiv.appendChild(p);
        this.chatWindow.appendChild(msgDiv);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    }

    /** Removes the loading indicator. */
    removeTypingIndicator() {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }
}

/**
 * Main Application orchestrator.
 */
class MainApp {
    constructor() {
        this.cacheDOM();
        this.dashboard = new DashboardController();
        this.chatbot = new ChatbotController();
    }

    /** Initialize application state */
    init() {
        this.bindGlobalEvents();
        this.dashboard.renderIncidents();
    }

    /** Cache core UI elements */
    cacheDOM() {
        this.btnFan = document.getElementById('btn-fan');
        this.btnStaff = document.getElementById('btn-staff');
        this.viewOps = document.getElementById('view-stadium-ops');
        this.viewFan = document.getElementById('view-fan-companion');
        this.opsNav = document.getElementById('ops-nav');
        this.viewTitle = document.getElementById('view-title');
        this.viewSubtitle = document.getElementById('view-subtitle');
        this.langSelect = document.getElementById('lang-select');
    }

    /** Bind core routing and a11y events */
    bindGlobalEvents() {
        // Mode Switcher
        this.btnFan.addEventListener('click', () => this.switchMode('fan'));
        this.btnStaff.addEventListener('click', () => this.switchMode('staff'));
        
        // Translation
        if (this.langSelect) {
            this.langSelect.addEventListener('change', (e) => LocalizationService.translate(e.target.value));
        }

        // Accessibility Menu Logic
        const btnA11y = document.getElementById('btn-a11y');
        const a11yDropdown = document.getElementById('a11y-dropdown');
        if (btnA11y && a11yDropdown) {
            btnA11y.addEventListener('click', () => {
                const isHidden = a11yDropdown.classList.toggle('hidden');
                btnA11y.setAttribute('aria-expanded', !isHidden);
            });
            document.addEventListener('click', (e) => {
                if (!btnA11y.contains(e.target) && !a11yDropdown.contains(e.target)) {
                    a11yDropdown.classList.add('hidden');
                    btnA11y.setAttribute('aria-expanded', 'false');
                }
            });
        }

        document.getElementById('toggle-contrast')?.addEventListener('click', (e) => {
            const isActive = document.body.classList.toggle('high-contrast');
            e.target.classList.toggle('active');
            e.target.setAttribute('aria-pressed', isActive);
        });

        document.getElementById('toggle-textsize')?.addEventListener('click', (e) => {
            const isActive = document.body.classList.toggle('large-text');
            e.target.classList.toggle('active');
            e.target.setAttribute('aria-pressed', isActive);
        });
    }

    /**
     * Toggles between Fan and Staff modes.
     * @param {string} mode - 'fan' or 'staff'.
     */
    switchMode(mode) {
        if (mode === 'fan') {
            this.btnFan.classList.add('active');
            this.btnStaff.classList.remove('active');
            this.viewOps.style.display = 'none';
            this.viewFan.style.display = 'block';
            this.opsNav.style.opacity = '0.3';
            this.opsNav.style.pointerEvents = 'none';
            
            this.viewTitle.innerText = "Fan Companion Center";
            this.viewSubtitle.innerText = "Your personal AI assistant for the ultimate stadium experience.";
        } else {
            this.btnStaff.classList.add('active');
            this.btnFan.classList.remove('active');
            this.viewFan.style.display = 'none';
            this.viewOps.style.display = 'grid';
            this.opsNav.style.opacity = '1';
            this.opsNav.style.pointerEvents = 'auto';
            
            this.viewTitle.innerText = "Stadium Operations Intelligence Center";
            this.viewSubtitle.innerText = "Real-time incident response & decision support console";
            
            if (this.langSelect.value !== 'en') LocalizationService.translate(this.langSelect.value);
        }
    }
}

// Bootstrap Application
document.addEventListener('DOMContentLoaded', () => {
    window.AppInstance = new MainApp();
    window.AppInstance.init();
});
