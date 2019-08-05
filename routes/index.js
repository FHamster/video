var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/* GET home page. */
router.get('/viewTest', function (req, res, next) {
  res.render('view')
})
router.get('/musicView', function (req, res, next) {
  // res.type('html')
  console.log('musicView' + req.session.uId)
  res.render('music',{ uId: req.session.uId})
})
router.get('/videoView', function (req, res, next) {
  var vId = req.query.vId
  var uId = req.session.uId
  console.log(vId)
  console.log(uId)

  res.render('video',{ uId: uId,vId: vId})
})
router.get('/myVideoView', function (req, res, next) {
  if (req.query.uId) {
    req.session.uId = req.query.uId
  }

  console.log(req.session.uId)
  // res.type('html')
  res.render('myVideo',{ uId: req.session.uId})
})
router.get('/login', function (req, res, next) {
  // res.type('html')
  res.render('login')
})

router.get('/viewTest', function (req, res, next) {
  res.render('view')
})

router.get('/getTest', function (req, res) {
  res.json({ state: 'GetOK' })
})
router.post('/postTest', (req, res) => {
  res.json({ state: 'PostOK' })
})

router.delete('/deleteTest', (req, res) => {
  res.json({ state: 'DeleteOK' })
})

router.put('/putTest', (req, res) => {
  res.json({ state: 'PutOK' })
})

router.get('/getIDTest/:id', function (req, res) {
  console.log(req.params.id)
  res.json({ state: 'url动态参数测试通过', value: req.params.id })
})

router.get('/sqlTest', (req, res) => {
  MyQuery('select * from test1', (data) => {
    console.log(data)
    res.json(data)
  })
})
module.exports = router
