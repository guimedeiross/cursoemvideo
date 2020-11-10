let num = document.querySelector('input#txtnum')
let select = document.querySelector('select#selectnum')
let res = dpcument.querySelector('div#res')
let nums = []
function adicionar() {
    num = Number(num.value)
    if (num == null || num > 100 || num <= 0) {
        alert('Não pode estar vazio, ser numero negativo ou maior que 100')
    } else {
        let item = document.createElement('option')
        item.value = `selectnum`
        item.text = num
        select.appendChild(item)
        nums[nums.length] = num
        alert(nums.length)
    }
}

function finalizar() {
    let control = false
    return control
}