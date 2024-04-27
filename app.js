const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfigurasi koneksi ke database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'manajemenkost',
  password: 'Ar3y0uk1dd1n6m3',
  port: 5432,
});

// SWAGGER
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./apidocs.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.use(bodyParser.json());

// Mendapatkan semua kamar
app.get('/kamar', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM kamar');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mendapatkan kamar berdasarkan id
app.get('/kamar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM kamar WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Menambah kamar baru
app.post('/kamar', async (req, res) => {
  const { tipe_kamar, luas, harga, isAvailable } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO kamar (tipe_kamar, luas, harga, isAvailable) VALUES ($1, $2, $3, $4) RETURNING *',
      [tipe_kamar, luas, harga, isAvailable]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mengubah kamar berdasarkan id
app.put('/kamar/:id', async (req, res) => {
  const { id } = req.params;
  const { tipe_kamar, luas, harga, isAvailable } = req.body;
  try {
    const result = await pool.query(
      'UPDATE kamar SET tipe_kamar = $1, luas = $2, harga = $3, isAvailable = $4 WHERE id = $5 RETURNING *',
      [tipe_kamar, luas, harga, isAvailable, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Menghapus kamar berdasarkan id
app.delete('/kamar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM kamar WHERE id = $1', [id]);
    res.json({ message: 'Kamar telah dihapus.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
