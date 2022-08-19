// Create one dimensional array
var chemicSeen = new Array(100);
// Loop to create 2D array using 1D array
for (var i = 0; i < chemicSeen.length; i++) {
	chemicSeen[i] = new Array(100).fill("false");
}
//Hydrogen 1 is seen
chemicSeen[1][0] = "true";

var game = {
	protonmax: 1,
	neutronmax: 0,
	totalIsotope: 1,
	decayPartName: ["proton", "neutron", "electron", "positron", "alpha", "gamma"],
	decayPartNameShort: ["p", "n", "e-", "e+", "a", "g"],
	decayPartImage: ["proton.png", "neutron.png", "electron.png", "positron.png", "alpha.png", "gamma.png"],
	decayPartColor: ["red", "blue", "cyan", "magenta", "green", "yellow"],
	decayPartCount: [0, 0, 0, 0, 0, 0],
	protonLim: [2,26,92,118],
	name: ["proton","neutron"],
	image: ["proton.png", "neutron.png"],
	color: ["red", "blue"],
	chemicalName: ["neutron", "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon",
		"sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulfur", "chlorine", "argon",
		"potassium", "calcium", "scandium", "titane", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", "selenium", "bromine", "krypton",
		"rubidium", "strontium", "yttrium", "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin", "antimony", "tellurium", "iodine","xenon"],
	chemicalSymbol: ["n", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
		"Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
		"K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
		"Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe"],
	chemicalSeen: chemicSeen,
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
		/*Ar*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "2p", "2p", "b+p", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*20*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*K*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "3p", "", "p", "p", "b+", "b+", "b+", "b+", "stable"/*20*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n"/*30*/, "b-", "b-n", "b-n", "b-n", "b-", "b-", "b-", "b-", "", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ca*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "b+p", "b+p", "b+p", "b+", "b+", "stable"/*20*/, "b+", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Sc*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "p", "b+", "b+"/*20*/, "b+", "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ti*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "2p", "b+p", "b+", "b+p", "b+"/*20*/, "b+", "b+", "b+", "stable", "stable", "stable", "stable", "stable", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*V*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "p", "p", "p", "b+"/*20*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b-", "b-"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Cr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "b+", "b+", "b+"/*20*/, "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable", "stable", "stable"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Mn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "p", "p"/*20*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*30*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Fe*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "2p", "b+"/*20*/, "b+", "b+", "b+p", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*30*/, "stable", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Co*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "p", "b+p", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*30*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "", "", "", "", "", ""/*50*/, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ni*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*30*/, "b+", "stable", "stable", "stable", "b-", "stable", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "",""],
		/*Cu*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "p", "p", "p", "b+", "b+", "b+", "b+", "b+"/*30*/, "b+", "b+", "b+", "stable", "b+", "stable", "b-", "b-", "b-", "b-"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-n"/*50*/, "b-", "", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "",""],
		/*Zn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "2p", "2p", "b+", "b+p", "b+p", "b+", "b+"/*30*/, "b+", "b+", "b+", "stable", "b+", "stable", "stable", "stable", "b-", "stable"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", "", "", "", ""],
		/*Ga*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "p", "p", "p", "p", "b+", "b+"/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b-", "stable"/*40*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-n", "", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Ge*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "2p", "2p", "b+", "b+p", "b+"/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*40*/, "stable", "stable", "b-", "2b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-n", "", "", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*As*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "p", "p", "p", "p"/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-n", "b-", "b-", "b-", "b-", "", "", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Se*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*40*/, "b+", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-n", "b-", "b-", "", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", ""],
		/*Br*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "p", "p", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "stable", "b-", "stable", "b-", "b-", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*60*/, "", "", "", "", "", "", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Kr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "2b+", "b+", "stable", "b+", "stable", "stable", "stable", "b-", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "", "", "", "b-2n", "", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Rb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "p", "p", "p", "p", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b-", "b-"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Sr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable", "stable", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Y*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "p", "b+", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*50*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Zr*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "b+p", "b+"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*50*/, "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Nb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", "b+p"/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*70*/, "", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Mo*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*50*/, "b+", "stable", "stable", "stable", "stable", "stable", "b-", "2b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Tc*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b-", "b-", "b-", "b-", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "", "", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Ru*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "stable", "b+", "stable", "stable", "stable", "stable", "stable", "b-", "stable"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "", "", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", ""],
		/*Rh*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b-", "b-"/*60*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "", "", "", ""/*80*/, "", "", "", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*Pd*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable", "stable", "stable"/*60*/, "b-", "stable", "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*Ag*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "b+", "b+", "b+", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*60*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "", "", "", "", ""/*90*/, "", "", ""],
		/*Cd*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "b+", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*60*/, "b+", "stable", "stable", "stable", "b-", "stable", "b-", "2b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "", "", "", "", "", "", "", ""/*90*/, "", "", ""],
		/*In*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "b+", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*70*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*90*/, "", "", ""],
		/*Sn*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", "b+"/*50*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "stable", "b+", "stable", "stable", "stable", "stable", "stable", "stable", "stable"/*70*/, "b-", "stable", "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", ""/*90*/, "", "", ""],
		/*Sb*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable"/*70*/, "b-", "stable", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "", ""/*90*/, "", "", ""],
		/*Te*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "alpha", "alpha", "alpha", "alpha", "alpha", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "stable", "b+", "stable"/*70*/, "stable", "stable", "stable", "stable", "b-", "2b-", "b-", "2b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "", "", ""],
		/*I*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "", "alpha", "p", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+"/*70*/, "b+", "b+", "b+", "stable", "b-", "b-", "b-", "b-", "b-", "b-"/*80*/, "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "b-","",""],
		/*Xe*/["", "", "", "", "", "", "", "", "", "", ""/*10*/, "", "", "", "", "", "", "", "", "", ""/*20*/, "", "", "", "", "", "", "", "", "", ""/*30*/, "", "", "", "", "", "", "", "", "", ""/*40*/, "", "", "", "", "", "", "", "", "", ""/*50*/, "", "", "", "alpha", "b+", "b+", "b+", "b+", "b+", "b+"/*60*/, "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "b+", "2b+"/*70*/, "b+", "stable", "b+", "stable", "stable", "stable", "stable", "stable", "b-", "stable"/*80*/, "b-", "2b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-", "b-"/*90*/, "b-","b-","b-"]	],

	nucleonsCount: [1, 0],
	nucleonsTot: 1,
	totalClicks: 0,
	version: 0.000,

	addtonucleons: function (amount, index) {
		if ((index == 0 && game.chemicalDecay[game.nucleonsCount[0] + 1][game.nucleonsCount[1]] !== "") || (index == 1 && game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1] + 1] !== "")) {
			for (i = 0; i < game.protonLim.length; i++) {
				if (index == 0 && (game.nucleonsCount[0] + 1 > game.protonLim[i] && factories.count[i] == 0)) {
					alert("Not possible yet ! - Build a " + factories.name[i] + " if you want to go further !");
					this.nucleonsCount[index] -= amount;
					this.nucleonsTot -= amount;
				}
			}
			this.nucleonsCount[index] += amount;
			this.nucleonsTot += amount;
			visitGrid(this.nucleonsCount[0], this.nucleonsCount[1], this.chemicalDecay[this.nucleonsCount[0]][this.nucleonsCount[1]], "false");
			display.updateNucleons();
			display.updateElement();
			this.totalClicks++;
		}
	},
};

var factories = {
	name: ["Star", "Novae", "Supernovae", "Collider"
	],
	image: ["star.png", "novae.png", "supernovae.png", "collider.png"
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

	purchase: function (index) {
		if (game.decayPartCount.every((v, i) => v >= this.cost[index][i])) {
			for (i = 0; i < game.nucleonsCount.length; i++) {
				game.decayPartCount[i] -= this.cost[index][i];
				this.cost[index][i] = Math.ceil(this.cost[index][i] * 1.1);
			}
			this.count[index]++;
			this.totalCount++;
			display.updateNucleons();
			display.updateShop();
			display.updateGrid();
			display.updateElement();
		}
	}
};

var achievement = {
	name: [
		"A first click",
		"A thousand clicks",
		"A million clicks",
		"A billion clicks",
		"First new element",
		"Ten element later",
		"A hundred element more",
		"Thousands elements, okay ?",
		"And there was light",
		"Nebulae light",
		"Big cluster of light",
		"Galaxy of light",
		"KABOOM",
		"KABOOOOOOOOOM",
		"KABO^100M",
		"KABO^1000M",
		"Could I become a brown dwarf ?",
		"Could I become a red dwarf ?",
		"Could I become a neutron star ?",
		"Could I become a black hole ?",
		"Look at my LINAC !",
		"Look at my cyclotron",
		"Look at my LHC",
		"Look at my FCC"
	],
	description: [
		"Click 1 time", "Click 1000 times", "Click 1000000 times", "Click 1000000000 times",
		"Obtain 1 element", "Obtain 10 elements", "Obtain 100 elements", "Obtain 1000 elements",
		"Buy 1 star", "Buy 10 stars", "Buy 100 stars", "Buy 1000 stars",
		"Buy 1 novae", "Buy 10 novaes", "Buy 100 novaes", "Buy 1000 novaes",
		"Buy 1 supernovae", "Buy 10 supernovaes", "Buy 100 supernovaes", "Buy 1000 supernovaes",
		"Buy 1 collider", "Buy 10 colliders", "Buy 100 colliders", "Buy 1000 colliders"
	],
	image: [
		"click-1.png",
		"click-1000.png",
		"click-1000000.png",
		"click-1000000000.png",
		"element-1.png",
		"element-10.png",
		"element-100.png",
		"element-1000.png",
		"star-1.png",
		"star-10.png",
		"star-100.png",
		"star-1000.png",
		"novae-1.png",
		"novae-10.png",
		"novae-100.png",
		"novae-1000.png",
		"supernovae-1.png",
		"supernovae-10.png",
		"supernovae-100.png",
		"supernovae-1000.png",
		"collider-1.png",
		"collider-10.png",
		"collider-100.png",
		"collider-1000.png"
	],
	type: [
		"click", "click", "click", "click",
		"element", "element", "element", "element",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories",
		"factories", "factories", "factories", "factories"
	],
	requirement: [
		1, 1000, 1000000, 1000000000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000,
		1, 10, 100, 1000
	],
	objectIndex: [
		-1, -1, -1, -1,
		-1, -1, -1, -1,
		0, 0, 0, 0,
		1, 1, 1, 1,
		2, 2, 2, 2,
		3, 3, 3, 3
	],
	awarded: [
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
			document.getElementById("shopContainer").innerHTML += '<table class="shopButton" onclick="factories.purchase(' + i + ')"><tr><td id="image"><img src="images/' + factories.image[i] + '"></td><td if="nameAndCost"><p>' + factories.name[i] + '</p><p><span id="boxcost' + game.decayPartNameShort[0] + factories.name[i] + '">' + factories.cost[i][0] + '</p><p id="boxcost' + game.decayPartNameShort[1] + factories.name[i] + '">' + factories.cost[i][1] + '</p><p id="boxcost' + game.decayPartNameShort[2] + factories.name[i] + '">' + factories.cost[i][2] + '</p><p id="boxcost' + game.decayPartNameShort[3] + factories.name[i] + '">' + factories.cost[i][3] + '</p><p id="boxcost' + game.decayPartNameShort[4] + factories.name[i] + '">' + factories.cost[i][4] + '</p><p id="boxcost' + game.decayPartNameShort[5] + factories.name[i] + '">' + factories.cost[i][5] + '</p></td><td = id="amount"><span>' + factories.count[i] + '</span></td></tr></table>'
			for (j = 0; j < game.decayPartName.length; j++) {
				document.getElementById('boxcost' + game.decayPartNameShort[j] + factories.name[i]).style.color = game.decayPartColor[j];
			}
		}
	},

	updateAchievements: function () {
		document.getElementById("achievementContainer").innerHTML = "";
		for (i = 0; i < achievement.name.length; i++) {
			if (achievement.awarded[i]) {
				document.getElementById("achievementContainer").innerHTML += '<img src="images/' + achievement.image[i] + '" title= "' + achievement.name[i] + ' &#10; ' + achievement.description[i] + '">'
			}
		}
	},

	updateElement: function () {
		if (game.nucleonsCount[0] > game.protonmax) {
			game.protonmax = game.nucleonsCount[0];
		}
		document.getElementById("elementContainer").innerHTML = '<p>The highest element obtained is ' + game.chemicalName[game.protonmax] + ' (Z = ' + game.protonmax + ') </p>'
		document.getElementById("elementContainer").innerHTML += '<div class="nucleusContainer"><img src="images/' + game.chemicalName[game.nucleonsCount[0]] + game.nucleonsTot + '.png" height="64px" width="64px" ></div>'
		document.getElementById("elementContainer").innerHTML += '<p>The actual nucleus is ' + game.chemicalSymbol[game.nucleonsCount[0]] + ' ' + game.nucleonsTot + '</p>'
		//document.getElementById("elementContainer").innerHTML += '<p>You have collected </p><p>' +  game.decayPartCount[0] + ' ' + game.decayPartNameShort[0] + ', ' + game.decayPartCount[1] + ' ' + game.decayPartNameShort[1] + ', ' + game.decayPartCount[2] + ' ' + game.decayPartNameShort[2] + ', ' + game.decayPartCount[3] + ' ' + game.decayPartNameShort[3] + ', ' + game.decayPartCount[4] + ' ' + game.decayPartNameShort[4] + ' and ' + game.decayPartCount[5] + ' ' + game.decayPartNameShort[5] + '. </p>'
		document.getElementById("elementContainer").innerHTML += '<p>You have collected </p>'
		for (i = 0; i < game.decayPartName.length; i++) {
			document.getElementById("elementContainer").innerHTML += '<p>'+ game.decayPartCount[i]+' <img src="images/' + game.decayPartImage[i] + '" height="10px" width="10px" >' + ' ' + game.decayPartName[i] + '</p> '
		}
	},

	updateGrid: function () {
		for (i = 0; i < game.chemicalSeen.length; i++) {
			for (j = 0; j < game.chemicalSeen[i].length; j++) {
				if (game.chemicalSeen[i][j] == "true") {
					visitGrid(i, j, game.chemicalDecay[i][j],"true");
                }
			}
		}
	}
};

var canvas = document.getElementById("elementCanvas");
var ctx = canvas.getContext("2d");
var widou = 6;
var heightou = 6;
var rects = [
	{ x: widou, y: 0, w: widou, h: heightou, color: "rgb(0,0,0)", colorhover: "rgb(100, 100, 100)" }    // etc.
], i = 0, r;

canvasinit = function () {
	i = 0;
	while (r = rects[i++]) {
		ctx.beginPath();
		ctx.rect(r.x, r.y, r.w, r.h);
		ctx.fillStyle = r.color;
		ctx.fill();
	}
}

canvas.onmousemove = function (e) {

	// important: correct mouse position:
	var rect = this.getBoundingClientRect(),
		x = e.pageX - rect.left,
		y = e.pageY - rect.top,
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

function visitGrid(p, n, decay, updatebool) {
	if (game.chemicalSeen[p][n] == "false" || updatebool == "true") {
		game.chemicalSeen[p][n] = "true";
		game.totalIsotope++;
		if (decay == "stable") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(0, 0, 0)", colorhover: "rgb(100, 100, 100)" });
		}
		else if (decay == "b-" || decay == "2b-" || decay == "b-n" || decay == "b-2n") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(0, 0, 255)", colorhover: "rgb(100, 100, 255)" });
		}
		else if (decay == "b+" || decay == "2b+" || decay == "b+p" || decay == "b+2p") {
			rects.push({ x: widou * p, y: heightou * n, w: widou, h: heightou, color: "rgb(255, 150, 0)", colorhover: "rgb(255, 200, 100)" });
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

function saveGame() {
	var gameSave = {
		rects: rects,
		protonmax: game.protonmax,
		neutronmax: game.neutronmax,
		decayPartCount: game.decayPartCount,
		chemicalSeen: game.chemicalSeen,
		nucleonsCount: game.nucleonsCount,
		nucleonsTot: game.nucleonsTot,
		totalIsotope: game.totalIsotope,
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
		if (typeof savedGame.protonmax !== "undefined") game.protonmax = savedGame.protonmax;
		if (typeof savedGame.neutronmax !== "undefined") game.neutronmax = savedGame.neutronmax;
		if (typeof savedGame.totalIsotope !== "undefined") game.totalIsotope = savedGame.totalIsotope;
		if (typeof savedGame.decayPartCount !== "undefined") {
			for (i = 0; i < savedGame.decayPartCount.length; i++) {
				game.decayPartCount[i] = savedGame.decayPartCount[i];
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
			game.nucleonsCount[0]++;
			game.nucleonsCount[1]--;
			game.decayPartCount[2]++;
			display.updateNucleons();
			display.updateElement();
		}
		if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2b-") {
			game.nucleonsCount[0]+=2;
			game.nucleonsCount[1] -= 2;
			game.decayPartCount[2]+=2;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+") {
			game.nucleonsCount[0]--;
			game.nucleonsCount[1]++;
			game.decayPartCount[3]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2b+") {
			game.nucleonsCount[0]-=2;
			game.nucleonsCount[1] += 2;
			game.decayPartCount[3]+=2;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "p") {
			game.nucleonsCount[0]--;
			game.nucleonsTot--;
			game.decayPartCount[0]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2p") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsTot -= 2;
			game.decayPartCount[0]+=2;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "3p") {
			game.nucleonsCount[0] -= 3;
			game.nucleonsTot -= 3;
			game.decayPartCount[0]+=3;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+p") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsCount[1]++;
			game.nucleonsTot--;
			game.decayPartCount[0]++;
			game.decayPartCount[3]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "n") {
			game.nucleonsCount[1]--;
			game.nucleonsTot--;
			game.decayPartCount[1]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "2n") {
			game.nucleonsCount[1] -= 2;
			game.nucleonsTot -= 2;
			game.decayPartCount[1]+=2;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-n") {
			game.nucleonsCount[0]++;
			game.nucleonsCount[1] -= 2;
			game.nucleonsTot--;
			game.decayPartCount[1]++;
			game.decayPartCount[2]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b-2n") {
			game.nucleonsCount[0]++;
			game.nucleonsCount[1] -= 3;
			game.nucleonsTot -= 2;
			game.decayPartCount[1] += 2;
			game.decayPartCount[2]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "alpha") {
			game.nucleonsCount[0] -= 2;
			game.nucleonsCount[1] -= 2;
			game.nucleonsTot -= 4;
			game.decayPartCount[4]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == "b+alpha") {
			game.nucleonsCount[0] -= 3;
			game.nucleonsCount[1] -= 1;
			game.nucleonsTot -= 4;
			game.decayPartCount[3]++;
			game.decayPartCount[4]++;
			display.updateNucleons();
			display.updateElement();
		}
		else if (game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]] == ""){
			game.nucleonsCount[0] = 1;
			game.nucleonsCount[1] = 0;
			game.nucleonsTot = 1;
			display.updateNucleons();
			display.updateElement();
		}
		visitGrid(game.nucleonsCount[0], game.nucleonsCount[1], game.chemicalDecay[game.nucleonsCount[0]][game.nucleonsCount[1]], "false");
	}
}, 1000); //1000 = 1 second

setInterval(function () {
	for (i = 0; i < achievement.name.length; i++) {
		if (achievement.type[i] == "factories" && factories.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
		else if (achievement.type[i] == "element" && game.totalIsotope >= achievement.requirement[i]) achievement.earn(i);
	};
	display.updateAchievements();
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