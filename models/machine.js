'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema

const MachineSchema = Schema({
    description: {
        type: String,
        required: true,
        unique: true
    },
    clase: { type: String, required: true, enum: ['Pulverizadora Terrestre', 'Avión Pulverizador', 'Cosechadora', 'Tractor Tolva']},
    empresa: {
        type: String,
        required: true
    },
    chasis: String,
    moving: { type: Boolean, default: false },
    lastUpdate: { type: Date, default: new Date() },
    maquinaDadaDeBaja: { type: Boolean, default: false },
    machineDatas: [{
        type: Schema.Types.ObjectId,
        ref: "MachineData"
    }]
})

MachineSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Machine', MachineSchema)