
document.getElementById('burguer-btn').addEventListener('click', function(){
document.getElementById("main-menu").style.width = '250px';
});

document.getElementById("escola-btn").addEventListener("click", function() {
    document.getElementById("escola-submenu").style.width = "250px";
});

document.getElementById('cursos-btn').addEventListener('click', function(){
    document.getElementById('cursos-submenu').style.width = '250px';
});

document.getElementById('fechar-menu').addEventListener('click', function(){
    document.getElementById('main-menu').style.width = '0'
    document.getElementById('escola-submenu').style.width = '0'
    document.getElementById('cursos-submenu').style.width = '0'
})

document.getElementById('fechar-menu-escola').addEventListener('click', function(){
    document.getElementById('escola-submenu').style.width = '0'
    document.getElementById('cursos-submenu').style.width = '0'
    document.getElementById('main-menu').style.width = '0'
})

document.getElementById('fechar-menu-cursos').addEventListener('click', function(){
    document.getElementById('cursos-submenu').style.width = '0'
    document.getElementById('escola-submenu').style.width = '0'
    document.getElementById('main-menu').style.width = '0'
})

document.getElementById('voltar-escola').addEventListener('click', function(){
    document.getElementById('escola-submenu').style.width = '0';
    document.getElementById('main-menu').style.width = '250px'
});

document.getElementById('voltar-cursos').addEventListener('click', function(){
    document.getElementById('cursos-submenu').style.width = '0';
    document.getElementById('main-menu').style.width = '250px'
});
function mudouTam(){
    if (window.innerWidth >= 768){
        document.getElementById('main-menu').style.width = '0';
        document.getElementById('escola-submenu').style.width = '0';
        document.getElementById('cursos-submenu').style.width = '0';
    }
}