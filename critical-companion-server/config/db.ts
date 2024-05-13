import mysql from 'mysql2'

function db_execute(query: String, params: any, callback: (result: any, err: any) => any) {
  const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })

  const middleware = (err: any, results: any) => {
    if (err) {
      console.error('Error on query', err)
      callback(null, err)
    } else {
      callback(results, null)
    }
  }

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err)
      return null
    }
    connection.query(query.toString(), params, middleware)
    connection.release()
    pool.end()
  })
}

export default db_execute
