import User from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwtService from "../services/jwt-service.js";

const store = async (req,res)=>{
    try{
    const connect = await User.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await User.find()
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await User.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const update = async (req,res)=>{
    try{
        const connect = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const login = async (req,res)=>{
    try{
        const user = await User.findOne({
            email: req.body.email,
        })
        if(!user){
            return res.status(404).send("Não encontrado")
        }
        
        if(await bcrypt.compare(req.body.senha, user.senha)){
          
            const token = jwtService.generateAccessToken({
                permissao: user.permissao,
                email: user.email,
                _id: user._id,
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
        const connect = await User.create({
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


export default {store, index, show, update, login, register, destroy}
