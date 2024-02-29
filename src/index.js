const display = document.getElementById('display');

const appendToDisplay = (input) => {
    display.value += input;
};

const calculate = () => {
    display.value ? display.value = eval(display.value) :
        display.value = '';
};

const clearDisplay = () => {
    display.value = '';
};
