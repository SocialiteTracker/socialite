const { Pool } = require('pg');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: 5432
})
pool
  .connect()
  .then((resolve: any) => console.log(`Connected to DB: ${resolve.host}`))
  .catch((err: any) => console.log(`DB error ${err}`))

module.exports = pool;