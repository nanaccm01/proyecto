const res = require("express/lib/response")
const util = require("./util/funciones.js")
module.exports={
    obtener_nombre: function(nombre){
        let object=[{"nombre":"ana", "cedula":"12579335"}]
        if (nombre==object[0].nombre){
            res.send("tu nombre es:"+object[0]. nombre)
        } else{
            res.send("tu no eres " + object[0]. nombre)
        }
    }
}