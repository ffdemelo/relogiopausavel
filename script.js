var btn = document.getElementById('relogio-madeira');
alert("Click no relógio para pausa-lo e reinicia-lo! Apenas Smartphones!")
function playRelogio(){
    btn.onclick = pauseRelogio;
    btn.innerHTML = 'Pause';
    intervalo = setInterval(getTime, 1000);
}

function pauseRelogio(){
    btn.onclick = playRelogio;
    btn.innerHTML = 'Play';
    clearInterval(intervalo);
}

function getTime(){
    let hora = document.getElementById("hora");
    let data =  new Date();
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();
    if(data.getHours() < 10){
        hh = '0'+data.getHours();
    }
    if(data.getMinutes() < 10){
        mm = '0'+data.getMinutes();
    }
    if(data.getSeconds() < 10){
        ss = '0'+data.getSeconds();
    }    
    hora.innerHTML = hh+':'+mm+':'+ss;
}

var intervalo = setInterval(getTime, 1000);
btn.onclick = pauseRelogio;