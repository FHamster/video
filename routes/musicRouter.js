var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

router.get('', (req, res) => {


  MyQuery
  req.json()
})
module.exports = router
