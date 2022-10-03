const {response} = require('express')


const usuariosGet = (req, res=response) => {
    const {q,nombre='',apikey} = req.query;
    res.json({
        ok:true,
        msg:'get API - Controlador',
        q,
        nombre,
        apikey
    })
}


const usuariosPost = (req, res=response) => {
    const body = req.body;
    
    res.json({
        ok:true,
        msg:'post API - Controlador',
        body
    })
}


const usuariosPut = (req, res=response) => {
    
    const { id } = req.params
        
    res.json({
        ok:true,
        msg:'put API - Controlador',
        id,
    })
}

const usuariosDelete = (req, res=response) => {
    res.json({
        ok:true,
        msg:'delete API - Controlador'
    })
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete

}