// Sprachpaket 2 für den Bloons Upgrade Calculator:
// Bulgarisch (bg), Kroatisch (hr), Estnisch (et), Finnisch (fi), Ungarisch (hu), Irisch (ga),
// Lettisch (lv), Litauisch (lt), Maltesisch (mt), Slowakisch (sk), Slowenisch (sl)
// Wird NACH app_improved.js geladen und ergänzt I18N, LOCALES und SUPPORTED_LANGS.
Object.assign(I18N, {
  bg: {
    subtitle: 'Изчислете общата цена на подобренията на вашите кули', selectTitle: 'Изберете кули и подобрения',
    selectAll: 'Добави всички', deselectAll: 'Изчисти списъка', searchPlaceholder: 'Търсене на кули...',
    calculate: 'Изчисли цената', add: '＋ Добави', difficultyLabel: 'Трудност:',
    discountTitle: '🏷️ Отстъпки и Monkey Knowledge',
    discountNote: 'Отстъпките от Маймунското село важат за поставяне и подобрения до ниво 3; героите са изключени. Изчислението предполага, че всички кули са в обсег.',
    commerce: 'Monkey Commerce (−5 % всяка, макс. 3):', setupTitle: '🧩 Вашата конфигурация',
    emptySetup: 'Все още няма кули. Добавете кула по-горе.', basePrice: 'Включи базовата цена',
    basePriceHint: '(изключено, напр. за Insta Monkeys)', freeUpTo: 'Безплатно до ниво', level: 'Ниво',
    remove: 'Премахни', pathTop: '🔴 Горен път', pathMiddle: '🟡 Среден път', pathBottom: '🔵 Долен път',
    freeTiers: 'Нива 1–{n} безплатно', baseCost: 'Базова цена:', sumLabel: 'Междинна сума:',
    noBase: 'Базовата цена не е включена', noUpgrades: 'Няма преброени подобрения',
    resultsTitle: '💰 Разбивка на разходите', totalCost: 'Общо разходи', copyResult: 'Копирай резултата',
    reset: 'Нулиране', alertNoTower: 'Добавете поне една кула!', copied: 'Резултатът е копиран! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Общо разходи', language: 'Език',
    aiNotice: '🤖 Този проект е създаден с помощта на ИИ (Claude, Anthropic). Цените идват от <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">уикито на BTD6</a> и са проверени на извадка. Без гаранция, тъй като стойностите в играта се променят с актуализациите.'
  },
  hr: {
    subtitle: 'Izračunajte ukupni trošak nadogradnji svojih kula', selectTitle: 'Odaberite kule i nadogradnje',
    selectAll: 'Dodaj sve', deselectAll: 'Očisti popis', searchPlaceholder: 'Traži kule...',
    calculate: 'Izračunaj trošak', add: '＋ Dodaj', difficultyLabel: 'Težina:',
    discountTitle: '🏷️ Popusti i Monkey Knowledge',
    discountNote: 'Popusti iz Majmunskog sela vrijede za postavljanje i nadogradnje do razine 3; heroji su isključeni. Izračun pretpostavlja da su sve kule u dosegu.',
    commerce: 'Monkey Commerce (−5 % svaki, maks. 3):', setupTitle: '🧩 Vaša postava',
    emptySetup: 'Još nema kula. Dodajte kulu iznad.', basePrice: 'Uključi osnovnu cijenu',
    basePriceHint: '(isključeno, npr. za Insta Monkeys)', freeUpTo: 'Besplatno do razine', level: 'Razina',
    remove: 'Ukloni', pathTop: '🔴 Gornji put', pathMiddle: '🟡 Srednji put', pathBottom: '🔵 Donji put',
    freeTiers: 'Razine 1–{n} besplatno', baseCost: 'Osnovni trošak:', sumLabel: 'Međuzbroj:',
    noBase: 'Osnovna cijena nije uključena', noUpgrades: 'Nijedna nadogradnja nije uračunata',
    resultsTitle: '💰 Raščlamba troškova', totalCost: 'Ukupan trošak', copyResult: 'Kopiraj rezultat',
    reset: 'Poništi', alertNoTower: 'Dodajte barem jednu kulu!', copied: 'Rezultat kopiran! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Ukupan trošak', language: 'Jezik',
    aiNotice: '🤖 Ovaj projekt nastao je uz pomoć umjetne inteligencije (Claude, Anthropic). Podaci o troškovima dolaze s <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6 wikija</a> i provjereni su uzorkovanjem. Bez jamstva, jer se vrijednosti u igri mijenjaju s ažuriranjima.'
  },
  et: {
    subtitle: 'Arvutage oma tornide täiendamise kogukulu', selectTitle: 'Valige tornid ja täiendused',
    selectAll: 'Lisa kõik', deselectAll: 'Tühjenda loend', searchPlaceholder: 'Otsi torne...',
    calculate: 'Arvuta kulu', add: '＋ Lisa', difficultyLabel: 'Raskusaste:',
    discountTitle: '🏷️ Soodustused & Monkey Knowledge',
    discountNote: 'Ahvilinna soodustused kehtivad paigutamisele ja täiendustele kuni tasemeni 3; kangelased on välja arvatud. Arvutus eeldab, et kõik tornid on ulatuses.',
    commerce: 'Monkey Commerce (−5 % igaüks, maks. 3):', setupTitle: '🧩 Sinu seadistus',
    emptySetup: 'Torne veel pole. Lisa torn ülal.', basePrice: 'Arvesta põhihind',
    basePriceHint: '(väljas, nt Insta Monkeys puhul)', freeUpTo: 'Tasuta kuni tasemeni', level: 'Tase',
    remove: 'Eemalda', pathTop: '🔴 Ülemine tee', pathMiddle: '🟡 Keskmine tee', pathBottom: '🔵 Alumine tee',
    freeTiers: 'Tasemed 1–{n} tasuta', baseCost: 'Põhikulu:', sumLabel: 'Vahesumma:',
    noBase: 'Põhihinda ei arvestata', noUpgrades: 'Täiendusi ei arvestatud',
    resultsTitle: '💰 Kulude erittelu', totalCost: 'Kogukulu', copyResult: 'Kopeeri tulemus',
    reset: 'Lähtesta', alertNoTower: 'Lisa vähemalt üks torn!', copied: 'Tulemus kopeeritud! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Kogukulu', language: 'Keel',
    aiNotice: '🤖 See projekt on loodud tehisintellekti (Claude, Anthropic) abil. Kulud pärinevad <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6 vikist</a> ja on juhuslikult kontrollitud. Garantiita, sest mänguväärtused muutuvad uuendustega.'
  },
  fi: {
    subtitle: 'Laske tornien päivitysten kokonaiskustannus', selectTitle: 'Valitse tornit ja päivitykset',
    selectAll: 'Lisää kaikki', deselectAll: 'Tyhjennä lista', searchPlaceholder: 'Hae torneja...',
    calculate: 'Laske kustannus', add: '＋ Lisää', difficultyLabel: 'Vaikeustaso:',
    discountTitle: '🏷️ Alennukset & Monkey Knowledge',
    discountNote: 'Apinakylän alennukset koskevat sijoittamista ja päivityksiä tasolle 3 asti; sankarit on jätetty pois. Laskenta olettaa, että kaikki tornit ovat kantaman sisällä.',
    commerce: 'Monkey Commerce (−5 % kumpikin, enint. 3):', setupTitle: '🧩 Sinun kokoonpanosi',
    emptySetup: 'Ei torneja vielä. Lisää torni yllä.', basePrice: 'Sisällytä perushinta',
    basePriceHint: '(pois päältä, esim. Insta Monkeys)', freeUpTo: 'Ilmainen tasoon asti', level: 'Taso',
    remove: 'Poista', pathTop: '🔴 Yläpolku', pathMiddle: '🟡 Keskipolku', pathBottom: '🔵 Alapolku',
    freeTiers: 'Tasot 1–{n} ilmaiseksi', baseCost: 'Perushinta:', sumLabel: 'Välisumma:',
    noBase: 'Perushintaa ei lasketa mukaan', noUpgrades: 'Päivityksiä ei laskettu',
    resultsTitle: '💰 Kustannuserittely', totalCost: 'Kokonaiskustannus', copyResult: 'Kopioi tulos',
    reset: 'Nollaa', alertNoTower: 'Lisää vähintään yksi torni!', copied: 'Tulos kopioitu! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Kokonaiskustannus', language: 'Kieli',
    aiNotice: '🤖 Tämä projekti on tehty tekoälyn (Claude, Anthropic) avulla. Kustannustiedot ovat peräisin <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-wikistä</a> ja ne on tarkistettu otannalla. Ei takuuta, koska pelin arvot muuttuvat päivitysten myötä.'
  },
  hu: {
    subtitle: 'Számolja ki tornjai fejlesztéseinek teljes költségét', selectTitle: 'Válasszon tornokat és fejlesztéseket',
    selectAll: 'Mind hozzáadása', deselectAll: 'Lista törlése', searchPlaceholder: 'Tornok keresése...',
    calculate: 'Költség számítása', add: '＋ Hozzáadás', difficultyLabel: 'Nehézség:',
    discountTitle: '🏷️ Kedvezmények & Monkey Knowledge',
    discountNote: 'A Majomfalu kedvezményei az elhelyezésre és a 3. szintig terjedő fejlesztésekre vonatkoznak; a hősök kivételek. A számítás feltételezi, hogy minden torony hatótávolságon belül van.',
    commerce: 'Monkey Commerce (egyenként −5 %, max. 3):', setupTitle: '🧩 Az Ön összeállítása',
    emptySetup: 'Még nincs torony. Adjon hozzá egyet fent.', basePrice: 'Alapár beszámítása',
    basePriceHint: '(kikapcsolva, pl. Insta Monkeys esetén)', freeUpTo: 'Ingyenes eddig a szintig', level: 'Szint',
    remove: 'Eltávolítás', pathTop: '🔴 Felső ág', pathMiddle: '🟡 Középső ág', pathBottom: '🔵 Alsó ág',
    freeTiers: '1–{n}. szint ingyenes', baseCost: 'Alapköltség:', sumLabel: 'Részösszeg:',
    noBase: 'Az alapár nincs beszámítva', noUpgrades: 'Nincs beszámított fejlesztés',
    resultsTitle: '💰 Költségbontás', totalCost: 'Teljes költség', copyResult: 'Eredmény másolása',
    reset: 'Visszaállítás', alertNoTower: 'Adjon hozzá legalább egy tornyot!', copied: 'Eredmény másolva! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Teljes költség', language: 'Nyelv',
    aiNotice: '🤖 Ez a projekt mesterséges intelligencia (Claude, Anthropic) segítségével készült. A költségadatok a <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6-wikiből</a> származnak, és mintavétellel ellenőrizték őket. Garancia nélkül, mivel a játék értékei frissítésekkel változnak.'
  },
  ga: {
    subtitle: 'Ríomh costas iomlán uasghrádaithe do chuid túir', selectTitle: 'Roghnaigh túir agus uasghráduithe',
    selectAll: 'Cuir gach ceann leis', deselectAll: 'Glan an liosta', searchPlaceholder: 'Cuardaigh túir...',
    calculate: 'Ríomh an costas', add: '＋ Cuir leis', difficultyLabel: 'Deacracht:',
    discountTitle: '🏷️ Lascaine & Monkey Knowledge',
    discountNote: 'Baineann lascainí Shráidbhaile na Muc le suiteáil agus uasghráduithe suas go leibhéal 3; eisionn sé laochra. Glacann an ríomh leis go bhfuil gach túr laistigh den raon.',
    commerce: 'Monkey Commerce (−5 % an ceann, uas. 3):', setupTitle: '🧩 Do shocrú',
    emptySetup: 'Níl túir ann go fóill. Cuir túr leis thuas.', basePrice: 'Cuir an praghas bunúsach san áireamh',
    basePriceHint: '(as, m.sh. do Insta Monkeys)', freeUpTo: 'Saor in aisce suas go leibhéal', level: 'Leibhéal',
    remove: 'Bain', pathTop: '🔴 Bealach uachtarach', pathMiddle: '🟡 Bealach lárnach', pathBottom: '🔵 Bealach íochtarach',
    freeTiers: 'Leibhéil 1–{n} saor in aisce', baseCost: 'Costas bunúsach:', sumLabel: 'Fo-iomlán:',
    noBase: 'Níl an praghas bunúsach san áireamh', noUpgrades: 'Níor cuireadh uasghráduithe san áireamh',
    resultsTitle: '💰 Briseadh síos na gcostas', totalCost: 'Costas iomlán', copyResult: 'Cóipeáil an toradh',
    reset: 'Athshocraigh', alertNoTower: 'Cuir túr amháin ar a laghad leis!', copied: 'Cóipeáladh an toradh! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Costas iomlán', language: 'Teanga',
    aiNotice: '🤖 Cruthaíodh an tionscadal seo le cabhair ó AI (Claude, Anthropic). Tagann na sonraí costais ó <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">vicí BTD6</a> agus seiceáladh go randamach iad. Gan ráthaíocht, mar athraíonn luachanna an chluiche le nuashonruithe.'
  },
  lv: {
    subtitle: 'Aprēķiniet savu torņu uzlabojumu kopējās izmaksas', selectTitle: 'Izvēlieties torņus un uzlabojumus',
    selectAll: 'Pievienot visus', deselectAll: 'Notīrīt sarakstu', searchPlaceholder: 'Meklēt torņus...',
    calculate: 'Aprēķināt izmaksas', add: '＋ Pievienot', difficultyLabel: 'Grūtības pakāpe:',
    discountTitle: '🏷️ Atlaides & Monkey Knowledge',
    discountNote: 'Pērtiķu ciema atlaides attiecas uz novietošanu un uzlabojumiem līdz 3. līmenim; varoņi ir izslēgti. Aprēķins pieņem, ka visi torņi atrodas darbības rādiusā.',
    commerce: 'Monkey Commerce (katrs −5 %, maks. 3):', setupTitle: '🧩 Jūsu konfigurācija',
    emptySetup: 'Vēl nav torņu. Pievienojiet torni augstāk.', basePrice: 'Iekļaut bāzes cenu',
    basePriceHint: '(izslēgts, piem., Insta Monkeys gadījumā)', freeUpTo: 'Bez maksas līdz līmenim', level: 'Līmenis',
    remove: 'Noņemt', pathTop: '🔴 Augšējais ceļš', pathMiddle: '🟡 Vidējais ceļš', pathBottom: '🔵 Apakšējais ceļš',
    freeTiers: 'Līmeņi 1–{n} bez maksas', baseCost: 'Bāzes izmaksas:', sumLabel: 'Starpsumma:',
    noBase: 'Bāzes cena nav iekļauta', noUpgrades: 'Uzlabojumi nav ieskaitīti',
    resultsTitle: '💰 Izmaksu sadalījums', totalCost: 'Kopējās izmaksas', copyResult: 'Kopēt rezultātu',
    reset: 'Atiestatīt', alertNoTower: 'Pievienojiet vismaz vienu torni!', copied: 'Rezultāts nokopēts! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Kopējās izmaksas', language: 'Valoda',
    aiNotice: '🤖 Šo projektu izveidoja ar mākslīgā intelekta (Claude, Anthropic) palīdzību. Izmaksu dati ir no <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6 vikipēdijas</a> un ir pārbaudīti izlases veidā. Bez garantijas, jo spēles vērtības mainās ar atjauninājumiem.'
  },
  lt: {
    subtitle: 'Apskaičiuokite bendrą bokštų patobulinimų kainą', selectTitle: 'Pasirinkite bokštus ir patobulinimus',
    selectAll: 'Pridėti visus', deselectAll: 'Išvalyti sąrašą', searchPlaceholder: 'Ieškoti bokštų...',
    calculate: 'Apskaičiuoti kainą', add: '＋ Pridėti', difficultyLabel: 'Sudėtingumas:',
    discountTitle: '🏷️ Nuolaidos & Monkey Knowledge',
    discountNote: 'Beždžionių kaimo nuolaidos galioja statymui ir patobulinimams iki 3 lygio; herojai neįskaičiuojami. Skaičiavime laikoma, kad visi bokštai yra veikimo zonoje.',
    commerce: 'Monkey Commerce (po −5 %, maks. 3):', setupTitle: '🧩 Jūsų sąranka',
    emptySetup: 'Bokštų dar nėra. Pridėkite bokštą viršuje.', basePrice: 'Įskaičiuoti bazinę kainą',
    basePriceHint: '(išjungta, pvz., Insta Monkeys atveju)', freeUpTo: 'Nemokamai iki lygio', level: 'Lygis',
    remove: 'Pašalinti', pathTop: '🔴 Viršutinis kelias', pathMiddle: '🟡 Vidurinis kelias', pathBottom: '🔵 Apatinis kelias',
    freeTiers: 'Lygiai 1–{n} nemokamai', baseCost: 'Bazinė kaina:', sumLabel: 'Tarpinė suma:',
    noBase: 'Bazinė kaina neįskaičiuota', noUpgrades: 'Nė vienas patobulinimas neįskaičiuotas',
    resultsTitle: '💰 Išlaidų suvestinė', totalCost: 'Bendra kaina', copyResult: 'Kopijuoti rezultatą',
    reset: 'Atstatyti', alertNoTower: 'Pridėkite bent vieną bokštą!', copied: 'Rezultatas nukopijuotas! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Bendra kaina', language: 'Kalba',
    aiNotice: '🤖 Šis projektas sukurtas padedant dirbtiniam intelektui (Claude, Anthropic). Kainų duomenys paimti iš <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">BTD6 vikio</a> ir patikrinti atrankiniu būdu. Be garantijos, nes žaidimo vertės keičiasi atnaujinimais.'
  },
  mt: {
    subtitle: 'Ikkalkula l-ispiża totali tat-titjib tat-torrijiet tiegħek', selectTitle: 'Agħżel torrijiet u titjib',
    selectAll: 'Żid lilhom kollha', deselectAll: 'Ħassar il-lista', searchPlaceholder: 'Fittex torrijiet...',
    calculate: 'Ikkalkula l-ispiża', add: '＋ Żid', difficultyLabel: 'Diffikultà:',
    discountTitle: '🏷️ Skontijiet & Monkey Knowledge',
    discountNote: 'L-iskontijiet tar-Raħal tal-Ġrieden japplikaw għat-tqegħid u t-titjib sal-livell 3; l-eroj huma esklużi. Il-kalkolu jassumi li t-torrijiet kollha huma fil-firxa.',
    commerce: 'Monkey Commerce (−5 % kull wieħed, max 3):', setupTitle: '🧩 Is-setup tiegħek',
    emptySetup: 'Għadu m’hemm l-ebda torri. Żid torri hawn fuq.', basePrice: 'Inkludi l-prezz bażi',
    basePriceHint: '(mitfi, eż. għal Insta Monkeys)', freeUpTo: 'B’xejn sal-livell', level: 'Livell',
    remove: 'Neħħi', pathTop: '🔴 Triq ta’ fuq', pathMiddle: '🟡 Triq ta’ nofs', pathBottom: '🔵 Triq ta’ isfel',
    freeTiers: 'Livelli 1–{n} b’xejn', baseCost: 'Spiża bażi:', sumLabel: 'Subtotal:',
    noBase: 'Il-prezz bażi mhuwiex inkluż', noUpgrades: 'Ebda titjib ma ġie kkontat',
    resultsTitle: '💰 Qsim tal-ispejjeż', totalCost: 'Spiża totali', copyResult: 'Ikopja r-riżultat',
    reset: 'Erġa’ ibda', alertNoTower: 'Żid mill-inqas torri waħda!', copied: 'Ir-riżultat ġie kkupjat! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Spiża totali', language: 'Lingwa',
    aiNotice: '🤖 Dan il-proġett inħoloq bl-għajnuna ta’ AI (Claude, Anthropic). Id-dejta tal-ispejjeż ġejja mill-<a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki ta’ BTD6</a> u ġiet ikkontrollata b’kampjun. Mingħajr garanzija, għax il-valuri tal-logħba jinbidlu bl-aġġornamenti.'
  },
  sk: {
    subtitle: 'Vypočítajte celkové náklady na vylepšenia vašich veží', selectTitle: 'Vyberte veže a vylepšenia',
    selectAll: 'Pridať všetky', deselectAll: 'Vyprázdniť zoznam', searchPlaceholder: 'Hľadať veže...',
    calculate: 'Vypočítať náklady', add: '＋ Pridať', difficultyLabel: 'Obtiažnosť:',
    discountTitle: '🏷️ Zľavy a Monkey Knowledge',
    discountNote: 'Zľavy z Opičej dediny platia na umiestnenie a vylepšenia až do úrovne 3; hrdinovia sú vylúčení. Výpočet predpokladá, že všetky veže sú v dosahu.',
    commerce: 'Monkey Commerce (každá −5 %, max. 3):', setupTitle: '🧩 Vaša zostava',
    emptySetup: 'Zatiaľ žiadne veže. Pridajte vežu hore.', basePrice: 'Započítať základnú cenu',
    basePriceHint: '(vypnuté, napr. pre Insta Monkeys)', freeUpTo: 'Zadarmo až do úrovne', level: 'Úroveň',
    remove: 'Odstrániť', pathTop: '🔴 Horná cesta', pathMiddle: '🟡 Stredná cesta', pathBottom: '🔵 Dolná cesta',
    freeTiers: 'Úrovne 1–{n} zadarmo', baseCost: 'Základná cena:', sumLabel: 'Medzisúčet:',
    noBase: 'Základná cena nie je započítaná', noUpgrades: 'Žiadne vylepšenia nie sú započítané',
    resultsTitle: '💰 Rozpis nákladov', totalCost: 'Celkové náklady', copyResult: 'Kopírovať výsledok',
    reset: 'Resetovať', alertNoTower: 'Pridajte aspoň jednu vežu!', copied: 'Výsledok skopírovaný! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Celkové náklady', language: 'Jazyk',
    aiNotice: '🤖 Tento projekt vznikol s pomocou AI (Claude, Anthropic). Údaje o nákladoch pochádzajú z <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki BTD6</a> a boli overené náhodnou kontrolou. Bez záruky, pretože herné hodnoty sa s aktualizáciami menia.'
  },
  sl: {
    subtitle: 'Izračunajte skupne stroške nadgradenj svojih stolpov', selectTitle: 'Izberite stolpe in nadgradnje',
    selectAll: 'Dodaj vse', deselectAll: 'Počisti seznam', searchPlaceholder: 'Iskanje stolpov...',
    calculate: 'Izračunaj stroške', add: '＋ Dodaj', difficultyLabel: 'Težavnost:',
    discountTitle: '🏷️ Popusti & Monkey Knowledge',
    discountNote: 'Popusti iz Opičje vasi veljajo za postavitev in nadgradnje do stopnje 3; junaki so izvzeti. Izračun predpostavlja, da so vsi stolpi v dosegu.',
    commerce: 'Monkey Commerce (−5 % vsak, največ 3):', setupTitle: '🧩 Vaša postavitev',
    emptySetup: 'Še ni stolpov. Dodajte stolp zgoraj.', basePrice: 'Vključi osnovno ceno',
    basePriceHint: '(izklopljeno, npr. za Insta Monkeys)', freeUpTo: 'Brezplačno do stopnje', level: 'Stopnja',
    remove: 'Odstrani', pathTop: '🔴 Zgornja pot', pathMiddle: '🟡 Srednja pot', pathBottom: '🔵 Spodnja pot',
    freeTiers: 'Stopnje 1–{n} brezplačno', baseCost: 'Osnovni strošek:', sumLabel: 'Vmesna vsota:',
    noBase: 'Osnovna cena ni vključena', noUpgrades: 'Nadgradnje niso upoštevane',
    resultsTitle: '💰 Razčlenitev stroškov', totalCost: 'Skupni strošek', copyResult: 'Kopiraj rezultat',
    reset: 'Ponastavi', alertNoTower: 'Dodajte vsaj en stolp!', copied: 'Rezultat kopiran! 📋',
    exportTitle: 'Bloons TD 6 Upgrade Calculator', total: 'Skupni strošek', language: 'Jezik',
    aiNotice: '🤖 Ta projekt je nastal s pomočjo umetne inteligence (Claude, Anthropic). Podatki o stroških so z <a href="https://www.bloonswiki.com" target="_blank" rel="noopener">wiki strani BTD6</a> in so bili preverjeni na vzorcu. Brez jamstva, ker se vrednosti v igri spreminjajo s posodobitvami.'
  }
});

Object.assign(LOCALES, {
  bg: 'bg-BG', hr: 'hr-HR', et: 'et-EE', fi: 'fi-FI', hu: 'hu-HU', ga: 'ga-IE',
  lv: 'lv-LV', lt: 'lt-LT', mt: 'mt-MT', sk: 'sk-SK', sl: 'sl-SI'
});
SUPPORTED_LANGS.push('bg', 'hr', 'et', 'fi', 'hu', 'ga', 'lv', 'lt', 'mt', 'sk', 'sl');

// Sprachauswahl ergänzen (das Skript steht am Ende der Seite, das Auswahlfeld existiert bereits)
(function addLanguageOptions() {
  const sel = document.getElementById('lang-select');
  if (!sel) return;
  [['bg', 'Български'], ['hr', 'Hrvatski'], ['et', 'Eesti'], ['fi', 'Suomi'], ['hu', 'Magyar'], ['ga', 'Gaeilge'],
   ['lv', 'Latviešu'], ['lt', 'Lietuvių'], ['mt', 'Malti'], ['sk', 'Slovenčina'], ['sl', 'Slovenščina']]
    .forEach(([value, label]) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = label;
      sel.appendChild(opt);
    });
})();
