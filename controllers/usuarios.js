const { response, request } = require('express');

const usuariosGet = (req = request, res = response) =>{

    const query = req.query;

    res.json({
        ok: true,
        msg: "get API - controlador",
        query
    })
}

const usuariosPost = (req, res = response) =>{

    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        msg: "post API - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) =>{

    const { id } = req.params

    res.json({
        ok: true,
        msg: "put API - controlador",
        id
    })
}

const usuariosDelete = (req, res = response) =>{
    res.json({
        ok: true,
        msg: "delete API - controlador"
    })
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        ok: true,
        msg: "patch API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}