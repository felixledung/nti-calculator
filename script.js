const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "";

buttons.forEach(button => button.addEventListener("click", e => {
    let btnValue = e.target.dataset.value;

    if (btnValue === "AC") output = "";
    else if (btnValue === "DEL") output = output.slice(0, -1);
    else if (btnValue === "=") {
        try { output = eval(output.replace("%", "/100")); }
        catch { output = "Error"; }
    } else if (btnValue === "sqrt") output = Math.sqrt(parseFloat(output)).toString();
    else if (btnValue === "square") output = Math.pow(parseFloat(output), 2).toString();
    else if (btnValue === "reciprocal") output = (1 / parseFloat(output)).toString();
    else if (btnValue === "sign") output = (parseFloat(output) * -1).toString();
    else output += btnValue;

    display.value = output;
}));