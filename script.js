function appendToDisplay(value) {
    document.getElementById('tela').value += value;
}

function clearDisplay() {
    document.getElementById('tela').value = '';
}

function backspace() {
    var tela = document.getElementById('tela');
    tela.value = tela.value.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('tela').value;
    try {
        var result = eval(expression);
        document.getElementById('tela').value = result;
    } catch (error) {
        document.getElementById('tela').value = 'Error';
    }
}
