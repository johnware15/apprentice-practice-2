import Promise from 'bluebird'
import pg from 'pg-promise'

const connect = pg({promiseLib: Promise})
console.log(process.env.DATABASE_URL);
const db = connect(process.env.DATABASE_URL)


module.exports = db
