function teste() {
    const bandeira = document.querySelector(".bandeira");
    const option = document.querySelector("#bandeirasEscolha");
    bandeira.id = option.value;

    switch (bandeira.id) {
        case 'brasil':
            bandeira.innerHTML = brasil();
            break;
        case 'monaco':
            bandeira.innerHTML = monaco();
            break;
        case 'franca':
            bandeira.innerHTML = franca();
            break;
        case 'belgica':
            bandeira.innerHTML = belgica();
            break;
        case 'italia':
            bandeira.innerHTML = italia();
            break;
        case 'botswana':
            bandeira.innerHTML = botswana();
            break;
        case 'laos':
            bandeira.innerHTML = laos();
            break;
        case 'japao':
            bandeira.innerHTML = japao();
    }
}

function brasil() {
    return `
        <div style="top:50%;left:50%; width:145px; height:145px; background-color: #FEE000; transform:translate(-50%,-50%) rotate(45deg) skew(-13deg, -13deg);"></div>
        <div class="circulo" style="width:85px; height:85px; background-color: #002277"></div>
    `
}

function monaco() {
    return `
        <div style="width:300px; height:100px; background-color: #CE1126"></div>
    `
}

function franca() {
    return `
        <div style="width:100px; height:200px; background-color: #002654"></div>
        <div style="width:100px; height:200px; background-color: #CE1126; right:0"></div>
    `
}

function belgica() {
    return `
        <div style="width:100px; height:200px; background-color: #000"></div>
        <div style="width:100px; height:200px; background-color: #EF3340; right:0"></div>
    `
}

function italia() {
    return `
        <div style="width:100px; height:200px; background-color: #009246"></div>
        <div style="width:100px; height:200px; background-color: #CE2B37; right:0"></div>
    `
}

function botswana() {
    return `
        <div style="width:300px; height:64px; top:68px; background-color: #FFF"></div>
        <div style="width:300px; height:34px; top:83px; background-color: #000"></div>
    `
}

function laos() {
    return `
        <div style="width:300px; height:50px; background-color: #CE1126"></div>
        <div class="circulo" style="width:80px; height:80px; background-color: #FFF"></div>
        <div style="width:300px; height:50px; background-color: #CE1126; bottom: 0px"></div>
    `
}

function japao() {
    return `
        <div class="circulo" style="width:120px; height:120px; background-color: #FF0000"></div>
    `
}