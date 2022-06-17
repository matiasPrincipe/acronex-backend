'use strict'

const Machine = require('../models/machine')

function getMachine(req, res) {
    let machineId = req.params.id
    Machine.findById(machineId, (err, machine) => {
        if (err) {
            res.status(500). send({ message: `Error en petición: ${err}`})
        }
        if (!machine) {
            res.status(404). send({ message: 'Máquina inexistente'})
        } else {
            res.status(200).send({ machine })
        }
    })
}

function getMachinesPagination(req, res) {
    const itemsPerPage = req.query && req.query.itemsPerPage ? req.query.itemsPerPage : 5
    const page = req.query && req.query.page ? req.query.page : 1
    const description = req.query.description ?? ''
    const clase = req.query.clase ?? ''
    Machine.paginate({
            description: { "$regex": description, "$options": "i" },
            clase: { "$regex": clase, "$options": "i" },
            maquinaDadaDeBaja: { $in: [ false, null, undefined ] }
        },
        {
            select: '_id description moving',
            offset: itemsPerPage * (page - 1),
            limit: itemsPerPage
        })
        .then(result => res.status(200).send({ result }))
}

function getMachines(req, res) {
    const description = req.query.description ?? ''
    const clase = req.query.clase ?? ''
    Machine.find({
            description: { "$regex": description, "$options": "i" },
            clase: { "$regex": clase, "$options": "i" },
            maquinaDadaDeBaja: { $in: [ false, null, undefined ] }
        })
        .then(result => res.status(200).send({ result }))
}

function saveMachine(req, res) {
    let machine = new Machine(req.body)
    machine.save((err, machineStored) => {
        if (err) {
            res.status(500).send({ message: `Error al guardar en bdd: ${err}` })
        } else {
            res.status(200).send({machine: machineStored})
        }
    })
}

function updateMachine(req, res) {
    let machineId = req.params.id
    let update = req.body
    Machine.findByIdAndUpdate(machineId, update, (err, machineUpdated) => {
        if (err) {
            res.status(500). send({ message: `Error en petición: ${err}`})
        } else {
            res.status(200).send({machine: machineUpdated})
        }
    })
}

function deleteMachine(req, res) {
    let machineId = req.params.id
    Machine.findByIdAndUpdate(machineId, { maquinaDadaDeBaja: true },(err, machine) => {
        if (err) {
            res.status(500). send({ message: `Error en petición: ${err}`})
        } else if (!machine) {
            res.status(404). send({ message: 'Máquina inexistente'})
        } else {
            res.status(200). send({ message: 'Máquina ha sido dada de baja'})
        }
    })
}

module.exports = {
    getMachine,
    getMachines,
    getMachinesPagination,
    saveMachine,
    updateMachine,
    deleteMachine
}