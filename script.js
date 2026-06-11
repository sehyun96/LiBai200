const screens = Array.from(document.querySelectorAll('.screen'));
const enterButton = document.getElementById('enterButton');
const moonButton = document.getElementById('moonButton');
const poemWall = document.getElementById('poemWall');

const poem = [
  '青天有月來幾時 我今停杯一問之',
  '人攀明月不可得 月行却與人相隨',
  '皎如飛鏡臨丹闕 綠煙滅盡清輝發',
  '但見宵從海上來 寧知曉向雲間沒',
  '白兔搗藥秋復春 姮娥孤棲與誰鄰',
  '今人不見古時月 今月曾經照古人',
  '古人今人若流水 共看明月皆如此',
  '唯願當歌對酒時 月光長照金樽裏'
];

function showScreen(screenId) {
  screens.forEach((screen) => {
    const isActive = screen.id === screenId;
    screen.classList.toggle('is-active', isActive);
    screen.setAttribute('aria-hidden', String(!isActive));
  });

  if (screenId === 'yeonScreen') {
    restartYeonMoonPhase();
  }

  if (screenId === 'misuhuiScreen') {
    restartMisuhuiMoon();
  }

  if (screenId === 'youngScreen') {
    restartYoungMoonPhase();
  }
}

function restartYeonMoonPhase() {
  const phaseMoon = document.getElementById('yeonMoonPhase');
  if (!phaseMoon) return;

  phaseMoon.classList.remove('is-animating');
  void phaseMoon.offsetWidth;
  phaseMoon.classList.add('is-animating');
}

function restartMisuhuiMoon() {
  const crescentMoon = document.getElementById('misuhuiMoon');
  if (!crescentMoon) return;

  crescentMoon.classList.remove('is-animating');
  void crescentMoon.offsetWidth;
  crescentMoon.classList.add('is-animating');
}

function restartYoungMoonPhase() {
  const youngMoon = document.getElementById('youngMoonPhase');
  if (!youngMoon) return;

  youngMoon.classList.remove('is-animating');
  void youngMoon.offsetWidth;
  youngMoon.classList.add('is-animating');
}

function fillPoemWall() {
  poemWall.textContent = '';

  const repeatedText = `${poem.join('　')}　`;
  const lineCount = Math.ceil(window.innerHeight / 54) + 5;

  for (let i = 0; i < lineCount; i += 1) {
    const line = document.createElement('div');
    line.className = 'poem-line';
    line.textContent = repeatedText.repeat(3);
    poemWall.appendChild(line);
  }
}

fillPoemWall();
window.addEventListener('resize', fillPoemWall);

enterButton.addEventListener('click', () => {
  showScreen('poemScreen');
});

moonButton.addEventListener('click', () => {
  showScreen('charactersScreen');
});

document.addEventListener('click', (event) => {
  const targetButton = event.target.closest('[data-target]');
  if (!targetButton) return;
  showScreen(targetButton.dataset.target);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  const activeScreen = document.querySelector('.screen.is-active');
  if (!activeScreen || activeScreen.id === 'mainScreen') return;

  if (activeScreen.classList.contains('screen-detail')) {
    showScreen('charactersScreen');
    return;
  }

  if (activeScreen.id === 'liBaiProfileScreen') {
    showScreen('poemScreen');
    return;
  }

  showScreen('mainScreen');
});
