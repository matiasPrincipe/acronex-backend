'use strict'

const express = require('express')
const MachineController = require('../controllers/machine')
const api = express.Router()

api.get('/machine', MachineController.getMachines)
api.get('/machine/:id', MachineController.getMachine)
api.post('/machine', MachineController.saveMachine)
api.put('/machine/:id', MachineController.updateMachine)
api.delete('/machine/:id', MachineController.deleteMachine)

module.exports = api