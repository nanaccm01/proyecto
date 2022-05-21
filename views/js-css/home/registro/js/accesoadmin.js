var btn = document.getElementById("registro")
var btn2= document.getElementById("login")
function Loging() {
    let usuario=document.getElementById("usuario").value
    let clave= document.getElementById("clave").value
    let hash=CryptoJS.MD5(clave)
    // let Usuario_a
    // let nivel_acceso
    // let psw

    alert(usuario,cl)

    if (usuario=="Bryan" && clave=="1234") {
        alert("Bienvenido")
        nivel_acceso="Admin"
        window.localStorage.setItem("nivel",nivel_acceso)
        window.location.assign("/media/estudiante/USB CRISTHO/clase 15/index.html")
    }else{
        if (usuario == window.localStorage.getItem("usuario")) {
            if (hash == window.localStorage.getItem("clave")) {
                window.location.assign("/media/estudiante/USB CRISTHO/clase 15/index.html")
            }else{
                alert("Contraseña Incorrecta")
            }
        }else{
            alert("Usuario No Registrado, Registrese Primero")
            window.location.assign("/media/estudiante/USB CRISTHO/clase 15/Registro.html")
        }
    }
}
btn.addEventListener("click",Loging)

function No(){
    window.location.assign("/media/estudiante/USB CRISTHO/clase 15/Registro.html")
}
btn2.addEventListener("click",No)


// let Nivel_acceso=window.localStorage.getItem("Nivel_acceso")
//     if(Nivel_acceso != null){
//             alert("rediriguiendo")
//     window.location.assign("index.html")
// }

////el login de admin se hace con if