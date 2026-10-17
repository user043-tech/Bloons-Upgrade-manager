// Bloons TD 6 – Upgrade-Rechner
// Quelle der Kosten: Blooncyclopedia (bloonswiki.com), Seiten je Turm, Stand Version 55–56.
// Kosten-Reihenfolge in allen Arrays: [Easy, Medium, Hard, Impoppable]
// Hinweis: Die Summen berücksichtigen keine Monkey-Knowledge-Rabatte.

const DIFFICULTY_LABELS = ['Easy', 'Medium', 'Hard', 'Impoppable'];
const PATH_LABELS = { top: '🔴 Oberer Pfad', middle: '🟡 Mittlerer Pfad', bottom: '🔵 Unterer Pfad' };

const towersData = [
  {
    id: 'dart-monkey',
    name: 'Dart Monkey',
    emoji: '🎯',
    base: [170, 200, 215, 240],
    paths: {
      top: [
        { tier: 1, name: 'Sharp Shots', costs: [120, 140, 150, 170] },
        { tier: 2, name: 'Razor Sharp Shots', costs: [170, 200, 215, 240] },
        { tier: 3, name: 'Spike-o-pult', costs: [270, 320, 345, 385] },
        { tier: 4, name: 'Juggernaut', costs: [1530, 1800, 1945, 2160] },
        { tier: 5, name: 'Ultra-Juggernaut', costs: [12750, 15000, 16200, 18000] }
      ],
      middle: [
        { tier: 1, name: 'Quick Shots', costs: [85, 100, 110, 120] },
        { tier: 2, name: 'Very Quick Shots', costs: [160, 190, 205, 230] },
        { tier: 3, name: 'Triple Shot', costs: [385, 450, 485, 540] },
        { tier: 4, name: 'Super Monkey Fan Club', costs: [6120, 7200, 7775, 8640] },
        { tier: 5, name: 'Plasma Monkey Fan Club', costs: [38250, 45000, 48600, 54000] }
      ],
      bottom: [
        { tier: 1, name: 'Long Range Darts', costs: [75, 90, 95, 110] },
        { tier: 2, name: 'Enhanced Eyesight', costs: [170, 200, 215, 240] },
        { tier: 3, name: 'Crossbow', costs: [490, 575, 620, 690] },
        { tier: 4, name: 'Sharp Shooter', costs: [1745, 2050, 2215, 2460] },
        { tier: 5, name: 'Crossbow Master', costs: [18275, 21500, 23220, 25800] }
      ]
    },
    paragon: { name: 'Apex Plasma Master', costs: [127500, 150000, 162000, 180000] }
  },
  {
    id: 'bomb-shooter',
    name: 'Bomb Shooter',
    emoji: '💣',
    base: [320, 375, 405, 450],
    paths: {
      top: [
        { tier: 1, name: 'Bigger Bombs', costs: [210, 250, 270, 300] },
        { tier: 2, name: 'Heavy Bombs', costs: [555, 650, 700, 780] },
        { tier: 3, name: 'Really Big Bombs', costs: [935, 1100, 1190, 1320] },
        { tier: 4, name: 'Bloon Impact', costs: [2380, 2800, 3025, 3360] },
        { tier: 5, name: 'Bloon Crush', costs: [46750, 55000, 59400, 66000] }
      ],
      middle: [
        { tier: 1, name: 'Faster Reload', costs: [210, 250, 270, 300] },
        { tier: 2, name: 'Missile Launcher', costs: [340, 400, 430, 480] },
        { tier: 3, name: 'MOAB Mauler', costs: [850, 1000, 1080, 1200] },
        { tier: 4, name: 'MOAB Assassin', costs: [2935, 3450, 3725, 4140] },
        { tier: 5, name: 'MOAB Eliminator', costs: [22100, 26000, 28080, 31200] }
      ],
      bottom: [
        { tier: 1, name: 'Extra Range', costs: [170, 200, 215, 240] },
        { tier: 2, name: 'Frag Bombs', costs: [255, 300, 325, 360] },
        { tier: 3, name: 'Cluster Bombs', costs: [595, 700, 755, 840] },
        { tier: 4, name: 'Recursive Cluster', costs: [2125, 2500, 2700, 3000] },
        { tier: 5, name: 'Bomb Blitz', costs: [25500, 30000, 32400, 36000] }
      ]
    },
    paragon: { name: 'Ballistic Obliteration Missile Bunker', costs: [552500, 650000, 702000, 780000] }
  },
  {
    id: 'ice-monkey',
    name: 'Ice Monkey',
    emoji: '❄️',
    base: [340, 400, 430, 480],
    paths: {
      top: [
        { tier: 1, name: 'Permafrost', costs: [130, 150, 160, 180] },
        { tier: 2, name: 'Cold Snap', costs: [300, 350, 380, 420] },
        { tier: 3, name: 'Ice Shards', costs: [1275, 1500, 1620, 1800] },
        { tier: 4, name: 'Embrittlement', costs: [1955, 2300, 2485, 2760] },
        { tier: 5, name: 'Super Brittle', costs: [23800, 28000, 30240, 33600] }
      ],
      middle: [
        { tier: 1, name: 'Enhanced Freeze', costs: [170, 200, 215, 240] },
        { tier: 2, name: 'Deep Freeze', costs: [255, 300, 325, 360] },
        { tier: 3, name: 'Arctic Wind', costs: [2340, 2750, 2970, 3300] },
        { tier: 4, name: 'Snowstorm', costs: [4040, 4750, 5130, 5700] },
        { tier: 5, name: 'Absolute Zero', costs: [17850, 21000, 22680, 25200] }
      ],
      bottom: [
        { tier: 1, name: 'Larger Radius', costs: [130, 150, 160, 180] },
        { tier: 2, name: 'Re-Freeze', costs: [170, 200, 215, 240] },
        { tier: 3, name: 'Cryo Cannon', costs: [1615, 1900, 2050, 2280] },
        { tier: 4, name: 'Icicles', costs: [2340, 2750, 2970, 3300] },
        { tier: 5, name: 'Icicle Impale', costs: [25500, 30000, 32400, 36000] }
      ]
    },
    paragon: { name: 'Herald of Everfrost', costs: [255000, 300000, 324000, 360000] }
  },
  {
    id: 'glue-gunner',
    name: 'Glue Gunner',
    emoji: '🧴',
    base: [190, 225, 245, 270],
    paths: {
      top: [
        { tier: 1, name: 'Glue Soak', costs: [170, 200, 215, 240] },
        { tier: 2, name: 'Corrosive Glue', costs: [255, 300, 325, 360] },
        { tier: 3, name: 'Bloon Dissolver', costs: [1700, 2000, 2160, 2400] },
        { tier: 4, name: 'Bloon Liquefier', costs: [4250, 5000, 5400, 6000] },
        { tier: 5, name: 'The Bloon Solver', costs: [19125, 22500, 24300, 27000] }
      ],
      middle: [
        { tier: 1, name: 'Bigger Globs', costs: [85, 100, 110, 120] },
        { tier: 2, name: 'Glue Splatter', costs: [555, 650, 700, 780] },
        { tier: 3, name: 'Glue Hose', costs: [1660, 1950, 2105, 2340] },
        { tier: 4, name: 'Glue Strike', costs: [3825, 4500, 4860, 5400] },
        { tier: 5, name: 'Glue Storm', costs: [13600, 16000, 17280, 19200] }
      ],
      bottom: [
        { tier: 1, name: 'Stickier Glue', costs: [240, 280, 300, 335] },
        { tier: 2, name: 'Stronger Glue', costs: [340, 400, 430, 480] },
        { tier: 3, name: 'MOAB Glue', costs: [3060, 3600, 3890, 4320] },
        { tier: 4, name: 'Relentless Glue', costs: [3400, 4000, 4320, 4800] },
        { tier: 5, name: 'Super Glue', costs: [20400, 24000, 25920, 28800] }
      ]
    },
    paragon: null
  }
];

// ---------- Hilfsfunktionen ----------

function currentDifficulty() {
  const select = document.getElementById('difficulty-select');
  const idx = parseInt(select.value, 10);
  return Number.isNaN(idx) ? 1 : idx;
}

function formatCost(amount) {
  return `${amount.toLocaleString('de-DE')} 💰`;
}

function parseCosts(el) {
  return el.dataset.costs.split(',').map(Number);
}

// ---------- Rendering ----------

function renderTowers() {
  const container = document.getElementById('towers-container');
  container.innerHTML = '';
  towersData.forEach(tower => container.appendChild(createTowerElement(tower)));
  updateCostLabels();
}

function createUpgradeOption(tower, path, upgrade) {
  return `
    <div class="upgrade-option">
      <input type="checkbox" class="upgrade-checkbox"
        data-tower="${tower.id}" data-path="${path}"
        data-tier="${upgrade.tier}" data-name="${upgrade.name}">
      <label>Stufe ${upgrade.tier}: ${upgrade.name}</label>
      <span class="cost-label upgrade-cost" data-costs="${upgrade.costs.join(',')}"></span>
    </div>`;
}

function createTowerElement(tower) {
  const div = document.createElement('div');
  div.className = 'tower-group';
  div.id = `tower-${tower.id}`;
  div.dataset.name = tower.name.toLowerCase();

  let html = `
    <label class="tower-name">
      <input type="checkbox" class="tower-checkbox" value="${tower.id}">
      <span>${tower.emoji} ${tower.name}</span>
      <span class="cost-label tower-base" data-costs="${tower.base.join(',')}"></span>
    </label>`;

  ['top', 'middle', 'bottom'].forEach(path => {
    html += `<div class="upgrade-path ${path}"><h4>${PATH_LABELS[path]}</h4>`;
    tower.paths[path].forEach(up => { html += createUpgradeOption(tower, path, up); });
    html += '</div>';
  });

  if (tower.paragon) {
    html += `
      <div class="upgrade-path paragon">
        <h4>⭐ Paragon</h4>
        <div class="upgrade-option">
          <input type="checkbox" class="paragon-checkbox" value="${tower.id}">
          <label>${tower.paragon.name}</label>
          <span class="cost-label upgrade-cost" data-costs="${tower.paragon.costs.join(',')}"></span>
        </div>
      </div>`;
  }

  div.innerHTML = html;
  return div;
}

function updateCostLabels() {
  const idx = currentDifficulty();
  document.querySelectorAll('.cost-label[data-costs]').forEach(el => {
    el.textContent = formatCost(parseCosts(el)[idx]);
  });
}

// ---------- Interaktion ----------

function handleChange(event) {
  const input = event.target;

  // Stufen müssen in Reihenfolge gekauft werden:
  // Stufe N an → alle niedrigeren Stufen auf demselben Pfad an
  // Stufe N aus → alle höheren Stufen auf demselben Pfad aus
  if (input.classList.contains('upgrade-checkbox')) {
    const tower = input.dataset.tower;
    const path = input.dataset.path;
    const tier = parseInt(input.dataset.tier, 10);
    document
      .querySelectorAll(`.upgrade-checkbox[data-tower="${tower}"][data-path="${path}"]`)
      .forEach(other => {
        const otherTier = parseInt(other.dataset.tier, 10);
        if (input.checked && otherTier <= tier) other.checked = true;
        if (!input.checked && otherTier >= tier) other.checked = false;
      });
  }
}

function calculateCosts() {
  const idx = currentDifficulty();
  const selectedTowers = document.querySelectorAll('.tower-checkbox:checked');

  if (selectedTowers.length === 0) {
    alert('Bitte wähle mindestens einen Tower aus!');
    return;
  }

  const breakdown = [];
  let total = 0;

  selectedTowers.forEach(checkbox => {
    const tower = towersData.find(t => t.id === checkbox.value);
    if (!tower) return;

    const baseCost = tower.base[idx];
    let subtotal = baseCost;
    const upgrades = [];

    // DOM-Reihenfolge = Pfad (oben, Mitte, unten) und Stufe aufsteigend
    document
      .querySelectorAll(`.upgrade-checkbox[data-tower="${tower.id}"]:checked`)
      .forEach(input => {
        const path = input.dataset.path;
        const tier = parseInt(input.dataset.tier, 10);
        const upgrade = tower.paths[path].find(u => u.tier === tier);
        if (!upgrade) return;
        const cost = upgrade.costs[idx];
        subtotal += cost;
        upgrades.push({ label: `${PATH_LABELS[path]} – Stufe ${tier}: ${upgrade.name}`, cost });
      });

    if (tower.paragon && document.querySelector(`.paragon-checkbox[value="${tower.id}"]:checked`)) {
      const cost = tower.paragon.costs[idx];
      subtotal += cost;
      upgrades.push({ label: `⭐ Paragon – ${tower.paragon.name}`, cost });
    }

    total += subtotal;
    breakdown.push({ name: tower.name, emoji: tower.emoji, baseCost, upgrades, subtotal });
  });

  displayResults(breakdown, total, idx);
}

function displayResults(breakdown, total, idx) {
  const container = document.getElementById('breakdown-container');
  container.innerHTML = '';

  breakdown.forEach(item => {
    const div = document.createElement('div');
    div.className = 'breakdown-item';

    let upgradesList;
    if (item.upgrades.length > 0) {
      upgradesList = '<ul class="upgrade-list">';
      item.upgrades.forEach(u => {
        upgradesList += `<li>${u.label} <span class="item-cost">${formatCost(u.cost)}</span></li>`;
      });
      upgradesList += '</ul>';
    } else {
      upgradesList = '<p class="no-upgrades">Keine Upgrades ausgewählt</p>';
    }

    div.innerHTML = `
      <h3>${item.emoji} ${item.name}</h3>
      <p>Basis-Kosten: <span class="item-cost">${formatCost(item.baseCost)}</span></p>
      ${upgradesList}
      <p class="subtotal">Summe: ${formatCost(item.subtotal)}</p>`;
    container.appendChild(div);
  });

  document.getElementById('total-cost').textContent = total.toLocaleString('de-DE');
  document.getElementById('results-section').dataset.difficulty = DIFFICULTY_LABELS[idx];
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function resetCalculator() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  document.getElementById('results-section').style.display = 'none';
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}

function exportResults() {
  const total = document.getElementById('total-cost').textContent;
  const difficulty = DIFFICULTY_LABELS[currentDifficulty()];
  const text = `Bloons TD 6 Upgrade Calculator\nSchwierigkeitsgrad: ${difficulty}\nGesamtkosten: ${total} 💰`;
  navigator.clipboard.writeText(text).then(() => alert('Ergebnis kopiert! 📋'));
}

function selectAllTowers() {
  document.querySelectorAll('.tower-checkbox').forEach(cb => { cb.checked = true; });
}

function deselectAllTowers() {
  document.querySelectorAll('.tower-checkbox').forEach(cb => { cb.checked = false; });
}

function filterTowers() {
  const term = document.getElementById('tower-search').value.trim().toLowerCase();
  document.querySelectorAll('.tower-group').forEach(el => {
    el.style.display = el.dataset.name.includes(term) ? '' : 'none';
  });
}

// ---------- Dark Mode ----------

let darkMode = false;

function loadDarkModePreference() {
  try { darkMode = localStorage.getItem('darkMode') === 'true'; } catch (e) { darkMode = false; }
  if (darkMode) document.body.classList.add('dark-mode');
  updateThemeToggle();
}

function toggleDarkMode() {
  darkMode = !darkMode;
  try { localStorage.setItem('darkMode', darkMode); } catch (e) { /* Speicher nicht verfügbar */ }
  document.body.classList.toggle('dark-mode', darkMode);
  updateThemeToggle();
}

function updateThemeToggle() {
  document.getElementById('theme-toggle').textContent = darkMode ? '☀️' : '🌙';
}

// ---------- Start ----------

document.addEventListener('DOMContentLoaded', () => {
  loadDarkModePreference();
  renderTowers();

  document.getElementById('difficulty-select').addEventListener('change', updateCostLabels);
  document.getElementById('towers-container').addEventListener('change', handleChange);
  document.getElementById('calculate-btn').addEventListener('click', calculateCosts);
  document.getElementById('reset-btn').addEventListener('click', resetCalculator);
  document.getElementById('export-btn').addEventListener('click', exportResults);
  document.getElementById('select-all-btn').addEventListener('click', selectAllTowers);
  document.getElementById('deselect-all-btn').addEventListener('click', deselectAllTowers);
  document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
  document.getElementById('tower-search').addEventListener('input', filterTowers);
});
