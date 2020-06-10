const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.port || 3000)

app.use(express.json())
app.use('/api/turnos', require('./rutas/turnosRutas'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => { console.log('Escuchando al puerto',app.get('port'))})