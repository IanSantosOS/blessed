function copyToClipboard(id) {
    const row = document.querySelector(`#${id}`);
    const num1 = row.children[0].innerHTML;
    const num2 = row.children[2].innerHTML;
    const result = Number(num1) * Number(num2);

    navigator.clipboard.writeText(`${num1} x ${num2} = ${result}`);
}

function calcularTabuada() {
    const numeroTabuada = document.querySelectorAll(".col1");
    const resultadoTabuada = document.querySelectorAll(".col5")
    
    const tituloTabuada = document.querySelector("#titulo");
    let number = document.querySelector("#numberInput").value;

    if (number == '') number = 0;

    tituloTabuada.innerHTML = `Tabuada de ${number}`

    for (let element of numeroTabuada) {
        element.innerHTML = number;
    }

    let numero0a10 = -1;
    for (let element of resultadoTabuada) {
        numero0a10++
        element.innerHTML = number * numero0a10;
    }
}