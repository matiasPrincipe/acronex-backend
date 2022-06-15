'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MachineSchema = Schema({
    description: String,
    clase: { type: String, enum: ['Pulverizadora Terrestre', 'Avión Pulverizador', 'Cosechadora', 'Tractor Tolva']},
    empresa: String,
    chasis: String,
    moving: { type: Boolean, default: false },
    lastUpdate: { type: Date, default: new Date() },
    data: {
        general: {
            bateriaInterna: String,
            cosechando: { type: Boolean, default: false },
            bateriaVechiculo: String,
            usoCombustible: String
        },
        clima: {
            temperatura: String,
            humedad: String,
            direccionViento: String,
            velocidadViento: String
        }
    }
})

module.exports = mongoose.model('Machine', MachineSchema)