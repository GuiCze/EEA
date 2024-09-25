import Agendamento from "../models/agendamento-model.js";

const store = async (req,res)=>{
    try{
    const connect = await Agendamento.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        console.log(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Agendamento.find()
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const meu_agendamento = async (req,res)=>{
    try{
        const connect = await Agendamento.findById(req.params.id).populate("cliente_id").populate("animal_id")
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Agendamento.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await Agendamento.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Agendamento.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        console.log(err);
    }
}

export default {store, index, show, update, destroy, meu_agendamento}