const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const PRECIOS_FILE = './precios.json';

function leerPrecios() {
  if (!fs.existsSync(PRECIOS_FILE)) {
    const preciosIniciales = {
      preciosCortinas: {
        blackout: 29,
        screen: 15,
        tradicional: 20
      },
      preciosMontaje: {
        enrollable: 500,
        plegable: 400,
        riel: 300
      }
    };
    fs.writeFileSync(PRECIOS_FILE, JSON.stringify(preciosIniciales, null, 2));
    return preciosIniciales;
  }
  return JSON.parse(fs.readFileSync(PRECIOS_FILE, 'utf8'));
}

function guardarPrecios(data) {
  fs.writeFileSync(PRECIOS_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/precios', (req, res) => {
  res.json(leerPrecios());
});

app.post('/api/precios', (req, res) => {
  guardarPrecios(req.body);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});