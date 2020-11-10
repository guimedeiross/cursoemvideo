let num = [5,8,2,9,3]

console.log(num.length)

console.log(`Nosso vetor é o ${num} desordenado`)

//function compararNumeros(a, b) {
//    return a - b;
//}

num.push(10)
//num.sort()
num.sort((a, b) => a-b);

console.log(num.length)

console.log(`Nosso vetor é o ${num} ordenado de forma crescente`)
/*
for (let cont = 0; cont <= num.length; cont++) {
    console.log(`Valor do vetor na posição ${cont} é ${num[cont]}`)
}
*/
// Forma simplificada para percorrer vetores

for(let cont2 in num) {
    console.log(`Valor do vetor na posição ${cont2} é ${num[cont2]}`)
}
//Pesquisar dentro de um vetor
console.log(num.indexOf(10))