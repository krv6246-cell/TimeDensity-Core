const faq = {
    ru: [
        { q: "Что такое TimeDensity?", a: "TimeDensity — это модель, в которой время рассматривается как физическая среда с плотностью, определяющей скорость всех процессов." },
        { q: "Почему скорость света зависит от плотности времени?", a: "Скорость света — это предел скорости процессов в среде времени, а не фундаментальная константа. Изменение плотности времени меняет этот предел." },
        { q: "Что означает формула c = c(ρₜ)?", a: "Она показывает, что скорость света является функцией плотности времени. Это ключевой принцип модели." },
        { q: "Как TimeDensity объясняет гравитацию?", a: "Гравитация — это градиенты плотности времени. В областях высокой плотности процессы идут медленнее, что создаёт наблюдаемые гравитационные эффекты." },
        { q: "Что такое «пузырь времени»?", a: "Это область с почти однородной плотностью времени, внутри которой физические законы выглядят постоянными." },
        { q: "Как TimeDensity относится к ΛCDM?", a: "Модель уточняет ΛCDM: скорость света становится функцией плотности времени, что позволяет по-новому интерпретировать космологические данные." },
        { q: "Можно ли проверить TimeDensity экспериментально?", a: "Да. Модель предсказывает измеримые эффекты: космологические отклонения, гравитационные аномалии, сверхточные временные сдвиги." },
        { q: "Как TimeDensity влияет на квантовые процессы?", a: "Флуктуации плотности времени могут объяснять квантовую неопределённость, стабильность состояний и фундаментальные частоты." },
        { q: "Противоречит ли TimeDensity современной физике?", a: "Нет. Она сохраняет все наблюдаемые эффекты, предлагая другую интерпретацию их причин — через плотность времени." },
        { q: "Является ли TimeDensity завершённой теорией?", a: "Нет. Это развивающаяся модель, формирующая новую основу для понимания времени, света, материи и структуры Вселенной." }
    ],
    en: [
        { q: "What is TimeDensity?", a: "TimeDensity treats time as a physical medium with density, which determines the rate at which all processes unfold." },
        { q: "Why does the speed of light depend on time density?", a: "The speed of light is the maximum rate of change allowed by the temporal medium, not a universal constant." },
        { q: "What does c = c(ρₜ) mean?", a: "It states that the speed of light is a function of time density — a foundational principle of the model." },
        { q: "How does TimeDensity explain gravity?", a: "Gravity arises from gradients in time density, which slow down processes in regions of higher density." },
        { q: "What is a 'time bubble'?", a: "A time bubble is a region where time density is nearly uniform, making physical laws appear constant." },
        { q: "How does TimeDensity relate to ΛCDM?", a: "TimeDensity refines ΛCDM by allowing the speed of light to vary with time density, offering new interpretations of cosmological observations." },
        { q: "Can TimeDensity be tested experimentally?", a: "Yes. The model predicts measurable signatures in cosmology, gravitational behavior, and ultra-precise timing experiments." },
        { q: "How does TimeDensity connect to quantum physics?", a: "Fluctuations in time density may underlie quantum uncertainty, state stability, and fundamental transition frequencies." },
        { q: "Does TimeDensity contradict modern physics?", a: "No. It preserves all observed phenomena while offering an alternative mechanism — time density instead of geometric curvature." },
        { q: "Is TimeDensity a complete theory?", a: "Not yet. It is an evolving framework aimed at redefining our understanding of time, light, matter, and the structure of the Universe." }
    ]
};

let currentLang = 'ru';
let currentLevelIndex = null;

function setLang(lang) {
    currentLang = lang;
    document.getElementById('btnLangRu').classList.toggle('active', lang === 'ru');
    document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');
    renderLevels();
}

function renderLevels() {
    const container = document.getElementById('levelList');
    container.innerHTML = '';
    faq[currentLang].forEach((_, index) => {
        const btn = document.createElement('button');
        btn.textContent = `Уровень ${index + 1}`;
        btn.onclick = () => renderQuestions(index);
        container.appendChild(btn);
    });
    document.getElementById('questionsSection').style.display = 'none';
    document.getElementById('answerSection').style.display = 'none';
}

function renderQuestions(levelIndex) {
    currentLevelIndex = levelIndex;
    const container = document.getElementById('questionList');
    container.innerHTML = '';

    const item = faq[currentLang][levelIndex];
    const btn = document.createElement('button');
    btn.textContent = item.q;
    btn.onclick = () => renderAnswer(levelIndex);
    container.appendChild(btn);

    document.getElementById('currentLevelName').textContent = `Уровень ${levelIndex + 1}`;
    document.getElementById('questionsSection').style.display = 'block';
    document.getElementById('answerSection').style.display = 'none';
}

function renderAnswer(levelIndex) {
    const item = faq[currentLang][levelIndex];
    document.getElementById('answerLevelName').textContent = `Уровень ${levelIndex + 1}`;
    document.getElementById('answerQuestionText').textContent = item.q;
    document.getElementById('answerBox').textContent = item.a;

    document.getElementById('questionsSection').style.display = 'none';
    document.getElementById('answerSection').style.display = 'block';
}

function backToLevels() {
    renderLevels();
}

function backToQuestions() {
    if (currentLevelIndex !== null) {
        renderQuestions(currentLevelIndex);
    }
}

setLang('ru');