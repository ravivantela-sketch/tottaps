(function initShadowMatcher(window, document) {
  const ITEMS = [
    { id: 'cow', name: 'Cow', reward: 'A' },
    { id: 'pig', name: 'Pig', reward: 'P' },
    { id: 'sheep', name: 'Sheep', reward: 'S' },
    { id: 'horse', name: 'Horse', reward: 'H' },
    { id: 'duck', name: 'Duck', reward: 'D' },
    { id: 'chicken', name: 'Chicken', reward: 'C' },
    { id: 'goat', name: 'Goat', reward: 'G' },
    { id: 'rabbit', name: 'Rabbit', reward: 'R' },
    { id: 'lion', name: 'Lion', reward: 'Q' },
    { id: 'elephant', name: 'Elephant', reward: 'E' },
    { id: 'giraffe', name: 'Giraffe', reward: 'G' },
    { id: 'zebra', name: 'Zebra', reward: 'Z' },
    { id: 'monkey', name: 'Monkey', reward: 'M' },
    { id: 'hippo', name: 'Hippo', reward: 'H' },
    { id: 'tiger', name: 'Tiger', reward: 'W' },
    { id: 'crocodile', name: 'Crocodile', reward: 'C' },
    { id: 'whale', name: 'Whale', reward: 'W' },
    { id: 'dolphin', name: 'Dolphin', reward: 'D' },
    { id: 'octopus', name: 'Octopus', reward: 'O' },
    { id: 'turtle', name: 'Turtle', reward: 'T' },
    { id: 'car', name: 'Car', reward: '2' },
    { id: 'airplane', name: 'Airplane', reward: 'AIRPLANE' },
    { id: 'boat', name: 'Boat', reward: 'B' },
    { id: 'train', name: 'Train', reward: 'TRAIN' },
    { id: 'tractor', name: 'Tractor', reward: 'T' },
    { id: 'rocket', name: 'Rocket', reward: 'L' },
    { id: 'helicopter', name: 'Helicopter', reward: 'HELICOPTER' },
    { id: 'sun', name: 'Sun', reward: 'S' },
    { id: 'moon', name: 'Moon', reward: 'M' },
    { id: 'apple', name: 'Apple', reward: 'T' },
    { id: 'banana', name: 'Banana', reward: 'U' },
    { id: 'flower', name: 'Flower', reward: 'F' },
    { id: 'tree', name: 'Tree', reward: 'T' },
    { id: 'ball', name: 'Ball', reward: 'B' },
    { id: 'umbrella', name: 'Umbrella', reward: 'U' },
    { id: 'hat', name: 'Hat', reward: 'H' },
    { id: 'star', name: 'Star', reward: 'S' },
    { id: 'starfish', name: 'Starfish', reward: 'S' },
  ];

  const SET_IDS = [
    ['cow', 'car', 'apple', 'sun'],
    ['duck', 'train', 'banana', 'moon'],
    ['lion', 'rocket', 'apple', 'ball'],
    ['elephant', 'helicopter', 'banana', 'flower'],
    ['giraffe', 'boat', 'apple', 'tree'],
    ['dolphin', 'airplane', 'banana', 'umbrella'],
    ['rabbit', 'tractor', 'banana', 'hat'],
  ];

  let deps = {};
  let layer = null;
  let roundItems = [];
  let setIndex = 0;
  let selectedId = '';
  let roundCorrect = 0;
  let roundAttempts = 0;
  let sessionCorrect = 0;
  let sessionAttempts = 0;

  function shuffle(items) {
    if (deps.shuffle) return deps.shuffle(items);
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function getArt(item) {
    const art = window.TotTapsAnimalArt?.get(item.id);
    return art || `<span class="findtap-symbol">${item.name[0]}</span>`;
  }

  function shuffleCardsAwayFromSlots(items) {
    let cards = shuffle(items);
    if (cards.length < 2) return cards;
    for (let attempt = 0; attempt < 8; attempt++) {
      if (cards.every((item, index) => item.id !== items[index].id)) return cards;
      cards = shuffle(items);
    }
    for (let index = 0; index < cards.length; index++) {
      if (cards[index].id !== items[index].id) continue;
      const swapIndex = (index + 1) % cards.length;
      [cards[index], cards[swapIndex]] = [cards[swapIndex], cards[index]];
    }
    return cards;
  }

  function buildRound() {
    const itemById = new Map(ITEMS.map(item => [item.id, item]));
    const setIds = SET_IDS[setIndex % SET_IDS.length];
    roundItems = setIds.map(id => itemById.get(id)).filter(Boolean);
    if (roundItems.length !== 4) {
      console.warn('Shadow Matcher set is incomplete', setIds);
      roundItems = ITEMS.slice(0, 4);
    }
    setIndex = (setIndex + 1) % SET_IDS.length;
    selectedId = '';
    roundCorrect = 0;
    roundAttempts = 0;
  }

  function resetSession() {
    setIndex = 0;
    sessionCorrect = 0;
    sessionAttempts = 0;
    buildRound();
  }

  function clear() {
    selectedId = '';
    if (layer) {
      layer.classList.remove('active');
      layer.innerHTML = '';
    }
  }

  function startRound() {
    if (!layer || deps.getPlayMode?.() !== 'shadowmatch' || !deps.isActive?.()) return;
    if (!roundItems.length || roundCorrect >= roundItems.length) buildRound();
    const slotItems = [...roundItems];
    const shuffledCards = shuffleCardsAwayFromSlots(roundItems);
    const slotIds = slotItems.map(item => item.id);
    const cardIds = shuffledCards.map(item => item.id);
    const missingCards = slotIds.filter(id => !cardIds.includes(id));
    const duplicateCards = cardIds.filter((id, idx) => cardIds.indexOf(id) !== idx);
    if (missingCards.length || duplicateCards.length) {
      console.warn('Shadow Matcher invalid round', { missingCards, duplicateCards, slotIds, cardIds });
    }

    layer.classList.add('active');
    layer.innerHTML = `
      <div class="shadowmatch-panel">
        <div class="shadowmatch-prompt">Match each picture to its shadow</div>
        <div class="shadowmatch-board" data-shadow-slots="true">
          ${slotItems.map(item => `
            <button type="button" class="shadowmatch-slot" data-shadow-slot="${item.id}" aria-label="${item.name} shadow">
              <span class="shadowmatch-art silhouette">${getArt(item)}</span>
            </button>
          `).join('')}
        </div>
        <div class="shadowmatch-board" data-shadow-cards="true">
          ${shuffledCards.map(item => `
            <button type="button" class="shadowmatch-card" data-shadow-card="${item.id}" aria-label="${item.name}">
              <span class="shadowmatch-art">${getArt(item)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    if (deps.soundOn?.()) deps.speak?.('Match each picture');
  }

  function sync() {
    if (deps.getPlayMode?.() === 'shadowmatch' && deps.isActive?.()) {
      startRound();
    } else {
      clear();
    }
  }

  function finishRound() {
    const prompt = layer?.querySelector('.shadowmatch-prompt');
    if (prompt) prompt.textContent = 'Great matching!';
    if (deps.soundOn?.()) deps.speak?.('Great matching');
    setTimeout(() => {
      buildRound();
      startRound();
    }, 1800);
  }

  function handleSlot(slot, x, y) {
    if (!slot || !selectedId || slot.classList.contains('matched')) return false;
    roundAttempts++;
    sessionAttempts++;
    const slotId = slot.dataset.shadowSlot;
    const card = layer?.querySelector(`[data-shadow-card="${selectedId}"]`);
    if (slotId !== selectedId) {
      slot.classList.remove('is-miss');
      card?.classList.remove('is-miss');
      void slot.offsetWidth;
      if (card) void card.offsetWidth;
      slot.classList.add('is-miss');
      card?.classList.add('is-miss');
      const prompt = layer?.querySelector('.shadowmatch-prompt');
      if (prompt) prompt.textContent = 'Try another shadow';
      setTimeout(() => {
        slot.classList.remove('is-miss');
        card?.classList.remove('is-miss');
        if (prompt && roundCorrect < roundItems.length) prompt.textContent = 'Match each picture to its shadow';
      }, 900);
      if (deps.soundOn?.()) deps.playPop?.();
      return true;
    }

    const item = roundItems.find(entry => entry.id === slotId);
    roundCorrect++;
    sessionCorrect++;
    slot.classList.remove('is-miss');
    card?.classList.remove('is-miss');
    slot.classList.add('matched', 'is-correct');
    card?.classList.add('matched');
    selectedId = '';
    const prompt = layer?.querySelector('.shadowmatch-prompt');
    if (prompt) prompt.textContent = 'Nice match!';
    deps.spawnReward?.(item?.reward, x, y);
    if (roundCorrect >= roundItems.length) finishRound();
    return true;
  }

  function handlePointer(event) {
    if (!deps.isActive?.() || deps.getPlayMode?.() !== 'shadowmatch') return false;
    const card = event.target.closest('.shadowmatch-card');
    const slot = event.target.closest('.shadowmatch-slot');
    if (!card && !slot) return false;
    event.preventDefault();
    event.stopPropagation();
    deps.initAudio?.();

    if (card && !card.classList.contains('matched')) {
      selectedId = card.dataset.shadowCard;
      layer?.querySelectorAll('.shadowmatch-card').forEach(el => el.classList.remove('active'));
      layer?.querySelectorAll('.shadowmatch-slot,.shadowmatch-card').forEach(el => el.classList.remove('is-miss'));
      card.classList.add('active');
      const prompt = layer?.querySelector('.shadowmatch-prompt');
      if (prompt) prompt.textContent = 'Now tap the matching shadow';
      deps.playSelect?.();
      return true;
    }

    return handleSlot(slot, event.clientX, event.clientY);
  }

  function getStats() {
    return {
      roundCorrect,
      roundAttempts,
      sessionCorrect,
      sessionAttempts,
      accuracy: sessionAttempts ? Math.round(sessionCorrect / sessionAttempts * 100) : 0,
    };
  }

  function init(options) {
    deps = options || {};
    layer = document.getElementById('shadowmatch-game');
    resetSession();
    return api;
  }

  const api = {
    init,
    sync,
    clear,
    resetSession,
    handlePointer,
    getStats,
    validate() {
      const ids = new Set(ITEMS.map(item => item.id));
      const setIds = SET_IDS.flat();
      return {
        itemCount: ITEMS.length,
        setCount: SET_IDS.length,
        missing: setIds.filter(id => !ids.has(id)),
        badSets: SET_IDS
          .map((set, index) => ({ index, length: set.length, unique: new Set(set).size }))
          .filter(set => set.length !== 4 || set.unique !== 4),
        missingArt: ITEMS.filter(item => !window.TotTapsAnimalArt?.get(item.id)).map(item => item.id),
      };
    },
  };

  window.TotTapsShadowMatcher = api;
})(window, document);
