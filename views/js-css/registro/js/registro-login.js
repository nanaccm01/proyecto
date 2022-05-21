document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".login");
var formulario_register = document.querySelector(".registro");
var contenedor_login_register = document.querySelector(".container_login_registro");
var caja_trasera_login = document.querySelector("caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_registro");


function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        login.style.display = "block";
        container_login_registro.style.left = "0px";
        registro.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            login.style.display = "block";
            container_login_registro.style.left = "10px";
            registro.style.display = "none";
            caja_trasera_registro.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            login.style.display = "block";
            container_login_registro.style.left = "0px";
            registro.style.display = "none";
            caja_trasera_registro.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }
    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            container_login_registro.style.left = "410px";
            login.style.display = "none";
            caja_trasera_registro.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            registro.style.display = "block";
            container_login_registro.style.left = "0px";
            login.style.display = "none";
            caja_trasera_registro.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
