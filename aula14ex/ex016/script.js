function contar() {
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo Invalido! Considerando passo com valor 1')
            p = 1
        }
        if (i < f) {

            for(let c = i; c <= f; c += p) {
                res.innerHTML += `  ${c} \u{1F449}`
            }   
        } else {
            for (let c = i; c>= f; c -= p) {
                res.innerHTML += `  ${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}