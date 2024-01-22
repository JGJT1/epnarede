function ajustarPadding(){
    var inburguer = document.getElementById('in-burguer')
    var lista = document.getElementById('lista')
    if(inburguer.checked){
        lista.style.paddingBottom = '0px'
    }else{
        lista.style.paddingBottom = '40px'
    }
}