var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')
var userRouter = require('./routes/userRouter')
var markRouter = require('./routes/markRouter')
var musicMarkRouter = require('./routes/musicMarkRouter')
var musicRouter = require('./routes/musicRouter')
var videoRouter = require('./routes/videoRouter')
var ejs = require('ejs')

var session = require('express-session')

var app = express()
//设置允许跨域访问该服务.
app.use('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  // res.header('Content-Type', 'application/json;charset=utf-8');
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost"); //允许来之域名为http://localhost的请求
  res.setHeader("Access-Control-Allow-Headers", "Origin,No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With, userId, token");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE"); //请求允许的方法
  res.setHeader("Access-Control-Max-Age", "3600");    //身份认证(预检)后，xxS以内发送请求不在需要预检，既可以直接跳过预检，进行请求(前面只是照猫画虎，后面才理解)
  next()
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 视图的根目录
app.engine('html', ejs.__express)
app.set('views', './view/')
app.set('view engine', 'html')

// parse application/json
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'view')))

app.use(session({
  //参数配置
  secret: 'luckystar',//加密字符串
  name: 'userid',//返回客户端key的名称，默认为connect_sid
  resave: false,//强制保存session，即使它没有变化
  saveUninitialized: true,//强制将未初始化的session存储。当新建一个session且未设定属性或值时，它就处于未初始化状态。在设定cookie前，这对于登录验证，减轻服务器存储压力，权限控制是有帮助的，默认为true
  // cookie: { maxAge: 50000 },
  // rolling: true, //在每次请求时进行设置cookie，将重置cookie过期时间
}))

//路由列表
app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/api', userRouter)
app.use('/api', markRouter)
app.use('/api', musicMarkRouter)
app.use('/api', musicRouter)
app.use('/api', videoRouter)

module.exports = app
