// Sprachpaket 1 für den Bloons Upgrade Calculator:
// Portugiesisch (pt), Schwedisch (sv), Dänisch (da), Tschechisch (cs), Rumänisch (ro), Griechisch (el)
// Wird NACH app_improved.js geladen und ergänzt I18N, LOCALES und SUPPORTED_LANGS.
Object.assign(I18N, {
  pt: {
    subtitle: 'Calcule o custo total das melhorias das suas torres', selectTitle: 'Escolha torres e melhorias',
    selectAll: 'Adicionar todas', deselectAll: 'Limpar lista', searchPlaceholder: 'Pesquisar torres...',
    calculate: 'Calcular custo', add: '＋ Adicionar', difficultyLabel: 'Dificuldade:',
    discountTitle: '🏷️ Descontos e Monkey Knowledge',
    discountNote: 'Os descontos da Vila dos Macacos valem para colocação e melhorias até o nível 3; heróis estão excluídos. O cálculo assume que todas as torres estão no alcance.',
    commerce: 'Monkey Commerce (−5 % cada, máx. 3):', setupTitle: '🧩 Sua configuração',
    emptySetup: 'Ainda não há torres. Adicione uma torre acima.', basePrice: 'Incluir preço base',
    basePriceHint: '(desligado, p. ex. para Insta Monkeys)', freeUpTo: 'Grátis até o nível', level: 'Nível',
    remove: 'Remover', pathTop: '🔴 Caminho superior', pathMiddle: '🟡 Caminho central', pathBottom: '🔵 Caminho inferior',
    freeTiers: 'Níveis 1–{n} grátis', baseCost: 'Custo base:', sumLabel: 'Subtotal:',
    noBase: 'Preço base não incluído', noUpgrades: 'Nenhuma melhoria contada',
    resultsTitle: '💰 Detalhamento dos custos', totalCost: 'Custo total', copyResult: 'Copiar resultado',
    reset: 'Redefinir', alertNoTower: 'Adicione pelo menos uma torre!', copied: 'Resultado copiado! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Custo total', language: 'Idioma',
    aiNotice: '🤖 Este projeto foi criado com a ajuda de IA (Claude, Anthropic). Os custos vêm da <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki do BTD6</a> e foram verificados por amostragem. Sem garantia, pois os valores do jogo mudam com as atualizações.'
  },
  sv: {
    subtitle: 'Beräkna den totala kostnaden för dina tornuppgraderingar', selectTitle: 'Välj torn och uppgraderingar',
    selectAll: 'Lägg till alla', deselectAll: 'Töm listan', searchPlaceholder: 'Sök torn...',
    calculate: 'Beräkna kostnad', add: '＋ Lägg till', difficultyLabel: 'Svårighetsgrad:',
    discountTitle: '🏷️ Rabatter & Monkey Knowledge',
    discountNote: 'Rabatterna från Apbyn gäller för placering och uppgraderingar upp till nivå 3; hjältar undantas. Beräkningen förutsätter att alla torn finns inom räckvidd.',
    commerce: 'Monkey Commerce (−5 % var, max 3):', setupTitle: '🧩 Din uppställning',
    emptySetup: 'Inga torn ännu. Lägg till ett torn ovan.', basePrice: 'Inkludera grundpris',
    basePriceHint: '(av, t.ex. för Insta Monkeys)', freeUpTo: 'Gratis upp till nivå', level: 'Nivå',
    remove: 'Ta bort', pathTop: '🔴 Övre spåret', pathMiddle: '🟡 Mittenspåret', pathBottom: '🔵 Undre spåret',
    freeTiers: 'Nivå 1–{n} gratis', baseCost: 'Grundkostnad:', sumLabel: 'Delsumma:',
    noBase: 'Grundpriset ingår inte', noUpgrades: 'Inga uppgraderingar räknade',
    resultsTitle: '💰 Kostnadsfördelning', totalCost: 'Total kostnad', copyResult: 'Kopiera resultat',
    reset: 'Återställ', alertNoTower: 'Lägg till minst ett torn!', copied: 'Resultatet kopierades! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Total kostnad', language: 'Språk',
    aiNotice: '🤖 Det här projektet skapades med hjälp av AI (Claude, Anthropic). Kostnaderna kommer från <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-wikin</a> och har stickprovskontrollerats. Utan garanti, eftersom spelvärden ändras med uppdateringar.'
  },
  da: {
    subtitle: 'Beregn de samlede omkostninger til dine tårnopgraderinger', selectTitle: 'Vælg tårne og opgraderinger',
    selectAll: 'Tilføj alle', deselectAll: 'Ryd listen', searchPlaceholder: 'Søg efter tårne...',
    calculate: 'Beregn pris', add: '＋ Tilføj', difficultyLabel: 'Sværhedsgrad:',
    discountTitle: '🏷️ Rabatter & Monkey Knowledge',
    discountNote: 'Rabatterne fra Abeby gælder for placering og opgraderinger op til niveau 3; helte er udelukket. Beregningen forudsætter, at alle tårne er inden for rækkevidde.',
    commerce: 'Monkey Commerce (−5 % hver, maks. 3):', setupTitle: '🧩 Din opsætning',
    emptySetup: 'Ingen tårne endnu. Tilføj et tårn ovenfor.', basePrice: 'Medregn grundpris',
    basePriceHint: '(fra, f.eks. til Insta Monkeys)', freeUpTo: 'Gratis op til niveau', level: 'Niveau',
    remove: 'Fjern', pathTop: '🔴 Øverste sti', pathMiddle: '🟡 Midterste sti', pathBottom: '🔵 Nederste sti',
    freeTiers: 'Niveau 1–{n} gratis', baseCost: 'Grundpris:', sumLabel: 'Subtotal:',
    noBase: 'Grundprisen er ikke medregnet', noUpgrades: 'Ingen opgraderinger talt med',
    resultsTitle: '💰 Omkostningsoversigt', totalCost: 'Samlet pris', copyResult: 'Kopiér resultat',
    reset: 'Nulstil', alertNoTower: 'Tilføj mindst ét tårn!', copied: 'Resultat kopieret! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Samlet pris', language: 'Sprog',
    aiNotice: '🤖 Dette projekt er lavet med hjælp fra AI (Claude, Anthropic). Priserne stammer fra <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-wikien</a> og er stikprøvekontrolleret. Uden garanti, da spilværdier ændres med opdateringer.'
  },
  cs: {
    subtitle: 'Spočítejte celkové náklady na vylepšení vašich věží', selectTitle: 'Vyberte věže a vylepšení',
    selectAll: 'Přidat všechny', deselectAll: 'Vyprázdnit seznam', searchPlaceholder: 'Hledat věže...',
    calculate: 'Spočítat náklady', add: '＋ Přidat', difficultyLabel: 'Obtížnost:',
    discountTitle: '🏷️ Slevy a Monkey Knowledge',
    discountNote: 'Slevy z Opičí vesnice platí pro umístění a vylepšení až do úrovně 3; hrdinové jsou vyloučeni. Výpočet předpokládá, že všechny věže jsou v dosahu.',
    commerce: 'Monkey Commerce (každá −5 %, max. 3):', setupTitle: '🧩 Vaše sestava',
    emptySetup: 'Zatím žádné věže. Přidejte věž nahoře.', basePrice: 'Započítat základní cenu',
    basePriceHint: '(vypnuto, např. pro Insta Monkeys)', freeUpTo: 'Zdarma až do úrovně', level: 'Úroveň',
    remove: 'Odebrat', pathTop: '🔴 Horní cesta', pathMiddle: '🟡 Střední cesta', pathBottom: '🔵 Dolní cesta',
    freeTiers: 'Úrovně 1–{n} zdarma', baseCost: 'Základní cena:', sumLabel: 'Mezisoučet:',
    noBase: 'Základní cena nezapočítána', noUpgrades: 'Žádná vylepšení nezapočítána',
    resultsTitle: '💰 Rozpis nákladů', totalCost: 'Celkové náklady', copyResult: 'Kopírovat výsledek',
    reset: 'Resetovat', alertNoTower: 'Přidejte alespoň jednu věž!', copied: 'Výsledek zkopírován! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Celkové náklady', language: 'Jazyk',
    aiNotice: '🤖 Tento projekt vznikl s pomocí AI (Claude, Anthropic). Údaje o nákladech pochází z <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki BTD6</a> a byly náhodně ověřeny. Bez záruky, protože herní hodnoty se s aktualizacemi mění.'
  },
  ro: {
    subtitle: 'Calculează costul total al upgrade-urilor turelor tale', selectTitle: 'Alege turele și upgrade-urile',
    selectAll: 'Adaugă toate', deselectAll: 'Golește lista', searchPlaceholder: 'Caută turele...',
    calculate: 'Calculează costul', add: '＋ Adaugă', difficultyLabel: 'Dificultate:',
    discountTitle: '🏷️ Reduceri & Monkey Knowledge',
    discountNote: 'Reducerile Satului Maimuțelor se aplică la plasare și upgrade-uri până la nivelul 3; eroii sunt excluși. Calculul presupune că toate turele sunt în rază.',
    commerce: 'Monkey Commerce (−5 % fiecare, max. 3):', setupTitle: '🧩 Configurația ta',
    emptySetup: 'Încă nu există ture. Adaugă o turelă mai sus.', basePrice: 'Include prețul de bază',
    basePriceHint: '(dezactivat, de ex. pentru Insta Monkeys)', freeUpTo: 'Gratuit până la nivelul', level: 'Nivel',
    remove: 'Elimină', pathTop: '🔴 Cale superioară', pathMiddle: '🟡 Cale mijlocie', pathBottom: '🔵 Cale inferioară',
    freeTiers: 'Nivelurile 1–{n} gratuite', baseCost: 'Cost de bază:', sumLabel: 'Subtotal:',
    noBase: 'Prețul de bază nu este inclus', noUpgrades: 'Niciun upgrade numărat',
    resultsTitle: '💰 Defalcarea costurilor', totalCost: 'Cost total', copyResult: 'Copiază rezultatul',
    reset: 'Resetează', alertNoTower: 'Adaugă cel puțin o turelă!', copied: 'Rezultat copiat! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Cost total', language: 'Limbă',
    aiNotice: '🤖 Acest proiect a fost creat cu ajutorul AI (Claude, Anthropic). Costurile provin de pe <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki-ul BTD6</a> și au fost verificate pe eșantion. Fără garanție, deoarece valorile jocului se schimbă cu actualizările.'
  },
  el: {
    subtitle: 'Υπολογίστε το συνολικό κόστος των αναβαθμίσεων των πύργων σας', selectTitle: 'Επιλέξτε πύργους και αναβαθμίσεις',
    selectAll: 'Προσθήκη όλων', deselectAll: 'Καθαρισμός λίστας', searchPlaceholder: 'Αναζήτηση πύργων...',
    calculate: 'Υπολογισμός κόστους', add: '＋ Προσθήκη', difficultyLabel: 'Δυσκολία:',
    discountTitle: '🏷️ Εκπτώσεις & Monkey Knowledge',
    discountNote: 'Οι εκπτώσεις του Χωριού Μαϊμούδων ισχύουν για την τοποθέτηση και τις αναβαθμίσεις έως το επίπεδο 3· οι ήρωες εξαιρούνται. Ο υπολογισμός προϋποθέτει ότι όλοι οι πύργοι βρίσκονται εντός εμβέλειας.',
    commerce: 'Monkey Commerce (−5 % ανά, μέγ. 3):', setupTitle: '🧩 Η διάταξή σας',
    emptySetup: 'Δεν υπάρχουν πύργοι ακόμη. Προσθέστε έναν πύργο παραπάνω.', basePrice: 'Συμπερίληψη βασικής τιμής',
    basePriceHint: '(ανενεργό, π.χ. για Insta Monkeys)', freeUpTo: 'Δωρεάν έως το επίπεδο', level: 'Επίπεδο',
    remove: 'Αφαίρεση', pathTop: '🔴 Επάνω μονοπάτι', pathMiddle: '🟡 Μεσαίο μονοπάτι', pathBottom: '🔵 Κάτω μονοπάτι',
    freeTiers: 'Επίπεδα 1–{n} δωρεάν', baseCost: 'Βασικό κόστος:', sumLabel: 'Υποσύνολο:',
    noBase: 'Η βασική τιμή δεν περιλαμβάνεται', noUpgrades: 'Δεν μετρήθηκαν αναβαθμίσεις',
    resultsTitle: '💰 Ανάλυση κόστους', totalCost: 'Συνολικό κόστος', copyResult: 'Αντιγραφή αποτελέσματος',
    reset: 'Επαναφορά', alertNoTower: 'Προσθέστε τουλάχιστον έναν πύργο!', copied: 'Το αποτέλεσμα αντιγράφηκε! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Συνολικό κόστος', language: 'Γλώσσα',
    aiNotice: '🤖 Αυτό το έργο δημιουργήθηκε με τη βοήθεια της ΤΝ (Claude, Anthropic). Τα κόστη προέρχονται από το <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki του BTD6</a> και ελέγχθηκαν δειγματοληπτικά. Χωρίς εγγύηση, επειδή οι τιμές του παιχνιδιού αλλάζουν με τις ενημερώσεις.'
  }
});

Object.assign(LOCALES, { pt: 'pt-PT', sv: 'sv-SE', da: 'da-DK', cs: 'cs-CZ', ro: 'ro-RO', el: 'el-GR' });
SUPPORTED_LANGS.push('pt', 'sv', 'da', 'cs', 'ro', 'el');

// Sprachauswahl ergänzen (das Skript steht am Ende der Seite, das Auswahlfeld existiert bereits)
(function addLanguageOptions() {
  const sel = document.getElementById('lang-select');
  if (!sel) return;
  [['pt', 'Português'], ['sv', 'Svenska'], ['da', 'Dansk'], ['cs', 'Čeština'], ['ro', 'Română'], ['el', 'Ελληνικά']]
    .forEach(([value, label]) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = label;
      sel.appendChild(opt);
    });
})();
