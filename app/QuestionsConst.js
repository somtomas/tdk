module.exports = {

	// toto je komentar - vsetko za nim sluzi len pre informaciu. Program to ignoruje.
	// Necham Ti tu par komentarov, aby sa Ti lepsie orientovalo, ako sa vytvara JSON - programovo citatelny subor
	// pozri "JSON" na wikipedii

	// EP50 - cast 1
	// quest_3_1 je oznacenie skupiny otazok:
	//       "quests" ako otazky, 3 ako treti stroj, 1 ako prve video 
	quests_3_1: [{
		quest: "Z jakých hlavních částí se skládá výrobní zařízení EP50?",
		answers: [
			"a)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás",
			"b)	zařízení lisu s ovládáním, dopravníkový pás, násypník se svodem",
			"c)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás, násypka se zvodem materiálu"
		],
		
		// "right" signalizuje, ktora odpoved je spravna. Je indexovany od 0. (To znamena, ze 0 je prva odpoved, 1 je druha odpoved a 2 je tretia odpoved)
		// pocitac totiz vzdy cita od 0
		right: 2
	}, {
		quest: "Jako začíná proces výroby na zařízení EP50?",
		answers: [
			"a)	naplněním matrice materiálem",
			"b)	výběrem přesného tipu produktu podle zadaného receptu",
			"c)	ručním naplněním násypníku materiálem"],
		right: 1
	}, {
		quest: "Z jakých hlavních častí se skládá lisovací zařízení?",
		answers: [
			"a)	plnící bota, filomatika, odsávaní, matrice, horní a dolní razník upnutý ve stroji",
			"b)	plnící bota, matrice, horní a dolní razník upnutý v adaptéru",
			"c)	matrice, karusel, filomatika, horní a dolní razník upnutý ve stroji"
		],
		right: 1
	}, {
		quest: "K čemu slouží plnící bota?",
		answers: [
			"a)	plnění matrice materiálem a posun výlisků na dráhu",
			"b)	pře naplněni násypky materiálem",
			"c)	posyp výlisků zirkonem"
		],
		right: 1
	}],
	
	// EP50 - cast 2
	quests_3_2: [{
		quest: "Jakédoplňkovézařízenísevyužívajípřivýrobním procesu na dopravníkovém pásu?",
		answers: ["a) zásobník zirkonu a vibrační jednotka", "b) stanice na posyp zirkonem, kleště na výlisky, vibrační jednotka", "c) stanice na posyp zirkonem a lepící stanice"],
		right: 2
	},{
		quest: "Na coslouží pomocný materiál Alox?",
		answers: ["a) ochrana před tvorbou úlomku a prasklin na výlisku", "b) eliminacespékanípři procesu vypalování", "c) udržení stanovených elektrických vlastností po vypálení"],
		right: 1
	}, {
		quest: "Jak seukládá pomocný materiál Alox?",
		answers: ["a) podlezadáni v LOS karte", "b) libovolně", "c) uložení aloxu určí směnovýmistr"],
		right: 1
	}, {
		quest: "Co je důležitépři lepení komínku?",
		answers: ["a) zalepitvšecky strany rovnoměrné", "b) je potřebnédílydržet kolmo, aby sepředešlo vypadnutí zirkonu z prostorumezi výlisky", "c) zalepit celou jednu stranu a ostatní strany zalepit len v oblasti rohů"],
		right: 1
	}]

}