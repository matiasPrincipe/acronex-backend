'use strict'

const Machine = require('../models/machine')

function getMachine(req, res) {
    let machineId = req.params.id
    Machine.findById(machineId, (err, machine) => {
        if (err) {
            return res.status(500). send({ message: `Error en petición: ${err}`})
        }
        if (!machine) {
            res.status(404). send({ message: 'Máquina inexistente'})
        } else {
            res.status(200).send({ machine })
        }
    })
}

function getMachines(req, res) {
    const itemsPerPage = +req.query.itemsPerPage
    const page = +req.query.page
    const description = req.query.description ?? ''
    const clase = req.query.clase ?? ''

    // executes, description LIKE %description% or LIKE %clase%
    const machineQuery = Machine.find({
        description: { "$regex": description, "$options": "i" },
        clase: { "$regex": clase, "$options": "i" } },
    //and only selecting the "_id", "description" and "moving" fields
        '_id description moving clase')

    // If itemsPerPage and page are not undefined (if they are both set and contain valid values)
    if(itemsPerPage && page) {
        machineQuery
            .skip(itemsPerPage * (page - 1))
            .limit(itemsPerPage)
    }
    machineQuery.then((machines) => {
        // if (err) {
        //     return res.status(500). send({ message: `Error en petición: ${err}`})
        // }
        // if (!machines) {
        //     res.status(404). send({ message: 'Máquinas inexistentes'})
        // } else {
        return res.status(200).send({ machines })
        // }
    })
}

function saveMachine(req, res) {
    let machine = new Machine()
    machine.description = req.body.description
    machine.clase = req.body.clase
    machine.empresa = req.body.empresa
    machine.chasis = req.body.chasis
    machine.moving = req.body.moving
    machine.data.general.bateriaInterna = req.body['data.general.bateriaInterna']
    machine.data.general.cosechando = req.body['data.general.cosechando']
    machine.data.general.bateriaVechiculo = req.body['data.general.bateriaVechiculo']
    machine.data.general.usoCombustible = req.body['data.general.usoCombustible']
    machine.data.clima.temperatura = req.body['data.clima.temperatura']
    machine.data.clima.humedad = req.body['data.clima.humedad']
    machine.data.clima.direccionViento = req.body['data.clima.direccionViento']
    machine.data.clima.velocidadViento = req.body['data.clima.velocidadViento']
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
    Machine.findById(machineId, (err, machine) => {
        if (err) {
            res.status(500). send({ message: `Error en petición: ${err}`})
        }
        if (!machine) {
            res.status(404). send({ message: 'Máquina inexistente'})
        } else {
            machine.remove( err => {
                if (err) {
                    res.status(500). send({ message: `Error al borrar: ${err}`})
                } else {
                    res.status(200). send({ message: 'Máquina ha sido eliminada'})
                }
            })
        }
    })
}

module.exports = {
    getMachine,
    getMachines,
    saveMachine,
    updateMachine,
    deleteMachine
}