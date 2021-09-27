let txtvel = document.getElementById('txtvel');
let res = document.getElementById('res');

function calcular(params) {
    let vel = Number(txtvel.value);
    res.innerHTML = `<p>A sua velocidade é de: <strong>${vel}Km/h</strong></p>`;

    if (vel > 60) {
        res.innerHTML += "<p>Você está cometendo uma infração de velocidade. Será punido com <strong>MULTA<strong> !</p>"
        res.style.color = "red";
    } else {
        res.innerHTML += "<p>Você está dentro do limite de velocidade. Dirija com segurança !</p>"
        res.style.color = "#228B22";
    }
}
function limpar() {
    txtvel.value = "00";
    if (txtvel.value = "00") {
        res.innerHTML = ""
        
    };
}
