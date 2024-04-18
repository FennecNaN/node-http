const http = require('http');
const pokemonData = require('./data');

// Crear el server
const server = http.createServer((req, res) => {

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>${pokemonData.name} #${pokemonData.pokedexNumber}</h1>
            <p>Tipo: <b>${pokemonData.type}</b>\n</p>
            <p>Altura:${pokemonData.height}\n</p>
            <p>Peso: ${pokemonData.weight}\n</p>
            <p>Habilidades: ${pokemonData.abilities}\n</p>
            <p>Descripcion: ${pokemonData.description}\n</p>
        </body>
        </html>
    `;

    res.end(html);
});

// Recordar el 0 da un puerto aleatorio, ctrl + c para cerrar el server
server.listen(0, () => {
    console.log(`server running on port: ${server.address().port}, your local address is http://localhost:${server.address().port}`);
});