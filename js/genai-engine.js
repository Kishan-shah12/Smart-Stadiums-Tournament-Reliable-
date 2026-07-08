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

    // Simulate AI Advisor Recommendations
    getAdvisorRecommendation: function(incidentId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let response = { text: "No recommendation available.", actions: [] };

                if (incidentId === 'inc-001') {
                    response = {
                        text: "<strong>Analysis:</strong> Gate B bottleneck is escalating rapidly. <br><br><strong>Recommendation:</strong> Reboot Scanner 4 remotely. Simultaneously, dispatch Volunteer Unit 2 (Wayfinding) from standby to marshal crowds towards Gate C (currently <30% capacity). Broadcast redirect message to digital signage Zone B.",
                        actions: ["Dispatch Unit 2", "Update Signage"]
                    };
                } else if (incidentId === 'inc-002') {
                    response = {
                        text: "<strong>Analysis:</strong> Heat exhaustion requires rapid response. <br><br><strong>Recommendation:</strong> Dispatch Medical Team 2 (currently on standby at South Hub) to Sec 114, Row 14. Alert concession stand 114 to provide complementary water and ice.",
                        actions: ["Dispatch Medical 2", "Alert Concessions"]
                    };
                } else if (incidentId === 'inc-003') {
                    response = {
                        text: "<strong>Analysis:</strong> EcoHub A capacity critical. <br><br><strong>Recommendation:</strong> Task Cleanup Crew 1 (currently on standby) to empty smart bins at EcoHub A. Reroute Sustainability Team 1 to assist if necessary.",
                        actions: ["Task Cleanup Crew 1"]
                    };
                }
                
                resolve(response);
            }, 600); // Simulate processing delay
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
