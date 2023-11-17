const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const finalData = "12 june 2024"
function countdown(){
    const datalanc = new Date(finalData)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;
    const dia_inteiro = Math.floor(segTotal/60/60/24);
    const hora_inteiro = Math.floor(segTotal/60/60)%24;
    const minuto_inteiro = Math.floor(segTotal/60)%60;
    const segundo_inteiro = Math.floor(segTotal)%60;

    dia.innerHTML = dia_inteiro +'D'
    hora.innerHTML = formato(hora_inteiro) +'H'
    minuto.innerHTML = formato(minuto_inteiro) +'M'
    segundo.innerHTML = formato(segundo_inteiro) +'S'
}
function formato(tempo) {
    return tempo < 10? `0${tempo}` : tempo; 
}
countdown()
setInterval(countdown, 1000)