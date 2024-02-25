var main = document.querySelector("main")
var logoPag1 = document.querySelector("#logo")

var burguerButton = document.getElementById('burguer-btn')
var escolaButton = document.getElementById("escola-btn")
var cursosButton = document.getElementById('cursos-btn')
var voltarButtonEscola = document.getElementById('voltar-escola')
var voltarButtonCursos = document.getElementById('voltar-cursos')

var fecharButton = document.getElementById('fechar-menu')
var fecharSubmenuEscola = document.getElementById('fechar-menu-escola')
var fecharSubmenuCursos = document.getElementById('fechar-menu-cursos')

var mainMenu = document.getElementById('main-menu')
var escolaSubMenu = document.getElementById('escola-submenu')
var cursosSubMenu = document.getElementById('cursos-submenu')



function fecharMenus(){
    mainMenu.style.width = '0'
    escolaSubMenu.style.width = '0'
    cursosSubMenu.style.width = '0'
}

burguerButton.addEventListener('click', function(){
mainMenu.style.width = '250px';
});

escolaButton.addEventListener("click", function() {
    escolaSubMenu.style.width = "250px";
});

cursosButton.addEventListener('click', function(){
    cursosSubMenu.style.width = '250px';
});

fecharButton.addEventListener('click',fecharMenus);

fecharSubmenuEscola.addEventListener('click',fecharMenus);

fecharSubmenuCursos.addEventListener('click',fecharMenus);

voltarButtonEscola.addEventListener('click', function(){
    escolaSubMenu.style.width = '0';
    mainMenu.style.width = '250px'
});

voltarButtonCursos.addEventListener('click', function(){
    cursosSubMenu.style.width = '0';
    mainMenu.style.width = '250px'
});

function mudouTam(){if (window.innerWidth >= 768){fecharMenus();}}

main.addEventListener('click',fecharMenus);

logoPag1.addEventListener('click',fecharMenus);
