// Tower data embedded directly
const towersData = [
  {
    "id": "dart-monkey",
    "name": "Dart Monkey",
    "baseCost": 1200,
    "upgrades": {
      "top": [
        { "tier": 1, "cost": 400, "name": "Sharp Shots" },
        { "tier": 2, "cost": 600, "name": "Razor Sharp Shots" },
        { "tier": 3, "cost": 1200, "name": "Dart Paragon" },
        { "tier": 4, "cost": 2400, "name": "Razor Blade Paragon" },
        { "tier": 5, "cost": 6000, "name": "Apex Paragon" }
      ],
      "middle": [
        { "tier": 1, "cost": 350, "name": "Sharper Shots" },
        { "tier": 2, "cost": 500, "name": "Dart Trap" },
        { "tier": 3, "cost": 1000, "name": "Dart Funnel" },
        { "tier": 4, "cost": 2000, "name": "Super Funnel" },
        { "tier": 5, "cost": 4500, "name": "Mega Funnel" }
      ],
      "bottom": [
        { "tier": 1, "cost": 300, "name": "Long Range Darts" },
        { "tier": 2, "cost": 450, "name": "Sharp Shots" },
        { "tier": 3, "cost": 800, "name": "Powerful Shots" },
        { "tier": 4, "cost": 1500, "name": "Heavy Caliber" },
        { "tier": 5, "cost": 3500, "name": "Assault Rifle" }
      ]
    }
  },
  {
    "id": "bomb-shooter",
    "name": "Bomb Shooter",
    "baseCost": 1600,
    "upgrades": {
      "top": [
        { "tier": 1, "cost": 500, "name": "Big Bombs" },
        { "tier": 2, "cost": 800, "name": "Bigger Bombs" },
        { "tier": 3, "cost": 1500, "name": "Largest Bombs" },
        { "tier": 4, "cost": 3000, "name": "Bomb Paragon" },
        { "tier": 5, "cost": 7000, "name": "Mega Bomb Paragon" }
      ],
      "middle": [
        { "tier": 1, "cost": 400, "name": "Bigger Blast Radius" },
        { "tier": 2, "cost": 600, "name": "Even Bigger Blasts" },
        { "tier": 3, "cost": 1200, "name": "Satellite Support" },
        { "tier": 4, "cost": 2500, "name": "Orbital Bombardment" },
        { "tier": 5, "cost": 5000, "name": "Carpet of Spikes" }
      ],
      "bottom": [
        { "tier": 1, "cost": 350, "name": "Missile Launcher" },
        { "tier": 2, "cost": 550, "name": "Missile Launcher++" },
        { "tier": 3, "cost": 1000, "name": "Guided Missiles" },
        { "tier": 4, "cost": 2000, "name": "Advanced Targeting" },
        { "tier": 5, "cost": 4500, "name": "AI Launcher" }
      ]
    }
  },
  {
    "id": "ice-monkey",
    "name": "Ice Monkey",
    "baseCost": 1200,
    "upgrades": {
      "top": [
        { "tier": 1, "cost": 450, "name": "Longer Freeze Time" },
        { "tier": 2, "cost": 700, "name": "Permanent Freeze" },
        { "tier": 3, "cost": 1400, "name": "Arctic Wind" },
        { "tier": 4, "cost": 2800, "name": "Absolute Zero" },
        { "tier": 5, "cost": 6500, "name": "Ice Paragon" }
      ],
      "middle": [
        { "tier": 1, "cost": 400, "name": "Larger Radius" },
        { "tier": 2, "cost": 600, "name": "Thaw Imbalance" },
        { "tier": 3, "cost": 1200, "name": "Icy Sips" },
        { "tier": 4, "cost": 2400, "name": "Snowstorm" },
        { "tier": 5, "cost": 5000, "name": "Blizzard" }
      ],
      "bottom": [
        { "tier": 1, "cost": 350, "name": "Snap Freeze" },
        { "tier": 2, "cost": 550, "name": "Deeper Freeze" },
        { "tier": 3, "cost": 1000, "name": "Shatter" },
        { "tier": 4, "cost": 2000, "name": "Freezing Aura" },
        { "tier": 5, "cost": 4000, "name": "Perma Freeze" }
      ]
    }
  }
];

let towers = [];

// Load towers on page load
document.addEventListener('DOMContentLoaded', async () => {
  loadTowers();
});

// Event listeners
document.getElementById('calculate-btn').addEventListener('click', calculateCosts);
document.getElementById('reset-btn').addEventListener('click', resetCalculator);

function loadTowers() {
  // Use embedded tower data
  towers = towersData;
  renderTowers();
}

function renderTowers() {
  const container = document.getElementById('towers-container');
  container.innerHTML = '';

  towers.forEach(tower => {
    const towerGroup = createTowerElement(tower);
    container.appendChild(towerGroup);
  });
}

function createTowerElement(tower) {
  const div = document.createElement('div');
  div.className = 'tower-group';
  div.id = `tower-${tower.id}`;

  let html = `
    <label class="tower-name">
      <input type="checkbox" class="tower-checkbox" value="${tower.id}">
      ${tower.name}
    </label>
  `;

  // Top path
  html += `
    <div class="upgrade-path">
      <h4>🔴 Top Path (Base Cost: ${tower.baseCost})</h4>
  `;
  tower.upgrades.top.forEach(upgrade => {
    html += `
      <div class="upgrade-option">
        <input type="checkbox" class="upgrade-checkbox" data-tower="${tower.id}" data-path="top" data-tier="${upgrade.tier}" data-cost="${upgrade.cost}">
        <label>${upgrade.name} (Tier ${upgrade.tier})</label>
        <span class="upgrade-cost">${upgrade.cost} 💰</span>
      </div>
    `;
  });
  html += '</div>';

  // Middle path
  html += `
    <div class="upgrade-path">
      <h4>🟡 Middle Path</h4>
  `;
  tower.upgrades.middle.forEach(upgrade => {
    html += `
      <div class="upgrade-option">
        <input type="checkbox" class="upgrade-checkbox" data-tower="${tower.id}" data-path="middle" data-tier="${upgrade.tier}" data-cost="${upgrade.cost}">
        <label>${upgrade.name} (Tier ${upgrade.tier})</label>
        <span class="upgrade-cost">${upgrade.cost} 💰</span>
      </div>
    `;
  });
  html += '</div>';

  // Bottom path
  html += `
    <div class="upgrade-path">
      <h4>🔵 Bottom Path</h4>
  `;
  tower.upgrades.bottom.forEach(upgrade => {
    html += `
      <div class="upgrade-option">
        <input type="checkbox" class="upgrade-checkbox" data-tower="${tower.id}" data-path="bottom" data-tier="${upgrade.tier}" data-cost="${upgrade.cost}">
        <label>${upgrade.name} (Tier ${upgrade.tier})</label>
        <span class="upgrade-cost">${upgrade.cost} 💰</span>
      </div>
    `;
  });
  html += '</div>';

  div.innerHTML = html;
  return div;
}

function calculateCosts() {
  const selectedTowers = getSelectedTowers();

  if (selectedTowers.length === 0) {
    alert('Please select at least one tower!');
    return;
  }

  const result = calculateLocally(selectedTowers);
  displayResults(result);
}

function getSelectedTowers() {
  const selected = [];
  const towerCheckboxes = document.querySelectorAll('.tower-checkbox:checked');

  towerCheckboxes.forEach(checkbox => {
    const towerId = checkbox.value;
    const upgradeCheckboxes = document.querySelectorAll(
      `.upgrade-checkbox[data-tower="${towerId}"]:checked`
    );

    const topUpgrades = [];
    const middleUpgrades = [];
    const bottomUpgrades = [];

    upgradeCheckboxes.forEach(upgrade => {
      const tier = parseInt(upgrade.dataset.tier);
      const path = upgrade.dataset.path;

      if (path === 'top') topUpgrades.push(tier);
      else if (path === 'middle') middleUpgrades.push(tier);
      else if (path === 'bottom') bottomUpgrades.push(tier);
    });

    selected.push({
      towerId: towerId,
      topUpgrades: topUpgrades,
      middleUpgrades: middleUpgrades,
      bottomUpgrades: bottomUpgrades
    });
  });

  return selected;
}

function calculateLocally(selectedTowers) {
  let totalCost = 0;
  const breakdown = [];

  selectedTowers.forEach(towerRequest => {
    const tower = towers.find(t => t.id === towerRequest.towerId);
    if (!tower) {
      return;
    }

    let towerTotalCost = tower.baseCost;
    const upgrades = [];

    // Calculate upgrade costs
    if (towerRequest.topUpgrades) {
      towerRequest.topUpgrades.forEach(tier => {
        const upgrade = tower.upgrades.top.find(u => u.tier === tier);
        if (upgrade) {
          towerTotalCost += upgrade.cost;
          upgrades.push({ path: 'Top', name: upgrade.name, cost: upgrade.cost });
        }
      });
    }

    if (towerRequest.middleUpgrades) {
      towerRequest.middleUpgrades.forEach(tier => {
        const upgrade = tower.upgrades.middle.find(u => u.tier === tier);
        if (upgrade) {
          towerTotalCost += upgrade.cost;
          upgrades.push({ path: 'Middle', name: upgrade.name, cost: upgrade.cost });
        }
      });
    }

    if (towerRequest.bottomUpgrades) {
      towerRequest.bottomUpgrades.forEach(tier => {
        const upgrade = tower.upgrades.bottom.find(u => u.tier === tier);
        if (upgrade) {
          towerTotalCost += upgrade.cost;
          upgrades.push({ path: 'Bottom', name: upgrade.name, cost: upgrade.cost });
        }
      });
    }

    totalCost += towerTotalCost;
    breakdown.push({
      tower: tower.name,
      baseCost: tower.baseCost,
      upgrades: upgrades,
      subtotal: towerTotalCost
    });
  });

  return {
    breakdown: breakdown,
    totalCost: totalCost
  };
}

function displayResults(result) {
  const breakdownContainer = document.getElementById('breakdown-container');
  breakdownContainer.innerHTML = '';

  result.breakdown.forEach(item => {
    const div = document.createElement('div');
    div.className = 'breakdown-item';

    let upgradesList = '';
    if (item.upgrades.length > 0) {
      upgradesList = '<ul class="upgrade-list">';
      item.upgrades.forEach(upgrade => {
        upgradesList += `
          <li>
            ${upgrade.path} - ${upgrade.name}
            <span class="item-cost">${upgrade.cost} 💰</span>
          </li>
        `;
      });
      upgradesList += '</ul>';
    } else {
      upgradesList = '<p style="color: #999; margin-left: 20px;">No upgrades selected</p>';
    }

    div.innerHTML = `
      <h3>${item.tower}</h3>
      <p>Base Cost: <span class="item-cost">${item.baseCost} 💰</span></p>
      ${upgradesList}
      <p style="margin-top: 10px;">Subtotal: <span class="subtotal">${item.subtotal} 💰</span></p>
    `;

    breakdownContainer.appendChild(div);
  });

  document.getElementById('total-cost').textContent = result.totalCost;
  document.getElementById('results-section').style.display = 'block';

  // Scroll to results
  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function resetCalculator() {
  // Uncheck all checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });

  // Hide results
  document.getElementById('results-section').style.display = 'none';

  // Scroll to top
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}
