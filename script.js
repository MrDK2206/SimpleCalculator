let display = document.getElementById("display");

// Open Calculator Animation
function openCalculator() {
    document.querySelector(".calc-box").style.transform = "rotateX(-90deg)";
    setTimeout(() => {
        document.querySelector(".container").classList.remove("hidden");
    }, 500);
}

// Append numbers and operators
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate square root
function squareRoot() {
    if (display.value !== "") {
        display.value = Math.sqrt(parseFloat(display.value)).toFixed(5);
    }
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

// Set Custom Theme
function setCustomTheme() {
    let color = document.getElementById("colorPicker").value;
    document.body.style.background = color;
    adjustTextContrast(color);
}

// Auto Contrast Adjustment
function adjustTextContrast(bgColor) {
    let brightness = parseInt(bgColor.substring(1, 3), 16);
    document.body.style.color = brightness < 128 ? "white" : "black";
}

// Reset to Default Theme
function setDefaultTheme() {
    document.body.style.background = "white";
    document.body.style.color = "black";
}
