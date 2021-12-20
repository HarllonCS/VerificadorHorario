function verificar () {
    var p = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var hora = new Date().getHours()
    var min = new Date().getMinutes()

    p.innerHTML = `Agora são ${hora}h:${min}min`

    if (hora >= 0 && hora <= 12) {
        img.src = 'imgs/manha.png'
        document.body.style.backgroundColor = 'rgb(255, 133, 0)'
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'imgs/tarde.png'
        document.body.style.backgroundColor = 'rgb(141, 48, 23)'
    } else {
        img.src = 'imgs/noite.png'
        document.body.style.backgroundColor = 'rgb(37, 88, 144)'
    }
}