const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

// Hantera musklick på knappar
buttons.forEach(button => button.addEventListener("click", e => handleInput(e.target.dataset.value)));

// Hantera tangentbordsinmatning
document.addEventListener("keydown", e => {
    const keyMap = {
        "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9",
        "/": "/", "*": "*", "-": "-", "+": "+", ".": ".", "Enter": "=", "=": "=",
        "Backspace": "DEL", "Escape": "AC", "(": "(", ")": ")"
    };
    if (keyMap[e.key]) handleInput(keyMap[e.key]);
});

// Funktion för att bearbeta inmatning
const handleInput = (input) => {
    if (input === "AC") output = "";
    else if (input === "DEL") output = output.slice(0, -1);
    else if (input === "=") {
        try { output = eval(output.replace("%", "/100")); }
        catch { output = "Error"; }
    } else if (input === "sqrt") output = Math.sqrt(parseFloat(output)).toString();
    else if (input === "square") output = Math.pow(parseFloat(output), 2).toString();
    else if (input === "reciprocal") output = (1 / parseFloat(output)).toString();
    else if (input === "sign") output = (parseFloat(output) * -1).toString();
    else output += input;

    display.value = output;
};