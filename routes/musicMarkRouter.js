var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')
MyQuery(sql, data => {
  //data是一个数组，使用数组的访问方式访问
  //有问题多多console.log()
  console.log(`data is ${data[0]}`)

  //根据结果集的长度判断用户登录是否成功
  if (data.length > 0) {
    // res.redirect('https://www.baidu.com/')
    //认证成功
    //返回json对象给前台
    res.json({ state: true, message: '用户认证通过' })
  } else {
    //认证失败
    res.json({ state: false, message: '用户认证未能通过' })
  }
})
module.exports = router
