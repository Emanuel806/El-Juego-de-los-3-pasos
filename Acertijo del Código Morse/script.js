function validador(){
    const morseInput = document.getElementById("morseInput").value;

    const morseCorrecto = "espejo";

    if (morseInput == morseCorrecto) {
        document.getElementById("resultado").textContent = "El morse es correcto. Busca debajo del teclado para encontrar la pista faltante."
    } else {
        document.getElementById("resultado").textContent = "El morse es incorrecto"
    }
}
