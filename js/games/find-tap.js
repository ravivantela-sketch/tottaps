(function initFindTap(window, document) {
  const ITEMS = [
    { id: 'puppy', prompt: 'Find the puppy', symbol: 'PUP', reward: 'A', glow: 'rgba(255,183,120,.55)', key: 'D' },
    { id: 'lion', prompt: 'Find the lion', symbol: 'LION', reward: 'Q', glow: 'rgba(255,184,92,.56)', key: 'L' },
    { id: 'tiger', prompt: 'Find the tiger', symbol: 'TIGER', reward: 'W', glow: 'rgba(255,150,76,.56)', key: 'T' },
    { id: 'elephant', prompt: 'Find the elephant', symbol: 'ELE', reward: 'E', glow: 'rgba(164,181,204,.55)', key: 'E' },
    { id: 'fish', prompt: 'Find the fish', symbol: 'FISH', reward: 'F', glow: 'rgba(93,201,255,.55)', key: 'F' },
    { id: 'bird', prompt: 'Find the bird', symbol: 'BIRD', reward: 'Y', glow: 'rgba(124,200,255,.55)', key: 'B' },
    { id: 'duck', prompt: 'Find the duck', symbol: 'DUCK', reward: 'D', glow: 'rgba(255,200,84,.55)', key: 'U' },
    { id: 'cat', prompt: 'Find the cat', symbol: 'CAT', reward: 'CAT', glow: 'rgba(255,183,138,.55)', key: 'C' },
    { id: 'butterfly', prompt: 'Find the butterfly', symbol: 'BUTTERFLY', reward: 'BUTTERFLY', glow: 'rgba(129,212,250,.55)', key: 'Y' },
    { id: 'star', prompt: 'Find the star', symbol: '*', reward: 'S', glow: 'rgba(255,220,90,.58)', key: 'S' },
    { id: 'rainbow', prompt: 'Find the rainbow', symbol: 'RAINBOW', reward: '1', glow: 'rgba(255,204,92,.55)', key: 'R' },
    { id: 'balloon', prompt: 'Find the balloon', symbol: 'BALLOON', reward: 'K', glow: 'rgba(255,120,164,.55)', key: 'K' },
    { id: 'bubbles', prompt: 'Find the bubbles', symbol: 'OO', reward: '3', glow: 'rgba(132,212,255,.56)', key: 'Z' },
    { id: 'rocket', prompt: 'Find the rocket', symbol: 'ROCKET', reward: 'L', glow: 'rgba(255,143,90,.55)', key: 'P' },
    { id: 'car', prompt: 'Find the car', symbol: 'CAR', reward: '2', glow: 'rgba(255,92,104,.55)', key: 'V' },
    { id: 'train', prompt: 'Find the train', symbol: 'TRAIN', reward: 'TRAIN', glow: 'rgba(255,138,101,.55)', key: 'N' },
    { id: 'airplane', prompt: 'Find the airplane', symbol: 'PLANE', reward: 'AIRPLANE', glow: 'rgba(147,197,253,.55)', key: 'I' },
    { id: 'helicopter', prompt: 'Find the helicopter', symbol: 'HELI', reward: 'HELICOPTER', glow: 'rgba(125,211,252,.55)', key: 'H' },
    { id: 'kite', prompt: 'Find the kite', symbol: 'KITE', reward: 'R', glow: 'rgba(123,190,255,.55)', key: 'J' },
    { id: 'apple', prompt: 'Find the apple', symbol: 'APPLE', reward: 'T', glow: 'rgba(255,117,117,.55)', key: 'A' },
    { id: 'banana', prompt: 'Find the banana', symbol: 'BANANA', reward: 'U', glow: 'rgba(255,219,92,.56)', key: 'M' },
    { id: 'pear', prompt: 'Find the pear', symbol: 'PEAR', reward: 'I', glow: 'rgba(168,219,92,.55)', key: 'P' },
    { id: 'grapes', prompt: 'Find the grapes', symbol: 'GRAPES', reward: 'GRAPES', glow: 'rgba(187,134,252,.55)', key: 'G' },
    { id: 'watermelon', prompt: 'Find the watermelon', symbol: 'MELON', reward: 'WATERMELON', glow: 'rgba(255,110,120,.55)', key: 'W' },
    { id: 'mango', prompt: 'Find the mango', symbol: 'MANGO', reward: 'MANGO', glow: 'rgba(255,175,82,.55)', key: 'M' },
    { id: 'strawberry', prompt: 'Find the strawberry', symbol: 'BERRY', reward: 'STRAWBERRY', glow: 'rgba(255,92,128,.55)', key: 'S' },
    { id: 'circle', prompt: 'Find the circle', symbol: '●', reward: 'SHAPE_CIRCLE', glow: 'rgba(96,165,250,.55)', key: 'O', art: 'symbol', color: '#60a5fa' },
    { id: 'triangle', prompt: 'Find the triangle', symbol: '▲', reward: 'SHAPE_TRIANGLE', glow: 'rgba(251,146,60,.55)', key: 'T', art: 'symbol', color: '#fb923c' },
    { id: 'square', prompt: 'Find the square', symbol: '■', reward: 'SHAPE_SQUARE', glow: 'rgba(74,222,128,.55)', key: 'Q', art: 'symbol', color: '#4ade80' },
    { id: 'color-splash', prompt: 'Find the colors', symbol: 'ART', reward: 'PAINT_SPLASH', glow: 'rgba(196,181,253,.55)', key: 'C' },
    { id: 'sparkles', prompt: 'Find the sparkles', symbol: '**', reward: 'SPARKLES', glow: 'rgba(255,222,118,.56)', key: 'X' },
    { id: 'light-flash', prompt: 'Find the lightning', symbol: 'ZAP', reward: 'LIGHTFLASH', glow: 'rgba(255,230,92,.56)', key: 'L' },
    { id: 'music', prompt: 'Find the music', symbol: 'MUSIC', reward: 'MUSICAL_NOTES', glow: 'rgba(129,140,248,.55)', key: 'N' },
    { id: 'a', prompt: 'Find letter A', symbol: 'A', reward: 'LETTER_A', glow: 'rgba(255,186,90,.55)', key: 'A', art: 'symbol', color: '#fdba74' },
    { id: 'b', prompt: 'Find letter B', symbol: 'B', reward: 'LETTER_B', glow: 'rgba(125,211,252,.55)', key: 'B', art: 'symbol', color: '#7dd3fc' },
    { id: 'c', prompt: 'Find letter C', symbol: 'C', reward: 'LETTER_C', glow: 'rgba(255,160,122,.55)', key: 'C', art: 'symbol', color: '#fda4af' },
    { id: 'letter-d', prompt: 'Find letter D', symbol: 'D', reward: 'D', glow: 'rgba(255,200,84,.55)', key: 'D', art: 'symbol', color: '#facc15' },
    { id: 'letter-e', prompt: 'Find letter E', symbol: 'E', reward: 'E', glow: 'rgba(164,181,204,.55)', key: 'E', art: 'symbol', color: '#cbd5e1' },
    { id: 'letter-f', prompt: 'Find letter F', symbol: 'F', reward: 'F', glow: 'rgba(93,201,255,.55)', key: 'F', art: 'symbol', color: '#5dc9ff' },
    { id: 'one', prompt: 'Find number 1', symbol: '1', reward: 'NUM_1', glow: 'rgba(253,224,71,.55)', key: '1', art: 'symbol', color: '#fde047' },
    { id: 'two', prompt: 'Find number 2', symbol: '2', reward: 'NUM_2', glow: 'rgba(147,197,253,.55)', key: '2', art: 'symbol', color: '#93c5fd' },
    { id: 'three', prompt: 'Find number 3', symbol: '3', reward: 'NUM_3', glow: 'rgba(196,181,253,.55)', key: '3', art: 'symbol', color: '#c4b5fd' },
    { id: 'four', prompt: 'Find number 4', symbol: '4', reward: 'GLOWPULSE', glow: 'rgba(255,241,118,.55)', key: '4', art: 'symbol', color: '#fff176' },
    { id: 'five', prompt: 'Find number 5', symbol: '5', reward: 'CONFETTI', glow: 'rgba(250,204,21,.55)', key: '5', art: 'symbol', color: '#facc15' },
    { id: 'six', prompt: 'Find number 6', symbol: '6', reward: 'FIREWORKS', glow: 'rgba(255,170,90,.55)', key: '6', art: 'symbol', color: '#ffaa5a' },
    { id: 'red', prompt: 'Find red', symbol: '●', reward: 'T', glow: 'rgba(255,92,104,.58)', key: 'R', art: 'symbol', color: '#ff5c68' },
    { id: 'yellow', prompt: 'Find yellow', symbol: '●', reward: 'S', glow: 'rgba(253,224,71,.58)', key: 'Y', art: 'symbol', color: '#fde047' },
    { id: 'blue', prompt: 'Find blue', symbol: '●', reward: 'SHAPE_CIRCLE', glow: 'rgba(96,165,250,.58)', key: 'B', art: 'symbol', color: '#60a5fa' },
    { id: 'green', prompt: 'Find green', symbol: '●', reward: 'SHAPE_SQUARE', glow: 'rgba(74,222,128,.58)', key: 'G', art: 'symbol', color: '#4ade80' },
    { id: 'orange', prompt: 'Find orange', symbol: '●', reward: 'SHAPE_TRIANGLE', glow: 'rgba(251,146,60,.58)', key: 'O', art: 'symbol', color: '#fb923c' },
    { id: 'purple', prompt: 'Find purple', symbol: '●', reward: 'PAINT_SPLASH', glow: 'rgba(196,181,253,.58)', key: 'V', art: 'symbol', color: '#c4b5fd' },
  ];

  const QUESTIONNAIRE_COUNT = 5;
  const QUESTIONS_PER_SET = 10;
  const QUESTIONNAIRE_IDS = [
    ['puppy', 'lion', 'tiger', 'elephant', 'fish', 'bird', 'duck', 'cat', 'butterfly', 'star'],
    ['rainbow', 'balloon', 'bubbles', 'rocket', 'car', 'train', 'airplane', 'helicopter', 'kite', 'apple'],
    ['banana', 'pear', 'grapes', 'watermelon', 'mango', 'strawberry', 'circle', 'triangle', 'square', 'sparkles'],
    ['light-flash', 'music', 'a', 'b', 'c', 'letter-d', 'letter-e', 'letter-f', 'one', 'two'],
    ['three', 'four', 'five', 'six', 'red', 'yellow', 'blue', 'green', 'orange', 'purple'],
  ];

  let deps = {};
  let layer = null;
  let target = null;
  let roundTimer = null;
  let locked = false;
  let questionnaires = [];
  let questionnaireIndex = 0;
  let questionIndex = 0;
  let correct = 0;
  let attempts = 0;
  let completed = 0;

  function shuffle(items) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function buildQuestionnaires() {
    const itemById = new Map(ITEMS.map(item => [item.id, item]));
    questionnaires = QUESTIONNAIRE_IDS.map(set => set.map(id => itemById.get(id)).filter(Boolean));
    questionnaireIndex = 0;
    questionIndex = 0;
    correct = 0;
    attempts = 0;
    completed = 0;
  }

  function ensureQuestionnaires() {
    if (
      questionnaires.length !== QUESTIONNAIRE_COUNT ||
      questionnaires.some(set => set.length !== QUESTIONS_PER_SET) ||
      questionnaireIndex >= QUESTIONNAIRE_COUNT ||
      questionIndex >= QUESTIONS_PER_SET
    ) {
      buildQuestionnaires();
    }
  }

  function getTarget() {
    ensureQuestionnaires();
    return questionnaires[questionnaireIndex]?.[questionIndex] || null;
  }

  function advanceQuestion() {
    questionIndex++;
    if (questionIndex < QUESTIONS_PER_SET) return 'question';
    questionIndex = 0;
    questionnaireIndex++;
    if (questionnaireIndex < QUESTIONNAIRE_COUNT) return 'questionnaire';
    buildQuestionnaires();
    return 'cycle';
  }

  function pickChoices(currentTarget) {
    const count = Math.min(4, ITEMS.length);
    const distractorCount = Math.max(0, count - 1);
    const questionBankIds = new Set(QUESTIONNAIRE_IDS.flat());
    const currentSet = questionnaires[questionnaireIndex] || [];
    const currentSetIds = new Set(currentSet.map(item => item.id));
    let distractorPool = ITEMS.filter(item =>
      questionBankIds.has(item.id) &&
      item.id !== currentTarget.id &&
      !currentSetIds.has(item.id)
    );
    if (distractorPool.length < distractorCount) {
      distractorPool = ITEMS.filter(item => item.id !== currentTarget.id);
    }
    const distractors = shuffle(distractorPool).slice(0, distractorCount);
    const choices = shuffle([currentTarget, ...distractors]);
    const uniqueChoices = [];
    const seen = new Set();
    for (const item of choices) {
      if (!item || seen.has(item.id)) continue;
      seen.add(item.id);
      uniqueChoices.push(item);
    }
    if (!seen.has(currentTarget.id)) uniqueChoices.unshift(currentTarget);
    return uniqueChoices.slice(0, count);
  }

  function getArt(item) {
    if (item.art !== 'symbol') {
      const animalArt = window.TotTapsAnimalArt?.get(item.id);
      if (animalArt) return animalArt;
      const rewardSvg = deps.getRewardSvg?.(item.reward);
      if (rewardSvg) return rewardSvg;
    }
    return `<span class="findtap-symbol" style="color:${item.color || '#fff'}">${item.symbol}</span>`;
  }

  function getPositions(count) {
    const compact = window.innerWidth < 640;
    if (count <= 2) return compact ? [[34, 54], [66, 54]] : [[38, 56], [62, 56]];
    if (count === 3) return [[50, compact ? 42 : 44], [32, 68], [68, 68]];
    if (count === 4) return [[31, 43], [69, 43], [31, 70], [69, 70]];
    return [[50, 37], [26, 56], [74, 56], [36, 76], [64, 76]];
  }

  function clear() {
    clearTimeout(roundTimer);
    target = null;
    locked = false;
    if (layer) {
      layer.classList.remove('active');
      layer.innerHTML = '';
    }
  }

  function startRound({ repeatPrompt = true } = {}) {
    if (!layer || deps.getPlayMode?.() !== 'findtap' || !deps.isActive?.()) return;
    clearTimeout(roundTimer);
    target = getTarget();
    if (!target) return;
    locked = false;
    const choices = pickChoices(target);
    const choiceIds = choices.map(item => item.id);
    if (!choiceIds.includes(target.id) || new Set(choiceIds).size !== choiceIds.length) {
      console.warn('Find & Tap invalid choices', { target: target.id, choices: choiceIds });
    }
    const progressText = `Set ${questionnaireIndex + 1}/${QUESTIONNAIRE_COUNT} · Question ${questionIndex + 1}/${QUESTIONS_PER_SET}`;
    const positions = getPositions(choices.length);
    layer.classList.add('active');
    layer.innerHTML = `
      <div class="findtap-prompt"><span class="findtap-progress">${progressText}</span>${target.prompt}</div>
      ${choices.map((item, idx) => `
        <button class="findtap-target" type="button"
          data-findtap-id="${item.id}"
          style="left:${positions[idx][0]}vw;top:calc(var(--game-vh, 1vh) * ${positions[idx][1]});--find-glow:${item.glow};"
          aria-label="${item.prompt}">
          ${getArt(item)}
        </button>
      `).join('')}
    `;
    if (repeatPrompt && deps.soundOn?.()) deps.speak?.(target.prompt);
  }

  function sync() {
    if (deps.getPlayMode?.() === 'findtap' && deps.isActive?.()) {
      if (!target) startRound({ repeatPrompt: true });
    } else {
      clear();
    }
  }

  function handleAnswer(answerId, x, y, btn = null) {
    if (!answerId || !target || locked) return false;
    attempts++;
    const isCorrect = answerId === target.id;
    deps.doSmash?.(isCorrect ? target.symbol : '?', x, y, 'touch');
    const prompt = layer?.querySelector('.findtap-prompt');
    if (!isCorrect) {
      if (btn) {
        btn.classList.remove('is-miss');
        void btn.offsetWidth;
        btn.classList.add('is-miss');
        setTimeout(() => btn.classList.remove('is-miss'), 760);
      }
      if (prompt) prompt.innerHTML = '<span class="findtap-progress">Try again</span>Almost! Pick another one';
      if (deps.soundOn?.()) deps.playPop?.();
      return true;
    }

    locked = true;
    correct++;
    completed++;
    if (btn) {
      btn.classList.add('is-correct');
      layer?.querySelectorAll('.findtap-target').forEach(choice => {
        if (choice !== btn) choice.classList.add('is-dimmed');
      });
    }
    const nextStep = advanceQuestion();
    const message = nextStep === 'questionnaire'
      ? 'Nice! Next set'
      : nextStep === 'cycle'
        ? 'Great job! New round'
        : 'Nice find!';
    if (prompt) prompt.innerHTML = `<span class="findtap-progress">Correct</span>${message}`;
    deps.spawnReward?.(target.reward, x, y, 'big');
    if (deps.soundOn?.()) deps.speak?.('You found it');
    roundTimer = setTimeout(() => startRound({ repeatPrompt: true }), nextStep === 'question' ? 1900 : 2600);
    return true;
  }

  function handleChoice(btn, x, y) {
    if (!btn) return false;
    return handleAnswer(btn.dataset.findtapId, x, y, btn);
  }

  function handlePointer(event) {
    if (!deps.isActive?.() || deps.getPlayMode?.() !== 'findtap') return false;
    const btn = event.target.closest('.findtap-target');
    if (!btn) return false;
    event.preventDefault();
    event.stopPropagation();
    deps.initAudio?.();
    return handleChoice(btn, event.clientX, event.clientY);
  }

  function handleKey(event, fallbackX, fallbackY) {
    if (deps.getPlayMode?.() !== 'findtap' || !target) return false;
    const typed = event.key.length === 1 ? event.key.toUpperCase() : '';
    if (typed && typed === target.key) {
      const correctBtn = layer?.querySelector(`[data-findtap-id="${target.id}"]`);
      const rect = correctBtn?.getBoundingClientRect();
      if (correctBtn) {
        return handleChoice(correctBtn, rect ? rect.left + rect.width / 2 : fallbackX, rect ? rect.top + rect.height / 2 : fallbackY);
      }
      return handleAnswer(target.id, fallbackX, fallbackY);
    }
    deps.doSmash?.('?', fallbackX, fallbackY, 'symbol');
    return true;
  }

  function getStats() {
    const total = QUESTIONNAIRE_COUNT * QUESTIONS_PER_SET;
    return {
      total,
      completed: Math.min(completed, total),
      correct,
      attempts,
      accuracy: attempts ? Math.round(correct / attempts * 100) : 0,
      currentSet: Math.min(questionnaireIndex + 1, QUESTIONNAIRE_COUNT),
      currentQuestion: Math.min(questionIndex + 1, QUESTIONS_PER_SET),
    };
  }

  function validate() {
    const ids = new Set(ITEMS.map(item => item.id));
    const questionIds = QUESTIONNAIRE_IDS.flat();
    const duplicateItems = ITEMS.map(item => item.id).filter((id, index, all) => all.indexOf(id) !== index);
    const duplicateQuestions = questionIds.filter((id, index, all) => all.indexOf(id) !== index);
    const missing = questionIds.filter(id => !ids.has(id));
    const badSets = QUESTIONNAIRE_IDS
      .map((set, index) => ({ index, length: set.length, unique: new Set(set).size }))
      .filter(set => set.length !== QUESTIONS_PER_SET || set.unique !== QUESTIONS_PER_SET);
    buildQuestionnaires();
    const badChoiceRounds = [];
    questionnaires.forEach((set, setIndex) => {
      set.forEach(item => {
        const choices = pickChoices(item);
        const choiceIds = choices.map(choice => choice.id);
        if (choices.length !== 4 || !choiceIds.includes(item.id) || new Set(choiceIds).size !== choiceIds.length) {
          badChoiceRounds.push({ setIndex, id: item.id, choices: choiceIds });
        }
      });
    });
    buildQuestionnaires();
    return {
      itemCount: ITEMS.length,
      setCount: QUESTIONNAIRE_IDS.length,
      totalQuestions: questionIds.length,
      duplicateItems,
      duplicateQuestions,
      missing,
      badSets,
      badChoiceRounds,
    };
  }

  function init(options) {
    deps = options || {};
    layer = document.getElementById('findtap-game');
    buildQuestionnaires();
    return api;
  }

  const api = {
    init,
    sync,
    clear,
    resetSession: buildQuestionnaires,
    handlePointer,
    handleKey,
    handleAnswer,
    getStats,
    validate,
    shuffle,
  };

  window.TotTapsFindTap = api;
})(window, document);
