let diccionario = [];
diccionario["A"] = ["Activo","Acuerdo","alarma"];
diccionario["B"] = ["banco","baño","bueno"];
diccionario["C"] = ["credito","campo","covertura"];
diccionario["D"] = ["donar","duda","dia"];
diccionario["E"] =  ["elabora", "echo", "excelente"];
diccionario["F"] =  ["femicido","fabuloso","fama"];
diccionario["G"] =  ["ganancia","gala","gemido"];
diccionario["H"] =  ["hola","hoy","hermana"];
diccionario["I"] =  ["inteligente","inquitud","inocente"];
diccionario["J"] =  ["jefea","Joven","joya"];
diccionario["K"] =  ["kilo","kilometro","kaki"];
diccionario["L"] =  ["largo","lejo","lujo"];
diccionario["M"] =  ["mapa","mar","mucho"];
diccionario["N"] =  ["nudo","nodo","numero"];
diccionario["Ñ"] =  ["nato","ñoño","ñ"];
diccionario["O"] =  ["ojo","ojala","ala"];
diccionario["P"] =  ["parche","pago","palabra"];
diccionario["Q"] =  ["Quema","que","queja"];
diccionario["R"] =  ["rectificador","recto","ruta"];
diccionario["S"] =  ["salida","saldo","salario"];
diccionario["T"] =  ["tecnico","techo","tele"];
diccionario["U"] =  ["una","unido","un"];
diccionario["V"] =  ["vista","vaso","vaca"];
diccionario["W"] =  ["wiwili","web","wahtsapp"];
diccionario["X"] =  ["xilofon","xilema","xeroftalmia"];
diccionario["Y"] =  ["yugular","yunque","yuca"];
diccionario["Z"] =  ["zapata","zarza","zaga"];

function primeraLetraMayuscula(palabra) {
    return "<strong>"+palabra.charAt(0).toUpperCase()+"</strong>" + palabra.slice(1).toLowerCase();
}

function generarPalabra(letra) {

    var palabra = diccionario[letra][Math.floor(Math.random()*diccionario[letra].length)];

    return primeraLetraMayuscula(palabra);
}

function mostrarPalabra (palabra) {
    var contenedor_frase = document.getElementById("frase");

    var palabra_resultado = document.createElement("p");

    palabra_resultado.innerHTML = palabra;

    contenedor_frase.appendChild(palabra_resultado);
}

function generarFrase() {

    document.getElementById("frase").innerHTML = "";

    var frase_input = document.getElementById("mnemonic");

    var letras_iniciales_frase = frase_input.value.toUpperCase().match(/\b(\w)/g);

    var palabras_resultado = letras_iniciales_frase.map(letra => generarPalabra(letra));

    palabras_resultado.map(palabra => mostrarPalabra(palabra));
}

(function () {
    var boton_generar = document.getElementById("generar");

    boton_generar.addEventListener("click",generarFrase);
})();
