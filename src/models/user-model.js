import db from "../db.js";
import bcrypt from "bcrypt";

const Schema = db.Schema;

const userSchema = new Schema({
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
    permissao: {
        type: String,
        enum: ["ADM", "REC", "TOSA", "USU"],
        default: "REC",
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

userSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})

userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.senha);
  };

const User = db.model("User", userSchema);

export default User
