const { Pool } = require("pg")



const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "qwe",
  port: 5432,
  database: "kanalservice"
})


db.connect()


module.exports = db