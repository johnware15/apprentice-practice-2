const express = require('express');
const db = require('./db/index.js');

const {
  signUp,
  signUpText
} = require('../actions/signUp.js')


signUpRouter.get('/sign-up', (req, res, next) => {
  if(!req.body.name || !req.body.email || !req.body.password) {
    res.render('/sign-up')
  } else {
    res.redirect('/')
  }
})

signUpRouter.post('/sign-up', (res, req) => {
  if(req.body.name && req.body.email && req.body.password) {
    res.redirect('/')
  } else {
    res.render('/sign-up')
  }
})

module.exports = signUpRouter
