require("./util/database")()
const conn = connection()

const express = require("express")
const bcrypt  = require("bcrypt")
const jwt     = require("jsonwebtoken")
const path    = require("path")
const parser  = require("body-parser")
const app     = express()
const port    = 3000
let nivel_acceso = ""

//motor de renderizado
app.set("views",path.join(__dirname,"/views"))  //establecer motor de vistas
app.engine("ejs", require("ejs").__express)  //establecer motor de renderizado
app.set("view engine", "ejs")  //establecer condiciones de los archivos
app.use(express.static(__dirname+"/views"))  //para usar css o bootstrap, static= carpeta publica
app.use(parser.urlencoded({extended:true}))

app.get("/", function(req,res){
  res.render("principal")
})

app.get("/inicio", function(req,res){
  res.render("inicio de seccion")
})

app.get("/operativo", function(req,res){
  res.render("operativo")
})

app.get("/admin", function(req,res){
  res.render("admin")
})

app.get("/Registro", function(req,res){
res.render("Registro Android")
})

app.get("/RProductos", function(req,res){
  res.render("Registro_Productos")
  })


app.listen(port, () => {
  conn.connect(function(err){
    if(err)throw err 
    console.log("servidor corriendo en http://localhost:"+port)
  })
})

app.post("/android", function(req,res){
  const nombre_completo=req.body.nombre_completo
  const correo_usuario=req.body.correo_usuario
  const nombre_usuario=req.body.nombre_usuario
  const nivel_accesso=req.body.nivel_accesso
  const psw=req.body.psw

  bcrypt.hash(psw, 10, function(err,hash){
      if(err){
          throw err
      }else{
      var sql=`INSERT INTO usuarios(nombre_completo, correo_usuario, nombre_usuario ,nivel_accesso ,psw) VALUES ("${nombre_completo}","${correo_usuario}","${nombre_usuario}", "${nivel_accesso}", "${hash}");`
  conn.query(sql,function(err,data,fields){
      if(err) throw err
      res.redirect("/inicio")
              })
          }
  })
})

app.post("/RProductos", function(req,res){
  const cod_telefono=req.body.cod_telefono
  const comp_telefono=req.body.comp_telefono
  const nom_telefono=req.body.nom_telefono
  const model_telefono=req.body.model_telefono
  const cantid_telefono=req.body.cantid_telefono
  const mone_pro=req.body.mone_pro

  var sql=`INSERT INTO productos(cod_telefono, comp_telefono, nom_telefono, model_telefono, cantid_telefono, mone_pro) VALUES ("${cod_telefono}","${comp_telefono}","${nom_telefono}","${model_telefono}","${cantid_telefono}","${mone_pro}");`
  conn.query(sql,function(err,data,fields){
      if(err) throw err
      res.redirect("/admin")
  })
})


//ruta raiz del servidor y parametros
app.get("/agregarUser/:usuario/:psw",function(req,res){
    let {usuario,psw}=req.params
    res.send({usuario,psw})
})

//ruta para validar parametros
app.get("/ValidarUser/:correo_usu/:psw",function(req,res){
    let {correo_usu,psw} = req.params
    let user=[
        "genesis@gmail.com",
        "1234"
    ]
    if(user[0]==correo_usu && user[1]==psw){
        res.send("Hola bienvenido")
    }else{
        res.send("Datos incorrectos")
    }
})

app.get("/acceder", function(req,res){
  res.render("login")
})


app.get("/views", function(req,res){
  if (nivel_acceso=="admin") {
    res.render("admin")
  } else if (nivel_acceso=="usuario") {
    res.render("index1")
  } else {
    res.send("primero inicia sesion")
  }
})


app.get("/views", function(req,res){
  res.render("admin")
})

app.post("/validar", async function(req, res){
  const { correo_usu,psw } = req.body
  const sql = `SELECT * FROM usuarios WHERE correo_usu = "${correo_usu}";`
  
  let isAuth = false

  await conn.query(sql, function(err, data){
    if(err) throw err
    console.log(data)
    new Promise(function(resolve, reject){
      bcrypt.compare(psw, data[0].psw, function(err, res){
        if(err) throw err
        if(res){
          isAuth = true
          resolve(isAuth)
        }
        reject(isAuth)
      })
    })
    .then(function(result){
      nivel_acceso = data[0].niv_acc
      isAuth == result ? res.redirect("/views") : console.log("contraseña es incorrecta")
    })
    .catch(function(err){
      res.send("Contraseña incorrecta")
    })
  })
})