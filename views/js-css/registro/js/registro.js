/**let hash=CryptoJS.MD5("Hola")
alert(hash)

let psw = prompt("escribe su clave")
let hash= CryptoJS.MD5(psw)
window.localStorage.setItem("clave", hash)

 let val= prompt("re- escribe su clave")
let miclave= window.localStorage.getItem("clave")
let hashVal= CryptoJS.MD5(val)
if (hashVal == miclave) {
    alert("bienvenido usuario"+hashVal)
}else{
     alert("las contraseña no coinciden")
 } /** */



var boton = document.getElementById("registro")
function registro() {
    let usuario=document.getElementById("usuario").value
    let clave = document.getElementById("clave").value
    let hash = CryptoJS.MD5(clave)
    window.localStorage.setItem("usuario", usuario)
    window.localStorage.setItem("clave", hash)
    alert("usuario registrado")
    window.location.href="file:///media/estudiante/BRYAN/operativo%2012/inicio%20de%20seccion/inicio%20de%20seccion%20Andorid.html"
}
boton.addEventListener("click", registro)


