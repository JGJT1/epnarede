var main = document.querySelector("main")
var logoPag1 = document.querySelector("#logo")

function fecharMenus(){
    document.getElementById('main-menu').style.width = '0'
    document.getElementById('escola-submenu').style.width = '0'
    document.getElementById('cursos-submenu').style.width = '0'
}

document.getElementById('burguer-btn').addEventListener('click', function(){
document.getElementById("main-menu").style.width = '250px';
});

document.getElementById("escola-btn").addEventListener("click", function() {
    document.getElementById("escola-submenu").style.width = "250px";
});

document.getElementById('cursos-btn').addEventListener('click', function(){
    document.getElementById('cursos-submenu').style.width = '250px';
});

document.getElementById('fechar-menu').addEventListener('click',fecharMenus);

document.getElementById('fechar-menu-escola').addEventListener('click',fecharMenus);

document.getElementById('fechar-menu-cursos').addEventListener('click',fecharMenus);

document.getElementById('voltar-escola').addEventListener('click', function(){
    document.getElementById('escola-submenu').style.width = '0';
    document.getElementById('main-menu').style.width = '250px'
});

document.getElementById('voltar-cursos').addEventListener('click', function(){
    document.getElementById('cursos-submenu').style.width = '0';
    document.getElementById('main-menu').style.width = '250px'
});

function mudouTam(){if (window.innerWidth >= 768){fecharMenus();}}

main.addEventListener('click',fecharMenus);

logoPag1.addEventListener('click',fecharMenus);
