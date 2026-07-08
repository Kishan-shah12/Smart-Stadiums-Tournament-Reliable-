"use strict";

const Translations = {
    es: {
        appTitle: "FIFA",
        appSubtitle: "COPA MUNDIAL 2026",
        navFan: "Acompañante de Fan",
        navOps: "Operaciones del Estadio",
        navIncidents: "Incidentes (Soporte IA)",
        navHeatmap: "Mapa de Calor de Multitud",
        navDispatch: "Despacho de Personal",
        commandCenter: "CENTRO DE MANDO",
        activeChannel: "Canal de Seguridad 4 Activo",
        titleOps: "Centro de Inteligencia de Operaciones del Estadio",
        subtitleOps: "Consola de respuesta a incidentes en tiempo real y soporte de decisiones",
        matchday: "DÍA DE PARTIDO 1 - INICIO EN 2H 20M",
        opsConsole: "Consola de Incidentes de Ops",
        activeAlerts: "3 alertas activas",
        liveOverlay: "Superposición de Densidad de Multitud en Vivo",
        thermalMapping: "Mapeo de matriz de sensores térmicos en tiempo real",
        clearZone: "Despejado (<30%)",
        crowdedZone: "Concurrido (60%)",
        bottleneckZone: "Cuello de botella (95%)",
        aiAdvisor: "Asesor de Despacho GenAI",
        autoGenerator: "Generador de respuesta automatizado",
        selectIncident: "Seleccione un incidente activo de la lista para analizar con las recomendaciones de soporte de IA Generativa.",
        staffTracker: "Personal y Voluntarios",
        liveDeployment: "Rastreador de despliegue en vivo",
        chatbotTitle: "Chatbot Asistente de Fan",
        chatbotSubtitle: "Pregunte sobre navegación, comida o reglas",
        chatbotGreeting: "¡Bienvenido a la Copa Mundial de la FIFA 2026! Soy su asistente GenAI. ¿Cómo puedo ayudarle hoy?",
        pillRestroom: "🚻 Baño más cercano",
        pillNav: "📍 Navegar al asiento",
        pillFood: "🍔 Opciones de comida",
        chatPlaceholder: "Escriba su mensaje aquí..."
    },
    fr: {
        appTitle: "FIFA",
        appSubtitle: "COUPE DU MONDE 2026",
        navFan: "Compagnon de Fan",
        navOps: "Opérations du Stade",
        navIncidents: "Incidents (Support IA)",
        navHeatmap: "Carte Thermique des Foules",
        navDispatch: "Répartition du Personnel",
        commandCenter: "CENTRE DE COMMANDEMENT",
        activeChannel: "Canal de Sécurité 4 Actif",
        titleOps: "Centre d'Intelligence des Opérations du Stade",
        subtitleOps: "Console de réponse aux incidents en temps réel et aide à la décision",
        matchday: "JOUR DE MATCH 1 - COUP D'ENVOI DANS 2H 20M",
        opsConsole: "Console d'Incidents des Op",
        activeAlerts: "3 alertes actives",
        liveOverlay: "Superposition de Densité de Foule en Direct",
        thermalMapping: "Cartographie en temps réel du réseau de capteurs thermiques",
        clearZone: "Dégagé (<30%)",
        crowdedZone: "Bondé (60%)",
        bottleneckZone: "Goulot d'étranglement (95%)",
        aiAdvisor: "Conseiller de Répartition GenAI",
        autoGenerator: "Générateur de réponse automatisé",
        selectIncident: "Sélectionnez un incident actif dans la liste pour l'analyser avec les recommandations de support de l'IA générative.",
        staffTracker: "Personnel et Bénévoles",
        liveDeployment: "Suivi de déploiement en direct",
        chatbotTitle: "Chatbot Assistant Fan",
        chatbotSubtitle: "Demandez de l'aide pour la navigation, la nourriture ou les règles",
        chatbotGreeting: "Bienvenue à la Coupe du Monde de la FIFA 2026 ! Je suis votre assistant GenAI. Comment puis-je vous aider aujourd'hui ?",
        pillRestroom: "🚻 Toilettes les plus proches",
        pillNav: "📍 Naviguer vers le siège",
        pillFood: "🍔 Options de restauration",
        chatPlaceholder: "Tapez votre message ici..."
    },
    de: {
        appTitle: "FIFA",
        appSubtitle: "WELTMEISTERSCHAFT 2026",
        navFan: "Fan-Begleiter",
        navOps: "Stadionbetrieb",
        navIncidents: "Vorfälle (KI-Unterstützung)",
        navHeatmap: "Zuschauer-Heatmap",
        navDispatch: "Personaldisposition",
        commandCenter: "BEFEHLSZENTRALE",
        activeChannel: "Sicherheitskanal 4 Aktiv",
        titleOps: "Intelligence Center für den Stadionbetrieb",
        subtitleOps: "Konsole für Echtzeit-Reaktion auf Vorfälle und Entscheidungsunterstützung",
        matchday: "SPIELTAG 1 - ANPFIFF IN 2 STD 20 MIN",
        opsConsole: "Ops-Vorfallskonsole",
        activeAlerts: "3 aktive Alarme",
        liveOverlay: "Live-Zuschauerdichte-Overlay",
        thermalMapping: "Echtzeit-Mapping des Wärmesensor-Arrays",
        clearZone: "Frei (<30%)",
        crowdedZone: "Überfüllt (60%)",
        bottleneckZone: "Engpass (95%)",
        aiAdvisor: "GenAI-Dispositionsberater",
        autoGenerator: "Automatisierter Antwortgenerator",
        selectIncident: "Wählen Sie einen aktiven Vorfall aus der Liste aus, um ihn mit Empfehlungen der generativen KI zu analysieren.",
        staffTracker: "Personal & Freiwillige",
        liveDeployment: "Live-Einsatz-Tracker",
        chatbotTitle: "Fan-Assistent-Chatbot",
        chatbotSubtitle: "Fragen Sie nach Navigation, Essen oder Regeln",
        chatbotGreeting: "Willkommen zur FIFA Fussball-Weltmeisterschaft 2026! Ich bin Ihr GenAI-Assistent. Wie kann ich Ihnen heute helfen?",
        pillRestroom: "🚻 Nächste Toilette",
        pillNav: "📍 Zum Sitzplatz navigieren",
        pillFood: "🍔 Verpflegungsoptionen",
        chatPlaceholder: "Geben Sie Ihre Nachricht hier ein..."
    }
};

const App = {
    init: function() {
        this.cacheDOM();
        this.renderIncidents();
        this.bindEvents();
    },

    cacheDOM: function() {
        // Mode Switcher
        this.btnFan = document.getElementById('btn-fan');
        this.btnStaff = document.getElementById('btn-staff');
        this.viewOps = document.getElementById('view-stadium-ops');
        this.viewFan = document.getElementById('view-fan-companion');
        this.opsNav = document.getElementById('ops-nav');
        this.viewTitle = document.getElementById('view-title');
        this.viewSubtitle = document.getElementById('view-subtitle');

        // Staff Ops Dashboard
        this.incidentList = document.getElementById('incident-list');
        this.advisorContent = document.getElementById('advisor-content');
        
        // Chatbot
        this.chatForm = document.getElementById('chat-form');
        this.chatInput = document.getElementById('chat-input');
        this.chatWindow = document.getElementById('chat-window');
        this.chatPills = document.querySelectorAll('.chat-pill');
        
        // Navigation and Lang
        this.navItems = document.querySelectorAll('.nav-item');
        this.langSelect = document.getElementById('lang-select');
    },

    bindEvents: function() {
        // Mode Switcher
        this.btnFan.addEventListener('click', () => this.switchMode('fan'));
        this.btnStaff.addEventListener('click', () => this.switchMode('staff'));
        
        // Chat Submit
        if (this.chatForm) {
            this.chatForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleChatSubmit();
            });
        }
        
        // Chat Pills
        this.chatPills.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.chatInput.value = e.target.getAttribute('data-query');
                this.handleChatSubmit();
            });
        });

        // Accessibility Menu
        const btnA11y = document.getElementById('btn-a11y');
        const a11yDropdown = document.getElementById('a11y-dropdown');
        const toggleContrast = document.getElementById('toggle-contrast');
        const toggleTextSize = document.getElementById('toggle-textsize');

        if (btnA11y && a11yDropdown) {
            btnA11y.addEventListener('click', () => {
                const isHidden = a11yDropdown.classList.toggle('hidden');
                btnA11y.setAttribute('aria-expanded', !isHidden);
            });
            
            // Close on click outside
            document.addEventListener('click', (e) => {
                if (!btnA11y.contains(e.target) && !a11yDropdown.contains(e.target)) {
                    a11yDropdown.classList.add('hidden');
                    btnA11y.setAttribute('aria-expanded', 'false');
                }
            });
        }

        if (toggleContrast) {
            toggleContrast.addEventListener('click', () => {
                const isActive = document.body.classList.toggle('high-contrast');
                toggleContrast.classList.toggle('active');
                toggleContrast.setAttribute('aria-pressed', isActive);
            });
        }

        if (toggleTextSize) {
            toggleTextSize.addEventListener('click', () => {
                const isActive = document.body.classList.toggle('large-text');
                toggleTextSize.classList.toggle('active');
                toggleTextSize.setAttribute('aria-pressed', isActive);
            });
        }
        
        // Scroll Navigation Highlight
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                
                // Highlight corresponding panel if we are in staff ops
                const targetId = item.getAttribute('href').substring(1);
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.style.transition = 'box-shadow 0.3s';
                    targetPanel.style.boxShadow = '0 0 20px var(--accent-cyan)';
                    setTimeout(() => targetPanel.style.boxShadow = 'none', 1000);
                }
            });
        });

        // Translation
        if (this.langSelect) {
            this.langSelect.addEventListener('change', (e) => this.translateApp(e.target.value));
        }
    },
    
    switchMode: function(mode) {
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
            
            if (this.langSelect.value === 'es') this.translateApp('es'); // reapply translations for headers
        }
    },

    translateApp: function(lang) {
        if (lang === 'en') {
            location.reload(); // Quick way to reset back to original HTML for this mock
            return;
        }
        
        const t = Translations[lang];
        if (!t) return;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerText = t[key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });
    },

    // ---------------------------------
    // STAFF OPS LOGIC
    // ---------------------------------
    renderIncidents: function() {
        const incidents = window.GenAIEngine.getIncidents();
        this.incidentList.innerHTML = '';
        
        incidents.forEach(inc => {
            const card = document.createElement('div');
            card.className = `incident-card ${inc.severity}`;
            card.dataset.id = inc.id;
            
            card.innerHTML = `
                <div class="incident-card-top">
                    <h4>${inc.title}</h4>
                    <span class="badge ${inc.severity}">${inc.severity.toUpperCase()}</span>
                </div>
                <p>${inc.description}</p>
                <div class="incident-card-bottom">
                    <div class="location ${inc.severity}">
                        <div class="dot"></div> ${inc.location}
                    </div>
                    <div class="time">${inc.time}</div>
                </div>
            `;
            
            card.addEventListener('click', () => this.handleIncidentClick(card, inc.id));
            this.incidentList.appendChild(card);
        });
    },

    handleIncidentClick: async function(cardElement, incidentId) {
        document.querySelectorAll('.incident-card').forEach(c => c.classList.remove('selected'));
        cardElement.classList.add('selected');
        
        this.advisorContent.innerHTML = `
            <div class="empty-state" style="animation: pulse 1.5s infinite">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 242, 254, 0.5)" stroke-width="2" class="spin"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
                <p style="color: var(--accent-cyan)">Analyzing incident data...</p>
            </div>
            <style>@keyframes spin { 100% { transform: rotate(360deg); } } .spin { animation: spin 1s linear infinite; }</style>
        `;
        
        try {
            const response = await window.GenAIEngine.getAdvisorRecommendation(incidentId);
            let actionButtons = response.actions.map(action => 
                `<button class="btn-dispatch">${action}</button>`
            ).join('');
            
            this.advisorContent.innerHTML = `
                <div class="ai-response">
                    <p>${response.text}</p>
                    <div class="ai-actions">
                        ${actionButtons}
                    </div>
                </div>
            `;
        } catch (e) {
            this.advisorContent.innerHTML = `<p style="color: var(--accent-red)">Error analyzing incident.</p>`;
        }
    },

    // ---------------------------------
    // FAN COMPANION CHATBOT LOGIC
    // ---------------------------------
    lastChatTimestamp: 0,
    chatRateLimitMs: 1500, // 1.5 seconds between messages

    handleChatSubmit: async function() {
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
            // Reusing old logic we had for the Fan query, but we need to ensure the GenAI engine has it
            const aiResponse = await window.GenAIEngine.processFanQuery(sanitizedQuery);
            this.removeTypingIndicator();
            this.appendChatMessage(aiResponse, 'ai');
        } catch (error) {
            this.removeTypingIndicator();
            this.appendChatMessage("Service unavailable.", 'ai');
        }
    },
    
    appendChatMessage: function(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        msgDiv.innerHTML = `<p>${text}</p>`;
        this.chatWindow.appendChild(msgDiv);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    },

    appendTypingIndicator: function() {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ai-message typing-indicator`;
        msgDiv.id = 'typing-indicator';
        msgDiv.innerHTML = `<p>...</p>`;
        this.chatWindow.appendChild(msgDiv);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    },

    removeTypingIndicator: function() {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
