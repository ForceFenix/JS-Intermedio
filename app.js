
//---------------------------------------------FUNCIONES ELEMENTALES 

//------UTILIZADO EN EJERCICIO UNO, TRES, CINCO Y SEIS
//Dado un array, elegira un elemento aleatorio.
var elementoAlAzar = array => {
    var indiceAleatorio = Math.floor(Math.random() * array.length);
    var elementoAleatorio = array[indiceAleatorio];
    return elementoAleatorio;
}

//------UTILIZADO EN EJERCICIO CINCO Y SEIS
//Dado un array, elegira n cantidad de elementos y los retornara en una lista sin repetidos.
var listado = (array, n) => {
    var lista = [];
    while (lista.length <= n) {
        var elemento = elementoAlAzar(array);
        if (lista.includes(elemento) == false) {
            lista.push(elemento);
        }
    }
    return lista;
}


//----------------------------------------------PUNTO UNO
//Creador de Nombres de Bandas Aleatorios:
//Instrucciones: Escribe una función que genere nombres de bandas aleatorios
// y únicos cada vez que se llama. Puedes combinar palabras inusuales,
// colores extravagantes y animales exóticos para hacerlos sonar realmente
// interesantes.

var prefijos = ["el", "los", "la", "las"];

var masculinoSingular = ["cucurucho", "torpedo", "chirimbolo", "cachivache", "cacheton", "barbijo", "cristorey", "socotroco"];
var masculinosPlural = ["pericos", "gansos", "chimangos", "castores", "carpinchos", "pochocleros", "manijas", "tuberculos", "otorrinoslaringologos"];

var femeninoSingular = ["cocotera", "peluca", "floripondia", "fisura", "contingencia", "cachufleta"];
var femeninosPlural = ["luciernagas", "hormigas", "llamas", "kiosqueras", "platipusas", "tijeras", "munipas"];

var adjetivos = ["colorad", "boster", "patituert", "travesañer", "posmodern", "inclusiv", "catatonic", "astral"];


var nombreAleatorio = () => {
    var resultado = [];
    var prefijoAleatorio = elementoAlAzar(prefijos);
    resultado.push(prefijoAleatorio);
    if (prefijoAleatorio == "el") {
        resultado.push(elementoAlAzar(masculinoSingular));
        var adjetivoString = elementoAlAzar(adjetivos);
        var adjetivo = adjetivoString.split("");
        adjetivo.push("o");
        adjetivo = adjetivo.join("");
        resultado.push(adjetivo);
    }
    else if (prefijoAleatorio == "los") {
        resultado.push(elementoAlAzar(masculinosPlural));
        var adjetivoString = elementoAlAzar(adjetivos);
        var adjetivo = adjetivoString.split("");
        adjetivo.push("o", "s");
        adjetivo = adjetivo.join("");
        resultado.push(adjetivo);
    }
    else if (prefijoAleatorio == "la") {
        resultado.push(elementoAlAzar(femeninoSingular));
        var adjetivoString = elementoAlAzar(adjetivos);
        var adjetivo = adjetivoString.split("");
        adjetivo.push("a");
        adjetivo = adjetivo.join("");
        resultado.push(adjetivo);
    }
    else if (prefijoAleatorio == "las") {
        resultado.push(elementoAlAzar(femeninosPlural));
        var adjetivoString = elementoAlAzar(adjetivos)
        var adjetivo = adjetivoString.split("");
        adjetivo.push("a", "s")
        adjetivo = adjetivo.join("");
        resultado.push(adjetivo);
    }
    resultado = resultado.join(" ");
    return resultado;
}

console.log(nombreAleatorio());


//----------------------------------------------PUNTO DOS
//Conversor de Emociones a Emoji:
// Instrucciones: Crea una función que tome una cadena de texto que exprese
// emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
// correspondiente. ¡Añade una dosis de humor a tus emociones!


var emociones = ["feliz", "triste", "ansioso", "fachero", "aburrido", "avergonzado", "enojado", "enfermo", "cansado"];
var emojis = ["😄", "🥺", "😬🚬", "😎", "🥱", "😳", "🤬", "🤮", "😴"];
var input = "feliz";

var selectorEmoji = string => {
    if (emociones.includes(string) == true) {
        var emocionesIndex = emociones.indexOf(string);
        console.log(emojis[emocionesIndex]);
    }
    else {
        console.log("no encuentro esa emocion 🥺");
    }
}

console.log(selectorEmoji(input));


//----------------------------------------------PUNTO TRES
// Generador de Historias Absurdas:
// Instrucciones: Desarrolla una función que genere historias absurdas
// combinando elementos inesperados, como pingüinos que hablan francés,
// robots enamorados de plantas y astronautas perdidos en el espacio con una
// mascota alienígena.


var sujeto = ["el analista", "el jugador", "el leon", "el proplayer de lol", "el bombero", "el gaucho", "la computadora", "la ingeniera", "la rata", "la oveja"];
var predicado = ["que compraba figuritas", "estudiaba las leyes", "se sonaba los mocos", "se enojaba mas y mas con el jungla", "robaba el hierro a su compa", "copiaba lineas de chatGPT"];
var complemento = ["mientras se tomaba un gintonic de pepino", "cuando en el dia% habia 2x1 en papas fritas", "cocinaba carpincho a la estaca", "gankeaban al top", "acariciaba su suave pelaje", "sufria de un ataque epileptico", "a la vez que no sabia que escribir en este array"];


var historiasRandom = () => {
    var historia = [];

    historia.push(elementoAlAzar(sujeto));
    historia.push(elementoAlAzar(predicado));
    historia.push(elementoAlAzar(complemento));
    
    return historia.join(" ");
}


//----------------------------------------------PUNTO CUATRO
// Simulador de Viaje en el Tiempo Musical:
// Instrucciones: Escribe una función que, dado un año, devuelva una
// recomendación de canciones populares de esa época. Puedes mezclar
// diferentes géneros y hacer recomendaciones basadas en eventos históricos
// de ese año.

var canciones = [
    "Bohemian Rhapsody - Queen \nDirectamente un himno a la musica moderna.", 
    "Billie Jean - Michael Jackson \nQuien no conoce este hit del rey del Pop?", 
    "Ella uso mi cabeza como un revolver - Soda Stereo \nEsta cancion hace referencia como una persona puede ejerceer control sobre otra.",
    "Everything I Do (I Do It for You) - Bryan Adams \nMas de uno la habra escuchado enamorado o sentado en la ducha llorando despues de un desamor. 🥺", 
    "Macarena - Los del Río \nAlto cringe, pero fue un exito. 🤡",
    "Té para 3 - Soda Stereo \nEsta cancion sabe como transmitir la tristesa que el compositor sintio al escribirla. 😭",
    "The Black Parade - My Chemical Romance \nTemazo wachiiiiim, que epocas.",
    "Instant Crush - Daft Punk \nNo importa que genero te guste, este tema no tiene comparacion y recomiendo que la escuches hasta que te aprendas el estribillo.",
    "Despacito - Luis Fonsi featuring Daddy Yankee \nVos la conoces, yo la conozco, notros la conocemos.",
    "No tengo ni idea, recomendame una vos. 😬"];

var año = 2014;

var recomendaciones = año => {
    if (año < 1980){
        console.log(canciones[0]);
    }
    else if(año >= 1980 && año < 1985){
        console.log(canciones[1]);
    }
    else if(año >= 1985 && año < 1990){
        console.log(canciones[2]);
    }
    else if(año >= 1990 && año < 1995){
        console.log(canciones[3]);
    }
    else if(año >= 1995 && año < 2000){
        console.log(canciones[4]);
    }
    else if(año >= 2000 && año < 2005){
        console.log(canciones[5]);
    }
    else if(año >= 2005 && año < 2010){
        console.log(canciones[6]);
    }
    else if(año >= 2010 && año < 2015){
        console.log(canciones[7]);
    }
    else if(año >= 2015 && año < 2020){
        console.log(canciones[8]);
    }
    else if(año >= 2020 && año < 2025){
        console.log(canciones[9]);
    }
}

recomendaciones(año);

//----------------------------------------------PUNTO CINCO
// Creador de Recetas Culinarias del Futuro:
// Instrucciones: Escribe una función que genere recetas culinarias futuristas
// combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
// que la comida del futuro sea emocionante y deliciosa!

var preparacion = ["Estofado de", "Helado de", "Risotto de", "Ñoquis de", "Parrillada de"];
var ingredientePrincipal = ["Zanahoria NFT", "Batata Criptonica", "Polenta Proteica", "Brocoli", "Helado", "Radicheta", "Mula"];
var estilo = ["a la romana", "a la tucumana", "a la criolla", "a la pakistani", "a la japonesa"];

var medidas = ["7 honzas de", "media docena de", "0.5 gramos de", "media cucharada de", "5 tazas de", "una botella retornable de 2 litros de", "una pizca de", "3 puntos del PBI de", "un racimo de"]
var ingredientes = ["huevos", "harina", "leche", "sulfato de sodio", "aceite de cardamomo", "chicharron", "polvo para hornear", "papa deshidratada", "azucar impalpable"];

var pasos = [
    "Batir energicamente hasta que sea un 90% aire y 10% la preparacion.",
    "Desenchufar la heladera hasta alcanzar los 160º celcius, enmantecar una bandeja de silicona.",
    "Pelar y cortar en juliana.",
    "Hervir 2 litros de leche condensada.",
    "Aceitar la licuadora y reservar.",
    "Condimentar a gusto y dejar reposar 69 minutos en el sol",
    "Cortar en rodajas y preparar brochetas en cantidades iguales.",
    "Freir en aceite de carpincho en la heladera previamente precalentada.",
    "Comprar dolar mep a principio de mes.",
    "Rebosar con bicarbonato de sodio",
    "Llegar a diamante en el lol.",
    "Hacer un 360 en el warthunder",
    "Hacer esta tarea sin el chatGPT"];

var emplatado = ["Servir en un frasco de mermelada.", "Emplatar en una pala (no apto para kumpas)", "Servir en una palangana de boca de 20lts.", "Servir en una lata de dulce de batata con chocolate a temperatura ambiente", "Emplatar en una hamaca paraguaya.", "Emplatar en una prepizza descongelada 27 segundos en el microoondas", "Servir en una feta de queso Punta de Agua.", "Emplatar en capo de reno 12 de 2009 flojo de papeles y pedido de captura no menor a 2 semanas."];


var recetasGenerator = () => {
    let preparacionRandom = elementoAlAzar(preparacion);
    let ingredientePrincipalRandom = elementoAlAzar(ingredientePrincipal);
    let estiloRandom = elementoAlAzar(estilo);
    let ingredientesRandom = listado(ingredientes, 5);
    let pasosRandom = listado(pasos, 4);
    let emplatadoRandom = elementoAlAzar(emplatado);

    console.log(`${preparacionRandom} ${ingredientePrincipalRandom} ${estiloRandom}
                \n\nIngredientes:
                \n✦ ${elementoAlAzar(medidas)} ${ingredientesRandom[0]}
                \n✦ ${elementoAlAzar(medidas)} ${ingredientesRandom[1]}
                \n✦ ${elementoAlAzar(medidas)} ${ingredientesRandom[2]}
                \n✦ ${elementoAlAzar(medidas)} ${ingredientesRandom[3]}
                \n✦ ${elementoAlAzar(medidas)} ${ingredientesRandom[4]}
                \n\nPreparacion:
                \n✧ ${pasosRandom[0]}
                \n✧ ${pasosRandom[1]}
                \n✧ ${pasosRandom[2]}
                \n✧ ${pasosRandom[3]}
                \n\n${emplatadoRandom}`);

}
recetasGenerator();

//----------------------------------------------PUNTO SEIS
// Generador de Planetas Fantásticos
// Instrucciones: Escribe una función que genere nombres y características
// únicas para planetas imaginarios. Combina elementos como colores,
// elementos químicos y fenómenos cósmicos para crear mundos asombrosos

//Devuelve un String
var registroAstral = () => {
    let pronombre = ["Proxima", "Centauri", "Epsilon", "Gliese", "Trappist", "Kepler"];
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let pronombreRandom = elementoAlAzar(pronombre);
    let abcRandom = listado(abc, 2).join("");
    let numeroRandom = listado(numeros, 4).join("");

    let nombreRandom = `${pronombreRandom} ${abcRandom}-${numeroRandom}`;
    return nombreRandom;
}
//Devuelve un array (MIN y MAX)
var temperaturaAstral = () => {
    var temperaturas = [-273, -100, -43, 0, 15, 36, 75, 110, 250, 1000, 2300, 8700, 10000];
    var temperaturasRandom = listado(temperaturas, 2).sort((a, b) => a - b);
    return [`${temperaturasRandom[0]}ºC`, `${temperaturasRandom[1]}ºC`];
}
//Devuelve un array ( ELEMENTO PRINCIPAL, ELEMENTO SECUNDARIO, COLOR MEZCLADO)
var componenteAstral = () => {
    let elementosQuimicos = [["Hidrogeno", "Blanco"], ["Helio", "Azul"], ["Litio", "Blanco"], ["Neon", "Rojo"], ["Fluor", "Amarillo"], ["Sodio", "Blanco"], ["Magnecio", "Blanco"], ["Aluminio", "Blanco"], ["Silicio", "Negro"], ["Fosforo", "Rojo"], ["Carbono", "Negro"]] //colores: Blanco, Negro, Azul, Rojo, Amarillo. 
    let principalRandom = elementoAlAzar(elementosQuimicos);
    let secundarioRandom = elementoAlAzar(elementosQuimicos);

    let colorPrincipal = principalRandom[1];
    let colorSecundario = secundarioRandom[1];
    let colorMezcla = "";

    if (colorPrincipal === colorSecundario) {
        colorMezcla = `${colorPrincipal} Aurico`;
    }
    else if ((colorPrincipal == "Blanco" && colorSecundario == "Negro") || (colorSecundario == "Blanco" && colorPrincipal == "Negro")) {
        colorMezcla = "Plateado";
    }
    else if ((colorPrincipal == "Blanco" && colorSecundario == "Azul") || (colorSecundario == "Blanco" && colorPrincipal == "Azul")) {
        colorMezcla = "Celeste Metalico";
    }
    else if ((colorPrincipal == "Blanco" && colorSecundario == "Rojo") || (colorSecundario == "Blanco" && colorPrincipal == "Rojo")) {
        colorMezcla = "Rosa Metalico";
    }
    else if ((colorPrincipal == "Blanco" && colorSecundario == "Amarillo") || (colorSecundario == "Blanco" && colorPrincipal == "Amarillo")) {
        colorMezcla = "Amarillo Metalico";
    }
    else if ((colorPrincipal == "Negro" && colorSecundario == "Azul") || (colorSecundario == "Negro" && colorPrincipal == "Azul")) {
        colorMezcla = "Azul Oscuro";
    }
    else if ((colorPrincipal == "Negro" && colorSecundario == "Rojo") || (colorSecundario == "Negro" && colorPrincipal == "Rojo")) {
        colorMezcla = "Rojo Sangre";
    }
    else if ((colorPrincipal == "Negro" && colorSecundario == "Amarillo") || (colorSecundario == "Negro" && colorPrincipal == "Amarillo")) {
        colorMezcla = "Dorado";
    }
    else if ((colorPrincipal == "Azul" && colorSecundario == "Rojo") || (colorSecundario == "Azul" && colorPrincipal == "Rojo")) {
        colorMezcla = "Violeta";
    }
    else if ((colorPrincipal == "Azul" && colorSecundario == "Amarillo") || (colorSecundario == "Azul" && colorPrincipal == "Amarillo")) {
        colorMezcla = "Verde";
    }
    else if ((colorPrincipal == "Rojo" && colorSecundario == "Amarillo") || (colorSecundario == "Rojo" && colorPrincipal == "Amarillo")) {
        colorMezcla = "Naranja";
    }

    componenteRandom = [principalRandom[0], secundarioRandom[0], colorMezcla]
    return componenteRandom;
}
//Devuelve un String
var distanciaAstral = () => {
    var distanciaRandom = Math.floor(Math.random() * 20) + 1;
    distanciaRandom.toString();
    return `${distanciaRandom} millones de kilometros`;
}
//------------------------------------------FUNCION PRINCIPAL
//Necesita que ingreses cuantos planetas vas a crear
var bigbang = (cantidad) => { 
    var planetas = cantidad;
    for (let i = 0; i < cantidad; i++) {
        let nombre = registroAstral();

        let temperaturas = temperaturaAstral()
        let temperaturaMin = temperaturas[0];
        let temperaturaMax = temperaturas[1];

        let componentes = componenteAstral();
        let componentePri = componentes[0];
        let componenteSec = componentes[1];
        let colores = componentes[2];

        let distanciaEst = distanciaAstral();

        console.log(`${nombre}
        \nTemperatura Minima: ${temperaturaMin}.
        \nTemperatura Maxima: ${temperaturaMax}.
        \nComponente Principal: ${componentePri}.
        \nComponente Secundario: ${componenteSec}.
        \nColor: ${colores}.
        \nDistancia a su estrella: ${distanciaEst}.\n\n\n`)
    }
}

bigbang(3);