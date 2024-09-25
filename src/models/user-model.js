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
        enum: ["ADM", "REC", "TOSA"],
        default: "REC",
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