export const chartStart = -300;
export const chartEnd = 1949;
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
  { year: 589, label: '隋灭陈' },
  { year: 618, label: '唐朝建立' },
  { year: 907, label: '五代十国' },
  { year: 960, label: '北宋建立' },
  { year: 1127, label: '宋室南渡' },
  { year: 1279, label: '元统一' },
  { year: 1368, label: '明朝建立' },
  { year: 1644, label: '清军入关' },
  { year: 1912, label: '中华民国' },
  { year: 1949, label: '新中国成立' }
];

export const civilizations = [
  {
    id: 'china',
    label: '中国',
    shortLabel: '中',
    colorClass: 'civ-china',
    lanes: [
      { id: 'north-west', label: '北/西' },
      { id: 'north-east', label: '北/东' },
      { id: 'south', label: '南方' }
    ]
  },
  { id: 'rome', label: '欧洲', shortLabel: '欧', colorClass: 'civ-rome', lanes: [{ id: 'main', label: '主线' }] },
  { id: 'india', label: '印度', shortLabel: '印', colorClass: 'civ-india', lanes: [{ id: 'main', label: '主线' }] },
  { id: 'greece', label: '西亚·地中海', shortLabel: '西', colorClass: 'civ-greece', lanes: [{ id: 'main', label: '主线' }] }
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

  { id: 'china-sui', civilization: 'china', lane: 'unified', start: 589, end: 618, name: '隋', detail: '隋朝589年灭陈，结束长期分裂，开凿大运河，建立科举雏形。', link: '统一王朝。', tags: ['统一', '中国'] },
  { id: 'china-tang', civilization: 'china', lane: 'unified', start: 618, end: 907, name: '唐', detail: '唐朝国力强盛，长安成为国际都会，诗歌、佛教与丝路贸易繁荣，安史之乱后逐渐衰落。', link: '统一王朝，中华文明高峰之一。', tags: ['统一', '中国'] },
  { id: 'china-five-dynasties', civilization: 'china', lane: 'north-west', start: 907, end: 960, name: '五代', detail: '唐亡后中原先后出现后梁、后唐、后晋、后汉、后周五个政权，更替频繁。', link: '五代十国：北方中原。', tags: ['分裂', '五代十国', '中国'] },
  { id: 'china-ten-kingdoms', civilization: 'china', lane: 'south', start: 907, end: 960, name: '十国', detail: '南方与四川等地并立多个割据政权，经济与文化相对稳定。', link: '五代十国：南方各国。', tags: ['分裂', '五代十国', '中国'] },
  { id: 'china-liao', civilization: 'china', lane: 'north-east', start: 916, end: 1125, name: '辽', detail: '契丹建立的辽朝控制中国东北与北部草原，与北宋长期对峙。', link: '北方游牧政权，与北宋并立。', tags: ['分裂', '中国'] },
  { id: 'china-xixia', civilization: 'china', lane: 'north-west', start: 1038, end: 1227, name: '西夏', detail: '党项人建立的西夏据有西北河西走廊，创制文字，控制部分丝路。', link: '西北政权，与宋、辽、金并立。', tags: ['分裂', '中国'] },
  { id: 'china-northern-song', civilization: 'china', lane: 'south', start: 960, end: 1127, name: '北宋', detail: '北宋统一中原与南方，商业、印刷与科技高度发达，但北方受辽、夏牵制。', link: '与辽、西夏并立的中原王朝。', tags: ['分裂', '中国'] },
  { id: 'china-jin', civilization: 'china', lane: 'north-east', start: 1125, end: 1234, name: '金', detail: '女真建立的金朝灭辽与北宋，占据华北，与南宋隔淮河对峙，后被蒙古所灭。', link: '北方政权，与南宋并立。', tags: ['分裂', '中国'] },
  { id: 'china-southern-song', civilization: 'china', lane: 'south', start: 1127, end: 1279, name: '南宋', detail: '宋室南渡定都临安，江南经济与海上贸易繁荣，1279年被元所灭。', link: '南方政权，与金、蒙古并立。', tags: ['分裂', '中国'] },
  { id: 'china-yuan', civilization: 'china', lane: 'unified', start: 1279, end: 1368, name: '元', detail: '蒙古建立的元朝1279年统一中国，疆域辽阔，东西交通与贸易空前活跃。', link: '统一王朝。', tags: ['统一', '中国'] },
  { id: 'china-ming', civilization: 'china', lane: 'unified', start: 1368, end: 1644, name: '明', detail: '明朝恢复汉人王朝，郑和下西洋，修筑长城，后期内忧外患加剧。', link: '统一王朝。', tags: ['统一', '中国'] },
  { id: 'china-qing', civilization: 'china', lane: 'unified', start: 1644, end: 1912, name: '清', detail: '满洲建立的清朝1644年入关，疆域广大；晚期面对列强冲击与内部动荡，最终被辛亥革命终结。', link: '中国最后一个王朝。', tags: ['统一', '中国'] },
  { id: 'china-roc', civilization: 'china', lane: 'unified', start: 1912, end: 1949, name: '中华民国', detail: '1912年清帝退位，中华民国建立，历经军阀混战、抗日战争与内战，1949年中华人民共和国成立。', link: '近代中国，1949年新中国成立。', tags: ['近代', '中国'] },
  { id: 'rome-italy', civilization: 'rome', start: -300, end: -264, name: '统一意大利', detail: '罗马逐步控制意大利半岛，形成由罗马主导的同盟体系。', link: '同期：中国正处于战国时期。', tags: ['扩张', '罗马'] },
  { id: 'rome-punic', civilization: 'rome', start: -264, end: -146, name: '布匿战争', detail: '罗马与迦太基三次交战，成为西地中海强国。', link: '第二次布匿战争时期，中国进入秦汉之交。', tags: ['战争', '罗马'] },
  { id: 'rome-late-republic', civilization: 'rome', start: -146, end: -27, name: '共和国晚期', detail: '罗马继续扩张，但内部冲突加剧，军事领袖崛起。', link: '同期：汉朝开拓丝绸之路。', tags: ['罗马'] },
  { id: 'rome-early-empire', civilization: 'rome', start: -27, end: 96, name: '帝国前期', detail: '奥古斯都建立元首制，罗马进入相对稳定的帝国时期。', link: '同期：中国经历西汉末年与东汉初年。', tags: ['罗马'] },
  { id: 'rome-five-good-emperors', civilization: 'rome', start: 96, end: 180, name: '五贤帝时期', detail: '帝国疆域广阔，城市、道路与贸易网络高度发达。', link: '同期：中国东汉改进造纸术。', tags: ['罗马'] },
  { id: 'rome-third-century', civilization: 'rome', start: 180, end: 284, name: '三世纪危机', detail: '内战、边境压力和财政问题频发，皇帝更替迅速。', link: '同期：中国从汉末走向三国。', tags: ['危机', '罗马'] },
  { id: 'rome-reorganization', civilization: 'rome', start: 284, end: 395, name: '帝国重组', detail: '戴克里先与君士坦丁改革帝国，君士坦丁堡成为新的政治中心。', link: '同期：中国经历西晋、东晋与十六国。', tags: ['罗马'] },
  { id: 'rome-split', civilization: 'rome', start: 395, end: 476, name: '东西分治', detail: '帝国东西分治，西部压力不断加剧，476年西罗马皇帝被废。', link: '同期：中国进入南北朝格局。', tags: ['分裂', '罗马'] },
  { id: 'rome-eastern', civilization: 'rome', start: 476, end: 589, name: '东罗马', detail: '东罗马帝国延续罗马传统，查士丁尼时期一度收复部分西地中海地区。', link: '同期：中国北朝、南朝并立，隋最终统一。', tags: ['罗马'] },
  { id: 'europe-franks', civilization: 'rome', start: 589, end: 800, name: '法兰克王国', detail: '西罗马灭亡后，法兰克等日耳曼王国在西欧兴起，教会成为重要的凝聚力量。', link: '同期：中国处于隋唐之交。', tags: ['欧洲'] },
  { id: 'europe-charlemagne', civilization: 'rome', start: 800, end: 843, name: '查理曼帝国', detail: '查理曼800年加冕为皇帝，短暂统一西欧大部，被称为加洛林文艺复兴。', link: '同期：中国正值盛唐。', tags: ['欧洲'] },
  { id: 'europe-feudal', civilization: 'rome', start: 843, end: 1000, name: '封建分裂', detail: '帝国分裂，维京人、马扎尔人侵袭，封建制度在西欧逐渐确立。', link: '同期：中国经历唐末与五代十国。', tags: ['分裂', '欧洲'] },
  { id: 'europe-high-middle', civilization: 'rome', start: 1000, end: 1300, name: '中世纪盛期', detail: '人口增长，城市与大学兴起，十字军东征，神圣罗马帝国与教会并立。', link: '同期：中国处于两宋。', tags: ['欧洲'] },
  { id: 'europe-late-middle', civilization: 'rome', start: 1300, end: 1453, name: '中世纪晚期', detail: '黑死病、百年战争与饥荒冲击欧洲，旧秩序动摇，孕育新的变革。', link: '同期：中国处于元末明初。', tags: ['危机', '欧洲'] },
  { id: 'europe-renaissance', civilization: 'rome', start: 1453, end: 1600, name: '文艺复兴与大航海', detail: '文艺复兴推动艺术与科学，新航路开辟使欧洲走向海外扩张。', link: '同期：中国处于明朝中期。', tags: ['欧洲'] },
  { id: 'europe-reformation', civilization: 'rome', start: 1600, end: 1715, name: '宗教战争与绝对君主', detail: '宗教改革引发战争，民族国家与绝对君主制兴起，科学革命展开。', link: '同期：中国经历明清之际。', tags: ['欧洲'] },
  { id: 'europe-enlightenment', civilization: 'rome', start: 1715, end: 1789, name: '启蒙时代', detail: '理性、自由与权利等思想传播，为政治与社会变革奠定基础。', link: '同期：中国处于清朝盛世。', tags: ['思想', '欧洲'] },
  { id: 'europe-revolution', civilization: 'rome', start: 1789, end: 1815, name: '法国大革命与拿破仑', detail: '法国大革命冲击旧制度，拿破仑战争重塑欧洲政治版图。', link: '同期：中国清朝由盛转衰。', tags: ['革命', '欧洲'] },
  { id: 'europe-industrial', civilization: 'rome', start: 1815, end: 1914, name: '工业化与民族国家', detail: '工业革命改变生产与社会，民族国家形成，欧洲列强向全球扩张。', link: '同期：中国遭遇列强冲击与内部动荡。', tags: ['工业', '欧洲'] },
  { id: 'europe-world-wars', civilization: 'rome', start: 1914, end: 1949, name: '两次世界大战', detail: '两次世界大战重创欧洲，旧帝国瓦解，世界格局深刻改变。', link: '同期：中国经历民国、抗战与内战。', tags: ['战争', '欧洲'] },

  { id: 'india-maurya', civilization: 'india', start: -300, end: -185, name: '孔雀王朝', detail: '孔雀王朝统一印度北部大部分地区，阿育王推动佛教传播。', link: '同期：中国从战国走向秦汉统一。', tags: ['印度'] },
  { id: 'india-shunga', civilization: 'india', start: -185, end: -73, name: '巽伽王朝', detail: '孔雀王朝结束后，巽伽王朝统治恒河流域中东部地区。', link: '同期：汉朝开始经营西域。', tags: ['印度'] },
  { id: 'india-kingdoms', civilization: 'india', start: -73, end: 30, name: '诸国并立', detail: '多个地区政权并存，印度与希腊、波斯和中亚文化持续交流。', link: '同期：罗马帝国建立。', tags: ['分裂', '印度'] },
  { id: 'india-kushan', civilization: 'india', start: 30, end: 250, name: '贵霜帝国', detail: '贵霜帝国控制中亚和印度北部商路，佛教艺术与贸易兴盛。', link: '连接汉朝与罗马之间的贸易路线。', tags: ['贸易', '印度'] },
  { id: 'india-regional', civilization: 'india', start: 250, end: 320, name: '地区王国', detail: '贵霜势力衰落后，北印度多政权并立，南印度贸易继续活跃。', link: '同期：中国经历三国与西晋。', tags: ['分裂', '印度'] },
  { id: 'india-gupta', civilization: 'india', start: 320, end: 550, name: '笈多王朝', detail: '笈多王朝统治北印度大部，数学、文学、宗教艺术繁荣。', link: '同期：中国处于东晋、十六国和南北朝。', tags: ['印度'] },
  { id: 'india-post-gupta', civilization: 'india', start: 550, end: 589, name: '后笈多时期', detail: '笈多权威衰落，北印度再度形成多个地区政权。', link: '同期：中国北周、陈并立，随后隋统一。', tags: ['分裂', '印度'] },
  { id: 'india-harsha', civilization: 'india', start: 589, end: 647, name: '戒日王时期', detail: '戒日王短暂统一北印度大部，玄奘曾到访那烂陀寺求法。', link: '同期：中国处于隋唐之交。', tags: ['印度'] },
  { id: 'india-regional-medieval', civilization: 'india', start: 647, end: 1206, name: '地区王国并立', detail: '北印度拉杰普特诸国与南印度王朝并立，印度教文化与神庙艺术繁荣。', link: '同期：中国经历唐、五代与两宋。', tags: ['分裂', '印度'] },
  { id: 'india-delhi-sultanate', civilization: 'india', start: 1206, end: 1526, name: '德里苏丹国', detail: '突厥-阿富汗势力建立德里苏丹国，伊斯兰教在印度北部确立影响。', link: '同期：中国处于宋末、元与明初。', tags: ['印度'] },
  { id: 'india-mughal', civilization: 'india', start: 1526, end: 1707, name: '莫卧儿帝国', detail: '莫卧儿帝国统一印度大部，行政、建筑（如泰姬陵）与艺术高度发达。', link: '同期：中国处于明朝中后期至清初。', tags: ['印度'] },
  { id: 'india-mughal-decline', civilization: 'india', start: 1707, end: 1858, name: '莫卧儿衰落与殖民扩张', detail: '莫卧儿衰落，地方势力割据，英国东印度公司逐步控制印度。', link: '同期：中国清朝由盛转衰。', tags: ['印度'] },
  { id: 'india-british', civilization: 'india', start: 1858, end: 1947, name: '英属印度', detail: '英国直接统治印度，铁路与近代制度引入，民族独立运动兴起。', link: '同期：中国遭遇列强冲击与近代变革。', tags: ['殖民', '印度'] },
  { id: 'india-independence', civilization: 'india', start: 1947, end: 1949, name: '印度独立', detail: '1947年印度与巴基斯坦分治独立，南亚进入民族国家时代。', link: '同期：中国即将成立新中国。', tags: ['印度'] },

  { id: 'greece-diadochi', civilization: 'greece', start: -300, end: -281, name: '继业者战争', detail: '亚历山大去世后，将领争夺领土，希腊化世界逐渐形成。', link: '同期：中国七国争雄。', tags: ['战争', '希腊'] },
  { id: 'greece-hellenistic', civilization: 'greece', start: -281, end: -146, name: '希腊化时代', detail: '希腊语言、艺术与科学传播到埃及、西亚和中亚。', link: '这些文化也影响印度西北部。', tags: ['文化', '希腊'] },
  { id: 'greece-roman-rule', civilization: 'greece', start: -146, end: -27, name: '罗马统治', detail: '希腊本土纳入罗马势力范围，但希腊文化继续影响罗马。', link: '同期：中国处于汉武帝前后。', tags: ['希腊'] },
  { id: 'greece-roman-period', civilization: 'greece', start: -27, end: 330, name: '罗马时期希腊', detail: '雅典仍是哲学与教育中心，希腊语在罗马帝国东部广泛使用。', link: '希腊知识通过罗马世界继续传播。', tags: ['希腊'] },
  { id: 'greece-byzantine-core', civilization: 'greece', start: 330, end: 565, name: '拜占庭核心区', detail: '君士坦丁堡成为东地中海中心，希腊语文化在东罗马世界延续。', link: '同期：中国经历东晋、南北朝。', tags: ['拜占庭', '希腊'] },
  { id: 'greece-after-justinian', civilization: 'greece', start: 565, end: 589, name: '查士丁尼之后', detail: '东罗马继续控制东地中海要地，但战争与财政压力上升。', link: '同期：中国即将由隋重新统一。', tags: ['拜占庭', '希腊'] },
  { id: 'mideast-byzantine-sasanian', civilization: 'greece', start: 589, end: 632, name: '拜占庭与萨珊', detail: '拜占庭与萨珊波斯长期争霸，双方消耗严重，为新兴力量留下空间。', link: '同期：中国处于隋唐之交。', tags: ['西亚'] },
  { id: 'mideast-early-caliphate', civilization: 'greece', start: 632, end: 750, name: '阿拉伯帝国兴起', detail: '伊斯兰教兴起，阿拉伯帝国迅速扩张，控制西亚、北非与伊比利亚部分地区。', link: '同期：中国正值盛唐。', tags: ['伊斯兰', '西亚'] },
  { id: 'mideast-abbasid', civilization: 'greece', start: 750, end: 1258, name: '阿拔斯王朝', detail: '阿拔斯王朝定都巴格达，伊斯兰黄金时代科学与翻译繁荣，拜占庭仍存于一隅。', link: '同期：中国经历唐、五代与两宋。', tags: ['伊斯兰', '西亚'] },
  { id: 'mideast-mongol-ottoman-rise', civilization: 'greece', start: 1258, end: 1453, name: '蒙古冲击与奥斯曼兴起', detail: '蒙古攻陷巴格达，旧秩序瓦解，奥斯曼土耳其崛起并于1453年攻占君士坦丁堡。', link: '同期：中国处于元与明初。', tags: ['西亚'] },
  { id: 'mideast-ottoman-peak', civilization: 'greece', start: 1453, end: 1683, name: '奥斯曼帝国鼎盛', detail: '奥斯曼帝国横跨欧亚非，控制东地中海与西亚要地，国力强盛。', link: '同期：中国处于明朝中后期至清初。', tags: ['奥斯曼', '西亚'] },
  { id: 'mideast-ottoman-decline', civilization: 'greece', start: 1683, end: 1922, name: '奥斯曼帝国衰落', detail: '奥斯曼帝国逐渐衰落，被称为“欧洲病夫”，领土不断丧失。', link: '同期：中国清朝同样面临列强压力。', tags: ['奥斯曼', '西亚'] },
  { id: 'mideast-modern', civilization: 'greece', start: 1922, end: 1949, name: '现代中东', detail: '奥斯曼帝国解体，土耳其共和国建立，中东在列强划界下进入现代国家时代。', link: '同期：中国走向新中国成立。', tags: ['西亚'] }
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
