var express = require('express');
var bodyParser = require('body-parser');
var app = express();
let cors = require('cors')

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: null,
    database: 'angular'
});
connection.connect(function(error){
    if(error)
    console.log(error)
    else
    console.log('Conexión correcta')
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get
app.get("/discos", function (request, response) {
    let sql = "SELECT * FROM discos";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    response.send(result);
    })
});
app.get("/discos/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM discos WHERE disco_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    response.send(result);
    })
});

//Post
app.post("/discos", function (request, response) {
    let titulo = request.body.titulo
    let interprete = request.body.interprete
    let anyoPublicacion = request.body.anyoPublicacion
    let params = [titulo, interprete, anyoPublicacion]
    let sql = "INSERT INTO discos (titulo, interprete, anyoPublicacion) VALUES ( ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Disco a Ingresar')
            console.log(result)
        } 
    response.send(result);
    })
});
//Put
app.put("/discos", function (request, response) {
    let disco_id = request.body.disco_id
    let titulo = request.body.titulo
    let interprete = request.body.interprete
    let anyoPublicacion = request.body.anyoPublicacion
    let params = [titulo, interprete, anyoPublicacion]
    let sql = "UPDATE discos SET titulo = ?, interprete = ?, anyoPublicacion = ? WHERE disco_id ="+disco_id;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Disco Modificado')
            console.log(result)
        } 
    response.send(result);
    })
}); 
//Delete
app.delete("/discos", function (request, response) {
    let disco_id = request.body.disco_id
    let sql = "DELETE FROM discos WHERE disco_id ="+disco_id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Disco Borrado')
            console.log(result)
        } 
    response.send(result);
    })
});

app.listen(4000);