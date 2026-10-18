// Bloons TD 6 – Upgrade-Rechner
// Quelle der Kosten: Blooncyclopedia (bloonswiki.com), Seiten je Turm, Stand Version 55–56.
// Kosten-Reihenfolge in allen Arrays: [Easy, Medium, Hard, Impoppable]
// Hinweis: Die Summen berücksichtigen keine Monkey-Knowledge-Rabatte.

const DIFFICULTY_LABELS = ['Easy', 'Medium', 'Hard', 'Impoppable'];
const PATH_LABELS = { top: '🔴 Oberer Pfad', middle: '🟡 Mittlerer Pfad', bottom: '🔵 Unterer Pfad' };

// ---------- Sprachen ----------

const SUPPORTED_LANGS = ['de', 'en', 'fr', 'es', 'it', 'nl', 'pl'];
const LOCALES = { de: 'de-DE', en: 'en-US', fr: 'fr-FR', es: 'es-ES', it: 'it-IT', nl: 'nl-NL', pl: 'pl-PL' };

const I18N = {
  de: {
    subtitle: 'Berechne die Gesamtkosten deiner Tower-Upgrades', selectTitle: 'Tower & Upgrades auswählen',
    selectAll: 'Alle hinzufügen', deselectAll: 'Setup leeren', searchPlaceholder: 'Tower suchen...',
    calculate: 'Kosten berechnen', add: '＋ Hinzufügen', difficultyLabel: 'Schwierigkeitsgrad:',
    discountTitle: '🏷️ Rabatte & Monkey Knowledge',
    discountNote: 'Die Monkey-Village-Rabatte gelten für Platzierung und Upgrades bis Stufe 3, Helden sind ausgenommen. Die Rechnung nimmt an, dass alle Türme in Reichweite stehen.',
    commerce: 'Monkey Commerce (je −5 %, max. 3):', setupTitle: '🧩 Dein Setup',
    emptySetup: 'Noch keine Türme. Füge oben einen Turm hinzu.', basePrice: 'Basispreis berechnen',
    basePriceHint: '(aus, z. B. bei Insta Monkeys)', freeUpTo: 'Kostenlos bis Stufe', level: 'Stufe',
    remove: 'Entfernen', pathTop: '🔴 Oberer Pfad', pathMiddle: '🟡 Mittlerer Pfad', pathBottom: '🔵 Unterer Pfad',
    freeTiers: 'Stufen 1–{n} gratis', baseCost: 'Basis-Kosten:', sumLabel: 'Summe:',
    noBase: 'Basispreis nicht berechnet', noUpgrades: 'Keine berechneten Upgrades',
    resultsTitle: '💰 Kostenaufschlüsselung', totalCost: 'Gesamtkosten', copyResult: 'Ergebnis kopieren',
    reset: 'Zurücksetzen', alertNoTower: 'Bitte füge mindestens einen Turm hinzu!', copied: 'Ergebnis kopiert! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Gesamtkosten', language: 'Sprache',
    aiNotice: '🤖 Dieses Projekt wurde mit Unterstützung von KI (Claude, Anthropic) erstellt. Die Kostenangaben stammen aus dem <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-Wiki</a> und wurden stichprobenartig geprüft. Ohne Gewähr, da Spielwerte sich mit Updates ändern.'
  },
  en: {
    subtitle: 'Calculate the total cost of your tower upgrades', selectTitle: 'Select towers & upgrades',
    selectAll: 'Add all', deselectAll: 'Clear setup', searchPlaceholder: 'Search towers...',
    calculate: 'Calculate cost', add: '＋ Add', difficultyLabel: 'Difficulty:',
    discountTitle: '🏷️ Discounts & Monkey Knowledge',
    discountNote: 'Monkey Village discounts apply to placement and upgrades up to tier 3; heroes are excluded. The calculation assumes all towers are in range.',
    commerce: 'Monkey Commerce (−5 % each, max. 3):', setupTitle: '🧩 Your setup',
    emptySetup: 'No towers yet. Add a tower above.', basePrice: 'Include base price',
    basePriceHint: '(off, e.g. for Insta Monkeys)', freeUpTo: 'Free up to tier', level: 'Tier',
    remove: 'Remove', pathTop: '🔴 Top path', pathMiddle: '🟡 Middle path', pathBottom: '🔵 Bottom path',
    freeTiers: 'Tiers 1–{n} free', baseCost: 'Base cost:', sumLabel: 'Subtotal:',
    noBase: 'Base price not included', noUpgrades: 'No upgrades counted',
    resultsTitle: '💰 Cost breakdown', totalCost: 'Total cost', copyResult: 'Copy result',
    reset: 'Reset', alertNoTower: 'Please add at least one tower!', copied: 'Result copied! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Total cost', language: 'Language',
    aiNotice: '🤖 This project was created with the help of AI (Claude, Anthropic). Cost data comes from the <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6 wiki</a> and was spot-checked. No guarantee, as game values change with updates.'
  },
  fr: {
    subtitle: 'Calculez le coût total de vos améliorations de tours', selectTitle: 'Choisir les tours et améliorations',
    selectAll: 'Tout ajouter', deselectAll: 'Vider la liste', searchPlaceholder: 'Rechercher une tour...',
    calculate: 'Calculer le coût', add: '＋ Ajouter', difficultyLabel: 'Difficulté :',
    discountTitle: '🏷️ Réductions & Connaissance des singes',
    discountNote: "Les réductions du Village des singes s'appliquent au placement et aux améliorations jusqu'au niveau 3 ; les héros sont exclus. Le calcul suppose que toutes les tours sont à portée.",
    commerce: 'Monkey Commerce (−5 % chacun, max. 3) :', setupTitle: '🧩 Votre configuration',
    emptySetup: 'Aucune tour pour le moment. Ajoutez une tour ci-dessus.', basePrice: 'Inclure le prix de base',
    basePriceHint: '(désactivé, p. ex. pour les Insta Monkeys)', freeUpTo: 'Gratuit jusqu’au niveau', level: 'Niveau',
    remove: 'Retirer', pathTop: '🔴 Chemin supérieur', pathMiddle: '🟡 Chemin central', pathBottom: '🔵 Chemin inférieur',
    freeTiers: 'Niveaux 1–{n} gratuits', baseCost: 'Coût de base :', sumLabel: 'Total partiel :',
    noBase: 'Prix de base non inclus', noUpgrades: 'Aucune amélioration comptée',
    resultsTitle: '💰 Détail des coûts', totalCost: 'Coût total', copyResult: 'Copier le résultat',
    reset: 'Réinitialiser', alertNoTower: 'Veuillez ajouter au moins une tour !', copied: 'Résultat copié ! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Coût total', language: 'Langue',
    aiNotice: "🤖 Ce projet a été créé avec l'aide d'une IA (Claude, Anthropic). Les coûts proviennent du <a href=\"https://www.bloonswiki.com\" target=\"_blank\" rel=\"noopener\">wiki BTD6</a> et ont été vérifiés par sondage. Sans garantie, car les valeurs du jeu changent avec les mises à jour."
  },
  es: {
    subtitle: 'Calcula el coste total de las mejoras de tus torres', selectTitle: 'Elegir torres y mejoras',
    selectAll: 'Añadir todas', deselectAll: 'Vaciar lista', searchPlaceholder: 'Buscar torres...',
    calculate: 'Calcular coste', add: '＋ Añadir', difficultyLabel: 'Dificultad:',
    discountTitle: '🏷️ Descuentos y Conocimiento de monos',
    discountNote: 'Los descuentos de la Aldea de monos se aplican a la colocación y a las mejoras hasta el nivel 3; los héroes están excluidos. El cálculo supone que todas las torres están en alcance.',
    commerce: 'Monkey Commerce (−5 % cada uno, máx. 3):', setupTitle: '🧩 Tu configuración',
    emptySetup: 'Aún no hay torres. Añade una torre arriba.', basePrice: 'Incluir precio base',
    basePriceHint: '(desactivado, p. ej. para Insta Monkeys)', freeUpTo: 'Gratis hasta el nivel', level: 'Nivel',
    remove: 'Quitar', pathTop: '🔴 Ruta superior', pathMiddle: '🟡 Ruta central', pathBottom: '🔵 Ruta inferior',
    freeTiers: 'Niveles 1–{n} gratis', baseCost: 'Coste base:', sumLabel: 'Subtotal:',
    noBase: 'Precio base no incluido', noUpgrades: 'Sin mejoras calculadas',
    resultsTitle: '💰 Desglose de costes', totalCost: 'Coste total', copyResult: 'Copiar resultado',
    reset: 'Restablecer', alertNoTower: '¡Añade al menos una torre!', copied: '¡Resultado copiado! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Coste total', language: 'Idioma',
    aiNotice: '🤖 Este proyecto se creó con ayuda de IA (Claude, Anthropic). Los costes proceden de la <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki de BTD6</a> y se revisaron por muestreo. Sin garantía, ya que los valores del juego cambian con las actualizaciones.'
  },
  it: {
    subtitle: 'Calcola il costo totale dei potenziamenti delle tue torri', selectTitle: 'Scegli torri e potenziamenti',
    selectAll: 'Aggiungi tutte', deselectAll: 'Svuota lista', searchPlaceholder: 'Cerca torri...',
    calculate: 'Calcola costo', add: '＋ Aggiungi', difficultyLabel: 'Difficoltà:',
    discountTitle: '🏷️ Sconti e Conoscenza delle scimmie',
    discountNote: 'Gli sconti del Villaggio delle scimmie si applicano a piazzamento e potenziamenti fino al livello 3; gli eroi sono esclusi. Il calcolo presuppone che tutte le torri siano nel raggio.',
    commerce: 'Monkey Commerce (−5 % ciascuno, max 3):', setupTitle: '🧩 La tua configurazione',
    emptySetup: 'Nessuna torre ancora. Aggiungine una sopra.', basePrice: 'Includi prezzo base',
    basePriceHint: '(disattivato, es. per gli Insta Monkey)', freeUpTo: 'Gratis fino al livello', level: 'Livello',
    remove: 'Rimuovi', pathTop: '🔴 Percorso superiore', pathMiddle: '🟡 Percorso centrale', pathBottom: '🔵 Percorso inferiore',
    freeTiers: 'Livelli 1–{n} gratis', baseCost: 'Costo base:', sumLabel: 'Totale parziale:',
    noBase: 'Prezzo base non incluso', noUpgrades: 'Nessun potenziamento calcolato',
    resultsTitle: '💰 Dettaglio dei costi', totalCost: 'Costo totale', copyResult: 'Copia risultato',
    reset: 'Reimposta', alertNoTower: 'Aggiungi almeno una torre!', copied: 'Risultato copiato! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Costo totale', language: 'Lingua',
    aiNotice: "🤖 Questo progetto è stato creato con l'aiuto dell'IA (Claude, Anthropic). I costi provengono dalla <a href=\"https://www.bloonswiki.com\" target=\"_blank\" rel=\"noopener\">wiki di BTD6</a> e sono stati verificati a campione. Senza garanzia, poiché i valori di gioco cambiano con gli aggiornamenti."
  },
  nl: {
    subtitle: 'Bereken de totale kosten van je torenupgrades', selectTitle: 'Torens & upgrades kiezen',
    selectAll: 'Alles toevoegen', deselectAll: 'Lijst leegmaken', searchPlaceholder: 'Torens zoeken...',
    calculate: 'Kosten berekenen', add: '＋ Toevoegen', difficultyLabel: 'Moeilijkheid:',
    discountTitle: '🏷️ Kortingen & Monkey Knowledge',
    discountNote: 'De kortingen van het Apendorp gelden voor plaatsing en upgrades tot niveau 3; helden zijn uitgesloten. De berekening gaat ervan uit dat alle torens binnen bereik staan.',
    commerce: 'Monkey Commerce (elk −5 %, max. 3):', setupTitle: '🧩 Jouw opstelling',
    emptySetup: 'Nog geen torens. Voeg hierboven een toren toe.', basePrice: 'Basisprijs meerekenen',
    basePriceHint: '(uit, bijv. voor Insta Monkeys)', freeUpTo: 'Gratis tot niveau', level: 'Niveau',
    remove: 'Verwijderen', pathTop: '🔴 Bovenste pad', pathMiddle: '🟡 Middelste pad', pathBottom: '🔵 Onderste pad',
    freeTiers: 'Niveaus 1–{n} gratis', baseCost: 'Basiskosten:', sumLabel: 'Subtotaal:',
    noBase: 'Basisprijs niet meegerekend', noUpgrades: 'Geen upgrades berekend',
    resultsTitle: '💰 Kostenoverzicht', totalCost: 'Totale kosten', copyResult: 'Resultaat kopiëren',
    reset: 'Resetten', alertNoTower: 'Voeg minstens één toren toe!', copied: 'Resultaat gekopieerd! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Totale kosten', language: 'Taal',
    aiNotice: '🤖 Dit project is gemaakt met hulp van AI (Claude, Anthropic). De kostengegevens komen uit de <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-wiki</a> en zijn steekproefsgewijs gecontroleerd. Zonder garantie, omdat spelwaarden met updates veranderen.'
  },
  pl: {
    subtitle: 'Oblicz całkowity koszt ulepszeń wież', selectTitle: 'Wybierz wieże i ulepszenia',
    selectAll: 'Dodaj wszystkie', deselectAll: 'Wyczyść listę', searchPlaceholder: 'Szukaj wież...',
    calculate: 'Oblicz koszt', add: '＋ Dodaj', difficultyLabel: 'Poziom trudności:',
    discountTitle: '🏷️ Rabaty i Monkey Knowledge',
    discountNote: 'Rabaty Wioski Małp obowiązują przy stawianiu i ulepszeniach do poziomu 3; bohaterowie są wyłączeni. Obliczenie zakłada, że wszystkie wieże są w zasięgu.',
    commerce: 'Monkey Commerce (po −5 %, maks. 3):', setupTitle: '🧩 Twoja konfiguracja',
    emptySetup: 'Brak wież. Dodaj wieżę powyżej.', basePrice: 'Uwzględnij cenę bazową',
    basePriceHint: '(wyłączone, np. dla Insta Monkeys)', freeUpTo: 'Za darmo do poziomu', level: 'Poziom',
    remove: 'Usuń', pathTop: '🔴 Górna ścieżka', pathMiddle: '🟡 Środkowa ścieżka', pathBottom: '🔵 Dolna ścieżka',
    freeTiers: 'Poziomy 1–{n} za darmo', baseCost: 'Koszt bazowy:', sumLabel: 'Suma:',
    noBase: 'Cena bazowa nieuwzględniona', noUpgrades: 'Brak policzonych ulepszeń',
    resultsTitle: '💰 Zestawienie kosztów', totalCost: 'Koszt całkowity', copyResult: 'Kopiuj wynik',
    reset: 'Resetuj', alertNoTower: 'Dodaj co najmniej jedną wieżę!', copied: 'Wynik skopiowany! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Koszt całkowity', language: 'Język',
    aiNotice: '🤖 Ten projekt powstał z pomocą AI (Claude, Anthropic). Dane o kosztach pochodzą z <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki BTD6</a> i zostały wybiórczo sprawdzone. Bez gwarancji, ponieważ wartości w grze zmieniają się wraz z aktualizacjami.'
  }
};

let currentLang = 'en';

function resolveLang(pref) {
  if (pref && pref !== 'auto' && SUPPORTED_LANGS.includes(pref)) return pref;
  const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (const l of list) {
    const code = String(l).slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(code)) return code;
  }
  return 'en';
}

function t(key) {
  const dict = I18N[currentLang] || I18N.en;
  return dict[key] ?? I18N.en[key] ?? key;
}

function currentLocale() {
  return LOCALES[currentLang] || 'en-US';
}

function pathLabel(path) {
  return t({ top: 'pathTop', middle: 'pathMiddle', bottom: 'pathBottom' }[path]);
}

function pathKey(path) {
  return { top: 'pathTop', middle: 'pathMiddle', bottom: 'pathBottom' }[path];
}

function applyLanguage(pref) {
  currentLang = resolveLang(pref);
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = pref;
  updateCostLabels();
  if (document.getElementById('results-section').style.display === 'block') calculateCosts();
}



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
  },
  {
    id: 'boomerang-monkey',
    name: 'Boomerang Monkey',
    emoji: '🪃',
    base: [270, 315, 340, 380],
    paths: {
      top: [
        { tier: 1, name: 'Improved Rangs', costs: [170, 200, 215, 240] },
        { tier: 2, name: 'Glaives', costs: [240, 280, 300, 335] },
        { tier: 3, name: 'Glaive Ricochet', costs: [510, 600, 650, 720] },
        { tier: 4, name: 'M.O.A.R Glaives', costs: [1700, 2000, 2160, 2400] },
        { tier: 5, name: 'Glaive Lord', costs: [27625, 32500, 35100, 39000] }
      ],
      middle: [
        { tier: 1, name: 'Faster Throwing', costs: [150, 175, 190, 210] },
        { tier: 2, name: 'Faster Rangs', costs: [210, 250, 270, 300] },
        { tier: 3, name: 'Bionic Boomerang', costs: [1060, 1250, 1350, 1500] },
        { tier: 4, name: 'Turbo Charge', costs: [3570, 4200, 4535, 5040] },
        { tier: 5, name: 'Perma Charge', costs: [29750, 35000, 37800, 42000] }
      ],
      bottom: [
        { tier: 1, name: 'Long Range Rangs', costs: [85, 100, 110, 120] },
        { tier: 2, name: 'Red Hot Rangs', costs: [255, 300, 325, 360] },
        { tier: 3, name: 'Kylie Boomerang', costs: [1105, 1300, 1405, 1560] },
        { tier: 4, name: 'MOAB Press', costs: [2295, 2700, 2915, 3240] },
        { tier: 5, name: 'MOAB Domination', costs: [42500, 50000, 54000, 60000] }
      ]
    },
    paragon: { name: 'Glaive Dominus', costs: [318750, 375000, 405000, 450000] }
  },
  {
    id: 'tack-shooter',
    name: 'Tack Shooter',
    emoji: '📍',
    base: [220, 260, 280, 310],
    paths: {
      top: [
        { tier: 1, name: 'Faster Shooting', costs: [130, 150, 160, 180] },
        { tier: 2, name: 'Even Faster Shooting', costs: [185, 220, 240, 265] },
        { tier: 3, name: 'Hot Shots', costs: [510, 600, 650, 720] },
        { tier: 4, name: 'Ring of Fire', costs: [2975, 3500, 3780, 4200] },
        { tier: 5, name: 'Inferno Ring', costs: [38675, 45500, 49140, 54600] }
      ],
      middle: [
        { tier: 1, name: 'Long Range Tacks', costs: [85, 100, 110, 120] },
        { tier: 2, name: 'Super Range Tacks', costs: [190, 225, 245, 270] },
        { tier: 3, name: 'Blade Shooter', costs: [470, 550, 595, 660] },
        { tier: 4, name: 'Blade Maelstrom', costs: [2295, 2700, 2915, 3240] },
        { tier: 5, name: 'Super Maelstrom', costs: [12750, 15000, 16200, 18000] }
      ],
      bottom: [
        { tier: 1, name: 'More Tacks', costs: [130, 150, 160, 180] },
        { tier: 2, name: 'Even More Tacks', costs: [130, 150, 160, 180] },
        { tier: 3, name: 'Tack Sprayer', costs: [385, 450, 485, 540] },
        { tier: 4, name: 'Overdrive', costs: [2720, 3200, 3455, 3840] },
        { tier: 5, name: 'The Tack Zone', costs: [17000, 20000, 21600, 24000] }
      ]
    },
    paragon: { name: 'Crucible of Steel and Flame', costs: [170000, 200000, 216000, 240000] }
  },
  {
    id: 'desperado',
    name: 'Desperado',
    emoji: '🤠',
    base: [255, 300, 325, 360],
    paths: {
      top: [
        { tier: 1, name: 'Quickdraw', costs: [170, 200, 215, 240] },
        { tier: 2, name: 'Standoff', costs: [170, 200, 215, 240] },
        { tier: 3, name: 'Big Iron', costs: [1020, 1200, 1295, 1440] },
        { tier: 4, name: 'Twin Sixes', costs: [4930, 5800, 6265, 6960] },
        { tier: 5, name: 'The Blazing Sun', costs: [14025, 16500, 17820, 19800] }
      ],
      middle: [
        { tier: 1, name: 'Eagle Eye', costs: [130, 150, 160, 180] },
        { tier: 2, name: 'Bullseye', costs: [300, 350, 380, 420] },
        { tier: 3, name: 'Deadeye', costs: [2550, 3000, 3240, 3600] },
        { tier: 4, name: 'Bounty Hunter', costs: [5100, 6000, 6480, 7200] },
        { tier: 5, name: 'Golden Justice', costs: [35700, 42000, 45360, 50400] }
      ],
      bottom: [
        { tier: 1, name: 'Wanderer', costs: [185, 220, 240, 265] },
        { tier: 2, name: 'Nomad', costs: [240, 280, 300, 335] },
        { tier: 3, name: 'Enforcer', costs: [1785, 2100, 2270, 2520] },
        { tier: 4, name: 'Avenger', costs: [8075, 9500, 10260, 11400] },
        { tier: 5, name: 'The Desert Phantom', costs: [26350, 31000, 33480, 37200] }
      ]
    },
    paragon: null
  },
  {
    id: 'sniper-monkey',
    name: 'Sniper Monkey',
    emoji: '🔭',
    base: [300, 350, 380, 420],
    paths: {
      top: [
        { tier: 1, name: "Full Metal Jacket", costs: [300, 350, 380, 420] },
        { tier: 2, name: "Large Caliber", costs: [1105, 1300, 1405, 1560] },
        { tier: 3, name: "Deadly Precision", costs: [1870, 2200, 2375, 2640] },
        { tier: 4, name: "Maim MOAB", costs: [5355, 6300, 6805, 7560] },
        { tier: 5, name: "Cripple MOAB", costs: [27200, 32000, 34560, 38400] }
      ],
      middle: [
        { tier: 1, name: "Night Vision Goggles", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Shrapnel Shot", costs: [385, 450, 485, 540] },
        { tier: 3, name: "Bouncing Bullet", costs: [1785, 2100, 2270, 2520] },
        { tier: 4, name: "Supply Drop", costs: [6460, 7600, 8210, 9120] },
        { tier: 5, name: "Elite Sniper", costs: [10200, 12000, 12960, 14400] }
      ],
      bottom: [
        { tier: 1, name: "Fast Firing", costs: [385, 450, 485, 540] },
        { tier: 2, name: "Even Faster Firing", costs: [385, 450, 485, 540] },
        { tier: 3, name: "Semi-Automatic", costs: [2295, 2700, 2915, 3240] },
        { tier: 4, name: "Full Auto Rifle", costs: [3485, 4100, 4430, 4920] },
        { tier: 5, name: "Elite Defender", costs: [12665, 14900, 16090, 17880] }
      ]
    },
    paragon: { name: "S.P.I.D.E.R. Monkey", costs: [680000, 800000, 864000, 960000] }
  },
  {
    id: 'monkey-sub',
    name: 'Monkey Sub',
    emoji: '🤿',
    base: [275, 325, 350, 390],
    paths: {
      top: [
        { tier: 1, name: "Longer Range", costs: [110, 130, 140, 155] },
        { tier: 2, name: "Advanced Intel", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Submerge and Support", costs: [595, 700, 755, 840] },
        { tier: 4, name: "Bloontonium Reactor", costs: [2040, 2400, 2590, 2880] },
        { tier: 5, name: "Energizer", costs: [23800, 28000, 30240, 33600] }
      ],
      middle: [
        { tier: 1, name: "Barbed Darts", costs: [385, 450, 485, 540] },
        { tier: 2, name: "Heat-tipped Darts", costs: [255, 300, 325, 360] },
        { tier: 3, name: "Ballistic Missile", costs: [1150, 1350, 1460, 1620] },
        { tier: 4, name: "First Strike Capability", costs: [11050, 13000, 14040, 15600] },
        { tier: 5, name: "Pre-emptive Strike", costs: [24650, 29000, 31320, 34800] }
      ],
      bottom: [
        { tier: 1, name: "Twin Guns", costs: [385, 450, 485, 540] },
        { tier: 2, name: "Airburst Darts", costs: [850, 1000, 1080, 1200] },
        { tier: 3, name: "Triple Guns", costs: [935, 1100, 1190, 1320] },
        { tier: 4, name: "Armor Piercing Darts", costs: [2125, 2500, 2700, 3000] },
        { tier: 5, name: "Sub Commander", costs: [21250, 25000, 27000, 30000] }
      ]
    },
    paragon: { name: "Nautic Siege Core", costs: [340000, 400000, 432000, 480000] }
  },
  {
    id: 'monkey-buccaneer',
    name: 'Monkey Buccaneer',
    emoji: '⚓',
    base: [340, 400, 430, 480],
    paths: {
      top: [
        { tier: 1, name: "Faster Shooting", costs: [235, 275, 295, 330] },
        { tier: 2, name: "Double Shot", costs: [360, 425, 460, 510] },
        { tier: 3, name: "Destroyer", costs: [2850, 3350, 3620, 4020] },
        { tier: 4, name: "Aircraft Carrier", costs: [6800, 8000, 8640, 9600] },
        { tier: 5, name: "Carrier Flagship", costs: [22100, 26000, 28080, 31200] }
      ],
      middle: [
        { tier: 1, name: "Grape Shot", costs: [470, 550, 595, 660] },
        { tier: 2, name: "Hot Shot", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Cannon Ship", costs: [765, 900, 970, 1080] },
        { tier: 4, name: "Monkey Pirates", costs: [3315, 3900, 4210, 4680] },
        { tier: 5, name: "Pirate Lord", costs: [24650, 29000, 31320, 34800] }
      ],
      bottom: [
        { tier: 1, name: "Long Range", costs: [170, 200, 215, 240] },
        { tier: 2, name: "Crow's Nest", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Merchantman", costs: [2040, 2400, 2590, 2880] },
        { tier: 4, name: "Favored Trades", costs: [4675, 5500, 5940, 6600] },
        { tier: 5, name: "Trade Empire", costs: [19550, 23000, 24840, 27600] }
      ]
    },
    paragon: { name: "Navarch of the Seas", costs: [467500, 550000, 594000, 660000] }
  },
  {
    id: 'monkey-ace',
    name: 'Monkey Ace',
    emoji: '✈️',
    base: [680, 800, 865, 960],
    paths: {
      top: [
        { tier: 1, name: "Rapid Fire", costs: [385, 450, 485, 540] },
        { tier: 2, name: "Lots More Darts", costs: [470, 550, 595, 660] },
        { tier: 3, name: "Fighter Plane", costs: [850, 1000, 1080, 1200] },
        { tier: 4, name: "Operation: Dart Storm", costs: [2805, 3300, 3565, 3960] },
        { tier: 5, name: "Sky Shredder", costs: [36125, 42500, 45900, 51000] }
      ],
      middle: [
        { tier: 1, name: "Exploding Pineapple", costs: [170, 200, 215, 240] },
        { tier: 2, name: "Spy Plane", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Bomber Ace", costs: [765, 900, 970, 1080] },
        { tier: 4, name: "Ground Zero", costs: [13600, 16000, 17280, 19200] },
        { tier: 5, name: "Tsar Bomba", costs: [22100, 26000, 28080, 31200] }
      ],
      bottom: [
        { tier: 1, name: "Sharper Darts", costs: [425, 500, 540, 600] },
        { tier: 2, name: "Centered Path", costs: [470, 550, 595, 660] },
        { tier: 3, name: "Neva-Miss Targeting", costs: [2170, 2550, 2755, 3060] },
        { tier: 4, name: "Spectre", costs: [19890, 23400, 25270, 28080] },
        { tier: 5, name: "Flying Fortress", costs: [76500, 90000, 97200, 108000] }
      ]
    },
    paragon: { name: "Goliath Doomship", costs: [765000, 900000, 972000, 1080000] }
  },
  {
    id: 'heli-pilot',
    name: 'Heli Pilot',
    emoji: '🚁',
    base: [1275, 1500, 1620, 1800],
    paths: {
      top: [
        { tier: 1, name: "Quad Darts", costs: [680, 800, 865, 960] },
        { tier: 2, name: "Pursuit", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Razor Rotors", costs: [1235, 1450, 1565, 1740] },
        { tier: 4, name: "Apache Dartship", costs: [17000, 20000, 21600, 24000] },
        { tier: 5, name: "Apache Prime", costs: [38250, 45000, 48600, 54000] }
      ],
      middle: [
        { tier: 1, name: "Bigger Jets", costs: [255, 300, 325, 360] },
        { tier: 2, name: "IFR", costs: [510, 600, 650, 720] },
        { tier: 3, name: "Downdraft", costs: [2975, 3500, 3780, 4200] },
        { tier: 4, name: "Support Chinook", costs: [8075, 9500, 10260, 11400] },
        { tier: 5, name: "Special Poperations", costs: [25500, 30000, 32400, 36000] }
      ],
      bottom: [
        { tier: 1, name: "Faster Darts", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Faster Firing", costs: [300, 350, 380, 420] },
        { tier: 3, name: "MOAB Shove", costs: [2890, 3400, 3670, 4080] },
        { tier: 4, name: "Comanche Defense", costs: [7225, 8500, 9180, 10200] },
        { tier: 5, name: "Comanche Commander", costs: [29750, 35000, 37800, 42000] }
      ]
    },
    paragon: null
  },
  {
    id: 'mortar-monkey',
    name: 'Mortar Monkey',
    emoji: '💥',
    base: [510, 600, 650, 720],
    paths: {
      top: [
        { tier: 1, name: "Bigger Blast", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Bloon Buster", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Shell Shock", costs: [700, 825, 890, 990] },
        { tier: 4, name: "The Big One", costs: [5950, 7000, 7560, 8400] },
        { tier: 5, name: "The Biggest One", costs: [30600, 36000, 38880, 43200] }
      ],
      middle: [
        { tier: 1, name: "Faster Reload", costs: [340, 400, 430, 480] },
        { tier: 2, name: "Rapid Reload", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Heavy Shells", costs: [765, 900, 970, 1080] },
        { tier: 4, name: "Artillery Battery", costs: [5525, 6500, 7020, 7800] },
        { tier: 5, name: "Pop and Awe", costs: [32300, 38000, 41040, 45600] }
      ],
      bottom: [
        { tier: 1, name: "Increased Accuracy", costs: [170, 200, 215, 240] },
        { tier: 2, name: "Burny Stuff", costs: [340, 400, 430, 480] },
        { tier: 3, name: "Signal Flare", costs: [935, 1100, 1190, 1320] },
        { tier: 4, name: "Shattering Shells", costs: [8075, 9500, 10260, 11400] },
        { tier: 5, name: "Blooncineration", costs: [34000, 40000, 43200, 48000] }
      ]
    },
    paragon: null
  },
  {
    id: 'dartling-gunner',
    name: 'Dartling Gunner',
    emoji: '🔫',
    base: [725, 850, 920, 1020],
    paths: {
      top: [
        { tier: 1, name: "Focused Firing", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Laser Shock", costs: [765, 900, 970, 1080] },
        { tier: 3, name: "Laser Cannon", costs: [2550, 3000, 3240, 3600] },
        { tier: 4, name: "Plasma Accelerator", costs: [9990, 11750, 12690, 14100] },
        { tier: 5, name: "Ray of Doom", costs: [63750, 75000, 81000, 90000] }
      ],
      middle: [
        { tier: 1, name: "Advanced Targeting", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Faster Barrel Spin", costs: [810, 950, 1025, 1140] },
        { tier: 3, name: "Hydra Rocket Pods", costs: [3825, 4500, 4860, 5400] },
        { tier: 4, name: "Rocket Storm", costs: [4250, 5000, 5400, 6000] },
        { tier: 5, name: "M.A.D", costs: [55250, 65000, 70200, 78000] }
      ],
      bottom: [
        { tier: 1, name: "Faster Swivel", costs: [130, 150, 160, 180] },
        { tier: 2, name: "Powerful Darts", costs: [1020, 1200, 1295, 1440] },
        { tier: 3, name: "Buckshot", costs: [2550, 3000, 3240, 3600] },
        { tier: 4, name: "Bloon Area Denial System", costs: [10200, 12000, 12960, 14400] },
        { tier: 5, name: "Bloon Exclusion Zone", costs: [49300, 58000, 62640, 69600] }
      ]
    },
    paragon: null
  },
  {
    id: 'wizard-monkey',
    name: 'Wizard Monkey',
    emoji: '🧙',
    base: [210, 250, 270, 300],
    paths: {
      top: [
        { tier: 1, name: "Guided Magic", costs: [150, 175, 190, 210] },
        { tier: 2, name: "Arcane Blast", costs: [385, 450, 485, 540] },
        { tier: 3, name: "Arcane Mastery", costs: [1235, 1450, 1565, 1740] },
        { tier: 4, name: "Arcane Spike", costs: [8500, 10000, 10800, 12000] },
        { tier: 5, name: "Archmage", costs: [27200, 32000, 34560, 38400] }
      ],
      middle: [
        { tier: 1, name: "Fireball", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Wall of Fire", costs: [680, 800, 865, 960] },
        { tier: 3, name: "Dragon's Breath", costs: [2805, 3300, 3565, 3960] },
        { tier: 4, name: "Summon Phoenix", costs: [5100, 6000, 6480, 7200] },
        { tier: 5, name: "Wizard Lord Phoenix", costs: [42500, 50000, 54000, 60000] }
      ],
      bottom: [
        { tier: 1, name: "Intense Magic", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Monkey Sense", costs: [255, 300, 325, 360] },
        { tier: 3, name: "Shimmer", costs: [1275, 1500, 1620, 1800] },
        { tier: 4, name: "Necromancer: Unpopped Army", costs: [2380, 2800, 3025, 3360] },
        { tier: 5, name: "Prince of Darkness", costs: [22525, 26500, 28620, 31800] }
      ]
    },
    paragon: { name: "Magus Perfectus", costs: [680000, 800000, 864000, 960000] }
  },
  {
    id: 'super-monkey',
    name: 'Super Monkey',
    emoji: '🐒',
    base: [2125, 2500, 2700, 3000],
    paths: {
      top: [
        { tier: 1, name: "Laser Blasts", costs: [1700, 2000, 2160, 2400] },
        { tier: 2, name: "Plasma Blasts", costs: [2125, 2500, 2700, 3000] },
        { tier: 3, name: "Sun Avatar", costs: [17000, 20000, 21600, 24000] },
        { tier: 4, name: "Sun Temple", costs: [85000, 100000, 108000, 120000] },
        { tier: 5, name: "True Sun God", costs: [425000, 500000, 540000, 600000] }
      ],
      middle: [
        { tier: 1, name: "Super Range", costs: [1275, 1500, 1620, 1800] },
        { tier: 2, name: "Epic Range", costs: [1615, 1900, 2050, 2280] },
        { tier: 3, name: "Robo Monkey", costs: [6375, 7500, 8100, 9000] },
        { tier: 4, name: "Tech Terror", costs: [21250, 25000, 27000, 30000] },
        { tier: 5, name: "The Anti-Bloon", costs: [59500, 70000, 75600, 84000] }
      ],
      bottom: [
        { tier: 1, name: "Knockback", costs: [2550, 3000, 3240, 3600] },
        { tier: 2, name: "Ultravision", costs: [1020, 1200, 1295, 1440] },
        { tier: 3, name: "Dark Knight", costs: [4760, 5600, 6050, 6720] },
        { tier: 4, name: "Dark Champion", costs: [47220, 55555, 60000, 66665] },
        { tier: 5, name: "Legend of the Night", costs: [140805, 165650, 178900, 198780] }
      ]
    },
    paragon: null
  },
  {
    id: 'ninja-monkey',
    name: 'Ninja Monkey',
    emoji: '🥷',
    base: [340, 400, 430, 480],
    paths: {
      top: [
        { tier: 1, name: "Ninja Discipline", costs: [300, 350, 380, 420] },
        { tier: 2, name: "Sharp Shurikens", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Double Shot", costs: [765, 900, 970, 1080] },
        { tier: 4, name: "Bloonjitsu", costs: [2340, 2750, 2970, 3300] },
        { tier: 5, name: "Grandmaster Ninja", costs: [29750, 35000, 37800, 42000] }
      ],
      middle: [
        { tier: 1, name: "Distraction", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Counter-Espionage", costs: [340, 400, 430, 480] },
        { tier: 3, name: "Shinobi Tactics", costs: [1020, 1200, 1295, 1440] },
        { tier: 4, name: "Bloon Sabotage", costs: [4420, 5200, 5615, 6240] },
        { tier: 5, name: "Grand Saboteur", costs: [18700, 22000, 23760, 26400] }
      ],
      bottom: [
        { tier: 1, name: "Seeking Shuriken", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Caltrops", costs: [385, 450, 485, 540] },
        { tier: 3, name: "Flash Bomb", costs: [1910, 2250, 2430, 2700] },
        { tier: 4, name: "Sticky Bomb", costs: [4250, 5000, 5400, 6000] },
        { tier: 5, name: "Master Bomber", costs: [34000, 40000, 43200, 48000] }
      ]
    },
    paragon: { name: "Ascended Shadow", costs: [425000, 500000, 540000, 600000] }
  },
  {
    id: 'alchemist',
    name: 'Alchemist',
    emoji: '⚗️',
    base: [470, 550, 595, 660],
    paths: {
      top: [
        { tier: 1, name: "Larger Potions", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Acidic Mixture Dip", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Berserker Brew", costs: [1190, 1400, 1510, 1680] },
        { tier: 4, name: "Stronger Stimulant", costs: [2425, 2850, 3080, 3420] },
        { tier: 5, name: "Permanent Brew", costs: [40800, 48000, 51840, 57600] }
      ],
      middle: [
        { tier: 1, name: "Stronger Acid", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Perishing Potions", costs: [405, 475, 515, 570] },
        { tier: 3, name: "Unstable Concoction", costs: [2380, 2800, 3025, 3360] },
        { tier: 4, name: "Transforming Tonic", costs: [3570, 4200, 4535, 5040] },
        { tier: 5, name: "Total Transformation", costs: [38250, 45000, 48600, 54000] }
      ],
      bottom: [
        { tier: 1, name: "Faster Throwing", costs: [555, 650, 700, 780] },
        { tier: 2, name: "Acid Pool", costs: [385, 450, 485, 540] },
        { tier: 3, name: "Lead to Gold", costs: [850, 1000, 1080, 1200] },
        { tier: 4, name: "Rubber to Gold", costs: [2340, 2750, 2970, 3300] },
        { tier: 5, name: "Bloon Master Alchemist", costs: [34000, 40000, 43200, 48000] }
      ]
    },
    paragon: null
  },
  {
    id: 'druid',
    name: 'Druid',
    emoji: '🌿',
    base: [340, 400, 430, 480],
    paths: {
      top: [
        { tier: 1, name: "Hard Thorns", costs: [300, 350, 380, 420] },
        { tier: 2, name: "Heart of Thunder", costs: [725, 850, 920, 1020] },
        { tier: 3, name: "Druid of the Storm", costs: [1445, 1700, 1835, 2040] },
        { tier: 4, name: "Ball Lightning", costs: [3825, 4500, 4860, 5400] },
        { tier: 5, name: "Monarch of Storms", costs: [51000, 60000, 64800, 72000] }
      ],
      middle: [
        { tier: 1, name: "Thorn Swarm", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Heart of Oak", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Druid of the Jungle", costs: [895, 1050, 1135, 1260] },
        { tier: 4, name: "Jungle's Bounty", costs: [4165, 4900, 5290, 5880] },
        { tier: 5, name: "Spirit of the Forest", costs: [29750, 35000, 37800, 42000] }
      ],
      bottom: [
        { tier: 1, name: "Druidic Reach", costs: [85, 100, 110, 120] },
        { tier: 2, name: "Heart of Vengeance", costs: [255, 300, 325, 360] },
        { tier: 3, name: "Druid of Wrath", costs: [510, 600, 650, 720] },
        { tier: 4, name: "Poplust", costs: [2000, 2350, 2540, 2820] },
        { tier: 5, name: "Avatar of Wrath", costs: [38250, 45000, 48600, 54000] }
      ]
    },
    paragon: { name: "Root of all Nature", costs: [403750, 475000, 513000, 570000] }
  },
  {
    id: 'mermonkey',
    name: 'Mermonkey',
    emoji: '🧜',
    base: [255, 300, 325, 360],
    paths: {
      top: [
        { tier: 1, name: "Trident Efficiency", costs: [130, 150, 160, 180] },
        { tier: 2, name: "Trident Swiftness", costs: [210, 250, 270, 300] },
        { tier: 3, name: "Abyss Dweller", costs: [1530, 1800, 1945, 2160] },
        { tier: 4, name: "Abyssal Warrior", costs: [3570, 4200, 4535, 5040] },
        { tier: 5, name: "Lord of the Abyss", costs: [19550, 23000, 24840, 27600] }
      ],
      middle: [
        { tier: 1, name: "Sharper Prongs", costs: [170, 200, 215, 240] },
        { tier: 2, name: "Tidal Chill", costs: [190, 225, 245, 270] },
        { tier: 3, name: "Riptide Champion", costs: [1700, 2000, 2160, 2400] },
        { tier: 4, name: "Arctic Knight", costs: [6800, 8000, 8640, 9600] },
        { tier: 5, name: "Popseidon", costs: [44200, 52000, 56160, 62400] }
      ],
      bottom: [
        { tier: 1, name: "Echosense Precision", costs: [170, 200, 215, 240] },
        { tier: 2, name: "Echosense Network", costs: [240, 280, 300, 335] },
        { tier: 3, name: "Alluring Melody", costs: [1700, 2000, 2160, 2400] },
        { tier: 4, name: "Symphonic Resonance", costs: [6460, 7600, 8210, 9120] },
        { tier: 5, name: "The Final Harmonic", costs: [21250, 25000, 27000, 30000] }
      ]
    },
    paragon: null
  },
  {
    id: 'skywarden',
    name: 'Skywarden',
    emoji: '🏹',
    base: [175, 205, 220, 245],
    paths: {
      top: [
        { tier: 1, name: "Aerial Attunement", costs: [120, 140, 150, 170] },
        { tier: 2, name: "Zephyr Sense", costs: [150, 175, 190, 210] },
        { tier: 3, name: "Wind Weaver", costs: [1020, 1200, 1295, 1440] },
        { tier: 4, name: "Galesage", costs: [2550, 3000, 3240, 3600] },
        { tier: 5, name: "Farwind Seer", costs: [16150, 19000, 20520, 22800] }
      ],
      middle: [
        { tier: 1, name: "Storm's Pulse", costs: [150, 175, 190, 210] },
        { tier: 2, name: "Thundering Arc", costs: [235, 275, 295, 330] },
        { tier: 3, name: "Galvanic Conduit", costs: [2125, 2500, 2700, 3000] },
        { tier: 4, name: "Thunder's Decree", costs: [2975, 3500, 3780, 4200] },
        { tier: 5, name: "Stormwrath Archon", costs: [27200, 32000, 34560, 38400] }
      ],
      bottom: [
        { tier: 1, name: "Shatterpoint", costs: [130, 150, 160, 180] },
        { tier: 2, name: "Icebore", costs: [210, 250, 270, 300] },
        { tier: 3, name: "Coldchain", costs: [1275, 1500, 1620, 1800] },
        { tier: 4, name: "Frozen Verdict", costs: [3315, 3900, 4210, 4680] },
        { tier: 5, name: "Winter's Mercy", costs: [17000, 20000, 21600, 24000] }
      ]
    },
    paragon: null
  },
  {
    id: 'banana-farm',
    name: 'Banana Farm',
    emoji: '🍌',
    base: [1060, 1250, 1350, 1500],
    paths: {
      top: [
        { tier: 1, name: "Increased Production", costs: [425, 500, 540, 600] },
        { tier: 2, name: "Greater Production", costs: [510, 600, 650, 720] },
        { tier: 3, name: "Banana Plantation", costs: [2550, 3000, 3240, 3600] },
        { tier: 4, name: "Banana Research Facility", costs: [16150, 19000, 20520, 22800] },
        { tier: 5, name: "Banana Central", costs: [97750, 115000, 124200, 138000] }
      ],
      middle: [
        { tier: 1, name: "Long Life Bananas", costs: [255, 300, 325, 360] },
        { tier: 2, name: "Valuable Bananas", costs: [680, 800, 865, 960] },
        { tier: 3, name: "Monkey Bank", costs: [3105, 3650, 3940, 4380] },
        { tier: 4, name: "IMF Loan", costs: [6120, 7200, 7775, 8640] },
        { tier: 5, name: "Monkey-Nomics", costs: [85000, 100000, 108000, 120000] }
      ],
      bottom: [
        { tier: 1, name: "EZ Collect", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Banana Salvage", costs: [340, 400, 430, 480] },
        { tier: 3, name: "Marketplace", costs: [2295, 2700, 2915, 3240] },
        { tier: 4, name: "Central Market", costs: [12750, 15000, 16200, 18000] },
        { tier: 5, name: "Monkey Wall Street", costs: [59500, 70000, 75600, 84000] }
      ]
    },
    paragon: null
  },
  {
    id: 'spike-factory',
    name: 'Spike Factory',
    emoji: '📍',
    base: [850, 1000, 1080, 1200],
    paths: {
      top: [
        { tier: 1, name: "Bigger Stacks", costs: [680, 800, 865, 960] },
        { tier: 2, name: "White Hot Spikes", costs: [510, 600, 650, 720] },
        { tier: 3, name: "Spiked Balls", costs: [1955, 2300, 2485, 2760] },
        { tier: 4, name: "Spiked Mines", costs: [8075, 9500, 10260, 11400] },
        { tier: 5, name: "Super Mines", costs: [106250, 125000, 135000, 150000] }
      ],
      middle: [
        { tier: 1, name: "Faster Production", costs: [510, 600, 650, 720] },
        { tier: 2, name: "Even Faster Production", costs: [680, 800, 865, 960] },
        { tier: 3, name: "MOAB SHREDR", costs: [2125, 2500, 2700, 3000] },
        { tier: 4, name: "Spike Storm", costs: [5950, 7000, 7560, 8400] },
        { tier: 5, name: "Carpet of Spikes", costs: [34850, 41000, 44280, 49200] }
      ],
      bottom: [
        { tier: 1, name: "Long Reach", costs: [130, 150, 160, 180] },
        { tier: 2, name: "Smart Spikes", costs: [340, 400, 430, 480] },
        { tier: 3, name: "Long Life Spikes", costs: [1105, 1300, 1405, 1560] },
        { tier: 4, name: "Deadly Spikes", costs: [3060, 3600, 3890, 4320] },
        { tier: 5, name: "Perma-Spike", costs: [25500, 30000, 32400, 36000] }
      ]
    },
    paragon: { name: "Mega Massive Munitions Factory", costs: [637500, 750000, 810000, 900000] }
  },
  {
    id: 'monkey-village',
    name: 'Monkey Village',
    emoji: '🏘️',
    base: [1020, 1200, 1295, 1440],
    paths: {
      top: [
        { tier: 1, name: "Bigger Radius", costs: [340, 400, 430, 480] },
        { tier: 2, name: "Jungle Drums", costs: [1275, 1500, 1620, 1800] },
        { tier: 3, name: "Primary Training", costs: [680, 800, 865, 960] },
        { tier: 4, name: "Primary Mentoring", costs: [2125, 2500, 2700, 3000] },
        { tier: 5, name: "Primary Expertise", costs: [21250, 25000, 27000, 30000] }
      ],
      middle: [
        { tier: 1, name: "Grow Blocker", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Radar Scanner", costs: [1700, 2000, 2160, 2400] },
        { tier: 3, name: "Monkey Intelligence Bureau", costs: [6375, 7500, 8100, 9000] },
        { tier: 4, name: "Call to Arms", costs: [17000, 20000, 21600, 24000] },
        { tier: 5, name: "Homeland Defense", costs: [34000, 40000, 43200, 48000] }
      ],
      bottom: [
        { tier: 1, name: "Monkey Business", costs: [425, 500, 540, 600] },
        { tier: 2, name: "Monkey Commerce", costs: [425, 500, 540, 600] },
        { tier: 3, name: "Monkey Town", costs: [8500, 10000, 10800, 12000] },
        { tier: 4, name: "Monkey City", costs: [2550, 3000, 3240, 3600] }
      ]
    },
    paragon: null
  },
  {
    id: 'engineer-monkey',
    name: 'Engineer Monkey',
    emoji: '🔧',
    base: [300, 350, 380, 420],
    paths: {
      top: [
        { tier: 1, name: "Sentry Gun", costs: [425, 500, 540, 600] },
        { tier: 2, name: "Faster Engineering", costs: [340, 400, 430, 480] },
        { tier: 3, name: "Sprockets", costs: [490, 575, 620, 690] },
        { tier: 4, name: "Sentry Expert", costs: [2125, 2500, 2700, 3000] },
        { tier: 5, name: "Sentry Champion", costs: [27200, 32000, 34560, 38400] }
      ],
      middle: [
        { tier: 1, name: "Larger Service Area", costs: [210, 250, 270, 300] },
        { tier: 2, name: "Deconstruction", costs: [300, 350, 380, 420] },
        { tier: 3, name: "Cleansing Foam", costs: [765, 900, 970, 1080] },
        { tier: 4, name: "Overclock", costs: [11475, 13500, 14580, 16200] },
        { tier: 5, name: "Ultraboost", costs: [61200, 72000, 77760, 86400] }
      ],
      bottom: [
        { tier: 1, name: "Oversize Nails", costs: [385, 450, 485, 540] },
        { tier: 2, name: "Pin", costs: [185, 220, 240, 265] },
        { tier: 3, name: "Double Gun", costs: [385, 450, 485, 540] },
        { tier: 4, name: "Bloon Trap", costs: [3060, 3600, 3890, 4320] },
        { tier: 5, name: "XXXL Trap", costs: [38250, 45000, 48600, 54000] }
      ]
    },
    paragon: { name: "Master Builder", costs: [510000, 600000, 648000, 720000] }
  },
  {
    id: 'beast-handler',
    name: 'Beast Handler',
    emoji: '🦖',
    base: [210, 250, 270, 300],
    paths: {
      top: [
        { tier: 1, name: "Piranha", costs: [135, 160, 175, 190] },
        { tier: 2, name: "Barracuda", costs: [690, 810, 875, 970] },
        { tier: 3, name: "Great White", costs: [1710, 2010, 2170, 2410] },
        { tier: 4, name: "Orca", costs: [10625, 12500, 13500, 15000] },
        { tier: 5, name: "Megalodon", costs: [38250, 45000, 48600, 54000] }
      ],
      middle: [
        { tier: 1, name: "Microraptor", costs: [150, 175, 190, 210] },
        { tier: 2, name: "Adasaurus", costs: [705, 830, 895, 995] },
        { tier: 3, name: "Velociraptor", costs: [1755, 2065, 2230, 2480] },
        { tier: 4, name: "Tyrannosaurus Rex", costs: [8075, 9500, 10260, 11400] },
        { tier: 5, name: "Giganotosaurus", costs: [51000, 60000, 64800, 72000] }
      ],
      bottom: [
        { tier: 1, name: "Gyrfalcon", costs: [160, 190, 205, 230] },
        { tier: 2, name: "Horned Owl", costs: [730, 860, 930, 1030] },
        { tier: 3, name: "Golden Eagle", costs: [1800, 2120, 2290, 2545] },
        { tier: 4, name: "Giant Condor", costs: [7650, 9000, 9720, 10800] },
        { tier: 5, name: "Pouākai", costs: [25500, 30000, 32400, 36000] }
      ]
    },
    paragon: null
  },
  {
    id: 'quincy',
    name: "Quincy",
    emoji: '🏹',
    type: 'hero',
    base: [460, 540, 585, 650],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'gwendolin',
    name: "Gwendolin",
    emoji: '🔥',
    type: 'hero',
    base: [615, 725, 785, 870],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'striker-jones',
    name: "Striker Jones",
    emoji: '🎸',
    type: 'hero',
    base: [595, 700, 755, 840],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'obyn-greenfoot',
    name: "Obyn Greenfoot",
    emoji: '🌳',
    type: 'hero',
    base: [555, 650, 700, 780],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'captain-churchill',
    name: "Captain Churchill",
    emoji: '⚓',
    type: 'hero',
    base: [1700, 2000, 2160, 2400],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'benjamin',
    name: "Benjamin",
    emoji: '🐌',
    type: 'hero',
    base: [1020, 1200, 1295, 1440],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'ezili',
    name: "Ezili",
    emoji: '🔮',
    type: 'hero',
    base: [470, 550, 595, 660],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'pat-fusty',
    name: "Pat Fusty",
    emoji: '🛡️',
    type: 'hero',
    base: [680, 800, 865, 960],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'adora',
    name: "Adora",
    emoji: '👑',
    type: 'hero',
    base: [850, 1000, 1080, 1200],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'admiral-brickell',
    name: "Admiral Brickell",
    emoji: '🏴‍☠️',
    type: 'hero',
    base: [765, 900, 970, 1080],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'etienne',
    name: "Etienne",
    emoji: '🎯',
    type: 'hero',
    base: [555, 650, 700, 780],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'sauda',
    name: "Sauda",
    emoji: '🗡️',
    type: 'hero',
    base: [510, 600, 650, 720],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'psi',
    name: "Psi",
    emoji: '🧠',
    type: 'hero',
    base: [850, 1000, 1080, 1200],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'geraldo',
    name: "Geraldo",
    emoji: '🛒',
    type: 'hero',
    base: [640, 750, 810, 900],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'corvus',
    name: "Corvus",
    emoji: '🔐',
    type: 'hero',
    base: [1125, 1325, 1430, 1590],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'rosalia',
    name: "Rosalia",
    emoji: '🐝',
    type: 'hero',
    base: [745, 875, 945, 1050],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'silas',
    name: "Silas",
    emoji: '🎵',
    type: 'hero',
    base: [725, 850, 920, 1020],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  },
  {
    id: 'dan-dmonke',
    name: "Dan D'Monke",
    emoji: '🦍',
    type: 'hero',
    base: [555, 650, 700, 780],
    paths: { top: [], middle: [], bottom: [] },
    paragon: null
  }
];

// ---------- Hilfsfunktionen ----------

function currentDifficulty() {
  const select = document.getElementById('difficulty-select');
  const idx = select ? parseInt(select.value, 10) : 1;
  return Number.isNaN(idx) ? 1 : idx;
}

function formatCost(amount) {
  return `${amount.toLocaleString(currentLocale())} 💰`;
}

function parseCosts(el) {
  return el.dataset.costs.split(',').map(Number);
}

let instanceCounter = 0;

// ---------- Katalog ----------

function renderCatalog() {
  const container = document.getElementById('towers-container');
  container.innerHTML = '';
  towersData.forEach(tower => {
    const div = document.createElement('div');
    div.className = 'tower-group catalog-card';
    div.dataset.name = tower.name.toLowerCase();
    div.innerHTML = `
      <div class="catalog-row">
        <span>${tower.emoji} ${tower.name}</span>
        <button class="btn-small add-instance" data-tower="${tower.id}" data-i18n="add">${t('add')}</button>
      </div>`;
    container.appendChild(div);
  });
}

function createSetupArea() {
  const catalog = document.getElementById('towers-container');
  const wrap = document.createElement('div');
  wrap.className = 'setup-area';
  wrap.innerHTML = `
    <div class="discount-panel">
      <h4 data-i18n="discountTitle">${t('discountTitle')}</h4>
      <div class="discount-grid">
        <label><input type="checkbox" id="mk-flatpack"> Flat Pack Buildings (−2 %)</label>
        <label><input type="checkbox" id="mk-subsidy"> Farm Subsidy (−100)</label>
        <label><input type="checkbox" id="mk-firstline"> First Last Line of Defense (−150)</label>
        <label><input type="checkbox" id="mk-insider"> Insider Trades (+2 %)</label>
        <label><input type="checkbox" id="mk-monkey-business"> Monkey Business (−10 %)</label>
        <label><span data-i18n="commerce">${t('commerce')}</span>
          <select id="mk-monkey-commerce">
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label><input type="checkbox" id="mk-cheap-rangs"> Cheap 'Rangs (−50)</label>
        <label><input type="checkbox" id="mk-adv-logistics"> Advanced Logistics (−5 %)</label>
        <label><input type="checkbox" id="mk-conscription"> Military Conscription (⅔)</label>
        <label><input type="checkbox" id="mk-hero-favors"> Hero Favors (−10 %)</label>
        <label><input type="checkbox" id="mk-glue-bonus"> Bonus Glue Gunner (1× gratis)</label>
        <label><input type="checkbox" id="mk-aeronautic"> Aeronautic Subsidy (−10 %)</label>
        <label><input type="checkbox" id="mk-maiming"> Cheaper Maiming (−1000)</label>
        <label><input type="checkbox" id="mk-liquefier"> Cheaper Solution (−1000)</label>
        <label><input type="checkbox" id="mk-battery"> Budget Battery (−600)</label>
        <label><input type="checkbox" id="mk-hi-value"> Hi-Value Mines (−1500)</label>
        <label><input type="checkbox" id="mk-clusters"> Budget Clusters (−100)</label>
        <label><input type="checkbox" id="mk-magic-tricks"> Magic Tricks (−25)</label>
        <label><input type="checkbox" id="mk-cheaper-doubles"> Cheaper Doubles (−100)</label>
        <label><input type="checkbox" id="mk-warm-oak"> Warm Oak (−100)</label>
      </div>
      <small data-i18n="discountNote">${t('discountNote')}</small>
    </div>
    <h3 class="setup-title" data-i18n="setupTitle">${t('setupTitle')}</h3>
    <div id="setup-container" class="setup-container"></div>`;
  catalog.insertAdjacentElement('afterend', wrap);
}

// ---------- Setup (Instanzen) ----------

function addInstance(towerId) {
  const tower = towersData.find(t => t.id === towerId);
  if (!tower) return;

  instanceCounter++;
  const card = document.createElement('div');
  card.className = 'tower-group instance-card';
  card.dataset.tower = tower.id;

  let html = `
    <div class="instance-head">
      <strong>${tower.emoji} ${tower.name}</strong>
      <button class="btn-small remove-instance" title="${t('remove')}">✕</button>
    </div>
    <label class="base-row">
      <input type="checkbox" class="base-toggle" checked>
      <span><span data-i18n="basePrice">${t('basePrice')}</span> <small data-i18n="basePriceHint">${t('basePriceHint')}</small></span>
    </label>`;

  (tower.type === 'hero' ? [] : ['top', 'middle', 'bottom']).forEach(path => {
    html += `
      <div class="upgrade-path ${path}">
        <div class="path-head">
          <h4 data-i18n="${pathKey(path)}">${pathLabel(path)}</h4>
          <label class="free-label"><span data-i18n="freeUpTo">${t('freeUpTo')}</span>
            <select class="free-select" data-path="${path}">
              <option value="0" selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>`;
    tower.paths[path].forEach(up => {
      html += `
        <div class="upgrade-option">
          <input type="checkbox" class="upgrade-checkbox" data-path="${path}" data-tier="${up.tier}">
          <label><span data-i18n="level">${t('level')}</span> ${up.tier}: ${up.name}</label>
          <span class="cost-label upgrade-cost" data-costs="${up.costs.join(',')}"></span>
        </div>`;
    });
    html += '</div>';
  });

  if (tower.paragon) {
    html += `
      <div class="upgrade-path paragon">
        <h4>⭐ Paragon</h4>
        <div class="upgrade-option">
          <input type="checkbox" class="paragon-checkbox">
          <label>${tower.paragon.name}</label>
          <span class="cost-label upgrade-cost" data-costs="${tower.paragon.costs.join(',')}"></span>
        </div>
      </div>`;
  }

  card.innerHTML = html;
  document.getElementById('setup-container').appendChild(card);
  updateEmptyState();
  updateCostLabels();
}

function updateEmptyState() {
  const setup = document.getElementById('setup-container');
  const hasCards = setup.querySelector('.instance-card');
  const hint = setup.querySelector('.empty-hint');
  if (!hasCards && !hint) {
    setup.insertAdjacentHTML('afterbegin', `<p class="empty-hint" data-i18n="emptySetup">${t('emptySetup')}</p>`);
  } else if (hasCards && hint) {
    hint.remove();
  }
}

function clearSetup() {
  document.querySelectorAll('.instance-card').forEach(card => card.remove());
  updateEmptyState();
}

// Kostenlose Stufen: Checkboxen werden angehakt und gesperrt
function applyFreeLevel(select) {
  const card = select.closest('.instance-card');
  const path = select.dataset.path;
  const free = parseInt(select.value, 10);
  card.querySelectorAll(`.upgrade-checkbox[data-path="${path}"]`).forEach(cb => {
    const tier = parseInt(cb.dataset.tier, 10);
    if (tier <= free) {
      cb.checked = true;
      cb.disabled = true;
    } else {
      cb.disabled = false;
    }
  });
}

// Stufen in Reihenfolge: Stufe N an → niedrigere an; Stufe N aus → höhere aus
function syncSequence(input) {
  const card = input.closest('.instance-card');
  const path = input.dataset.path;
  const tier = parseInt(input.dataset.tier, 10);
  card.querySelectorAll(`.upgrade-checkbox[data-path="${path}"]`).forEach(other => {
    const t = parseInt(other.dataset.tier, 10);
    if (input.checked && t <= tier) other.checked = true;
    if (!input.checked && t >= tier && !other.disabled) other.checked = false;
  });
}

function updateCostLabels() {
  const idx = currentDifficulty();
  document.querySelectorAll('.cost-label[data-costs]').forEach(el => {
    el.textContent = formatCost(parseCosts(el)[idx]);
  });
}

// ---------- Berechnung ----------

function roundTo5(x) {
  return Math.round(x / 5) * 5;
}

function getDiscountSettings() {
  const cb = id => !!document.getElementById(id)?.checked;
  const insider = cb('mk-insider');
  const mbPct = cb('mk-monkey-business') ? (insider ? 12 : 10) : 0;
  const mc = parseInt(document.getElementById('mk-monkey-commerce')?.value || '0', 10);
  return {
    mk: {
      cheapRangs: cb('mk-cheap-rangs'), advLogistics: cb('mk-adv-logistics'),
      conscription: cb('mk-conscription'), heroFavors: cb('mk-hero-favors'),
      glueBonus: cb('mk-glue-bonus'), aeronautic: cb('mk-aeronautic'),
      maiming: cb('mk-maiming'), liquefier: cb('mk-liquefier'), battery: cb('mk-battery'),
      hiValue: cb('mk-hi-value'), clusters: cb('mk-clusters'), magicTricks: cb('mk-magic-tricks'),
      cheaperDoubles: cb('mk-cheaper-doubles'), warmOak: cb('mk-warm-oak')
    },
    flatPack: cb('mk-flatpack'),
    subsidy: cb('mk-subsidy'),
    firstLine: cb('mk-firstline'),
    pct: mbPct + mc * 5
  };
}

function applyPercent(cost, pct) {
  return pct ? roundTo5(cost * (1 - pct / 100)) : cost;
}

const MILITARY = ['sniper-monkey', 'monkey-sub', 'monkey-buccaneer', 'monkey-ace', 'heli-pilot', 'mortar-monkey', 'dartling-gunner'];

// Festbeträge aus Monkey Knowledge pro Upgrade (negativ = günstiger)
function mkFlat(d, id, path, tier) {
  const m = d.mk;
  let f = 0;
  if (m.maiming && id === 'sniper-monkey' && path === 'top' && tier === 4) f -= 1000;
  if (m.liquefier && id === 'glue-gunner' && path === 'top' && tier === 4) f -= 1000;
  if (m.battery && id === 'mortar-monkey' && path === 'middle' && tier === 4) f -= 600;
  if (m.hiValue && id === 'spike-factory' && path === 'top' && tier === 4) f -= 1500;
  if (m.clusters && id === 'bomb-shooter' && path === 'bottom' && tier === 3) f -= 100;
  if (m.magicTricks && id === 'wizard-monkey' && tier === 1 && (path === 'top' || path === 'bottom')) f -= 25;
  if (m.cheaperDoubles && id === 'ninja-monkey' && path === 'top' && tier === 3) f -= 100;
  if (m.warmOak && id === 'druid' && path === 'middle' && tier === 2) f -= 100;
  return f;
}

function calculateCosts() {
  const idx = currentDifficulty();
  const cards = document.querySelectorAll('.instance-card');

  if (cards.length === 0) {
    alert(t('alertNoTower'));
    return;
  }

  const d = getDiscountSettings();

  const counts = {};
  cards.forEach(card => { counts[card.dataset.tower] = (counts[card.dataset.tower] || 0) + 1; });
  const seen = {};
  let militarySeen = 0;

  const breakdown = [];
  let total = 0;

  cards.forEach(card => {
    const tower = towersData.find(t => t.id === card.dataset.tower);
    const isHero = tower.type === 'hero';
    seen[tower.id] = (seen[tower.id] || 0) + 1;
    const ordinal = seen[tower.id];
    if (MILITARY.includes(tower.id)) militarySeen++;
    const militaryOrdinal = militarySeen;
    const label = counts[tower.id] > 1 ? `${tower.name} #${ordinal}` : tower.name;

    const discountNotes = [];
    const withBase = card.querySelector('.base-toggle').checked;
    let baseCost = null;
    let subtotal = 0;

    if (withBase) {
      let c = tower.base[idx];
      if (isHero && d.mk.heroFavors) c = Math.round(c * 0.9);
      if (!isHero) {
        if (d.mk.cheapRangs && tower.id === 'boomerang-monkey') c -= 50;
        if (d.mk.advLogistics && MILITARY.includes(tower.id)) c = Math.round(c * 0.95);
        if (d.mk.conscription && MILITARY.includes(tower.id) && militaryOrdinal === 1) c = Math.round(c * 2 / 3);
        if (d.mk.glueBonus && tower.id === 'glue-gunner' && ordinal === 1) c = 0;
        if (d.flatPack && (tower.id === 'banana-farm' || tower.id === 'monkey-village')) {
          c = roundTo5(c * 0.98);
          discountNotes.push('Flat Pack Buildings −2 %');
        }
        if (d.pct) {
          c = applyPercent(c, d.pct);
          discountNotes.push(`Monkey Village −${d.pct} %`);
        }
        if (d.subsidy && tower.id === 'banana-farm' && ordinal === 1) {
          c -= 100;
          discountNotes.push('Farm Subsidy −100');
        }
        if (d.firstLine && tower.id === 'spike-factory' && ordinal === 1) {
          c -= 150;
          discountNotes.push('First Last Line of Defense −150');
        }
      }
      baseCost = c;
      subtotal = c;
    }

    const upgrades = [];
    const freeNotes = [];

    ['top', 'middle', 'bottom'].forEach(path => {
      const freeEl = card.querySelector(`.free-select[data-path="${path}"]`);
      const free = freeEl ? parseInt(freeEl.value, 10) : 0;
      if (free > 0) freeNotes.push(`${pathLabel(path)}: ${t('freeTiers').replace('{n}', free)}`);

      card.querySelectorAll(`.upgrade-checkbox[data-path="${path}"]:checked`).forEach(input => {
        const tier = parseInt(input.dataset.tier, 10);
        if (tier <= free) return;
        const up = tower.paths[path].find(u => u.tier === tier);
        if (!up) return;
        let cost = Math.max(0, up.costs[idx] + mkFlat(d, tower.id, path, tier));
        if (d.mk.aeronautic && tower.id === 'monkey-ace' && tier === 5) cost = Math.round(cost * 0.9);
        if (!isHero && tier <= 3 && d.pct) cost = applyPercent(cost, d.pct);
        subtotal += cost;
        upgrades.push({ label: `${pathLabel(path)} – ${t('level')} ${tier}: ${up.name}`, cost });
      });
    });

    const paragonBox = card.querySelector('.paragon-checkbox');
    if (tower.paragon && paragonBox && paragonBox.checked) {
      const cost = tower.paragon.costs[idx];
      subtotal += cost;
      upgrades.push({ label: `⭐ Paragon – ${tower.paragon.name}`, cost });
    }

    total += subtotal;
    breakdown.push({
      name: label,
      emoji: tower.emoji,
      baseCost,
      upgrades,
      freeNotes: [...freeNotes, ...discountNotes.map(n => `🏷️ ${n}`)],
      subtotal
    });
  });

  displayResults(breakdown, total, idx);
}

function displayResults(breakdown, total, idx) {
  const container = document.getElementById('breakdown-container');
  container.innerHTML = '';

  breakdown.forEach(item => {
    const div = document.createElement('div');
    div.className = 'breakdown-item';

    let upgradesList = '';
    if (item.upgrades.length > 0) {
      upgradesList = '<ul class="upgrade-list">';
      item.upgrades.forEach(u => {
        upgradesList += `<li>${u.label} <span class="item-cost">${formatCost(u.cost)}</span></li>`;
      });
      upgradesList += '</ul>';
    } else {
      upgradesList = `<p class="no-upgrades">${t('noUpgrades')}</p>`;
    }

    const baseLine = item.baseCost === null
      ? `<p class="no-upgrades">${t('noBase')}</p>`
      : `<p>${t('baseCost')} <span class="item-cost">${formatCost(item.baseCost)}</span></p>`;

    const freeLine = item.freeNotes.length
      ? `<p class="free-note">🎁 ${item.freeNotes.join(' · ')}</p>`
      : '';

    div.innerHTML = `
      <h3>${item.emoji} ${item.name}</h3>
      ${baseLine}
      ${freeLine}
      ${upgradesList}
      <p class="subtotal">${t('sumLabel')} ${formatCost(item.subtotal)}</p>`;
    container.appendChild(div);
  });

  document.getElementById('total-cost').textContent = total.toLocaleString(currentLocale());
  document.getElementById('results-section').dataset.difficulty = DIFFICULTY_LABELS[idx];
  document.getElementById('results-section').style.display = 'block';
  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function resetCalculator() {
  clearSetup();
  document.getElementById('results-section').style.display = 'none';
  document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
}

function exportResults() {
  const total = document.getElementById('total-cost').textContent;
  const difficulty = DIFFICULTY_LABELS[currentDifficulty()];
  const text = `${t('exportTitle')}\n${t('difficultyLabel')} ${difficulty}\n${t('total')}: ${total} 💰`;
  navigator.clipboard.writeText(text).then(() => alert(t('copied')));
}

function addOneOfEachTower() {
  towersData.forEach(tower => addInstance(tower.id));
}

function filterTowers() {
  const term = document.getElementById('tower-search').value.trim().toLowerCase();
  document.querySelectorAll('.catalog-card').forEach(el => {
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
  try { localStorage.setItem('darkMode', darkMode); } catch (e) { /* nicht verfügbar */ }
  document.body.classList.toggle('dark-mode', darkMode);
  updateThemeToggle();
}

function updateThemeToggle() {
  document.getElementById('theme-toggle').textContent = darkMode ? '☀️' : '🌙';
}

// ---------- Start ----------

document.addEventListener('DOMContentLoaded', () => {
  loadDarkModePreference();
  createSetupArea();
  renderCatalog();
  updateEmptyState();
  let langPref = 'auto';
  try { langPref = localStorage.getItem('lang') || 'auto'; } catch (e) { /* ignore */ }
  applyLanguage(langPref);
  document.getElementById('lang-select').addEventListener('change', e => {
    try { localStorage.setItem('lang', e.target.value); } catch (err) { /* ignore */ }
    applyLanguage(e.target.value);
  });

  document.getElementById('difficulty-select').addEventListener('change', updateCostLabels);

  // Katalog: Turm hinzufügen
  document.getElementById('towers-container').addEventListener('click', e => {
    if (e.target.classList.contains('add-instance')) addInstance(e.target.dataset.tower);
  });

  // Setup: Entfernen, Freistufen, Reihenfolge
  const setup = document.getElementById('setup-container');
  setup.addEventListener('click', e => {
    if (e.target.classList.contains('remove-instance')) {
      e.target.closest('.instance-card').remove();
      updateEmptyState();
    }
  });
  setup.addEventListener('change', e => {
    if (e.target.classList.contains('free-select')) applyFreeLevel(e.target);
    if (e.target.classList.contains('upgrade-checkbox')) syncSequence(e.target);
  });

  document.getElementById('calculate-btn').addEventListener('click', calculateCosts);
  document.getElementById('reset-btn').addEventListener('click', resetCalculator);
  document.getElementById('export-btn').addEventListener('click', exportResults);
  document.getElementById('select-all-btn').addEventListener('click', addOneOfEachTower);
  document.getElementById('deselect-all-btn').addEventListener('click', clearSetup);
  document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
  document.getElementById('tower-search').addEventListener('input', filterTowers);
});
