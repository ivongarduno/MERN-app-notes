require('dotenv').config(); //llama a las variables de entorno
const app = require('./app.js');
require('./database');

const main = async () =>{
    await app.listen(app.get('port'));
    console.log('server on port 4000');
}

main();