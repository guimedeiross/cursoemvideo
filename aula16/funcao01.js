function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

//chamada da função passando o parametro 10 para a função
console.log(`${parimpar(10)}`)