let towers = [];

// Load towers on page load
document.addEventListener('DOMContentLoaded', loadTowers);

// Event listeners
document.getElementById('calculate-btn').addEventListener('click', calculateCosts);
document.getElementById('reset-btn').addEventListener('click', resetCalculator);

async function loadTowers() {
  try {
    const response = await fetch('/api/towers');
    towers = await response.json();
    renderTowers();
  } catch (error) {
    console.error('Error loading towers:', error);
  }
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

async function calculateCosts() {
  const selectedTowers = getSelectedTowers();

  if (selectedTowers.length === 0) {
    alert('Please select at least one tower!');
    return;
  }

  try {
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ towers: selectedTowers })
    });

    const result = await response.json();
    displayResults(result);
  } catch (error) {
    console.error('Error calculating costs:', error);
    alert('Error calculating costs. Please try again.');
  }
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
