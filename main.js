// Create one dimensional array
var isoSeen = new Array(100);
var chemSeen = new Array(100).fill("false");
// Loop to create 2D array using 1D array
for (var i = 0; i < isoSeen.length; i++) {
	isoSeen[i] = new Array(100).fill("false");
}
//Hydrogen 1 is seen
isoSeen[1][0] = "true";
chemSeen[1] = "true";

var game = {
	protonmax: 1,
	neutronmax: 0,
	totalIsotope: 1,
	decayPartName: ["proton", "neutron", "electron", "positron", "alpha", "gamma"],
	decayPartNameShort: ["p", "n", "e-", "e+", "a", "g"],
	decayPartImage: ["proton.png", "neutron.png", "electron.png", "positron.png", "alpha.png", "gamma.png"],
	decayPartColor: ["red", "blue", "cyan", "magenta", "green", "yellow"],
	decayPartCount: [0, 0, 0, 0, 0, 0],
	decayPartPerSec: [0, 0, 0, 0, 0, 0],
	decayPartAll: [0, 0, 0, 0, 0, 0],
	protonLim: [2, 26, 92, 118, 200],
	protonLimNumb: 0,
	name: ["proton","neutron"],
	image: ["proton.png", "neutron.png"],
	color: ["red", "blue"],
	chemicalName: ["neutron", "hydrogen", "helium",
		"lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon",
		"sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulfur", "chlorine", "argon",
		"potassium", "calcium", "scandium", "titane", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", "selenium", "bromine", "krypton",
		"rubidium", "strontium", "yttrium", "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin", "antimony", "tellurium", "iodine","xenon"],
	chemicalSymbol: ["n", "H", "He",
		"Li", "Be", "B", "C", "N", "O", "F", "Ne",
		"Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
		"K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
		"Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
	chemicalPeriodicPos: [["", ""], [0, 0], [17, 0],
		[0, 1], [1, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1],
		[0, 2], [1, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2],
		[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3],
		[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4]],
	chemicalPeriodicType: ["",0,1,
		2, 3, 4, 0, 0, 0, 5, 1,
		2, 3, 6, 4, 0, 0, 5, 1,
		2, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 4, 4, 0, 5, 1,
		2, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 4, 4, 5, 1],
	periodicTypeColor: ["rgb(0, 255, 0)", "rgb(50, 100, 255)", "rgb(255, 0, 0)", "rgb(255, 200, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(150, 100, 255)", "rgb(255, 100, 100)"],
	periodicTypeColorHover: ["rgb(150, 255, 150)", "rgb(100, 150, 255)", "rgb(255, 100, 100)", "rgb(255, 220, 100)", "rgb(150, 255, 255)", "rgb(255, 100, 255)", "rgb(150, 150, 255)", "rgb(255, 150, 150)"],
	isotopSeen: isoSeen,
	chemicalSeen: chemSeen,
	chemicalDecay: [
		/*n*/["", "b-", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*H*/["stable", "stable", "b-", "n", "2n", "n", "2n", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*He*/["p", "stable", "stable", "n", "b-", "n", "b-", "n", "2n", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Li*/["p", "p", "p", "stable", "stable", "b-", "b-n", "n", "b-n", "n", "2n"/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Be*/["", "p", "2p", "b+", "alpha", "stable", "b-", "b-", "b-", "n", "b-n"/*10*/, "n", "2n", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*B*/["", "", "p", "b+alpha", "p", "stable", "stable", "b-", "b-", "b-", "b-n"/*10*/, "n", "b-n", "n", "b-n", "n", "2n", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*C*/["", "", "2p", "b+", "b+", "b+", "stable", "stable", "b-", "b-", "b-n"/*10*/, "b-", "b-", "b-n", "b-n", "n", "b-n", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*N*/["", "", "", "p", "p", "b+", "b+", "stable", "stable", "b-", "b-n"/*10*/, "b-", "b-", "b-", "b-n", "b-", "b-", "n", "n", "", ""/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*O*/["", "", "", "2p", "2p", "b+", "b+", "b+", "stable", "stable", "stable"/*10*/, "b-", "b-", "b-", "b-", "b-", "b-", "n", "2n", "n", "2n"/*20*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*F*/["", "", "", "", "p", "p", "p", "p", "b+", "b+", "stable"/*10*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "n", "b-n"/*20*/, "n", "b-", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ne*/["", "", "", "", "", "2p", "2p", "b+p", "b+", "b+", "stable"/*10*/, "stable", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-", "n", "b-", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Na*/["", "", "", "", "", "", "p", "p", "p", "b+", "b+"/*10*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-n", "b-2n", "b-", "n", "b-", "n", "b-", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Mg*/["", "", "", "", "", "", "2p", "2p", "b+", "b+", "b+"/*10*/, "b+", "stable", "stable", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-", "b-n", "b-", "b-", "b-", "n", "b-", "b-", ""/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Al*/["", "", "", "", "", "", "", "", "", "b+p", "b+"/*10*/, "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-", "b-", "b-"/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Si*/["", "", "", "", "", "", "", "", "b+", "b+", "b+"/*10*/, "b+", "b+", "b+", "stable", "stable", "stable", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-", "b-", "b-n", "b-", "b-", "b-", "b-", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*P*/["", "", "", "", "", "", "", "", "", "", "p"/*10*/, "b+", "b+", "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-"/*20*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-"/*30*/, "b-", "b-", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*S*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "b+", "b+", "b+", "b+", "b+", "stable", "stable", "stable", "b-", "stable"/*20*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "b-"/*30*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Cl*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "p", "p", "p", "b+", "b+", "b+", "b+", "stable", "b-", "stable"/*20*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ar*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "2p", "2p", "b+p", "b+", "b+", "b+", "b+", "stable", "EC", "stable"/*20*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*K*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "3p", "", "p", "p", "b+", "b+", "b+", "b+", "stable"/*20*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n"/*30*/, "b-", "b-n", "b-n", "b-n", "b-", "b-", "b-", "b-", "", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ca*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "b+p", "b+p", "b+p", "b+", "b+", "stable"/*20*/, "EC", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Sc*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "p", "b+", "b+"/*20*/, "b+", "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ti*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "2p", "b+p", "b+", "b+p", "b+"/*20*/, "b+", "EC", "b+", "stable", "stable", "stable", "stable", "stable", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*V*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "p", "p", "p", "b+"/*20*/, "b+", "b+", "b+", "b+", "b+", "EC", "EC", "stable", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Cr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "b+", "b+", "b+"/*20*/, "b+", "b+", "b+", "b+", "b+", "stable", "EC", "stable", "stable", "stable"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Mn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "p", "p"/*20*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC", "EC", "stable"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Fe*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "2p", "b+"/*20*/, "b+", "b+", "b+p", "b+", "b+", "b+", "b+", "stable", "EC", "stable"/*30*/, "stable", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Co*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "p", "b+p", "b+", "b+", "b+", "b+", "b+", "b+", "EC"/*30*/, "b+", "stable", "b-gamma", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ni*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*30*/, "EC", "stable", "stable", "stable", "b-", "stable", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "",""],
		/*Cu*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "p", "p", "p", "b+", "b+", "b+", "b+", "b+"/*30*/, "b+", "b+", "b+", "stable", "b+", "stable", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n"/*50*/, "b-", "", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "",""],
		/*Zn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "2p", "2p", "b+", "b+p", "b+p", "b+", "b+"/*30*/, "b+", "b+", "b+", "stable", "b+", "stable", "stable", "stable", "b-", "stable"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ga*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "p", "p", "p", "p", "b+", "b+"/*30*/, "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable", "b-", "stable"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-n", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Ge*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "2p", "2p", "b+", "b+p", "b+"/*30*/, "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable", "EC", "stable"/*40*/, "stable", "stable", "b-", "2b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-n", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*As*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "p", "p", "p", "p"/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC"/*40*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-n", "b-", "b-", "b-", "b-", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Se*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable"/*40*/, "EC", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Br*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "p", "p", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "stable", "b-", "stable", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Kr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "2EC", "b+", "stable", "EC", "stable", "stable", "stable", "b-", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "", "", "", "b-2n", "", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Rb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "p", "p", "p", "p", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Sr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "EC", "b+", "stable", "EC", "stable", "stable", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Y*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "p", "b+", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Zr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "b+p", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable"/*50*/, "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Nb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "b+p"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC"/*50*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Mo*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*50*/, "EC", "stable", "stable", "stable", "stable", "stable", "b-", "2b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Tc*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "EC", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Ru*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "stable", "b+", "stable", "stable", "stable", "stable", "stable", "b-", "stable"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Rh*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*Pd*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "stable", "EC", "stable", "stable", "stable"/*60*/, "b-", "stable", "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*Ag*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*60*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "", "", "", "", ""/*90*/, "", "", ""],
		/*Cd*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*60*/, "EC", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*In*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "EC", "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*90*/, "", "", ""],
		/*Sn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC"/*60*/, "b+", "stable", "b+", "stable", "stable", "stable", "stable", "stable", "stable", "stable"/*70*/, "b-", "stable", "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*90*/, "", "", ""],
		/*Sb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable"/*70*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*90*/, "", "", ""],
		/*Te*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "alpha", "alpha", "alpha", "alpha", "alpha", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "EC", "b+", "stable", "b+", "stable"/*70*/, "stable", "stable", "stable", "stable", "b-", "2b-", "b-", "2b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "", "", ""],
		/*I*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "alpha", "p", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC"/*70*/, "b+", "EC", "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "b-","",""],
		/*Xe*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "alpha", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "EC", "2EC"/*70*/, "b+", "stable", "EC", "stable", "stable", "stable", "stable", "stable", "b-", "stable"/*80*/, "b-", "2b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "b-","b-","b-"]	],

	nucleonsCount: [1, 0],
	nucleonsTot: 1,
	totalClicks: 0,
	version: 0.000,

	addtonucleons: function (amount, index) {
		if ((index == 0 && game.chemicalDecay[game.nucleonsCount[0] + 1][game.nucleonsCount[1]] !== "") || (index == 1 && game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1] + 1] !== "")) {
			if (index == 0 && game.nucleonsCount[0] + 1 > game.protonLim[game.protonLimNumb]) {
				alert("Not possible yet ! - Build a " + factories.name[game.protonLimNumb] + " if you want to go further !");
			}
			else {
				this.nucleonsCount[index] += amount;
				this.nucleonsTot += amount;
				visitGrid(this.nucleonsCount[0], this.nucleonsCount[1], this.chemicalDecay[this.nucleonsCount[0]][this.nucleonsCount[1]], "false");
				visitGridP(this.nucleonsCount[0]);
				display.updateNucleons();
				display.updateElement();
				this.totalClicks++;
			}
		}
	},
};

var factories = {
	name: ["Star", "Supernovae", "Collider", "Scifi expedition"
	],
	image: ["star.png", "supernovae.png", "collider.png", "sciencefiction.png"
	],
	count: [0, 0, 0, 0
	],
	totalCount: 0,
	remainingPop: 1,
	cost: [
		[2, 2, 0, 0, 0, 0],
		[2, 2, 2, 2, 2, 0],
		[10, 10, 10, 10, 10, 0],
		[10, 10, 10, 10, 10, 0]
	],
	partPerSec: [
		[1, 1, 0, 0, 0, 0],
		[0, 0, 1, 1, 0, 0],
		[0, 0, 0, 0, 1, 0],
		[0, 0, 0, 0, 0, 1],
	],
	purchase: function (index) {
		if (game.decayPartCount.every((v, i) => v >= this.cost[index][i])) {
			if (this.count[index] == 0) {
				game.protonLimNumb++;
			}
			for (i = 0; i < game.decayPartCount.length; i++) {
				game.decayPartCount[i] -= this.cost[index][i];
				game.decayPartPerSec[i] += this.partPerSec[index][i];
				this.cost[index][i] = Math.ceil(this.cost[index][i] * 1.1);
			}
			this.count[index]++;
			this.totalCount++;
			display.updateNucleons();
			display.updateElement();
			display.updateShop();
			display.updateGrid();
		}
	}
};

var achievement = {
	name: [
		"A first click", "A thousand clicks","A million clicks","A billion clicks",
		"Welcome Helium !", "Is that Neon there ?", "Antimony or not to be ?", "What is this element again ?",
		"First new isotope", "Ten isotopes later", "A hundred isotopes more", "Thousands isotopes, okay ?",
		"A star is born", "Your first nebula", "A cluster of stars", "That's a galaxy !",
		"Could I become a brown dwarf ?", "Could I become a red dwarf ?", "Could I become a neutron star ?", "Could I become a black hole ?",
		"Look at my LINAC !", "Look at my cyclotron", "Look at my LHC", "Look at my FCC",
		"Quest for unobtanium started", "Crossed some blue guys on my way", "I just need to burn this big tree down", "FINALLY ! The Unobtanium !",
		"Hey, something hit me !", "Just stay positive !", "Every decay is a big plus !", "Positive billionaire",
		"This small particle couldn't create dangerous things, right ?", "Why this nucleus just splitted ?", "This chain reaction is just fun !", "What's this big mushroo... Oh shit ... !",
		"Is that an electron over there ?", "Can I create electricity with them ?", "Okay, just stop to charge my lab, now !", "If I touch that smal... ZAAAAP !",
		"What is this hole in my magnet ?", "Why my magnet looks like emmental ?", "Come on, stop exploding everything ... !", "Your lab just burnt ...",
		"Is that ... Helium ?", "These ones hurt so much !!!", "This alpha collection is really big !", "I am the Alpha and Omega !",
		"And there was light !", "This little guy is hard to find, right ?", "Look at all these photons !", "It burns my eyes !!!!"
	],
	description: [
		"Click 1 time", "Click 1000 times", "Click 1000000 times", "Click 1000000000 times",
		"Obtain 2 elements", "Obtain 10 elements", "Obtain 50 elements", "Obtain 100 elements",
		"Obtain 2 isotopes", "Obtain 10 isotopes", "Obtain 100 isotopes", "Obtain 1000 isotopes",
		"Build 1 star", "Build 10 stars", "Build 100 stars", "Build 1000 stars",
		"Build 1 supernovae", "Build 10 supernovaes", "Build 100 supernovaes", "Build 1000 supernovaes",
		"Build 1 collider", "Build 10 colliders", "Build 100 colliders", "Build 1000 colliders",
		"Build 1 scifi expedition", "Build 10 scifi expeditions", "Build 100 scifi expeditions", "Build 1000 scifi expeditions",
		"Obtain 1 proton", "Obtain 1000 protons", "Obtain 1000000 protons", "Obtain 1000000000 protons",
		"Obtain 1 neutron", "Obtain 1000 neutrons", "Obtain 1000000 neutrons", "Obtain 1000000000 neutrons",
		"Obtain 1 electron", "Obtain 1000 electrons", "Obtain 1000000 electrons", "Obtain 1000000000 electrons",
		"Obtain 1 positron", "Obtain 1000 positrons", "Obtain 1000000 positrons", "Obtain 1000000000 positrons",
		"Obtain 1 alpha particle", "Obtain 1000 alpha particles", "Obtain 1000000 alpha particles", "Obtain 1000000000 alpha particles",
		"Obtain 1 gamma photon", "Obtain 1000 gamma photons", "Obtain 1000000 gamma photons", "Obtain 1000000000 gamma photons"
	],
	image: [
		"click-1.png",
		"click-1000.png",
		"click-1000000.png",
		"click-1000000000.png",
		"element-1.png",
		"element-10.png",
		"element-50.png",
		"element-100.png",
		"isotope-1.png",
		"isotope-10.png",
		"isotope-100.png",
		"isotope-1000.png",
		"star-1.png",
		"star-10.png",
		"star-100.png",
		"star-1000.png",
		"supernovae-1.png",
		"supernovae-10.png",
		"supernovae-100.png",
		"supernovae-1000.png",
		"collider-1.png",
		"collider-10.png",
		"collider-100.png",
		"collider-1000.png",
		"fiction-1.png",
		"fiction-10.png",
		"fiction-100.png",
		"fiction-1000.png",
		"proton-1.png",
		"proton-1000.png",
		"proton-1000000.png",
		"proton-1000000000.png",
		"neutron-1.png",
		"neutron-1000.png",
		"neutron-1000000.png",
		"neutron-1000000000.png",
		"electron-1.png",
		"electron-1000.png",
		"electron-1000000.png",
		"electron-1000000000.png",
		"positron-1.png",
		"positron-1000.png",
		"positron-1000000.png",
		"positron-1000000000.png",
		"alpha-1.png",
		"alpha-1000.png",
		"alpha-1000000.png",
		"alpha-1000000000.png",
		"gamma-1.png",
		"gamma-1000.png",
		"gamma-1000000.png",
		"gamma-1000000000.png"
	],
	type: [
		"click", "click", "click", "click",
		"element", "element", "element", "element",
		"isotope", "isotope", "isotope", "isotope",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories",
		"decayPart", "decayPart", "decayPart", "decayPart",
		"decayPart", "decayPart", "decayPart", "decayPart",
		"decayPart", "decayPart", "decayPart", "decayPart",
		"decayPart", "decayPart", "decayPart", "decayPart",
		"decayPart", "decayPart", "decayPart", "decayPart",
		"decayPart", "decayPart", "decayPart", "decayPart"
	],
	requirement: [
		1, 1000, 1000000, 1000000000,
		1, 10, 50, 100,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 1000, 1000000, 1000000000,
		1, 1000, 1000000, 1000000000,
		1, 1000, 1000000, 1000000000,
		1, 1000, 1000000, 1000000000,
		1, 1000, 1000000, 1000000000,
		1, 1000, 1000000, 1000000000
	],
	objectIndex: [
		-1, -1, -1, -1,
		-1, -1, -1, -1,
		-1, -1, -1, -1,
		0, 0, 0, 0,
		1, 1, 1, 1,
		2, 2, 2, 2,
		3, 3, 3, 3,
		0, 0, 0, 0,
		1, 1, 1, 1,
		2, 2, 2, 2,
		3, 3, 3, 3,
		4, 4, 4, 4,
		5, 5, 5, 5,
	],
	awarded: [
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false,
		false, false, false, false
	],

	earn: function (index) {
		this.awarded[index] = true;
	}
}

var display = {
	updateNucleons: function () {
		document.getElementById("scoreClickContainer").innerHTML = "";
		for (i = 0; i < game.name.length; i++) {
			document.getElementById("scoreClickContainer").innerHTML += '<div id="boxscore' + game.name[i] + '"> ' + game.name[i] + ': <span>' + game.nucleonsCount[i] + '</span></div><div class="clickerContainer"><img src="images/' + game.image[i] + '" height="64px" width="64px" onclick="game.addtonucleons(1,' + i + ')"></div>'
			document.getElementById('boxscore' + game.name[i]).style.color = game.color[i];
		};
		document.title = game.chemicalName[game.nucleonsCount[0]] + ' ' + game.nucleonsTot + " - Isotope Clicker"
	},

	updateShop: function () {
		document.getElementById("shopContainer").innerHTML = "";
		for (i = 0; i < factories.name.length; i++) {
			document.getElementById("shopContainer").innerHTML += '<table class="shopButton" onclick="factories.purchase(' + i + ')"><tr><td id="image"><img class="pixelated" src="images/' + factories.image[i] + '" height="64px" width="64px" image-rendering:pixelated></td><td if="nameAndCost"><p>' + factories.name[i] + '</p><p><span id="boxcost' + game.decayPartNameShort[0] + factories.name[i] + '">' + factories.cost[i][0] + ' <img src="images/' + game.decayPartImage[0] + '" height="10px" width="10px" ></span><span id="boxcost' + game.decayPartNameShort[1] + factories.name[i] + '"> ' + factories.cost[i][1] + ' <img src="images/' + game.decayPartImage[1] + '" height="10px" width="10px"></span></p><p><span id="boxcost' + game.decayPartNameShort[2] + factories.name[i] + '">' + factories.cost[i][2] + ' <img src="images/' + game.decayPartImage[2] + '" height="10px" width="10px"></span><span id="boxcost' + game.decayPartNameShort[3] + factories.name[i] + '"> ' + factories.cost[i][3] + ' <img src="images/' + game.decayPartImage[3] + '" height="10px" width="10px"></span></p><p><span id="boxcost' + game.decayPartNameShort[4] + factories.name[i] + '">' + factories.cost[i][4] + ' <img src="images/' + game.decayPartImage[4] + '" height="10px" width="10px"></span><span id="boxcost' + game.decayPartNameShort[5] + factories.name[i] + '"> ' + factories.cost[i][5] + ' <img src="images/' + game.decayPartImage[5] + '" height="10px" width="10px"></span></p></td><td = id="amount"><span>' + factories.count[i] + '</span></td></tr></table>'
			for (j = 0; j < game.decayPartName.length; j++) {
				document.getElementById('boxcost' + game.decayPartNameShort[j] + factories.name[i]).style.color = game.decayPartColor[j];
			}
		}
	},

	updateAchievements: function () {
		document.getElementById("achievementContainer").innerHTML = "";
		u = 0;
		document.getElementById("achievementContainer").innerHTML += '<p>'
		for (i = 0; i < achievement.name.length; i++) {
			if (achievement.awarded[i]) {
				if (u % 10 == 0) {
					document.getElementById("achievementContainer").innerHTML += '</p><p>'
                }
				document.getElementById("achievementContainer").innerHTML += '<img src="images/' + achievement.image[i] + '" title= "' + achievement.name[i] + ' &#10; ' + achievement.description[i] + '">'
				u++;
			}
		}
		document.getElementById("achievementContainer").innerHTML += '</p>'
	},

	updateElement: function () {
		if (game.nucleonsCount[0] > game.protonmax) {
			game.protonmax = game.nucleonsCount[0];
		}
		document.getElementById("elementContainer").innerHTML = '<p>The highest element obtained is ' + game.chemicalName[game.protonmax] + ' </p>'
		document.getElementById("elementContainer").innerHTML += '<div class="nucleusContainer"><img src="images/' + game.chemicalName[game.nucleonsCount[0]] + game.nucleonsTot + '.png" height="64px" width="64px" ></div>'
		document.getElementById("elementContainer").innerHTML += '<p>The actual nucleus is ' + game.chemicalSymbol[game.nucleonsCount[0]] + ' ' + game.nucleonsTot + '</p>'
		document.getElementById("elementContainer").innerHTML += '<p>You have collected </p>'
		for (i = 0; i < game.decayPartName.length; i++) {
			document.getElementById("elementContainer").innerHTML += '<p>'+ game.decayPartCount[i]+' <img src="images/' + game.decayPartImage[i] + '" height="10px" width="10px" >' + ' ' + game.decayPartName[i] + '</p> '
		}
	},

	updateGrid: function () {
		canvasinit();
		canvasPinit();
		for (i = 0; i < game.isoSeen.length; i++) {
			visitGridP(i);
			for (j = 0; j < game.isoSeen[i].length; j++) {
				if (game.isoSeen[i][j] == "true") {
					visitGrid(i, j, game.chemicalDecay[i][j],"true");
                }
			}
		}
	}
};

var canvas = document.getElementById("elementCanvas");
var canvasPeriodic = document.getElementById("periodicCanvas");
var ctx = canvas.getContext("2d");
var ctxPeriodic = canvasPeriodic.getContext("2d");
var widou = 5;
var heightou = 5;
var widouP = 24;
var heightouP = 24;
if (!rectsPeriodic) {
	var rects = [
		{ x: widou, y: 0, w: widou, h: heightou, color: "rgb(0,0,0)", colorhover: "rgb(100, 100, 100)" }
	], i = 0, r, rP;
}
if (!rectsPeriodic) {
	var rectsPeriodic = [];
	for (i = 0; i < game.chemicalPeriodicPos.length; i++) {
		rectsPeriodic.push({
			name: "?", symbol: "", type: game.chemicalPeriodicType[i], Z: "?", x: widouP * game.chemicalPeriodicPos[i][0], y: heightouP * game.chemicalPeriodicPos[i][1], w: widouP, h: heightouP, color: "rgb(150,150,150)", colorhover: "rgb(200, 200, 200)"
		});
	}
	rectsPeriodic[1].name = game.chemicalName[1];
	rectsPeriodic[1].symbol = game.chemicalSymbol[1];
	rectsPeriodic[1].Z = 1;
	rectsPeriodic[1].color = game.periodicTypeColor[game.chemicalPeriodicType[1]];
	rectsPeriodic[1].colorhover = game.periodicTypeColorHover[game.chemicalPeriodicType[1]];
}

canvasinit = function () {
	i = 0;
	while (r = rects[i++]) {
		ctx.beginPath();
		ctx.rect(r.x, r.y, r.w, r.h);
		ctx.fillStyle = r.color;
		ctx.fill();
	}
}
canvasPinit = function () {
	i = 0;
	while (rP = rectsPeriodic[i++]) {
		ctxPeriodic.beginPath();
		ctxPeriodic.rect(rP.x, rP.y, rP.w, rP.h);
		ctxPeriodic.fillStyle = rP.color;
		ctxPeriodic.fill();
		ctxPeriodic.strokeStyle = "black";
		ctxPeriodic.stroke();
		ctxPeriodic.fillStyle = "black";
		ctxPeriodic.font = "8px Arial";
		ctxPeriodic.fillText(rP.symbol, rP.x + rP.w / 3, rP.y + 3 * rP.h / 4);
	}
}
canvasinit();
canvasPinit();

canvas.onmousemove = function (e) {
	// important: correct mouse position:
	var rect = this.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top,
		i = 0, r;

	while (r = rects[i++]) {
		// add a single rect to path:
		ctx.beginPath();
		ctx.rect(r.x, r.y, r.w, r.h);

		// check if we hover it
		ctx.fillStyle = ctx.isPointInPath(x, y) ? r.colorhover : r.color;
		if (ctx.isPointInPath(x, y)) {
			document.querySelector('.modal').classList.toggle('show');
			document.querySelector('.modal').style.left = x + rect.left + 20 + "px";
			document.querySelector('.modal').style.top = y + rect.top + 20 + "px";
			document.getElementById("modalContainer").innerHTML = '<p>' + game.chemicalSymbol[Math.round(r.x / widou)] + ' ' + Math.round((r.x + r.y) / heightou) + ' (' + game.chemicalDecay[Math.round(r.x / widou)][Math.round(r.y / heightou)] + ') </p>'
		}
		ctx.fill();
	}
};

canvasPeriodic.onmousemove = function (e) {
	// important: correct mouse position:
	var rect = this.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top,
		i = 0, rP;
	while (rP = rectsPeriodic[i++]) {
		// add a single rect to path:
		ctxPeriodic.beginPath();
		ctxPeriodic.rect(rP.x, rP.y, rP.w, rP.h);

		// check if we hover it
		ctxPeriodic.fillStyle = ctxPeriodic.isPointInPath(x, y) ? rP.colorhover : rP.color;
		if (ctxPeriodic.isPointInPath(x, y)) {
			document.querySelector('.modalP').classList.toggle('show');
			document.querySelector('.modalP').style.left = x + rect.left + 20 + "px";
			document.querySelector('.modalP').style.top = y + rect.top + 20 + "px";
			document.getElementById("modalContainerP").innerHTML = '<p>' + rP.name + ' ' + rP.symbol + ' ( Z = '+ rP.Z +' ) </p>'
		}
		ctxPeriodic.fill();
		ctxPeriodic.strokeStyle = "black";
		ctxPeriodic.stroke();
		ctxPeriodic.fillStyle = "black";
		ctxPeriodic.font = "8px Arial";
		ctxPeriodic.fillText(rP.symbol, rP.x + rP.w / 3, rP.y + 3 * rP.h / 4);
	}
};

function visitGrid(p, n, decay, updatebool) {
	if (game.isotopSeen[p][n] == "false" || updatebool == "true") {
		if (game.chemicalSeen[p] == "false") {
			game.chemicalSeen[p] = "true";
			game.totalElement++;
		}
		game.isotopSeen[p][n] = "true";
		game.totalIsotope++;
		if (decay == "stable") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(0, 0, 0)", colorhover: "rgb(100, 100, 100)" });
		}
		else if (decay == "b-" || decay == "2b-" || decay == "b-n" || decay == "b-2n") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(0, 0, 255)", colorhover: "rgb(100, 100, 255)" });
		}
		else if (decay == "b-gamma") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(255, 255, 0)", colorhover: "rgb(255, 255, 150)" });
		}
		else if (decay == "b+" || decay == "2b+" || decay == "b+p" || decay == "b+2p") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(255, 150, 0)", colorhover: "rgb(255, 200, 100)" });
		}
		else if (decay == "EC" || decay == "2EC") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(200, 100, 0)", colorhover: "rgb(200, 150, 100)" });
		}
		else if (decay == "n" || decay == "2n" || decay == "3n") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(150, 150, 150)", colorhover: "rgb(200, 200, 200)" });
		}
		else if (decay == "p" || decay == "2p" || decay == "3p") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(255, 0, 0)", colorhover: "rgb(255, 100, 100)" });
		}
		else if (decay == "alpha" || decay == "b+alpha") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(0, 200, 0)", colorhover: "rgb(100, 255, 100)" });
		}
		else if (decay == "") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(240, 240, 240)", colorhover: "rgb(250, 250, 250)" });
		}
	}
	canvasinit();
}

function visitGridP(p) {
	if (game.chemicalSeen[p] == "true") {
		rectsPeriodic[p].name = game.chemicalName[p];
		rectsPeriodic[p].symbol = game.chemicalSymbol[p];
		rectsPeriodic[p].Z = p;
		rectsPeriodic[p].color = game.periodicTypeColor[game.chemicalPeriodicType[p]];
		rectsPeriodic[p].colorhover = game.periodicTypeColorHover[game.chemicalPeriodicType[p]];
	}
	canvasPinit();
}

function saveGame() {
	var gameSave = {
		rects: rects,
		rectsPeriodic: rectsPeriodic,
		protonmax: game.protonmax,
		neutronmax: game.neutronmax,
		protonLimNumb: game.protonLimNumb,
		decayPartCount: game.decayPartCount,
		decayPartPerSec: game.decayPartPerSec,
		decayPartAll: game.decayPartAll,
		chemicalSeen: game.chemicalSeen,
		isotopSeen: game.isotopSeen,
		nucleonsCount: game.nucleonsCount,
		nucleonsTot: game.nucleonsTot,
		totalIsotope: game.totalIsotope,
		totalElement: game.totalElement,
		totalClicks: game.totalClicks,
		version: game.version,
		factoriesCount: factories.count,
		factoriesCost: factories.cost,
		totalCount: factories.totalCount,
		remainingPop: factories.remainingPop,
		achievementAwarded: achievement.awarded
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
};

function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (localStorage.getItem("gameSave") !== null) {
		if (typeof savedGame.rects !== "undefined") {
			for (i = 0; i < savedGame.rects.length; i++) {
				rects[i] = savedGame.rects[i];
			}
		}
		if (typeof savedGame.rectsPeriodic !== "undefined") {
			for (i = 0; i < savedGame.rectsPeriodic.length; i++) {
				rectsPeriodic[i] = savedGame.rectsPeriodic[i];
			}
		}
		if (typeof savedGame.protonmax !== "undefined") game.protonmax = savedGame.protonmax;
		if (typeof savedGame.neutronmax !== "undefined") game.neutronmax = savedGame.neutronmax;
		if (typeof savedGame.totalIsotope !== "undefined") game.totalIsotope = savedGame.totalIsotope;
		if (typeof savedGame.protonLimNumb !== "undefined") game.protonLimNumb = savedGame.protonLimNumb;
		if (typeof savedGame.totalElement !== "undefined") game.totalIsotope = savedGame.totalElement;
		if (typeof savedGame.decayPartCount !== "undefined") {
			for (i = 0; i < savedGame.decayPartCount.length; i++) {
				game.decayPartCount[i] = savedGame.decayPartCount[i];
			}
		}
		if (typeof savedGame.decayPartPerSec !== "undefined") {
			for (i = 0; i < savedGame.decayPartPerSec.length; i++) {
				game.decayPartPerSec[i] = savedGame.decayPartPerSec[i];
			}
		}
		if (typeof savedGame.decayPartAll !== "undefined") {
			for (i = 0; i < savedGame.decayPartAll.length; i++) {
				game.decayPartAll[i] = savedGame.decayPartAll[i];
			}
		}
		if (typeof savedGame.isotopSeen !== "undefined") {
			for (i = 0; i < savedGame.isotopSeen.length; i++) {
				game.isotopSeen[i] = savedGame.isotopSeen[i];
			}
		}
		if (typeof savedGame.chemicalSeen !== "undefined") {
			for (i = 0; i < savedGame.chemicalSeen.length; i++) {
				game.chemicalSeen[i] = savedGame.chemicalSeen[i];
			}
		}
		if (typeof savedGame.nucleonsCount !== "undefined") {
			for (i = 0; i < savedGame.nucleonsCount.length; i++) {
				game.nucleonsCount[i] = savedGame.nucleonsCount[i];
			}
		}
		if (typeof savedGame.nucleonsTot !== "undefined") game.nucleonsTot = savedGame.nucleonsTot;
		if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
		if (typeof savedGame.version !== "undefined") game.version = savedGame.version;
		if (typeof savedGame.factoriesCount !== "undefined") {
			for (i = 0; i < savedGame.factoriesCount.length; i++) {
				factories.count[i] = savedGame.factoriesCount[i];
			}
		}
		if (typeof savedGame.factoriesCost !== "undefined") {
			for (i = 0; i < savedGame.factoriesCost.length; i++) {
				factories.cost[i] = savedGame.factoriesCost[i];
			}
		}
		if (typeof savedGame.achievementAwarded !== "undefined") {
			for (i = 0; i < savedGame.achievementAwarded.length; i++) {
				achievement.awarded[i] = savedGame.achievementAwarded[i];
			}
		}
		if (typeof savedGame.totalCount !== "undefined") factories.totalCount = savedGame.totalCount;
		if (typeof savedGame.remainingPop !== "undefined") factories.remainingPop = savedGame.remainingPop;

	}
};

function resetGame() {
	if (confirm("Are you sure you want to reset your game ?")) {
		var gameSave = {};
		localStorage.setItem("gameSave", JSON.stringify(gameSave));
		location.reload();
	}
};

function hydrogenRestart() {
	if (confirm("Are you sure you want to go back to Hydrogen ?")) {
		game.nucleonsCount[0] = 1;
		game.nucleonsCount[1] = 0;
		game.nucleonsTot = 1;
		display.updateNucleons();
		display.updateElement();
	}
};

function gameOver() {
	if (confirm("GAME OVER - All your population died - Restart ?")) {
		var gameSave = {};
		localStorage.setItem("gameSave", JSON.stringify(gameSave));
		location.reload();
	}
};

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function fadeOut(element, duration, finalOpacity, calback) {
	let opacity = 1;
	let elementFadingInterval = window.setInterval(function () {
		opacity -= 50 / duration;
		if (opacity <= finalOpacity) {
			clearInterval(elementFadingInterval);
			callback();
		}
		element.style.opacity = opacity;
	}, 50);
};

function createNumberOnClicker(event, index) {
	//Grab the clicker
	let clicker = document.getElementById("clicker" + game.name[index]);

	//Grab the position on where the clicker was clicked
	let clickerOffset = clicker.getBoundingClientRect();
	let position = {
		x: event.pageX - clickerOffset.left + randomNumber(-5, 5),
		y: event.pageY - clickerOffset.top
	};

	//Create the number
	let element = document.createElement("div");
	element.textContent = "+1";
	element.style.color = game.color[index];
	element.classList.add("number", "unselectable");
	element.style.left = position.x + "px";
	element.style.top = position.y + "px";

	//Add the number to the clicker
	clicker.appendChild(element);

	//Slowly rise the element
	let movementInterval = window.setInterval(function () {
		if (typeof element == "undefined" && element == null) clearInterval(movementInterval);
		position.y--;
		element.style.top = position.y + "px";
	}, 10);

	fadeOut(element, 3000, 0, function () {
		element.remove();
	});

};

//for (i = 0; i < game.name.length; i++) {
//document.getElementById("clicker"+game.name[i]).addEventListener("click", function (event) {
//	game.totalClicks++;
//	game.addtoscore(1, i);
//	createNumberOnClicker(event, i);
//}, false);
//}

window.onload = function () {
	loadGame();
	display.updateNucleons();
	display.updateShop();
	display.updateAchievements();
	display.updateElement();
	display.updateGrid();
};

setInterval(function () {
	if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] !== "stable") {
		if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-") {
			if (game.nucleonsCount[0] + 1 > game.protonLim[game.protonLimNumb]) {
			}
			else {
				game.nucleonsCount[0]++;
				game.nucleonsCount[1]--;
				game.decayPartCount[2]++;
				game.decayPartAll[2]++;
				display.updateNucleons();
				display.updateElement();
				document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/electron.png" > <img class="image1" src="images/antineutrino.png">'
			}
		}
		if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2b-") {
			if (game.nucleonsCount[0] + 2 > game.protonLim[game.protonLimNumb]) {
			}
			else {
				game.nucleonsCount[0] += 2;
				game.nucleonsCount[1] -= 2;
				game.decayPartCount[2] += 2;
				game.decayPartAll[2] += 2;
				display.updateNucleons();
				display.updateElement();
				document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/electron.png" > <img class="image1" src="images/antineutrino.png"><img class="image2" src = "images/electron.png" > <img class="image4" src="images/antineutrino.png">'
			}
		}
		if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-gamma") {
			if (game.nucleonsCount[0] + 1 > game.protonLim[game.protonLimNumb]) {
			}
			else {
				game.nucleonsCount[0]++;
				game.nucleonsCount[1]--;
				game.decayPartCount[2]++;
				game.decayPartCount[5]++;
				game.decayPartAll[2]++;
				game.decayPartAll[5]++;
				display.updateNucleons();
				display.updateElement();
				document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/electron.png" > <img class="image1" src="images/antineutrino.png"><img class="image4" src="images/photon.png">'
			}
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+") {
			game.nucleonsCount[0]--;
			game.nucleonsCount[1]++;
			game.decayPartCount[3]++;
			game.decayPartAll[3]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/positron.png" > <img class="image1" src="images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2b+") {
			game.nucleonsCount[0]-=2;
			game.nucleonsCount[1] += 2;
			game.decayPartCount[3] += 2;
			game.decayPartAll[3] += 2;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/positron.png" > <img class="image1" src="images/neutrino.png"><img class="image2" src = "images/positron.png" > <img class="image4" src="images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "EC" && game.decayPartCount[2]>0) {
			game.nucleonsCount[0]--;
			game.nucleonsCount[1]++;
			game.decayPartCount[2]--;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image5" src = "images/electron.png"><img class="image7" src = "images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2EC" && game.decayPartCount[2] > 1) {
			game.nucleonsCount[0]-=2;
			game.nucleonsCount[1]+=2;
			game.decayPartCount[2] -= 2;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image5" src = "images/electron.png"><img class="image6" src = "images/electron.png"><img class="image7" src = "images/neutrino.png"><img class="image8" src = "images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "p") {
			game.nucleonsCount[0]--;
			game.nucleonsTot--;
			game.decayPartCount[0]++;
			game.decayPartAll[0]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/proton.png" >'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2p") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsTot -= 2;
			game.decayPartCount[0] += 2;
			game.decayPartAll[0] += 2;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/proton.png" > <img class="image4" src="images/proton.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "3p") {
			game.nucleonsCount[0] -= 3;
			game.nucleonsTot -= 3;
			game.decayPartCount[0] += 3;
			game.decayPartAll[0] += 3;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image3" src = "images/proton.png" > <img class="image1" src="images/proton.png"><img class="image2" src="images/proton.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+p") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsCount[1]++;
			game.nucleonsTot--;
			game.decayPartCount[0]++;
			game.decayPartCount[3]++;
			game.decayPartAll[0]++;
			game.decayPartAll[3]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/proton.png" > <img class="image3" src="images/positron.png"><img class="image1" src="images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "n") {
			game.nucleonsCount[1]--;
			game.nucleonsTot--;
			game.decayPartCount[1]++;
			game.decayPartAll[1]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/neutron.png" >'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2n") {
			game.nucleonsCount[1] -= 2;
			game.nucleonsTot -= 2;
			game.decayPartCount[1] += 2;
			game.decayPartAll[1] += 2;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/neutron.png" > <img class="image4" src="images/neutron.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-n") {
			if (game.nucleonsCount[0] + 1 > game.protonLim[game.protonLimNumb]) {
			}
			else {
				game.nucleonsCount[0]++;
				game.nucleonsCount[1] -= 2;
				game.nucleonsTot--;
				game.decayPartCount[1]++;
				game.decayPartCount[2]++;
				game.decayPartAll[1]++;
				game.decayPartAll[2]++;
				display.updateNucleons();
				display.updateElement();
				document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/neutron.png" > <img class="image3" src="images/electron.png"><img class="image1" src="images/antineutrino.png">'
			}
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-2n") {
			if (game.nucleonsCount[0] + 1 > game.protonLim[game.protonLimNumb]) {
			}
			else {
				game.nucleonsCount[0]++;
				game.nucleonsCount[1] -= 3;
				game.nucleonsTot -= 2;
				game.decayPartCount[1] += 2;
				game.decayPartCount[2]++;
				game.decayPartAll[1] += 2;
				game.decayPartAll[2]++;
				display.updateNucleons();
				display.updateElement();
				document.getElementById("decayContainer").innerHTML = '<img class="image4" src = "images/neutron.png" ><img class="image2" src = "images/neutron.png" > <img class="image3" src="images/electron.png"><img class="image1" src="images/antineutrino.png">'
			}
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "alpha") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsCount[1] -= 2;
			game.nucleonsTot -= 4;
			game.decayPartCount[4]++;
			game.decayPartAll[4]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/alpha.png" >'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+alpha") {
			game.nucleonsCount[0] -= 3;
			game.nucleonsCount[1] -= 1;
			game.nucleonsTot -= 4;
			game.decayPartCount[3]++;
			game.decayPartCount[4]++;
			game.decayPartAll[3]++;
			game.decayPartAll[4]++;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/alpha.png" > <img class="image3" src="images/positron.png"><img class="image1" src="images/neutrino.png">'
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == ""){
			game.nucleonsCount[0] = 1;
			game.nucleonsCount[1] = 0;
			game.nucleonsTot = 1;
			display.updateNucleons();
			display.updateElement();
			document.getElementById("decayContainer").innerHTML = '<img class="image2" src = "images/helium4.png" >'
		}
		visitGrid(game.nucleonsCount[0], game.nucleonsCount[1], game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]], "false");
		visitGridP(game.nucleonsCount[0]);
	}

	for (i = 0; i < achievement.name.length; i++) {
		if (achievement.type[i] == "factories" && factories.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "isotope" && game.totalIsotope >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "element" && game.totalElement >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "decayPart" && game.decayPartAll[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
	};
	display.updateAchievements();

	for (i = 0; i < game.decayPartCount.length; i++) {
		game.decayPartCount[i] += game.decayPartPerSec[i];
		game.decayPartAll[i] += game.decayPartPerSec[i];
    }
	display.updateElement();

}, 1000); //1000 = 1 second

setInterval(function () {
	saveGame();
}, 30000); //30000 = 30 seconds

document.addEventListener("keydown", function (event) {
	if (event.ctrlKey && event.which == 83) {// ctrl + s
		event.preventDefault();
		saveGame();
	}
}, false);