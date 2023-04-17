const express = require("express");
const userRoute = require("./routes/users")
let app = express();
let PORT = 8001;
let db = require("./database");
swaggerFile = require("./swagger_output.json"),
swaggerUi = require("swagger-ui-express");

app.set('view engine', 'ejs');

app.get('/home', function(req, res){
    res.render("../views/index");
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});
// Registra os endpoints de users
app.use("/api/users", userRoute);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));