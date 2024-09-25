import axios from "axios";

const cep_endereco = (req, res, next) => {
    if(req.body.cep != undefined &&
        req.body.cep.length == 8 &&
        !isNaN((Number(req.body.cep)))
    ){
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
        .then(resposta =>{
            console.log("deu");
            delete req.body.cep
            req.body.endereco = resposta.data
            next();
        })
        .catch(erros =>{
            console.log(erros);
        })
    }
}

export default cep_endereco;