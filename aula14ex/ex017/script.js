function gerartabuada() {
    let tab = document.querySelector('input#txttab')
    let selecttab = document.querySelector('select#seltab')
    if(tab.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let tab2 = Number(tab.value)
        selecttab.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.value = `selecttab${c}`
            item.text = `${tab2} x ${c} = ${tab2*c}`
            selecttab.appendChild(item)
        }
    }
} 