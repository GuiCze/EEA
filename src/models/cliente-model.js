import db from "../db.js";
import bcrypt from "bcrypt";

const Schema = db.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    senha: {
        type: String,
        minlength: 8,
        required: true
    },
    email: {
        type:String,
        required: true,
        validate: {
            validator: function (v) {
              return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);           
            },
          }
    },
    endereco: {
        type: Object,
        required: true
    }
})

clienteSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})

clienteSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.senha);
  };

const Cliente = db.model("Cliente", clienteSchema);

export default Cliente
