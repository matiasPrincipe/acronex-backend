const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        console.log(`Error al conectarse a la base de datos: ${err}`)
    } else {
        console.log('Conexión a la bdd establecida');
    }
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})