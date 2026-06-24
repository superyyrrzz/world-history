import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import './styles.css';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
import {
  chartEnd,
  chartStart,
  civilizations,
  formatYear,
  milestones,
  periods,
  yearToDate
} from './data/history.js';

const state = {
  year: -221,
  enabledCivs: new Set(civilizations.map(civ => civ.id)),
  hoveredPeriod: null,
  tooltipCleanup: null,
  timeline: null
};

const root = document.querySelector('#root');
if (!root) throw new Error('Missing #root element');

root.innerHTML = `
  <header class="topbar">
    <a class="brand" href="#" aria-label="历史地图首页">
      <span class="brand-mark">史</span>
      <span>历史地图 <small>世界史互动学习</small></span>
    </a>
  </header>

  <main>
    <section class="hero">
      <div>
        <p class="eyebrow">环游世界 · 同一个世界</p>
        <h1>同一个时代，<br><em>世界在发生什么？</em></h1>
        <p class="intro">拖动、滚动和缩放时间轴，观察中国与同期世界文明的延续、交替和分裂状态。</p>
      </div>
      <aside class="mission">
        <span class="mission-icon">横</span>
        <div><small>当前重点</small><strong>可扩展历史图</strong><span>国家筛选 · 横向时间线 · 安全浮层</span></div>
      </aside>
    </section>

    <section class="app-shell" aria-labelledby="timelineTitle">
      <aside class="control-panel">
        <p class="section-number">01 · 历史数据</p>
        <h2 id="timelineTitle">选择历史范围</h2>
        <div class="year-readout"><span id="yearNumber">221</span><small id="eraLabel">公元前</small></div>
        <label class="range-control">
          <span id="yearText">公元前221年</span>
          <input id="yearSlider" type="range" min="${chartStart}" max="${chartEnd}" step="1" value="-221" />
        </label>
        <div class="control-row">
          <button type="button" data-jump="-221">秦统一</button>
          <button type="button" data-jump="220">三国</button>
          <button type="button" data-jump="439">南北朝</button>
          <button type="button" data-fit>全览</button>
        </div>
        <div class="filter-list" aria-label="文明筛选">
          ${civilizations.map(civ => `
            <label class="filter-pill ${civ.colorClass}">
              <input type="checkbox" data-civ="${civ.id}" checked />
              <span>${civ.label}</span>
            </label>
          `).join('')}
        </div>
        <div class="milestone-list">
          ${milestones.map(milestone => `
            <button type="button" data-jump="${milestone.year}">
              <span>${formatYear(milestone.year)}</span>${milestone.label}
            </button>
          `).join('')}
        </div>
      </aside>

      <section class="timeline-workspace">
        <div class="timeline-toolbar">
          <span>拖动空白处移动时间；按住 Ctrl/⌘ 并滚轮缩放；触控板可横向滚动。</span>
          <strong id="timelineStatus">正在初始化时间轴...</strong>
        </div>
        <div id="historyTimeline" class="history-timeline"></div>
        <div class="active-section" aria-labelledby="activeTitle">
          <div class="section-head">
            <div><p class="section-number">02 · 当前年份</p><h2 id="activeTitle">这一年正在发生什么</h2></div>
          </div>
          <div id="activePanel" class="active-panel"></div>
        </div>
      </section>
    </section>
  </main>

  <div id="historyTooltip" class="history-tooltip" role="tooltip" hidden></div>

  <footer><span>史</span><p>历史是一个大故事。<br><small>从中国出发，看见整个世界。</small></p><b>公元前300年 - 公元589年</b></footer>
`;

const timelineEl = document.querySelector('#historyTimeline');
const slider = document.querySelector('#yearSlider');
const yearNumber = document.querySelector('#yearNumber');
const eraLabel = document.querySelector('#eraLabel');
const yearText = document.querySelector('#yearText');
const activePanel = document.querySelector('#activePanel');
const tooltip = document.querySelector('#historyTooltip');
const timelineStatus = document.querySelector('#timelineStatus');

function groupId(civ, lane = 'main') {
  return `${civ}:${lane}`;
}

function getLaneLabel(period) {
  const civilization = civilizations.find(civ => civ.id === period.civilization);
  const lane = civilization?.lanes.find(item => item.id === (period.lane ?? 'main'));
  return lane?.label ?? civilization?.label ?? '';
}

function getVisiblePeriods() {
  return periods.filter(period => state.enabledCivs.has(period.civilization));
}

function getGroups() {
  let order = 0;
  return civilizations.flatMap(civ => {
    if (!state.enabledCivs.has(civ.id)) return [];
    return civ.lanes.map(lane => ({
      id: groupId(civ.id, lane.id),
      content: civ.lanes.length > 1 ? `${civ.label} · ${lane.label}` : civ.label,
      className: `${civ.colorClass} group-${civ.id}`,
      order: order++
    }));
  });
}

function getItems() {
  return getVisiblePeriods().map(period => ({
    id: period.id,
    content: period.name,
    start: yearToDate(period.start),
    end: yearToDate(period.end),
    group: groupId(period.civilization, period.lane ?? 'main'),
    className: `period-item ${civilizations.find(civ => civ.id === period.civilization)?.colorClass ?? ''}`,
    title: ''
  }));
}

function renderYear() {
  yearNumber.textContent = String(Math.abs(state.year) || 1);
  eraLabel.textContent = state.year < 0 ? '公元前' : '公元';
  yearText.textContent = formatYear(state.year);
  slider.value = String(state.year);
  state.timeline?.setCustomTime(yearToDate(state.year), 'current-year');
}

function renderActivePanel() {
  const active = getVisiblePeriods().filter(period => state.year >= period.start && state.year < period.end);
  activePanel.innerHTML = active.map(period => {
    const civ = civilizations.find(item => item.id === period.civilization);
    return `
      <article class="active-card ${civ?.colorClass ?? ''}">
        <span>${civ?.label ?? ''} · ${getLaneLabel(period)}</span>
        <h3>${period.name}</h3>
        <p>${period.detail}</p>
        <small>${period.link}</small>
      </article>
    `;
  }).join('');
}

function formatAxisYear(year) {
  if (year < 0) return `前${Math.abs(year)}`;
  if (year === 0) return '1年';
  return `${year}年`;
}

function rewriteAxisLabels() {
  timelineEl.querySelectorAll('.vis-time-axis .vis-text.vis-minor').forEach(label => {
    const original = label.dataset.rawYear || label.textContent?.trim() || '';
    if (!label.dataset.rawYear) label.dataset.rawYear = original;
    const rawYear = Number(original);
    if (!Number.isFinite(rawYear)) return;
    label.textContent = formatAxisYear(rawYear - 1000);
  });
}

function syncTimelineData() {
  state.timeline?.setGroups(new DataSet(getGroups()));
  state.timeline?.setItems(new DataSet(getItems()));
  renderActivePanel();
}

function jumpToYear(year) {
  state.year = Math.min(chartEnd, Math.max(chartStart, year));
  renderYear();
  renderActivePanel();
  state.timeline?.moveTo(yearToDate(state.year), { animation: true });
}

function hideTooltip() {
  state.hoveredPeriod = null;
  state.tooltipCleanup?.();
  state.tooltipCleanup = null;
  tooltip.hidden = true;
}

function showTooltip(period, point) {
  state.hoveredPeriod = period;
  tooltip.hidden = false;
  tooltip.innerHTML = `
    <b>${formatYear(period.start)} - ${formatYear(period.end)}</b>
    <strong>${period.name}</strong>
    <p>${period.detail}</p>
    <em>${period.link}</em>
  `;

  const virtualReference = {
    getBoundingClientRect() {
      return {
        x: point.x,
        y: point.y,
        left: point.x,
        top: point.y,
        right: point.x,
        bottom: point.y,
        width: 0,
        height: 0
      };
    }
  };

  state.tooltipCleanup?.();
  state.tooltipCleanup = autoUpdate(virtualReference, tooltip, () => {
    void computePosition(virtualReference, tooltip, {
      placement: 'right-start',
      strategy: 'fixed',
      middleware: [offset(14), flip({ padding: 16 }), shift({ padding: 16 })]
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, { left: `${x}px`, top: `${y}px` });
    });
  });
}

function getTimelinePointer(event) {
  const source = event.event;
  if (!source) return null;
  if ('clientX' in source) return { x: source.clientX, y: source.clientY };
  if ('srcEvent' in source && source.srcEvent) return { x: source.srcEvent.clientX, y: source.srcEvent.clientY };
  return null;
}

function createTimeline() {
  const timeline = new Timeline(
    timelineEl,
    new DataSet(getItems()),
    new DataSet(getGroups()),
    {
      start: yearToDate(-260),
      end: yearToDate(620),
      min: yearToDate(chartStart),
      max: yearToDate(chartEnd),
      stack: false,
      horizontalScroll: true,
      verticalScroll: true,
      zoomKey: 'ctrlKey',
      zoomable: true,
      moveable: true,
      selectable: true,
      multiselect: false,
      orientation: { axis: 'top', item: 'top' },
      groupOrder: 'order',
      margin: { item: { horizontal: 8, vertical: 8 }, axis: 18 },
      tooltip: { followMouse: false, overflowMethod: 'cap' },
      template(item) {
        return `<span class="period-label">${String(item.content)}</span>`;
      }
    }
  );

  timeline.addCustomTime(yearToDate(state.year), 'current-year');
  timeline.on('itemover', event => {
    const itemId = String((event).item ?? '');
    const period = periods.find(entry => entry.id === itemId);
    const point = getTimelinePointer(event);
    if (period && point) showTooltip(period, point);
  });
  timeline.on('itemout', hideTooltip);
  timeline.on('changed', rewriteAxisLabels);
  timeline.on('select', event => {
    const itemId = String(((event).items ?? [])[0] ?? '');
    const period = periods.find(entry => entry.id === itemId);
    if (period) jumpToYear(period.start);
  });
  state.timeline = timeline;
}

slider.addEventListener('input', event => jumpToYear(Number(event.target.value)));
document.querySelectorAll('[data-jump]').forEach(button => {
  button.addEventListener('click', () => jumpToYear(Number(button.dataset.jump)));
});
document.querySelector('[data-fit]')?.addEventListener('click', () => {
  state.timeline?.setWindow(yearToDate(chartStart), yearToDate(chartEnd), { animation: true });
});
document.querySelectorAll('[data-civ]').forEach(input => {
  input.addEventListener('change', () => {
    const civ = input.dataset.civ;
    if (!civ) return;
    if (input.checked) state.enabledCivs.add(civ);
    else if (state.enabledCivs.size > 1) state.enabledCivs.delete(civ);
    else input.checked = true;
    syncTimelineData();
  });
});

try {
  createTimeline();
  renderYear();
  renderActivePanel();
  setTimeout(rewriteAxisLabels, 0);
  timelineStatus.textContent = `已载入 ${getItems().length} 个时期`;
} catch (error) {
  timelineStatus.textContent = '时间轴初始化失败';
  timelineEl.innerHTML = `<pre class="runtime-error">${error instanceof Error ? error.stack : String(error)}</pre>`;
  throw error;
}
