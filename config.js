require('dotenv').config()
module.exports = {
    port: process.env.PORT || 3006,
    // usuario:contraseña:db
    db: process.env.MONGODB || 'mongodb://acronex:acronex@db:27017/acronex'
}