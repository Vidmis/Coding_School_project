// Domenys - Turima info
//Ámonë nori ásigyti 2 baltus arba juodus kompiuterius (bûtinai vienos spalvos), kuriø bendra kaina nevirðytø 1600 €. Sugeneruokite sàraðà kompiuteriø, kuriuos galite pasiûlyti.

//Masyvas su objektais:
//
//var pcs = [
//	{ "modelis":"lenovo idëja", "kaina":1234, "spalva":{"raudona":1,"þalia":2} },
//	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
//	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mëlyna":3,"þalia":1} },
//	{ "modelis":"dell apskritimas", "kaina": 697, "spalva":{"juoda":1,"balta":2} },
//	{ "modelis":"acer peizaþas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
//	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
//	{ "modelis":"asus pokðt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
//];
//
//Bûtinos sàlygos:
//- Panaudokite bent po vienà ciklà ir sàlyginá sakiná,
//- Rezultatas iðvedamas konsolëje,
//- Line break naudokite "\n".
//
//Rezultatas turëtø atrodyti taip:
//
//Galimi variantai:
//
//Modelis: hp monstras
//Kaina: 1600
//Spalvos: juoda
//
//Modelis: dell apskritimas
//Kaina: 1394
//Spalvos: balta
//
//Modelis: acer peizaþas
//Kaina: 1240
//Spalvos: balta ir juoda

var pcs = [
	{ "modelis":"lenovo idëja", "kaina":1234, "spalva":{"raudona":1,"þalia":2} },
	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mëlyna":3,"þalia":1} },
	{ "modelis":"dell apskritimas", "kaina": 697, "spalva":{"juoda":1,"balta":2} },
	{ "modelis":"acer peizaþas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
	{ "modelis":"asus pokðt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
],
    priceForTwo = 1600;

console.log("Galimi variantai: " + "\n" + "\n");

for (var i in pcs) {
		if (pcs[i].spalva.balta >= 2 && pcs[i].spalva.juoda >= 2) {
			var color = "balta ir juoda";} 
        else if (pcs[i].spalva.juoda >= 2) {
			var color = "juoda";} 
        else if (pcs[i].spalva.balta >= 2) {
			var color = "balta";}
    
    if (pcs[i].spalva.balta >= 2 && pcs[i].kaina * 2 <= priceForTwo || pcs[i].spalva.juoda >= 2 && pcs[i].kaina * 2 <= priceForTwo) {
        console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina * 2 + "\n" + "Spalvos: " + color + "\n" + "\n");
    }
} 
