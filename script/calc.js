function printHistorico(num) {
    document.getElementById("valor-historico").innerText = num;
}
function pegaHistorico() {
    return document.getElementById("valor-historico").innerText;
}
function printSaida(num) {
    if (num == "") {
        return document.getElementById("valor-saida").innerText = num;
    }
    else {
        document.getElementById("valor-saida").innerText = formataNumero(num);
    }
}
function formataNumero(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let valor = n.toLocaleString("en");
    return valor;
}
function pegaSaida() {
    return document.getElementById("valor-saida").innerText;
}
function reverteFormatacao(num) {
    return Number(num.replace(/,/g, ''))
}
const operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistorico("");
            printSaida("");
        }
        else if (this.id == "backspace") {
            var output = reverteFormatacao(pegaSaida()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printSaida(output);
            }
        }
        else {
            let output = pegaSaida();
            let history = pegaHistorico();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverteFormatacao(output);
                history = history + output;
                if (this.id == "=") {
                    let result = eval(history);
                    printSaida(result);
                    printHistorico("");
                }
                else {
                    history = history + this.id;
                    printHistorico(history);
                    printSaida("");
                }
            }
        }

    });
}
const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let saida = reverteFormatacao(pegaSaida());
        if (saida != NaN) { //Se a saida for número:
            saida = saida + this.id;
            printSaida(saida);
        }
    })
}