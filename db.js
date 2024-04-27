const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // ganti dengan username PostgreSQL Anda
  host: 'localhost', // ganti dengan host PostgreSQL Anda
  database: 'manajemenkost', // ganti dengan nama database Anda
  password: 'Ar3y0uk1dd1n6m3', // ganti dengan password PostgreSQL Anda
  port: 5432, // ganti dengan port PostgreSQL Anda
});

module.exports = pool;
