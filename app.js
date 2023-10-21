function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 41;
const count = 6;
const iterations = 1000000;

function generarNumerosAleatorios() {
    const frequencyMap = new Map();

    for (let i = 0; i < iterations; i++) {
        const selectedNumbers = new Set();

        while (selectedNumbers.size < count) {
            const randomNumber = getRandomInt(min, max);
            selectedNumbers.add(randomNumber);
        }

        for (const number of selectedNumbers) {
            frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
        }
    }

    const sortedFrequencies = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);
    
    // Limpiar la tabla antes de mostrar los nuevos números
    const consoleOutput = document.querySelector("#console-output tbody");
    consoleOutput.innerHTML = "";

    console.log("Los 6 números más repetidos son:");

    for (let i = 0; i < 6; i++) {
        const [number, frequency] = sortedFrequencies[i];
        console.log(`Número: ${number}, Frecuencia: ${frequency}`);

        const row = document.createElement("tr");
        const indexCell = document.createElement("td");
        indexCell.textContent = i + 1; // Índice comienza en 1
        const numberCell = document.createElement("td");
        numberCell.textContent = number;
        const frequencyCell = document.createElement("td");
        frequencyCell.textContent = frequency;

        row.appendChild(indexCell);
        row.appendChild(numberCell);
        row.appendChild(frequencyCell);
        consoleOutput.appendChild(row);
    }
}

// Agrega un manejador de eventos al botón para generar números aleatorios nuevamente
document.getElementById("generar-numeros").addEventListener("click", function() {
    generarNumerosAleatorios();
});
