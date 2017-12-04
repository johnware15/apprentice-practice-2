const bcrypt = require('bcrypt')
const db = require('./db/index.js');

const signUpText = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;

const signUp = function(text, values) {
  return db.query(signUpText)
}

module.exports = {
  signUp,
  signUpText
}
