import db from "../db.js";

const Schema = db.Schema;

const animalSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    }
})

const Animal = db.model("Animal", animalSchema);
export default Animal;