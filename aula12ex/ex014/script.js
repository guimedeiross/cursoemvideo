    function carregar() {
        let msg = document.querySelector('div#msg')
        let img = document.querySelector('img#imagem')
        let agora = new Date()
        horaAtual = agora.getHours()
        msg.innerHTML = `Agora são ${horaAtual} horas.`
        if (horaAtual >= 0  && horaAtual < 12) {
            document.body.style.background = '#e2cd9f'
            img.src = 'manha.png'
        } else if (horaAtual <= 18){
            img.src = 'tarde.png'
            document.body.style.background = '#b9846f'
        } else {
            img.src = 'noite.png'
            document.body.style.background = '#515154'
        }
    }
    