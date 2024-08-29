const { urlStore } = require("../db");

function urlWare(req, res, next){
    let { url } = req.body ;    
    if( url?.trim().length == 0){
        return res.status(400).json({err : "input is empty"})
    }
    next();
}

async function exists(req, res, next){
    let id = req.params.shortID;
    let exist = await urlStore.find({id})
    if(!exist){
        return res.status(400).json({err : "No such short URL exist"})
    }
    next();
}

module.exports = {
    urlWare,
    exists
}