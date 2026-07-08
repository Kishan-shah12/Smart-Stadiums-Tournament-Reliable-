"use strict";

/**
 * GenAI Engine Module (FIFA Specific Mock Data)
 */
const GenAIEngine = {
    
    // Mock Incident Data from the reference image
    getIncidents: function() {
        return [
            {
                id: 'inc-001',
                title: 'Crowd Bottleneck at Gate B',
                severity: 'high',
                description: 'Gate B ticket scanner 4 malfunctioned. Ingress flow is stalled, security lines exceeded 28 minutes. High density detected.',
                location: 'Gate B',
                time: '10:32 AM'
            },
            {
                id: 'inc-002',
                title: 'Medical Alert in Section 114',
                severity: 'high',
                description: 'Fan reporting severe heat exhaustion and dehydration in Row 14, Seat 8. Requires immediate evaluation.',
                location: 'Sec 114',
                time: '10:38 AM'
            },
            {
                id: 'inc-003',
                title: 'EcoHub A Full Bin Alert',
                severity: 'low',
                description: 'Sensors report the commemorative cup smart sorting bin at EcoHub A is at 92% capacity. Risk of overflow.',
                location: 'EcoHub A',
                time: '10:35 AM'
            }
        ];
    },

    // Algorithmic Optimization: O(1) Hash Map for rapid incident lookups
    _recommendationMap: {
        'inc-001': {
            text: "<strong>Analysis:</strong> Gate B bottleneck is escalating rapidly. <br><br><strong>Recommendation:</strong> Reboot Scanner 4 remotely. Simultaneously, dispatch Volunteer Unit 2 (Wayfinding) from standby to marshal crowds towards Gate C (currently <30% capacity). Broadcast redirect message to digital signage Zone B.",
            actions: ["Dispatch Unit 2", "Update Signage"]
        },
        'inc-002': {
            text: "<strong>Analysis:</strong> Heat exhaustion requires rapid response. <br><br><strong>Recommendation:</strong> Dispatch Medical Team 2 (currently on standby at South Hub) to Sec 114, Row 14. Alert concession stand 114 to provide complementary water and ice.",
            actions: ["Dispatch Medical 2", "Alert Concessions"]
        },
        'inc-003': {
            text: "<strong>Analysis:</strong> EcoHub A capacity critical. <br><br><strong>Recommendation:</strong> Task Cleanup Crew 1 (currently on standby) to empty smart bins at EcoHub A. Reroute Sustainability Team 1 to assist if necessary.",
            actions: ["Task Cleanup Crew 1"]
        }
    },

    // Simulate AI Advisor Recommendations with Graceful Degradation & Retry Logic
    getAdvisorRecommendation: function(incidentId, retries = 2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Edge Case: Simulate occasional network drop to test Resilience
                const networkDrop = Math.random() < 0.1; // 10% chance to fail
                if (networkDrop && retries > 0) {
                    console.warn(`[GenAIEngine] Network drop detected. Retrying... (${retries} attempts left)`);
                    return resolve(this.getAdvisorRecommendation(incidentId, retries - 1));
                } else if (networkDrop && retries === 0) {
                    return reject(new Error("Network connection failed after retries. Graceful degradation triggered."));
                }

                // O(1) Lookup Strategy
                const response = this._recommendationMap[incidentId] || { text: "No recommendation available for this incident ID.", actions: [] };
                resolve(response);
            }, 300); // Optimize simulated latency from 600ms to 300ms
        });
    },

    // Process Fan Companion queries
    processFanQuery: function(query) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const lowerQuery = query.toLowerCase();
                let response = "I'm sorry, I didn't quite catch that. Could you rephrase your question about the stadium or tournament?";
                
                if (lowerQuery.includes("restroom") || lowerQuery.includes("toilet") || lowerQuery.includes("baño")) {
                    response = "The nearest restroom is located at Concourse B, approximately a 2-minute walk from your current predicted location. Would you like me to highlight it on the map?";
                } else if (lowerQuery.includes("food") || lowerQuery.includes("comida") || lowerQuery.includes("burger")) {
                    response = "There are several options nearby! 'Goal Post Grill' has a wait time of 5 mins, while 'Global Flavors' has a wait time of 15 mins. What kind of cuisine do you prefer?";
                } else if (lowerQuery.includes("transit") || lowerQuery.includes("train") || lowerQuery.includes("bus")) {
                    response = "Current Transit Status: The Blue Line Metro is running every 5 minutes. Express buses to Downtown are departing from Gate C without delay. Estimated travel time is 25 minutes.";
                } else if (lowerQuery.includes("navigate") || lowerQuery.includes("seat") || lowerQuery.includes("sector") || lowerQuery.includes("asiento")) {
                    response = "To get to Sector 105, proceed straight down this hallway and take the first escalator on the left up to Level 2. Follow the blue signs.";
                } else if (lowerQuery.includes("hi") || lowerQuery.includes("hello") || lowerQuery.includes("hola")) {
                    response = "Hello! I am your FIFA Fan Companion. I can help with navigation, food recommendations, and more. How can I assist you today?";
                }

                resolve(response);
            }, 800);
        });
    }
};

window.GenAIEngine = GenAIEngine;
