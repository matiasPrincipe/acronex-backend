db.createUser(
    {
        user: 'acronex',
        pwd: 'acronex',
        roles: [
            {
                role: 'readWrite',
                db: 'acronex'
            }
        ]
    }
);

// db.topics.insertOne({
//     _id: 2,
//     nombre: '/fabrica/zona-1/plc-1/sensor-2/valor',
// });

// db.topics.insertOne({
//     _id: 1,
//     nombre: '/fabrica/zona-1/plc-1/sensor-1/valor',
// });