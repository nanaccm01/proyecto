function Registro() {
    let usuario=document.getElementById("1usuario").value
    let clave=document.getElementById("clave").value
    let clave_2=document.getElementById("clave_2").value
    let nivel_acceso="Usuario"

    if (nivel_acceso == "Usuario") { 
        window.localStorage.setItem("nivel",nivel_acceso)
    }
        
    if(clave =! clave_2) {
        alert("las claves ingresadas son diferentes")
    }else{
        let hash=CryptoJS.MD5(clave)
        window.localStorage.setItem("usuario",usuario)
        window.localStorage.setItem("clave",hash)
        alert ("Usuario Registrado")
        window.location.href="file:///media/estudiante/USB%20CRISTHO/Pagina%20de%20Diplomado/Index.html"
    }

   
}
btn4.addEventListener("click",Registro)

function Loging (){
    let usuario=document.getElementById("usuario").value
    let clave= document.getElementById("clave").value
    let hash=CryptoJS.MD5(clave)

    if (usuario=="Andi" && clave=="1234") {
        alert("Bienvenido")
        nivel_acceso="Admin"
        window.localStorage.setItem("nivel",nivel_acceso)
        window.localStorage.setItem("usuario",usuario)
        window.location.assign("file:///media/estudiante/USB%20CRISTHO/Pagina%20de%20Diplomado/Admin/Untitled-1.html")
    }else{
        if (usuario == window.localStorage.getItem("usuario")) {
            if (hash == window.localStorage.getItem("clave")) {
                window.location.assign("file:///media/estudiante/USB%20CRISTHO/Pagina%20de%20Diplomado/Usuario/Inicio_usuario.html")
            }else{
                alert("Bienvenido")
                window.location.assign("file:///media/estudiante/USB%20CRISTHO/Pagina%20de%20Diplomado/Usuario/Inicio_usuario.html")
            }
        }else{
            alert("Usuario No Registrado, Registrese Primero")
        }
    }
}
btn3.addEventListener("click",Loging)