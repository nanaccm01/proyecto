


var boton = document.getElementById("login")
function login() {
        let usuario=document.getElementById("usuario").value
        let clave=document.getElementById("clave").value
        let hash=CryptoJS.MD5(clave)
    
        window.localStorage.getItem("usuario",usuario)
        let miclave=window.localStorage.getItem("clave",hash)
    
        if(hash==miclave){
            window.location.href="metaverse.htmñ"
        }else{
            alert("Usuario o clave incorrecta") 
        }
    }

boton.addEventListener("click", login)

var boton = document.getElementById("registro")
function registro() {
    let usuario=document.getElementById("usuario").value
    let clave = document.getElementById("clave").value
    let hash = CryptoJS.MD5(clave)
    window.localStorage.setItem("usuario", usuario)
    window.localStorage.setItem("clave", hash)
    alert("usuario registrado")
    window.location.href="metaverse.html"
}
boton.addEventListener("click", registro)


let si_logueado= window.localStorage.getItem("si_logueado")
if(si_logueado==true){
    alert("redirigiendo")
    window.location.assign("metaverse.html")
}



//
