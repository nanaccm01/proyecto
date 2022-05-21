let si_logueado= window.localStorage.getItem("si_logueado")
if(si_logueado==true){
    alert("redirigiendo")
    window.location.assign("file:///media/estudiante/BRYAN/operativo%2012/home/operativo.html")
}


var boton = document.getElementById("login")
function login() {
    let usuario=document.getElementById("usuario").value
    let clave = document.getElementById("clave").value
    let hash = CryptoJS.MD5(clave)

    if(usuario == window.localStorage.getItem("usuario")) {
        if (hash == window.localStorage.getItem("clave")) {
            window.localStorage.setItem("si_logueado", true)
            alert("Iniciando sesión")
            window.location.href="file:///media/estudiante/BRYAN/operativo%2012/home/operativo.html"
        }else{
            alert("La contraseña no es correcta")
        }
    }else{
        alert("Usuario no existe")
    }
}
boton.addEventListener("click", login)
