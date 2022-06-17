'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema

const MachineDataSchema = Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Machine",
        required: true
    },
    lastUpdate: { type: Date, default: new Date() },
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
    },
    operacion: {
        velocidad: String,
        presion: String,
        productoHectarea: String,
        ancho: String
    }
})

MachineDataSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('MachineData', MachineDataSchema)