const moments = [
  { year: -300, china: ['战国时代', '七国相互竞争，思想家们也在探讨怎样建立更好的社会。', '战国'], rome: ['罗马共和国', '罗马的势力正在意大利半岛不断扩大。', '共和国'], india: ['孔雀王朝兴起', '旃陀罗笈多建立了一个强大的新帝国。', '孔雀王朝'], greece: ['希腊化世界', '亚历山大昔日的将领统治着多个说希腊语的王国。', '希腊化'] },
  { year: -221, china: ['秦统一中国', '秦始皇成为统一中国后的第一位皇帝。', '秦朝'], rome: ['罗马共和国', '罗马正与迦太基争夺地中海的控制权。', '共和国'], india: ['孔雀王朝', '阿育王的和平思想沿着繁忙的道路传播。', '孔雀王朝'], greece: ['希腊化诸国', '希腊语言与思想把埃及和西亚连接起来。', '希腊化'] },
  { year: -202, china: ['汉朝建立', '刘邦建立了一个延续四百多年的王朝。', '汉朝'], rome: ['罗马击败迦太基', '罗马成为西地中海最强大的国家。', '共和国'], india: ['孔雀王朝之后', '孔雀王朝衰落，各地的王国逐渐发展。', '诸国'], greece: ['希腊化诸国', '亚历山大港成为科学与学术中心。', '希腊化'] },
  { year: -138, china: ['丝绸之路开启', '张骞出使西域，带回了遥远国度的消息。', '丝绸之路'], rome: ['罗马共和国', '罗马商人交易葡萄酒、玻璃和白银。', '共和国'], india: ['印度—希腊诸国', '希腊文化与印度文化在西北地区相遇。', '交流'], greece: ['罗马向东扩张', '许多希腊城市开始受到罗马影响。', '罗马扩张'] },
  { year: -27, china: ['西汉', '长安是一座连接丝绸之路的巨大都城。', '西汉'], rome: ['罗马帝国建立', '奥古斯都成为罗马第一位皇帝。', '帝国'], india: ['贸易十字路口', '香料和宝石经海路运往罗马，也经陆路运往中国。', '贸易'], greece: ['希腊文化延续', '希腊艺术、语言和学问深深影响着罗马生活。', '文化'] },
  { year: 25, china: ['东汉', '汉朝都城向东迁至洛阳。', '东汉'], rome: ['罗马和平时期', '长时间的稳定促进了城市与贸易的发展。', '和平'], india: ['贵霜时代', '一个新帝国连接起经过中亚的丝绸之路。', '贵霜'], greece: ['罗马世界中的希腊', '雅典仍是学习哲学的著名城市。', '学问'] },
  { year: 105, china: ['造纸术改进', '蔡伦向朝廷报告了更好的造纸方法。', '造纸'], rome: ['罗马帝国', '图拉真统治时期，帝国疆域达到最大。', '鼎盛'], india: ['贵霜帝国', '贸易和佛教在印度北部蓬勃发展。', '佛教'], greece: ['知识远行', '希腊的医学和科学著作广泛流传。', '知识'] },
  { year: 200, china: ['东汉衰落', '强大的军阀相互争夺，汉朝即将走向终结。', '汉末'], rome: ['罗马帝国', '道路和海上航线仍连接着辽阔的帝国。', '帝国'], india: ['贵霜帝国', '艺术家把印度、波斯和希腊风格融合在一起。', '融合'], greece: ['罗马行省', '罗马帝国东部说希腊语的城市依然活跃。', '城市'] }
];

const civMeta = {
  china: { label: '中国', className: 'civ-china', icon: '▥', symbol: '中' },
  rome: { label: '罗马', className: 'civ-rome', icon: '⌂', symbol: 'R' },
  india: { label: '印度', className: 'civ-india', icon: '◉', symbol: '印' },
  greece: { label: '希腊', className: 'civ-greece', icon: 'Ω', symbol: '希' }
};

const periods = {
  china: [
    { start: -300, end: -221, name: '战国', detail: '秦、齐、楚、燕、韩、赵、魏七国竞争，百家争鸣的思想也在这一时期蓬勃发展。', link: '同期：罗马共和国正在意大利扩张。' },
    { start: -221, end: -206, name: '秦朝', detail: '秦始皇统一六国，统一文字、货币和度量衡，并建立中央集权制度。', link: '同期：印度孔雀王朝处于强盛时期。' },
    { start: -206, end: 9, name: '西汉', detail: '汉朝巩固统一国家。张骞出使西域后，东西方交流逐渐形成丝绸之路。', link: '同期：罗马从共和国走向帝国。' },
    { start: 9, end: 23, name: '新朝', detail: '王莽建立新朝并推行改革，但社会矛盾和起义使新朝很快结束。', link: '同期：罗马处于和平与繁荣时期。' },
    { start: 25, end: 200, name: '东汉', detail: '都城迁至洛阳，造纸术得到改进，丝绸之路上的交流更加活跃。', link: '同期：贵霜帝国连接了中亚贸易路线。' }
  ],
  rome: [
    { start: -300, end: -264, name: '统一意大利', detail: '罗马逐步控制意大利半岛，形成由罗马主导的同盟体系。', link: '同期：中国正处于战国时期。' },
    { start: -264, end: -146, name: '布匿战争', detail: '罗马与迦太基三次交战，最终成为西地中海的强国。', link: '第二次战争时期，秦汉在中国交替。' },
    { start: -146, end: -27, name: '共和国晚期', detail: '罗马继续扩张，但内部冲突加剧，凯撒等军事领袖崛起。', link: '同期：汉朝开拓丝绸之路。' },
    { start: -27, end: 96, name: '帝国前期', detail: '奥古斯都建立元首制，罗马进入相对稳定的“罗马和平”时期。', link: '同期：中国经历西汉末年与东汉初年。' },
    { start: 96, end: 200, name: '帝国鼎盛', detail: '图拉真时期疆域达到最大，城市、道路和贸易网络十分发达。', link: '同期：中国东汉改进了造纸术。' }
  ],
  india: [
    { start: -300, end: -185, name: '孔雀王朝', detail: '孔雀王朝统一印度北部大部分地区，阿育王推动佛教传播。', link: '同期：中国从战国走向秦汉统一。' },
    { start: -185, end: -73, name: '巽伽王朝', detail: '孔雀王朝结束后，巽伽王朝统治恒河流域中东部地区。', link: '同期：汉朝开始经营西域。' },
    { start: -73, end: 30, name: '诸国并立', detail: '多个地区政权并存，印度与希腊、波斯和中亚文化持续交流。', link: '同期：罗马帝国建立。' },
    { start: 30, end: 200, name: '贵霜帝国', detail: '贵霜帝国控制中亚和印度北部的重要商路，佛教艺术与贸易兴盛。', link: '它把汉朝与罗马之间的贸易路线连接起来。' }
  ],
  greece: [
    { start: -300, end: -281, name: '继业者战争', detail: '亚历山大去世后，他的将领争夺领土，希腊化世界逐渐形成。', link: '同期：中国七国争雄。' },
    { start: -281, end: -146, name: '希腊化时代', detail: '希腊语言、艺术与科学传播到埃及、西亚和中亚。', link: '这些文化也影响了印度西北部。' },
    { start: -146, end: -27, name: '罗马统治', detail: '希腊本土被纳入罗马势力范围，但希腊文化继续影响罗马。', link: '同期：中国处于汉武帝前后。' },
    { start: -27, end: 200, name: '罗马时期希腊', detail: '雅典仍是哲学与教育中心，希腊语在罗马帝国东部广泛使用。', link: '希腊知识通过罗马世界继续传播。' }
  ]
};

const words = [
  { hanzi: '秦', pinyin: 'Qín · 第二声', title: '秦', detail: '第一个统一中国的王朝', speak: '秦，Qín' },
  { hanzi: '统一', pinyin: 'tǒng yī · 第三声＋第一声', title: '统一', detail: '把许多部分合成一个整体', speak: '统一，tǒng yī' },
  { hanzi: '皇帝', pinyin: 'huáng dì · 第二声＋第四声', title: '皇帝', detail: '帝国的最高统治者', speak: '皇帝，huáng dì' }
];

const quizzes = [
  { q: '公元前221年秦统一中国时，罗马实行什么制度？', a: ['共和国', '帝国', '王国', '还没有建立'], correct: 0, note: '答对了！直到公元前27年，罗马才进入帝国时代。' },
  { q: '“统一”（tǒng yī）是什么意思？', a: ['去旅行', '写文字', '合为一体', '做买卖'], correct: 2, note: '答对了！“统一”就是把多个部分合为一个整体。' },
  { q: '后来，哪条道路把汉朝中国与遥远的国家连接起来？', a: ['琥珀之路', '丝绸之路', '波斯御道', '阿庇亚大道'], correct: 1, note: '没错！丝绸之路运送商品，也传播人员、知识和思想。' }
];

const slider = document.querySelector('#yearSlider');
const yearLabel = document.querySelector('#yearLabel');
const eraLabel = document.querySelector('#eraLabel');
const stageYear = document.querySelector('#stageYear');
const timelineChart = document.querySelector('#timelineChart');
const selectedYearLine = document.querySelector('#selectedYearLine');
let soundOn = true;

function formatYear(year) { return year < 0 ? `公元前${Math.abs(year)}年` : year === 0 ? '公元1年' : `公元${year}年`; }
function nearestMoment(year) { return moments.reduce((best, item) => Math.abs(item.year - year) < Math.abs(best.year - year) ? item : best); }

const chartStart = -300;
const chartEnd = 200;
const chartBodyTop = 48;

function buildChart() {
  const axis = document.querySelector('#timeAxis');
  axis.innerHTML = '';
  const chartBodyHeight = document.querySelector('.history-chart').clientHeight - chartBodyTop;
  for (let year = chartStart; year <= chartEnd; year += 50) {
    const tick = document.createElement('div');
    tick.className = 'axis-tick';
    tick.style.top = `${((year - chartStart) / (chartEnd - chartStart)) * 100}%`;
    tick.innerHTML = `<b>${year < 0 ? `前${Math.abs(year)}年` : year === 0 ? '公元元年' : `${year}年`}</b>`;
    axis.append(tick);
  }
  timelineChart.innerHTML = Object.entries(civMeta).map(([key, meta]) => {
    const blocks = periods[key].map(period => {
      const top = chartBodyTop + ((period.start - chartStart) / (chartEnd - chartStart)) * chartBodyHeight;
      const height = Math.max(23, ((period.end - period.start) / (chartEnd - chartStart)) * chartBodyHeight);
      const compactClass = period.end - period.start < 35 ? ' compact-period' : '';
      return `<button class="period-block period-${key}${compactClass}" style="top:${top}px;height:${height}px" data-start="${period.start}" data-end="${period.end}" aria-label="${period.name}，${formatYear(period.start)}至${formatYear(period.end)}">
        <strong>${period.name}</strong><small>${formatYear(period.start)}—${formatYear(period.end)}</small>
        <span class="period-tip"><b>${formatYear(period.start)}—${formatYear(period.end)}</b><strong>${period.name}</strong><p>${period.detail}</p><em>${period.link}</em></span>
      </button>`;
    }).join('');
    return `<section class="chart-column"><div class="column-head head-${key}"><span>${meta.icon}</span>${meta.label}</div>${blocks}</section>`;
  }).join('');
}

function renderMoment(year) {
  yearLabel.textContent = Math.abs(year) || 1;
  eraLabel.textContent = year < 0 ? '公元前' : '公元';
  stageYear.textContent = formatYear(year);
  const chartHeight = document.querySelector('.history-chart').clientHeight;
  selectedYearLine.style.top = `${chartBodyTop + ((year - chartStart) / (chartEnd - chartStart)) * (chartHeight - chartBodyTop)}px`;
  document.querySelectorAll('.period-block').forEach(block => {
    const end = Number(block.dataset.end);
    const active = year >= Number(block.dataset.start) && (year < end || end === chartEnd);
    block.classList.toggle('active-period', active);
  });
}

function keepYearLineVisible() {
  const rect = selectedYearLine.getBoundingClientRect();
  const topBoundary = Math.max(88, window.innerHeight * .18);
  const bottomBoundary = window.innerHeight - Math.max(64, window.innerHeight * .12);
  if (rect.top > bottomBoundary) {
    window.scrollBy({ top: rect.top - bottomBoundary, behavior: 'auto' });
  } else if (rect.top < topBoundary) {
    window.scrollBy({ top: rect.top - topBoundary, behavior: 'auto' });
  }
}

slider.addEventListener('input', e => {
  renderMoment(Number(e.target.value));
  requestAnimationFrame(keepYearLineVisible);
});
const quickYears = document.querySelector('#quickYears');
moments.forEach(moment => {
  const button = document.createElement('button');
  button.textContent = formatYear(moment.year);
  button.style.left = `${((moment.year + 300) / 500) * 100}%`;
  button.addEventListener('click', () => {
    slider.value = moment.year;
    renderMoment(moment.year);
    requestAnimationFrame(keepYearLineVisible);
  });
  quickYears.append(button);
});

function speak(text, rate = .75) {
  if (!soundOn || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN'; utterance.rate = rate;
  speechSynthesis.speak(utterance);
}

document.querySelector('#wordGrid').innerHTML = words.map((word, index) => `
  <button class="word-card" data-word="${index}"><span class="speaker">♪</span><span class="hanzi">${word.hanzi}</span><span class="tone">${word.pinyin}</span><strong>${word.title}</strong><small>${word.detail}</small></button>
`).join('');
document.querySelectorAll('.word-card').forEach(card => card.addEventListener('click', () => {
  document.querySelectorAll('.word-card').forEach(c => c.classList.remove('playing'));
  card.classList.add('playing'); speak(words[card.dataset.word].speak, .65);
  setTimeout(() => card.classList.remove('playing'), 1200);
}));

document.querySelector('#listenStory').addEventListener('click', () => speak('秦始皇统一了中国。', .65));
document.querySelector('#soundToggle').addEventListener('click', event => {
  soundOn = !soundOn; event.currentTarget.setAttribute('aria-pressed', soundOn);
  event.currentTarget.innerHTML = soundOn ? '♪ <span>声音已开启</span>' : '× <span>声音已关闭</span>';
  if (!soundOn && 'speechSynthesis' in window) speechSynthesis.cancel();
});

let quizIndex = 0;
let score = 0;
function renderQuiz() {
  const quiz = quizzes[quizIndex];
  document.querySelector('#quizCount').textContent = `${quizIndex + 1} / ${quizzes.length}`;
  document.querySelector('#quizProgress').style.width = `${((quizIndex + 1) / quizzes.length) * 100}%`;
  document.querySelector('#questionText').textContent = quiz.q;
  const optionLabels = ['甲', '乙', '丙', '丁'];
  document.querySelector('#answers').innerHTML = quiz.a.map((answer, i) => `<button class="answer" data-answer="${i}">${optionLabels[i]}、${answer}</button>`).join('');
  document.querySelector('#feedback').textContent = '';
  document.querySelector('#nextQuestion').hidden = true;
  document.querySelectorAll('.answer').forEach(button => button.addEventListener('click', chooseAnswer));
}
function chooseAnswer(event) {
  const chosen = Number(event.currentTarget.dataset.answer);
  const quiz = quizzes[quizIndex];
  document.querySelectorAll('.answer').forEach((button, i) => { button.disabled = true; if (i === quiz.correct) button.classList.add('correct'); });
  if (chosen === quiz.correct) { score++; document.querySelector('#feedback').textContent = `✓ ${quiz.note}`; }
  else { event.currentTarget.classList.add('wrong'); document.querySelector('#feedback').textContent = `再想一想！${quiz.note}`; }
  const next = document.querySelector('#nextQuestion'); next.hidden = false; next.textContent = quizIndex === quizzes.length - 1 ? '查看得分 →' : '下一题 →';
}
document.querySelector('#nextQuestion').addEventListener('click', () => {
  if (quizIndex < quizzes.length - 1) { quizIndex++; renderQuiz(); }
  else {
    document.querySelector('#questionText').textContent = `你获得了 ${score} 颗星，共 3 颗！`;
    document.querySelector('#answers').innerHTML = `<button class="answer" id="restartQuiz">↻ 再挑战一次</button>`;
    document.querySelector('#feedback').textContent = score === 3 ? '太棒了！你是一位出色的小历史学家。' : '继续探索时间轴，然后再试一次吧。';
    document.querySelector('#nextQuestion').hidden = true;
    document.querySelector('#restartQuiz').addEventListener('click', () => { quizIndex = 0; score = 0; renderQuiz(); });
  }
});

buildChart();
renderMoment(-221);
renderQuiz();

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { buildChart(); renderMoment(Number(slider.value)); }, 120);
});
