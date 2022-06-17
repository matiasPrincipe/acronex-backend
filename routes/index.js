'use strict'

const express = require('express')
const MachineController = require('../controllers/machine')
const MachineDataController = require('../controllers/machineData')
const api = express.Router()

api.get('/machines', MachineController.getMachines)
api.get('/machines-pagination', MachineController.getMachinesPagination)
api.get('/machines/:id', MachineController.getMachine)
api.post('/machines', MachineController.saveMachine)
api.put('/machines/:id', MachineController.updateMachine)
api.delete('/machines/:id', MachineController.deleteMachine)

api.post('/machine-datas', MachineDataController.saveMachineData)
api.get('/last/:id', MachineDataController.getMachineData)
api.get('/machine-datas', MachineDataController.getMachineDatas)

module.exports = api