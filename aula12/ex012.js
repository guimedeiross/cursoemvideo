let horaatual = new Date()
let hora = horaatual.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12 && hora >= 5) {
    console.log('Bom Dia')
} else if(hora <= 18 && hora > 12){
    console.log('Boa Tarde')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite')
} else {
    console.log('Boa Madrugada')
}