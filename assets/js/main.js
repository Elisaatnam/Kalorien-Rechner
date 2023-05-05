// globaler scope fuer den output der function
const outputGuKcal = document.querySelector(".output-gu-kcal");
const outputGuKJ = document.querySelector(".output-gu-kj");
const outputGesuKcal = document.querySelector(".output-gesu-kcal");
const outputGesuKJ = document.querySelector(".output-gesu-kj");

//calcCal function
const calcCal = () => {
	//groesse, alter u gewicht auslesen und als number ausgeben
	const groesse = Number(document.querySelector("#groesse").value);
	const alter = Number(document.querySelector("#alter").value);
	const gewicht = Number(document.querySelector("#gewicht").value);
	//kontrolle
	console.log({ groesse }, { alter }, { gewicht });

	// radio buttons auslesen - gibt value vom angewaehlten button aus
	const wOderM = document.querySelector('input[name="k-bau"]:checked').value;
	//kontrolle
	console.log(wOderM);

	//select feld auslesen - value kommt als number zurueck
	const palFaktor = Number(document.querySelector("select").value);
	//kontrolle
	console.log(palFaktor);

	// Funktion um kcla in KJ umzurechenn
	const kcalToKJ = kcal => {
		return kcal * 4.184;
	};

	//alles berechnen
	// wenn weiblich ausgewaehlt
	if (wOderM == "w") {
		//Grundumsatz weiblich ausrechnen
		const guW = 655.1 + 9.6 * gewicht + 1.8 * groesse - 4.7 * alter;
		//und ausgeben in kcal abgerundet
		outputGuKcal.innerHTML = Math.floor(guW);
		//KJ abgerundet ausgeben
		outputGuKJ.innerHTML = Math.floor(kcalToKJ(guW));
		//Gesamtumsazt berechnen
		const gesuW = guW * palFaktor;
		//Gesamtumsatz in kcal abgerundet ausgeben
		outputGesuKcal.innerHTML = Math.floor(gesuW);
		//Gesamtumsatz in KJ abgerundet ausgeben
		outputGesuKJ.innerHTML = Math.floor(kcalToKJ(gesuW));
	}
	// wenn maennlich ausgewaehlt
	else {
		//Grundumsatz maennlich ausrechnen
		const guM = 66.4 + 13.7 * gewicht + 5 * groesse - 6.8 * alter;
		//und ausgeben in kcal abgerundet
		outputGuKcal.innerHTML = Math.floor(guM);
		//KJ abgerundet ausgeben
		outputGuKJ.innerHTML = Math.floor(kcalToKJ(guM));
		//Gesamtumsazt berechnen
		const gesuM = guM * palFaktor;
		//Gesamtumsatz in kcal abgerundet ausgeben
		outputGesuKcal.innerHTML = Math.floor(gesuM);
		//Gesamtumsatz in KJ abgerundet ausgeben
		outputGesuKJ.innerHTML = Math.floor(kcalToKJ(gesuM));
	}
};
