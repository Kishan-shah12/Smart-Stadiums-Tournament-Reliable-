/**
 * Comprehensive Test Runner for Stadium Intelligence Center
 * Zero-Dependency ES6 validation.
 */

global.window = {};
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {} }),
    querySelectorAll: () => ([])
};

const fs = require('fs');
const path = require('path');

const securityScript = fs.readFileSync(path.join(__dirname, '../js/security.js'), 'utf8');
const engineScript = fs.readFileSync(path.join(__dirname, '../js/genai-engine.js'), 'utf8');
const appScript = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');

eval(securityScript);
eval(engineScript);

// Extract Translations from app.js safely
const translationsMatch = appScript.match(/const Translations = (\{[\s\S]*?\});\n\n\/\*\*/);
let Translations = {};
if (translationsMatch) {
    eval(`Translations = ${translationsMatch[1]}`);
}

let testsPassed = 0;
let testsFailed = 0;

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log(`✅ [PASS] ${testName}`);
        testsPassed++;
    } else {
        console.error(`❌ [FAIL] ${testName}`);
        console.error(`   Expected: ${expected}`);
        console.error(`   Actual:   ${actual}`);
        testsFailed++;
    }
}

function assertHasKeys(obj, keys, testName) {
    const missing = keys.filter(k => !obj.hasOwnProperty(k));
    if (missing.length === 0) {
        console.log(`✅ [PASS] ${testName}`);
        testsPassed++;
    } else {
        console.error(`❌ [FAIL] ${testName}`);
        console.error(`   Missing keys: ${missing.join(', ')}`);
        testsFailed++;
    }
}

async function runTests() {
    console.log("--- Starting Zero-Dependency Tests ---\n");

    // 1. SECURITY TESTS
    console.log("-> Testing Security Module");
    assertEqual(window.Security.sanitizeInput("<script>alert('xss')</script>"), "&lt;script&gt;alert(&#x27;xss&#x27;)&lt;&#x2F;script&gt;", "Sanitizes basic script tag");
    assertEqual(window.Security.validateInputLength("A".repeat(300), 200), false, "Rejects input exceeding max length");
    assertEqual(window.Security.validateInputLength("A".repeat(50), 200), true, "Accepts valid length input");

    // 2. GENAI ENGINE TESTS
    console.log("\n-> Testing GenAI Engine Logic");
    const incidents = window.GenAIEngine.getIncidents();
    assertEqual(incidents.length > 0, true, "Engine loads incident data");
    
    const recommendation = await window.GenAIEngine.getAdvisorRecommendation('inc-001');
    assertEqual(typeof recommendation.text, 'string', "Advisor returns string text");
    assertEqual(Array.isArray(recommendation.actions), true, "Advisor returns actions array");

    // Edge Cases
    console.log("\n-> Testing Edge Cases & Resilience");
    const invalidRec = await window.GenAIEngine.getAdvisorRecommendation('invalid-999');
    assertEqual(invalidRec.actions.length, 0, "Gracefully handles invalid incident ID");
    
    // Test Retry Logic Resilience (We can't easily force Math.random here without mocking, 
    // but we can ensure the function signature supports retries and resolves successfully).
    const retryRec = await window.GenAIEngine.getAdvisorRecommendation('inc-002', 5);
    assertEqual(typeof retryRec.text, 'string', "Network retry logic resolves successfully");

    // 3. I18N TRANSLATION TESTS
    console.log("\n-> Testing Translation Integrity");
    const requiredKeys = ['appTitle', 'navTransit', 'sustainabilityTitle', 'pillTransitReq'];
    assertHasKeys(Translations.es, requiredKeys, "Spanish dictionary has core/new keys");
    assertHasKeys(Translations.fr, requiredKeys, "French dictionary has core/new keys");
    assertHasKeys(Translations.de, requiredKeys, "German dictionary has core/new keys");

    // RESULTS
    console.log("\n--- Test Results ---");
    console.log(`Total Passed: ${testsPassed}`);
    console.log(`Total Failed: ${testsFailed}`);

    if (testsFailed > 0) process.exit(1);
    else process.exit(0);
}

runTests();
