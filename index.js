const app = require('./src/server/server');

const port = 3000;

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});