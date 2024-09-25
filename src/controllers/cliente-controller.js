import Cliente from "../models/cliente-model.js";
import bcrypt from "bcrypt";
import jwtService from "../services/jwt-service.js";

const store = async (req,res)=>{
    try{
    const connect = await Cliente.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Cliente.find()
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Cliente.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const salve = async (req,res)=>{
    try{
    const connect = await Cliente.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Cliente.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const login = async (req,res)=>{
    try{
        const cliente = await Cliente.findOne({
            email: req.body.email,
        })
        if(!cliente){
            return res.status(404).send("Não encontrado")
        }
        
        if(await bcrypt.compare(req.body.senha, cliente.senha)){
          
            const token = jwtService.generateAccessToken({
                permissao: "USU",
                email: cliente.email,
                _id: cliente._id,
            });
            res.status(200).json({token});
        } else {
            return res.status(404).send("Não encontrado")
        }
        
    }catch(err){
        res.status(400).send(err);
    }
}

const register = async (req,res)=>{
    try{
        const connect = await Cliente.create({
            email: req.body.email,
            senha: req.body.senha,
            nome: req.body.nome,
            permissao: req.body.permissao,
            endereco: req.body.endereco
        });
        res.status(201).json(connect);
    }catch(err){
        res.status(400).send(err);
    }
}


export default {store, index, show, update, login, register, destroy, salve}