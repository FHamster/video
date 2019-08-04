var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

router.get('/apiTest', function (req, res, next) {
  res.json({ state: true, message: 'api可用' })
})
router.get('/apiTest/mlist', (req, res) => {
  let mlist = [
    {
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },{
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },{
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },{
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },{
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },{
      name:'积分',//歌曲名,
      time:'12:45',//时长
      singer:'akj',//歌手
      from:'cadcjn',//专辑
      purl:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//专辑图片路径
      murl:'http://music.163.com/song/media/outer/url?id=1934649.mp3',//歌曲路径
    },
  ];

  res.json(mlist)
})
router.get('/apiTest/gdlist', (req, res) => {
  var gdlist = [
    {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    }, {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    }, {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    }, {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    }, {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    }, {
      index:'1',
      name:'dsjlk',//名字
      url:'http://p1.music.126.net/2XzaHeETVeYYaGEIxSq6lQ==/803742999956794.jpg?param=130y130',//图片路径
    },
  ];

  res.json(gdlist)
})




router.post('/user', (req, res) => {})
module.exports = router
