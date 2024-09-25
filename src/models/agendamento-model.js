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
    animal_id: {
        type: db.SchemaTypes.ObjectId,
        ref: "Animal",
        required: true
    },
    cliente_id: {
        type: db.SchemaTypes.ObjectId,
        ref: "Cliente",
        required: true
    }
})

const Agendamento = db.model("Agendamento", agendamentoSchema);
export default Agendamento