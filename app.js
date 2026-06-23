const chartStart = -300;
const chartEnd = 589;
const chartBodyTop = 48;

const moments = [
  { year: -300, label: '战国中期' },
  { year: -221, label: '秦统一' },
  { year: -202, label: '汉朝建立' },
  { year: -138, label: '张骞通西域' },
  { year: 25, label: '东汉建立' },
  { year: 220, label: '三国开始' },
  { year: 280, label: '西晋短暂统一' },
  { year: 317, label: '东晋建立' },
  { year: 439, label: '北魏统一北方' },
  { year: 589, label: '隋灭陈' }
];

const civMeta = {
  china: { label: '中国', className: 'civ-china', icon: '中', lanes: ['统一', '北/西', '北/东', '南方'] },
  rome: { label: '罗马', className: 'civ-rome', icon: 'R' },
  india: { label: '印度', className: 'civ-india', icon: '印' },
  greece: { label: '希腊与拜占庭', className: 'civ-greece', icon: 'Ω' }
};

const periods = {
  china: [
    { start: -300, end: -221, name: '战国', detail: '秦、齐、楚、燕、韩、赵、魏等诸侯国竞争，思想与制度实验也十分活跃。', link: '未统一：列国并立。' },
    { start: -221, end: -206, name: '秦', detail: '秦始皇统一六国，建立中央集权帝国，推行文字、货币、度量衡等统一措施。', link: '统一王朝。' },
    { start: -206, end: 9, name: '西汉', detail: '汉朝巩固统一国家，经营西域，丝绸之路逐步形成。', link: '统一王朝。' },
    { start: 9, end: 23, name: '新', detail: '王莽建立新朝并推行改革，但社会矛盾和起义使政权迅速瓦解。', link: '短暂统一政权。' },
    { start: 25, end: 220, name: '东汉', detail: '都城洛阳，造纸术改进，后期外戚、宦官与地方军阀力量上升。', link: '统一王朝后期逐渐失控。' },
    { start: 220, end: 266, name: '魏', lane: 2, detail: '曹魏控制中国北方，以洛阳为中心，与蜀汉、孙吴并立。', link: '三国之一：北方。' },
    { start: 221, end: 263, name: '蜀', lane: 1, detail: '蜀汉据有益州，以成都为中心，继承汉室名义。', link: '三国之一：西南。' },
    { start: 229, end: 280, name: '吴', lane: 3, detail: '孙吴控制江东和长江中下游地区，建都建业。', link: '三国之一：江南。' },
    { start: 266, end: 280, name: '晋代魏', lane: 2, detail: '司马氏取代曹魏建立晋，先控制北方与中原，随后南下灭吴。', link: '三国末期的北方政权。' },
    { start: 280, end: 304, name: '西晋统一', detail: '280年西晋灭吴，短暂结束三国分裂局面。', link: '短暂统一阶段。' },
    { start: 304, end: 316, name: '西晋动荡', lane: 0, span: 3, detail: '八王之乱后西晋迅速衰弱，北方新兴政权并起，统一局面瓦解。', link: '统一走向崩解。' },
    { start: 304, end: 439, name: '十六国', lane: 1, span: 2, detail: '北方多个政权先后并立，民族迁徙与战争频繁，政权更替很快。', link: '北方长期分裂。' },
    { start: 317, end: 420, name: '东晋', lane: 3, detail: '晋室南渡后建都建康，维持江南政权。', link: '南方政权。' },
    { start: 420, end: 479, name: '刘宋', lane: 3, detail: '南朝第一个政权，控制长江以南大部分地区。', link: '南朝之一。' },
    { start: 386, end: 439, name: '北魏早期', lane: 2, detail: '北魏386年建立，起初只是北方多个政权之一，逐步扩张。', link: '439年前与北方其他政权并存。' },
    { start: 439, end: 534, name: '北魏', lane: 1, span: 2, detail: '北魏439年统一北方，孝文帝改革推动制度与文化整合。', link: '北朝之一，北方进入相对统一阶段。' },
    { start: 479, end: 502, name: '南齐', lane: 3, detail: '承接刘宋之后的南方政权，统治时间较短。', link: '南朝之一。' },
    { start: 502, end: 557, name: '梁', lane: 3, detail: '梁朝文化繁荣，但侯景之乱严重削弱南方政权。', link: '南朝之一。' },
    { start: 534, end: 550, name: '东魏', lane: 2, detail: '北魏分裂后的东部政权，实际权力掌握在高氏集团手中。', link: '北朝东西分裂。' },
    { start: 535, end: 557, name: '西魏', lane: 1, detail: '北魏分裂后的西部政权，宇文氏集团逐渐掌权。', link: '北朝东西分裂。' },
    { start: 550, end: 577, name: '北齐', lane: 2, detail: '取代东魏，占据华北东部，后被北周灭亡。', link: '北朝之一。' },
    { start: 557, end: 581, name: '北周', lane: 1, detail: '取代西魏，577年灭北齐后统一北方，为隋统一奠定基础。', link: '北朝之一。' },
    { start: 557, end: 589, name: '陈', lane: 3, detail: '南朝最后一个政权，589年被隋灭亡，中国重新统一。', link: '南朝之一。' }
  ],
  rome: [
    { start: -300, end: -264, name: '统一意大利', detail: '罗马逐步控制意大利半岛，形成由罗马主导的同盟体系。', link: '同期：中国正处于战国时期。' },
    { start: -264, end: -146, name: '布匿战争', detail: '罗马与迦太基三次交战，成为西地中海强国。', link: '第二次布匿战争时期，中国进入秦汉之交。' },
    { start: -146, end: -27, name: '共和国晚期', detail: '罗马继续扩张，但内部冲突加剧，军事领袖崛起。', link: '同期：汉朝开拓丝绸之路。' },
    { start: -27, end: 96, name: '帝国前期', detail: '奥古斯都建立元首制，罗马进入相对稳定的帝国时期。', link: '同期：中国经历西汉末年与东汉初年。' },
    { start: 96, end: 180, name: '五贤帝时期', detail: '帝国疆域广阔，城市、道路与贸易网络高度发达。', link: '同期：中国东汉改进造纸术。' },
    { start: 180, end: 284, name: '三世纪危机', detail: '内战、边境压力和财政问题频发，皇帝更替迅速。', link: '同期：中国从汉末走向三国。' },
    { start: 284, end: 395, name: '帝国重组', detail: '戴克里先与君士坦丁改革帝国，君士坦丁堡成为新的政治中心。', link: '同期：中国经历西晋、东晋与十六国。' },
    { start: 395, end: 476, name: '东西分治', detail: '帝国东西分治，西部压力不断加剧，476年西罗马皇帝被废。', link: '同期：中国进入南北朝格局。' },
    { start: 476, end: 589, name: '东罗马', detail: '东罗马帝国延续罗马传统，查士丁尼时期一度收复部分西地中海地区。', link: '同期：中国北朝、南朝并立，隋最终统一。' }
  ],
  india: [
    { start: -300, end: -185, name: '孔雀王朝', detail: '孔雀王朝统一印度北部大部分地区，阿育王推动佛教传播。', link: '同期：中国从战国走向秦汉统一。' },
    { start: -185, end: -73, name: '巽伽王朝', detail: '孔雀王朝结束后，巽伽王朝统治恒河流域中东部地区。', link: '同期：汉朝开始经营西域。' },
    { start: -73, end: 30, name: '诸国并立', detail: '多个地区政权并存，印度与希腊、波斯和中亚文化持续交流。', link: '同期：罗马帝国建立。' },
    { start: 30, end: 250, name: '贵霜帝国', detail: '贵霜帝国控制中亚和印度北部商路，佛教艺术与贸易兴盛。', link: '连接汉朝与罗马之间的贸易路线。' },
    { start: 250, end: 320, name: '地区王国', detail: '贵霜势力衰落后，北印度多政权并立，南印度贸易继续活跃。', link: '同期：中国经历三国与西晋。' },
    { start: 320, end: 550, name: '笈多王朝', detail: '笈多王朝统治北印度大部，数学、文学、宗教艺术繁荣。', link: '同期：中国处于东晋、十六国和南北朝。' },
    { start: 550, end: 589, name: '后笈多时期', detail: '笈多权威衰落，北印度再度形成多个地区政权。', link: '同期：中国北周、陈并立，随后隋统一。' }
  ],
  greece: [
    { start: -300, end: -281, name: '继业者战争', detail: '亚历山大去世后，将领争夺领土，希腊化世界逐渐形成。', link: '同期：中国七国争雄。' },
    { start: -281, end: -146, name: '希腊化时代', detail: '希腊语言、艺术与科学传播到埃及、西亚和中亚。', link: '这些文化也影响印度西北部。' },
    { start: -146, end: -27, name: '罗马统治', detail: '希腊本土纳入罗马势力范围，但希腊文化继续影响罗马。', link: '同期：中国处于汉武帝前后。' },
    { start: -27, end: 330, name: '罗马时期希腊', detail: '雅典仍是哲学与教育中心，希腊语在罗马帝国东部广泛使用。', link: '希腊知识通过罗马世界继续传播。' },
    { start: 330, end: 565, name: '拜占庭核心区', detail: '君士坦丁堡成为东地中海中心，希腊语文化在东罗马世界延续。', link: '同期：中国经历东晋、南北朝。' },
    { start: 565, end: 589, name: '查士丁尼之后', detail: '东罗马继续控制东地中海要地，但战争与财政压力上升。', link: '同期：中国即将由隋重新统一。' }
  ]
};

const slider = document.querySelector('#yearSlider');
const yearLabel = document.querySelector('#yearLabel');
const eraLabel = document.querySelector('#eraLabel');
const stageYear = document.querySelector('#stageYear');
const timelineChart = document.querySelector('#timelineChart');
const selectedYearLine = document.querySelector('#selectedYearLine');
const activePanel = document.querySelector('#activePanel');

function formatYear(year) {
  if (year < 0) return `公元前${Math.abs(year)}年`;
  if (year === 0) return '公元1年';
  return `公元${year}年`;
}

function periodPosition(period, chartBodyHeight) {
  const top = chartBodyTop + ((period.start - chartStart) / (chartEnd - chartStart)) * chartBodyHeight;
  const height = Math.max(22, ((period.end - period.start) / (chartEnd - chartStart)) * chartBodyHeight);
  return { top, height };
}

function buildChart() {
  const axis = document.querySelector('#timeAxis');
  axis.innerHTML = '';
  const chartBodyHeight = document.querySelector('.history-chart').clientHeight - chartBodyTop;

  [-300, -200, -100, 1, 100, 200, 300, 400, 500, 589].forEach(year => {
    const tick = document.createElement('div');
    tick.className = 'axis-tick';
    tick.style.top = `${((year - chartStart) / (chartEnd - chartStart)) * 100}%`;
    tick.innerHTML = `<b>${year < 0 ? `前${Math.abs(year)}年` : `${year}年`}</b>`;
    axis.append(tick);
  });

  timelineChart.innerHTML = Object.entries(civMeta).map(([key, meta]) => {
    const lanes = meta.lanes || [''];
    const laneLabels = lanes.map(label => `<span>${label}</span>`).join('');
    const blocks = periods[key].map(period => {
      const { top, height } = periodPosition(period, chartBodyHeight);
      const lane = period.lane ?? 0;
      const span = period.span ?? (meta.lanes && period.lane === undefined ? lanes.length : 1);
      const laneWidth = 100 / lanes.length;
      const left = 4 + (lane * laneWidth);
      const right = 4 + ((lanes.length - lane - span) * laneWidth);
      const compactClass = period.end - period.start < 38 ? ' compact-period' : '';
      const splitClass = lanes.length > 1 ? ' split-period' : '';
      return `<button class="period-block period-${key}${compactClass}${splitClass}" style="top:${top}px;height:${height}px;left:calc(${left}% + 2px);right:calc(${right}% + 2px)" data-civ="${key}" data-start="${period.start}" data-end="${period.end}" aria-label="${period.name}，${formatYear(period.start)}至${formatYear(period.end)}">
        <strong>${period.name}</strong><small>${formatYear(period.start)}-${formatYear(period.end)}</small>
        <span class="period-tip"><b>${formatYear(period.start)}-${formatYear(period.end)}</b><strong>${period.name}</strong><p>${period.detail}</p><em>${period.link}</em></span>
      </button>`;
    }).join('');
    return `<section class="chart-column ${lanes.length > 1 ? 'has-lanes' : ''}"><div class="column-head head-${key}"><span>${meta.icon}</span>${meta.label}</div><div class="lane-labels">${laneLabels}</div>${blocks}</section>`;
  }).join('');
}

function activePeriods(year) {
  return Object.entries(periods).flatMap(([key, items]) => {
    return items
      .filter(period => year >= period.start && (year < period.end || period.end === chartEnd))
      .map(period => ({ ...period, civ: key, civLabel: civMeta[key].label }));
  });
}

function renderActivePanel(year) {
  const current = activePeriods(year);
  activePanel.innerHTML = current.map(period => `
    <article class="active-card ${civMeta[period.civ].className}">
      <span>${period.civLabel}</span>
      <h3>${period.name}</h3>
      <p>${period.detail}</p>
      <small>${period.link}</small>
    </article>
  `).join('');
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
  renderActivePanel(year);
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

slider.addEventListener('input', event => {
  renderMoment(Number(event.target.value));
  requestAnimationFrame(keepYearLineVisible);
});

const quickYears = document.querySelector('#quickYears');
moments.forEach((moment, index) => {
  const button = document.createElement('button');
  button.textContent = moment.label;
  button.style.left = `${((moment.year - chartStart) / (chartEnd - chartStart)) * 100}%`;
  button.style.top = `${index % 2 === 0 ? 0 : 20}px`;
  button.addEventListener('click', () => {
    slider.value = moment.year;
    renderMoment(moment.year);
    requestAnimationFrame(keepYearLineVisible);
  });
  quickYears.append(button);
});

buildChart();
renderMoment(-221);

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    buildChart();
    renderMoment(Number(slider.value));
  }, 120);
});
