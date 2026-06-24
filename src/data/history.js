export const chartStart = -300;
export const chartEnd = 589;
const dateYearOffset = 1000;

export const milestones = [
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

export const civilizations = [
  {
    id: 'china',
    label: '中国',
    shortLabel: '中',
    colorClass: 'civ-china',
    lanes: [
      { id: 'unified', label: '统一' },
      { id: 'north-west', label: '北/西' },
      { id: 'north-east', label: '北/东' },
      { id: 'south', label: '南方' }
    ]
  },
  { id: 'rome', label: '罗马', shortLabel: 'R', colorClass: 'civ-rome', lanes: [{ id: 'main', label: '主线' }] },
  { id: 'india', label: '印度', shortLabel: '印', colorClass: 'civ-india', lanes: [{ id: 'main', label: '主线' }] },
  { id: 'greece', label: '希腊与拜占庭', shortLabel: 'Ω', colorClass: 'civ-greece', lanes: [{ id: 'main', label: '主线' }] }
];

export const periods = [
  { id: 'china-warring-states', civilization: 'china', lane: 'unified', start: -300, end: -221, name: '战国', detail: '秦、齐、楚、燕、韩、赵、魏等诸侯国竞争，思想与制度实验也十分活跃。', link: '未统一：列国并立。', tags: ['分裂', '中国'] },
  { id: 'china-qin', civilization: 'china', lane: 'unified', start: -221, end: -206, name: '秦', detail: '秦始皇统一六国，建立中央集权帝国，推行文字、货币、度量衡等统一措施。', link: '统一王朝。', tags: ['统一', '中国'] },
  { id: 'china-western-han', civilization: 'china', lane: 'unified', start: -206, end: 9, name: '西汉', detail: '汉朝巩固统一国家，经营西域，丝绸之路逐步形成。', link: '统一王朝。', tags: ['统一', '中国'] },
  { id: 'china-xin', civilization: 'china', lane: 'unified', start: 9, end: 23, name: '新', detail: '王莽建立新朝并推行改革，但社会矛盾和起义使政权迅速瓦解。', link: '短暂统一政权。', tags: ['统一', '中国'] },
  { id: 'china-eastern-han', civilization: 'china', lane: 'unified', start: 25, end: 220, name: '东汉', detail: '都城洛阳，造纸术改进，后期外戚、宦官与地方军阀力量上升。', link: '统一王朝后期逐渐失控。', tags: ['统一', '中国'] },
  { id: 'china-wei', civilization: 'china', lane: 'north-east', start: 220, end: 266, name: '魏', detail: '曹魏控制中国北方，以洛阳为中心，与蜀汉、孙吴并立。', link: '三国之一：北方。', tags: ['分裂', '三国', '中国'] },
  { id: 'china-shu', civilization: 'china', lane: 'north-west', start: 221, end: 263, name: '蜀', detail: '蜀汉据有益州，以成都为中心，继承汉室名义。', link: '三国之一：西南。', tags: ['分裂', '三国', '中国'] },
  { id: 'china-wu', civilization: 'china', lane: 'south', start: 229, end: 280, name: '吴', detail: '孙吴控制江东和长江中下游地区，建都建业。', link: '三国之一：江南。', tags: ['分裂', '三国', '中国'] },
  { id: 'china-jin-after-wei', civilization: 'china', lane: 'north-east', start: 266, end: 280, name: '晋代魏', detail: '司马氏取代曹魏建立晋，先控制北方与中原，随后南下灭吴。', link: '三国末期的北方政权。', tags: ['分裂', '中国'] },
  { id: 'china-western-jin-unified', civilization: 'china', lane: 'unified', start: 280, end: 304, name: '西晋统一', detail: '280年西晋灭吴，短暂结束三国分裂局面。', link: '短暂统一阶段。', tags: ['统一', '中国'] },
  { id: 'china-western-jin-collapse', civilization: 'china', lane: 'unified', start: 304, end: 316, name: '西晋动荡', detail: '八王之乱后西晋迅速衰弱，北方新兴政权并起，统一局面瓦解。', link: '统一走向崩解。', tags: ['分裂', '中国'] },
  { id: 'china-sixteen-kingdoms', civilization: 'china', lane: 'north-west', start: 304, end: 439, name: '十六国', detail: '北方多个政权先后并立，民族迁徙与战争频繁，政权更替很快。', link: '北方长期分裂。', tags: ['分裂', '十六国', '中国'] },
  { id: 'china-eastern-jin', civilization: 'china', lane: 'south', start: 317, end: 420, name: '东晋', detail: '晋室南渡后建都建康，维持江南政权。', link: '南方政权。', tags: ['分裂', '中国'] },
  { id: 'china-northern-wei-early', civilization: 'china', lane: 'north-east', start: 386, end: 439, name: '北魏早期', detail: '北魏386年建立，起初只是北方多个政权之一，逐步扩张。', link: '439年前与北方其他政权并存。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-liu-song', civilization: 'china', lane: 'south', start: 420, end: 479, name: '刘宋', detail: '南朝第一个政权，控制长江以南大部分地区。', link: '南朝之一。', tags: ['分裂', '南朝', '中国'] },
  { id: 'china-northern-wei', civilization: 'china', lane: 'north-west', start: 439, end: 534, name: '北魏', detail: '北魏439年统一北方，孝文帝改革推动制度与文化整合。', link: '北朝之一，北方进入相对统一阶段。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-southern-qi', civilization: 'china', lane: 'south', start: 479, end: 502, name: '南齐', detail: '承接刘宋之后的南方政权，统治时间较短。', link: '南朝之一。', tags: ['分裂', '南朝', '中国'] },
  { id: 'china-liang', civilization: 'china', lane: 'south', start: 502, end: 557, name: '梁', detail: '梁朝文化繁荣，但侯景之乱严重削弱南方政权。', link: '南朝之一。', tags: ['分裂', '南朝', '中国'] },
  { id: 'china-eastern-wei', civilization: 'china', lane: 'north-east', start: 534, end: 550, name: '东魏', detail: '北魏分裂后的东部政权，实际权力掌握在高氏集团手中。', link: '北朝东西分裂。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-western-wei', civilization: 'china', lane: 'north-west', start: 535, end: 557, name: '西魏', detail: '北魏分裂后的西部政权，宇文氏集团逐渐掌权。', link: '北朝东西分裂。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-northern-qi', civilization: 'china', lane: 'north-east', start: 550, end: 577, name: '北齐', detail: '取代东魏，占据华北东部，后被北周灭亡。', link: '北朝之一。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-northern-zhou', civilization: 'china', lane: 'north-west', start: 557, end: 581, name: '北周', detail: '取代西魏，577年灭北齐后统一北方，为隋统一奠定基础。', link: '北朝之一。', tags: ['分裂', '北朝', '中国'] },
  { id: 'china-chen', civilization: 'china', lane: 'south', start: 557, end: 589, name: '陈', detail: '南朝最后一个政权，589年被隋灭亡，中国重新统一。', link: '南朝之一。', tags: ['分裂', '南朝', '中国'] },

  { id: 'rome-italy', civilization: 'rome', start: -300, end: -264, name: '统一意大利', detail: '罗马逐步控制意大利半岛，形成由罗马主导的同盟体系。', link: '同期：中国正处于战国时期。', tags: ['扩张', '罗马'] },
  { id: 'rome-punic', civilization: 'rome', start: -264, end: -146, name: '布匿战争', detail: '罗马与迦太基三次交战，成为西地中海强国。', link: '第二次布匿战争时期，中国进入秦汉之交。', tags: ['战争', '罗马'] },
  { id: 'rome-late-republic', civilization: 'rome', start: -146, end: -27, name: '共和国晚期', detail: '罗马继续扩张，但内部冲突加剧，军事领袖崛起。', link: '同期：汉朝开拓丝绸之路。', tags: ['罗马'] },
  { id: 'rome-early-empire', civilization: 'rome', start: -27, end: 96, name: '帝国前期', detail: '奥古斯都建立元首制，罗马进入相对稳定的帝国时期。', link: '同期：中国经历西汉末年与东汉初年。', tags: ['罗马'] },
  { id: 'rome-five-good-emperors', civilization: 'rome', start: 96, end: 180, name: '五贤帝时期', detail: '帝国疆域广阔，城市、道路与贸易网络高度发达。', link: '同期：中国东汉改进造纸术。', tags: ['罗马'] },
  { id: 'rome-third-century', civilization: 'rome', start: 180, end: 284, name: '三世纪危机', detail: '内战、边境压力和财政问题频发，皇帝更替迅速。', link: '同期：中国从汉末走向三国。', tags: ['危机', '罗马'] },
  { id: 'rome-reorganization', civilization: 'rome', start: 284, end: 395, name: '帝国重组', detail: '戴克里先与君士坦丁改革帝国，君士坦丁堡成为新的政治中心。', link: '同期：中国经历西晋、东晋与十六国。', tags: ['罗马'] },
  { id: 'rome-split', civilization: 'rome', start: 395, end: 476, name: '东西分治', detail: '帝国东西分治，西部压力不断加剧，476年西罗马皇帝被废。', link: '同期：中国进入南北朝格局。', tags: ['分裂', '罗马'] },
  { id: 'rome-eastern', civilization: 'rome', start: 476, end: 589, name: '东罗马', detail: '东罗马帝国延续罗马传统，查士丁尼时期一度收复部分西地中海地区。', link: '同期：中国北朝、南朝并立，隋最终统一。', tags: ['罗马'] },

  { id: 'india-maurya', civilization: 'india', start: -300, end: -185, name: '孔雀王朝', detail: '孔雀王朝统一印度北部大部分地区，阿育王推动佛教传播。', link: '同期：中国从战国走向秦汉统一。', tags: ['印度'] },
  { id: 'india-shunga', civilization: 'india', start: -185, end: -73, name: '巽伽王朝', detail: '孔雀王朝结束后，巽伽王朝统治恒河流域中东部地区。', link: '同期：汉朝开始经营西域。', tags: ['印度'] },
  { id: 'india-kingdoms', civilization: 'india', start: -73, end: 30, name: '诸国并立', detail: '多个地区政权并存，印度与希腊、波斯和中亚文化持续交流。', link: '同期：罗马帝国建立。', tags: ['分裂', '印度'] },
  { id: 'india-kushan', civilization: 'india', start: 30, end: 250, name: '贵霜帝国', detail: '贵霜帝国控制中亚和印度北部商路，佛教艺术与贸易兴盛。', link: '连接汉朝与罗马之间的贸易路线。', tags: ['贸易', '印度'] },
  { id: 'india-regional', civilization: 'india', start: 250, end: 320, name: '地区王国', detail: '贵霜势力衰落后，北印度多政权并立，南印度贸易继续活跃。', link: '同期：中国经历三国与西晋。', tags: ['分裂', '印度'] },
  { id: 'india-gupta', civilization: 'india', start: 320, end: 550, name: '笈多王朝', detail: '笈多王朝统治北印度大部，数学、文学、宗教艺术繁荣。', link: '同期：中国处于东晋、十六国和南北朝。', tags: ['印度'] },
  { id: 'india-post-gupta', civilization: 'india', start: 550, end: 589, name: '后笈多时期', detail: '笈多权威衰落，北印度再度形成多个地区政权。', link: '同期：中国北周、陈并立，随后隋统一。', tags: ['分裂', '印度'] },

  { id: 'greece-diadochi', civilization: 'greece', start: -300, end: -281, name: '继业者战争', detail: '亚历山大去世后，将领争夺领土，希腊化世界逐渐形成。', link: '同期：中国七国争雄。', tags: ['战争', '希腊'] },
  { id: 'greece-hellenistic', civilization: 'greece', start: -281, end: -146, name: '希腊化时代', detail: '希腊语言、艺术与科学传播到埃及、西亚和中亚。', link: '这些文化也影响印度西北部。', tags: ['文化', '希腊'] },
  { id: 'greece-roman-rule', civilization: 'greece', start: -146, end: -27, name: '罗马统治', detail: '希腊本土纳入罗马势力范围，但希腊文化继续影响罗马。', link: '同期：中国处于汉武帝前后。', tags: ['希腊'] },
  { id: 'greece-roman-period', civilization: 'greece', start: -27, end: 330, name: '罗马时期希腊', detail: '雅典仍是哲学与教育中心，希腊语在罗马帝国东部广泛使用。', link: '希腊知识通过罗马世界继续传播。', tags: ['希腊'] },
  { id: 'greece-byzantine-core', civilization: 'greece', start: 330, end: 565, name: '拜占庭核心区', detail: '君士坦丁堡成为东地中海中心，希腊语文化在东罗马世界延续。', link: '同期：中国经历东晋、南北朝。', tags: ['拜占庭', '希腊'] },
  { id: 'greece-after-justinian', civilization: 'greece', start: 565, end: 589, name: '查士丁尼之后', detail: '东罗马继续控制东地中海要地，但战争与财政压力上升。', link: '同期：中国即将由隋重新统一。', tags: ['拜占庭', '希腊'] }
];

export function formatYear(year) {
  if (year < 0) return `公元前${Math.abs(year)}年`;
  if (year === 0) return '公元1年';
  return `公元${year}年`;
}

export function yearToDate(year) {
  const date = new Date(Date.UTC(0, 0, 1));
  date.setUTCFullYear(year + dateYearOffset, 0, 1);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

export function dateToYear(date) {
  return date.getUTCFullYear() - dateYearOffset;
}
