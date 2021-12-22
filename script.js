function verificar () {
    // cria elementos HTML no JavaScript
    img = document.createElement('img')
    p2 = document.createElement('p')

    // Selciona tags já existentes no HTML
    var p1 = document.querySelector('#horario')
    var sec = document.querySelector('section')
    
    // Cria variáveis pra pegar a hora e os minutos do sistema
    var hora = new Date().getHours()
    var min = new Date().getMinutes()

    // Aplica as tags criadas dentro da tag <section>
    sec.appendChild(img)
    sec.appendChild(p2)

    // Configura a CSS do <img> e da <p>
    img.style.marginTop = '-40px';
    img.style.marginBottom = '-20px';
    p2.style.marginTop = '-15px'

    // Insere um texto do primeiro parágrafo <p>
    p1.innerText = `Agora são ${hora}h:${min}min`

    // Condições para mostrar o horário e uma imagem(de acordo com a hora)

    // Se a hora estiver entre 00:00 e 12:00
    if (hora >= 0 && hora <= 12) {
        img.src = 'imgs/manha.png'
        p2.innerText = 'Bom Dia'
        document.body.style.backgroundColor = 'rgb(255, 133, 0)'
        
    // Se a hora estiver entre 13:00 e 18:00
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'imgs/tarde.png'
        p2.innerText = 'Boa Tarde'
        document.body.style.backgroundColor = 'rgb(141, 48, 23)'

    //  Se a hora for 19:00 ou mais tarde
    } else {
        img.src = 'imgs/noite.png'
        p2.innerText = 'Boa Noite'
        document.body.style.backgroundColor = 'rgb(37, 88, 144)'
    }
}