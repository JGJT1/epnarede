function calcular() {
    var n1 = document.getElementById('txtnume')
    var n2 = document.getElementById('txtdeno')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    var res = 1
    while (res != 0) {
        if (n1 <= n2) {
            var maior = n2
            var menor = n1
        } else {
            var maior = n1
            var menor = n2
        }
        while (res != 0) {
            var razão = parseInt(maior / menor)
            res = maior - (menor * razão)
            maior = menor
            menor = res
        }
    }
    var mdc = maior
    console.log(mdc)
    var Dmdc = document.getElementById('mdc')
    Dmdc.innerHTML = `O MDC desses dois números é ${mdc}`
    var s1 = parseInt(n1 / mdc)
    var Dnume = document.getElementById('nume')
    Dnume.innerHTML = `${n1}:${mdc} = ${s1}`
    var s2 = parseInt(n2 / mdc)
    var Ddeno = document.getElementById('deno')
    Ddeno.innerHTML = `${n2}:${mdc} = ${s2}`
    var Dfração = document.getElementById('fracao')
    Dfração.innerHTML = `A fração simplificada é: ${s1}/${s2}`
    }