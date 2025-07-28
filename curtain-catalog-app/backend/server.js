const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const PRECIOS_FILE = './precios.json';

function leerPrecios() {
  try {
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
  } catch (error) {
    console.error('Error leyendo precios:', error);
    return null;
  }
}

function guardarPrecios(data) {
  try {
    fs.writeFileSync(PRECIOS_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error guardando precios:', error);
    return false;
  }
}

app.get('/api/precios', (req, res) => {
  const precios = leerPrecios();
  if (precios) {
    res.json(precios);
  } else {
    res.status(500).json({ error: 'No se pudieron leer los precios.' });
  }
});

app.post('/api/precios', (req, res) => {
  // Validación básica del body
  if (
    typeof req.body === 'object' &&
    req.body.preciosCortinas &&
    req.body.preciosMontaje
  ) {
    const ok = guardarPrecios(req.body);
    if (ok) {
      res.json({ ok: true });
    } else {
      res.status(500).json({ error: 'No se pudieron guardar los precios.' });
    }
  } else {
    res.status(400).json({ error: 'Formato de datos inválido.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});