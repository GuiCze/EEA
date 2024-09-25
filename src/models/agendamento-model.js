import db from "../db.js";

const Schema = db.Schema;

const agendamentoSchema = new Schema({
    data: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    id_animal: {
        type: String,
        required: true
    }
})

const Agendamento = db.model("Agendamento", agendamentoSchema);
export default Agendamento