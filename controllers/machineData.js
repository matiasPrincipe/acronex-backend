'use strict'

const MachineData = require('../models/machineData')

function getMachineData(req, res) {
    let machineId = req.params.id
    MachineData.find({ owner: machineId }).sort({ 
        lastUpdate : 1
    }).limit(1).then( (machineData) => {
        if (!machineData) {
            res.status(404). send({ message: 'Máquina inexistente'})
        } else {
            res.status(200).send({ machineData: machineData[0] })
        }
    })
}

function saveMachineData(req, res) {
    let machineData = new MachineData(req.body)
    machineData.save((err, machineDataStored) => {
        if (err) {
            res.status(500).send({ message: `Error al guardar en bdd: ${err}` })
        } else {
            res.status(200).send({machineData: machineDataStored})
        }
    })
}

function getMachineDatas(req, res) {
    MachineData.find()
        .then(result => res.status(200).send({ result }))
}

module.exports = {
    getMachineData,
    saveMachineData,
    getMachineDatas
}