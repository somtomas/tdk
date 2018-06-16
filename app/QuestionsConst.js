module.exports = {

	// - - - - - - - - - -  P1000  - - - - - - - - - - 
	//Část výrobního procesu 1
	quests_1_1: [{
			quest: "Z jakých hlavních částí se skládá výrobny zařízení P1000 / x?",
			answers: [
				"a)	lisovací stanice, brusná stanice, zásobník materiálu, ovládání automatu, čistící stanice, manipulační vozík",
				"b)	lisovací stanice, brusná stanice, čistící stanice, nakládací automat, ovládací panel, odsávání",
				"c)	plnička materiálu, lisovací stanice, brusná stanice, karusel, nakládací automat, odsávání"
			],
		right: 1
	},{
			quest: "Jak se jmenuje část stroje, která plní matrici materiálem?",
			answers: [
				"a)	svod materiálu",
				"b)	karusel",
				"c)	filomatika"
			],
		right: 2
	},{
			quest: "Jak se jmenují 3 hlavní parametry pro nastavení lisovacího zařízení:",
			answers: [
				"a)	tloušťka, zóna, váha",
				"b)	tloušťka, tlak, otáčky",
				"c)	zóna, váha, tlak"
			],
		right: 0
	},{
			quest: "Pomocí čeho se nastavuje velikost horní a spodní brusné fáze?",
			answers: [
				"a)	k nastavení dochází automaticky",
				"b)	horní brusný kotouč – regulační kolo, dolní brusný kotouč – napínací řemen + vymezovací plech s gumičkou",
				"c)	horní brusný kotouč – napínací řemen+ vymezovací plech s gumičkou, dolní brusný kotouč – regulační kolo"
			],
		right: 1
	}],

	//Část výrobního procesu 2
	quests_1_2: [{
			quest: "Jaký je hlavní úkol čistící stanice?",
			answers: [
				"a)	čištění výlisků od otřepů a nálisků",
				"b)	odsávání špatných výlisků",
				"c)	čisticí stanice se na stroji nenachází"
			],
		right: 0
	},{
			quest: "K čemu se používá pomocný materiál Balast?",
			answers: [
				"a)	vymezení výstavby",
				"b)	stabilní elektrické vlastností po následné operaci",
				"c)	obě odpovědi jsou správné"
			],
		right: 2
	},{
			quest: "Kolik nakládacích Lísek je uložených v nakládacím automatu?",
			answers: [
				"a)	6",
				"b)	9",
				"c)	12"
			],
		right: 1
	},{
			quest: "K čemu slouží zirkon?",
			answers: [
				"a)	jako čistící materiál pro vakuové přísavky,",
				"b)	jako lepicí materiál, aby byly díly pevně spojeny při manipulaci",
				"c)	zirkonem jsou díly posypané, aby se předešlo jejich spékání na další operaci"
			],
		right: 2
	}],

	//Proces měření
	quests_1_3: [{
			quest: "Jak často se provádí SPC kontrola?",
			answers: [
				"a)	pouze na začátku směny",
				"b)	každou hodinu",
				"c)	provádí se nepravidelně, podle rozhodnutí operátora"
			],
		right: 1
	},{
			quest: "Jaké měření jsou součástí SPC kontroly při lisovacím zařízení P1000/x?",
			answers: [
				"a)	měření tloušťky, měření váhy, měření hustoty, měření prohnutí, měření fáze, optická kontrola",
				"b)	měření tloušťky, měření váhy, automatický přepočet hustoty, měření brusné fáze, optická kontrola",
				"c)	měření tloušťky, měření váhy, měření brusné fáze, optická kontrola"
			],
		right: 1
	},{
			quest: "Kolik kusů výlisků se používá k měření?",
			answers: [
				"a)	20 kusů výlisků",
				"b)	v závislosti na počtu razníků",
				"c)	obě odpovědi jsou správné"
			],
		right: 2
	},{
			quest: "Jaké nejčastější chyby jsou identifikovány při optické kontrole?",
			answers: [
				"a)	úlomky, mikrotrhliny, škrábance, nálisky, otřepy",
				"b)	úlomky, prohnutí, křivá plocha, spečení, škrábance",
				"c)	mikrotrhliny, prohnutí, spečení, škrábance, nálisky, otřepy"
			],
		right: 0
	}],

	//Chyby při zařízení
	quests_1_4: [{
			quest: "K čemu dochází při zaseknutí materiálu pod senzorem před nakládacím automatem?",
			answers: [
				"a)	stroj se zastaví, dokud operátor dráhu nevyčistí",
				"b)	stroj pracuje dál a vzniká nebezpečí tvorby zmetků, protože díly po uvolnění dráhy padají z velké výšky",
				"c)	výlisky se do nakládacího automatu dostanou pomocí jiné, volné dráhy"
			],
		right: 1
	},{
			quest: "Z jakých 3 důvodů nejsou schopny vakuové přísavky správně odebrat materiál?",
			answers: [
				"a)	mechanické poškození přísavek, ucpaný přívod vzduchu, zanesený filtr",
				"b)	materiál je posypaný zirkonem, posunutý materiál, mechanické poškození přísavek",
				"c)	mechanické poškození přísavek, posunutý materiál, vysoká vlhkost vzduchu"
			],
		right: 0
	},{
			quest: "K čemu dochází při změně zóny, v rámci lisovacích nastavení?",
			answers: [
				"a)	posun horního razníku, který stanovuje sílu lisování a tloušťku výlisku",
				"b)	posun spodního razníku, který stanoví kolik materiálu se do matrice naplní",
				"c)	posun obou razníku, stanoví se, kde v matrici dochází k procesu lisování"
			],
		right: 2
	},{
			quest: "Co je jednou z podstat lisování, aby nedošlo k tvorbě zmetků?",
			answers: [
				"a)	operátor musí každou hodinu měnit nastavení stroje",
				"b)	materiál musí být během celého průběhu lisování pod tlakem obou razníků",
				"c)	kontrola každého kusu samostatně"
			],
		right: 1
	}],
				 
				 
				 
				 
	// - - - - - - - - - -  TPA6  - - - - - - - - - -             
				 
				 
				 
				 
	//Část výrobního procesu 1
	quests_2_1: [{
			quest: "Z jakých hlavních částí se skládá výrobní zařízení TPA6?",
			answers: [
				"a)	nakládací automat s ovládáním, lis s ovládáním",
				"b)	nakládací automat s ovládáním, brusná stanice, odsávaní, lis s ovládáním",
				"c)	nakládací automat, lis s ovládáním, dráha, násypka se zvodem materiálu"
			],
		right: 0
	},{
			quest: "Čím se liší výrobní zařízení TPA6 od P1000/x?",
			answers: [
				"a)	materiál se lisuje pomocí horního a spodního razníku",
				"b)	za lisovacím zařízením se nachází optický senzor, který snímá pohyb výlisků",
				"c)	zásobník s materiálem je potřebné plnit ručně"
			],
		right: 2
	},{
			quest: "Z jakých hlavních častí se skládá lisovací zařízení?",
			answers: [
				"a)	plnící bota, matrice, horní a spodní razník upnutý v adaptéru",
				"b)	plnící bota, filomatika, matrice, zvod granulátu, horní a spodní razník upnutý v adaptéru",
				"c)	filomatika, matrice, karusel, horní a spodní razník upnutý v adaptéru"
			],
		right: 0
	},{
			quest: "Co signalizuje bíle světlo na ovládacím panelu?",
			answers: [
				"a)	porucha zařízení",
				"b)	splněné všechny bezpečnostní podmínky",
				"c)	pozastavený chod zařízení"
			],
		right: 1
	}],

	//Část výrobního procesu 2
	quests_2_2: [{
			quest: "Jaká je úloha optického senzoru v nakládacím automatu?",
			answers: [
				"a)	snímaní výlisku v automatu a odesílaní signálu pro nakládací hlavu po dosáhnutí požadovaného počtu kusů",
				"b)	optická kontrola poškozeni výlisků",
				"c)	optický sensor se na stroji nenachází"
			],
		right: 0
	},{
			quest: "Na co slouží posyp výlisku zirkonem?",
			answers: [
				"a)	vymezení výstavby",
				"b)	ochrana vypalovací desky při procesu vypalování",
				"c)	eliminace spékaní při procesu vypalování"
			],
		right: 2
	},{
			quest: "Kolik vypalovacích desek je uloženo v nakládacím automatu?",
			answers: [
				"a)	3",
				"b)	4",
				"c)	5"
			],
		right: 1
	},{
			quest: "Kdy dochází k posypu zirkonem?",
			answers: [
				"a)	před uložením první série a po naplnění vypalovací desky",
				"b)	každý rad se po uložení posýpá samostatně",
				"c)	po uložení celé série"
			],
		right: 2
	}],

	//Proces měření
	quests_2_3: [{
			quest: "Jak často se provádí SPC kontrola?",
			answers: [
				"a)	každou hodinu",
				"b)	pouze za začátku směny",
				"c)	provádí se nepravidelně, podle rozhodnutí operátora"
			],
		right: 0
	},{
			quest: "Jaké měření jsou součástí SPC kontroly při lisovacím zařízení TPA6?",
			answers: [
				"a)	měření tloušťky, měření váhy, automatický přepočet hustoty hustoty, měření prohnutí, měření fáze, optická kontrola",
				"b)	měření tloušťky, měření váhy, měření fázi, optická kontrola",
				"c)	měření tloušťky, měření váhy, automatický přepočet hustoty, optická kontrola"
			],
		right: 2
	},{
			quest: "Kolik kusů výlisků se používá k měření?",
			answers: [
				"a)	20 kusů výlisků",
				"b)	3 výlisky pro každý razník",
				"c) 6 výlisku pro každý razník"
			],
		right: 1
	},{
			quest: "K čemu slouží LOS karta?",
			answers: [
				"a)	stanovaní parametrů výlisků a nastavení stroje",
				"b)	zápisnice v případě identifikace poškození",
				"c) popis pracovního postupu"
			],
		right: 0
	}],

	//Chyby při zařízení
	quests_2_4: [{
			quest: "K čemu dochází při zaseknutí materiálu před senzorem na dráze?",
			answers: [
				"a)	stroj se zastaví, dokud operátor dráhu nevyčistí",
				"b)	stroj pracuje dál a vzniká nebezpečí tvorby zmetků",
				"c)	výlisky se do nakládacího automatu dostanou pomocí jiné, volné dráhy"
			],
		right: 0
	},{
			quest: "Z jakého důvodu nejsou schopny vakuové přísavky správně odebrat materiál?",
			answers: [
				"a)	materiál je posypaný zirkonem",
				"b)	plocha výlisku je nerovnoměrná",
				"c)	v nakládacím automatu výlisek vyskočil na předchozí díl"
			],
		right: 2
	},{
			quest: "Označte správné tvrzení.",
			answers: [
				"a)	změnu tloušťky, zóny a váhy je možné vykonat automaticky pomocí ovládacího panelu lisovacího zařízení",
				"b)	změnou tloušťky dochází k posunu horného razníku, změnou váhy dochází k posunu spodního razníku, změnou zóny se stanovuje místo razení výlisku v matrici",
				"c)	obě tvrzení jsou správné"
			],
		right: 1
	},{
			quest: "Kdy se vykonává SPC kontrola po změně hlavních parametrů výrobního zařízení?",
			answers: [
				"a)	během plánované SPC kontroly vykonávaný každou hodinu",
				"b)	do 5 minut od korekce parametrů",
				"c)	po naplnění jedné vypalovací desky"
			],
		right: 1
	}],
			 
				 
				 
				 
	// - - - - - - - - - -  EP 50  - - - - - - - - - -              
				 
				 
				 
	//Část výrobního procesu 1
	quests_3_1: [{
			quest: "Z jakých hlavních částí se skládá výrobní zařízení EP50?",
			answers: [
				"a)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás",
				"b)	zařízení lisu s ovládáním, dopravníkový pás, násypník se svodem",
				"c)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás, násypka se zvodem materiálu"
			],
		right: 2
	},{
			quest: "Jako začíná proces výroby na zařízení EP50?",
			answers: [
				"a)	naplněním matrice materiálem",
				"b)	výběrem přesného tipu produktu podle zadaného receptu",
				"c) ručním naplněním násypníku materiálem"
			],
		right: 1
	},{
			quest: "Z jakých hlavních častí se skládá lisovací zařízení?",
			answers: [
				"a)	plnící bota, filomatika, odsávaní, matrice, horní a dolní razník upnutý ve stroji",
				"b)	plnící bota, matrice, horní a dolní razník upnutý v adaptéru",
				"c) matrice, karusel, filomatika, horní a dolní razník upnutý ve stroji"
			],
		right: 1
	},{
			quest: "K čemu slouží plnící bota?",
			answers: [
				"a)	plnění matrice materiálem a posun výlisků na dráhu",
				"b)	pře naplněni násypky materiálem",
				"c) posyp výlisků zirkonem"
			],
		right: 0
	}],

	//Část výrobního procesu 2
	quests_3_2: [{
			quest: "Jaké doplňkové zařízení se využívají při výrobním procesu na dopravníkovém pásu?",
			answers: [
				"a)	zásobník zirkonu a vibrační jednotka",
				"b)	stanice na posyp zirkonem, kleště na výlisky, vibrační jednotka",
				"c)	stanice na posyp zirkonem a lepící stanice"
			],
		right: 2
	},{
			quest: "Na co slouží pomocný materiál Alox?",
			answers: [
				"a)	ochrana před tvorbou úlomku a prasklin na výlisku",
				"b)	eliminace spékaní při procesu vypalování",
				"c)	udržení stanovených elektrických vlastností po vypálení"
			],
		right: 2
	},{
			quest: "Jak se ukládá pomocný materiál Alox?",
			answers: [
				"a)	podle zadáni v LOS karte",
				"b)	libovolně",
				"c)	uložení aloxu určí směnový mistr"
			],
		right: 0
	},{
			quest: "Co je důležité při lepení komínku?",
			answers: [
				"a)	zalepit všecky strany rovnoměrné",
				"b)	je potřebné díly držet kolmo, aby se předešlo vypadnutí zirkonu z prostoru mezi výlisky",
				"c)	zalepit celou jednu stranu a ostatní strany zalepit len v oblasti rohů"
			],
		right: 1
	}],

	//Proces měření
	quests_3_3: [{
			quest: "Jak často se provádí SPC kontrola?",
			answers: [
				"a)	každých 30 minut",
				"b)	každou hodinu",
				"c)	pouze za začátku směny"
			],
		right: 1
	},{
			quest: "Jaké měření jsou součástí SPC kontroly při lisovacím zařízení EP50?",
			answers: [
				"a)	měření tloušťky, měření váhy, automatický přepočet hustoty, měření prohnutí, optická kontrola",
				"b)	měření tloušťky, měření váhy, automatický přepočet hustoty, měření prohnutí, měření fáze, optická kontrola",
				"c)	měření tloušťky, měření váhy, automatický přepočet hustoty, měření fáze, optická kontrola"
			],
		right: 0
	},{
			quest: "Jako se označují díly, které splňují požadovanou kvalitu?",
			answers: [
				"a)	SDP (splněné definované parametry)",
				"b)	NOK",
				"c)	OK"
			],
		right: 2
	},{
			quest: "K jakým optickým chybám výlisků dochází na výrobním zařízení EP50?",
			answers: [
				"a)	trhliny, prohnutí materiálu, úlomky, škrábance, nálisky, otřepy",
				"b)	trhliny, prohnutí materiálu, spečený materiál, škrábance, nálisky, otřepy",
				"c)	trhliny, prohnutí materiálu, úlomky, škrábance"
			],
		right: 2
	}],

	//Chyby při zařízení
	quests_3_4: [{
			quest: "K jakým nejčastějším chybám dochází při výrobním procese?",
			answers: [
				"a)	ucpaní stanice se zirkonem, zaschnutí lepící stanice, absence pomocného materiálu Aloxu, zle nastavený dopravníkový pás, zle zarovnané díly",
				"b)	ucpaní stanice se zirkonem, zaschnutí lepící stanice, absence pomocného materiálu Aloxu, zaseknutí výlisku před senzorem, zaseknutí výlisku v lisovacím zařízení",
				"c)	ucpaní svodu s materiálem, zaseknutí výlisku na dráze, zaschnutí lepící stanice, absence pomocného materiálu Aloxu"
			],
		right: 0
	},{
			quest: "Co nastane, když nebudou díly správné zarovnané v komíncích?",
			answers: [
				"a)	díly budou mít po výpalu rozdílné elektrické vlastnosti",
				"b)	dojde k deformaci nezafixovaných částí",
				"c)	nic se nestane"
			],
		right: 1
	},{
			quest: "Z jakých části se skládá posýpací stanice zirkonem?",
			answers: [
				"a)	zásobník zirkonu, vibrační jednotka",
				"b)	zásobník zirkonu, zvod zirkonu, filtrační mřížka",
				"c)	zásobník zirkonu, filtrační mřížkae"
			],
		right: 0
	},{
			quest: "Co se musí udělat po identifikaci neshody?",
			answers: [
				"a)	vypsat hlášenka a oddělit dobrou produkci od neshodné",
				"b)	změnit potřebné nastaveni a pokračovat ve výrobě",
				"c)	vybrat další díly a zopakovat proces SPC měření"
			],
		right: 0
	}]
}
