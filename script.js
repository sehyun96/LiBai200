const enterButton = document.getElementById('enterButton');
const poemScreen = document.getElementById('poemScreen');
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

function fillPoemWall() {
  poemWall.textContent = '';

  const repeatedText = `${poem.join('　')}　`;
  const lineCount = Math.ceil(window.innerHeight / 54) + 4;

  for (let i = 0; i < lineCount; i += 1) {
    const line = document.createElement('div');
    line.className = 'poem-line';
    line.textContent = repeatedText.repeat(2);
    poemWall.appendChild(line);
  }
}

fillPoemWall();
window.addEventListener('resize', fillPoemWall);

enterButton.addEventListener('click', () => {
  document.body.classList.add('is-open');
  poemScreen.setAttribute('aria-hidden', 'false');
});
