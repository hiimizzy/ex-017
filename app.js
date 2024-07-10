function tabuada(){
var num = document.getElementById('txtn')
var tabuada = document.querySelector('div.container input')

if(num.value.lenght == 0){
    window.alert('Por favor digite um número.')
}else{
    var n = Number(num.value)
    var c = 1


    while(c <= 10){
        var item = document.createElement('p')
        item.text = `${n} x ${c} = ${n*c}`
    }
}
}

