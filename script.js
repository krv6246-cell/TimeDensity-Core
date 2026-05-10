// ======================================
// Time Density OS — API ядра Крупье
// ======================================

// Положение на оси –1 → 0 → +1
let x = 0;

// --------------------------------------
// API: главный метод
// --------------------------------------
function runCroupier(question) {
    const parsed = parseQuestion(question);
    const mode = modeSelect(parsed);
    const processResult = processMode(mode, parsed);
    const rho = updateDensity(mode);
    const balanceResult = balance(mode);

    const apiResponse = {
        question,
        parsed,
        mode,
        process: processResult,
        balance: balanceResult,
        rho,
        x,
        timestamp: Date.now()
    };

    addToHistory(apiResponse);
    return apiResponse;
}

// --------------------------------------
// Parse — Утюг Перельмана
// --------------------------------------
function parseQuestion(q) {
    return q
        .replace(/[.,!?;:]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

// --------------------------------------
// ModeSelect — выбор режима
// --------------------------------------
function modeSelect(q) {
    if (q.endsWith("?")) return "Исследователь"; // –1
    if (q.length < 40) return "Пилот"; // +1
    return "Центр"; // 0
}

// --------------------------------------
// Process — логика режимов
// --------------------------------------
function processMode(mode, q) {
    if (mode === "Пилот") {
        return "Конкретный шаг: выбери одно действие, которое можешь сделать в течение 5 минут.";
    }
    if (mode === "Исследователь") {
        return "Возможные направления: что изменится, если рассмотреть ситуацию под другим углом?";
    }
    return "Что для тебя сейчас является выбором?";
}

// --------------------------------------
// UpdateDensity — плотность ρ(x)
// --------------------------------------
function updateDensity(mode) {
    if (mode === "Пилот") x = Math.min(1, x + 0.2);
    if (mode === "Исследователь") x = Math.max(-1, x - 0.2);
    if (mode === "Центр") x = 0;

    return 1 - Math.abs(x);
}

// --------------------------------------
// Balance — возврат в 0
// --------------------------------------
function balance(mode) {
    if (mode === "Центр") return "Баланс удержан.";
    return "Возврат в 0 выполнен.";
}

// --------------------------------------
// История (Game Story)
// --------------------------------------
function addToHistory(entry) {
    const list = document.getElementById("historyList");
    const div = document.createElement("div");

    div.innerHTML = `
        <strong>${new Date(entry.timestamp).toLocaleTimeString()}</strong><br>
        <em>Вопрос:</em> ${entry.question}<br>
        <em>Режим:</em> ${entry.mode}<br>
        <em>Ответ:</em> ${entry.process}<br>
        <em>ρ:</em> ${entry.rho.toFixed(2)}
    `;

    list.prepend(div);
}

// --------------------------------------
// UI → вызывает API
// --------------------------------------
document.getElementById("processBtn").onclick = function () {
    const q = document.getElementById("userInput").value.trim();
    if (!q) return alert("Введите вопрос");

    const result = runCroupier(q);

    document.querySelector("#step-parse .tdc-output").innerHTML = result.parsed;
    document.querySelector("#step-modeselect .tdc-output").innerHTML = result.mode;
    document.querySelector("#step-process .tdc-output").innerHTML = result.process;
    document.querySelector("#step-balance .tdc-output").innerHTML = result.balance;
    document.querySelector("#step-output .tdc-output").innerHTML = `
        Parse: ${result.parsed}<br>
        Mode: ${result.mode}<br>
        Process: ${result.process}<br>
        ρ: ${result.rho.toFixed(2)}
    `;
    document.querySelector("#step-density .tdc-output").innerHTML = result.rho.toFixed(2);
};
