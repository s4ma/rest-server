const { response, request } = require('express')

exports.getUsuario = (req = request, res = response) => {
    const {nombre, edad, limit = 10} = req.query
    res.json({
        msj: "Controlador getUsuario ejecutado",
        nombre, edad, limit
    })
}

exports.postUsuario = (req = request, res = response) => {

    let {nombre, edad} = req.body

    res.json({
        msj: "Controlador postUsuario ejecutado",
        nombre, edad
    })
}

exports.putUsuario = (req = request, res = response) => {
    const {id} = req.params
    res.json({
        msj: "Controlador putUsuario ejecutado",
        id
    })
}

exports.deleteUsuario = (req, res = response) => {
    res.json({
        msj: "Controlador deleteUsuario ejecutado"
    })
}