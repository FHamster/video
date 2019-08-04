var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

router.get('/mmark', (req, res) => {
  let uId = req.query.uId
  let sql = `select distinct folder_name, mmark_url
from music_mark
where u_id = '${uId}'`

  MyQuery(sql, data => {
    console.log(data)
    res.json(data)
  })

})
module.exports = router
