import express from "express";
import Animal from "./routers/animal-routes.js"; 
import Agendamento from "./routers/agendamento-routes.js";
import User from "./routers/user-routes.js";
import Cliente from "./routers/cliente-routes.js";
import "dotenv/config";

const port = 3000
const app = express();

app.use(express.json());-
app.use("/animal", Animal)
app.use("/agendamento", Agendamento)
app.use("/user", User)
app.use("/cliente", Cliente)


app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})