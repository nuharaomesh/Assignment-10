const input = document.getElementById('value');

function showToDisplay(val) {
    input.value += val;
}

function clearAll() {
    input.value = "";
}

function solve() {
    try {
        input.value = eval(input.value);
    }
    catch (err) {
        input.value = err;
    }
}