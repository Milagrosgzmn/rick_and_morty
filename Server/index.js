const server = require('./app');
const PORT= 3001;
const {conn} = require('./DB_connection');

conn.sync({force: false}).then(()=>{
    server.listen(PORT, ()=>{
    
    console.log(`levantamos con exito el servidor en el puerto:${PORT}`);
});
});
 