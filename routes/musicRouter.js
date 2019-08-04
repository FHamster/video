var express = require('express')
var router = express.Router()
let MyQuery = require('./MySqlInter')

/**
 * 根据音乐id获取歌曲信息
 */
router.get('/music/:mId', (req, res) => {
  let mId = req.params.mId;
  console.log(mId);
  // res.json(mId);
  let sql = `select * from music where m_id = '${mId}'`;
  console.log(sql);

  //数据库匹配认证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`);
    if(data.length > 0) {
      //匹配成功并返回数据
      res.json(data[0]);
    } else {
      //匹配失败
      res.json({state: false, msg: '没有查询到该歌曲'});
    }
  });
});

/**
 *显示全部歌曲信息
 */
router.get('/music', (req, res) => {
  let sql = `select * from music`;
  console.log(sql);

  //数据库认证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`);
    if(data.length > 0) {
      //获取成功并返回数据
      res.json(data);
    } else {
      //匹配失败
      res.json({state: false, msg: '没有查询到歌曲信息'});
    }
  });
});

/**
 *根据查询参数uId和folder_name查询歌曲
 */
router.get('/queryMusic', (req, res) => {
  let uId = req.query.uId
  let folderName = req.query.folderName
  let sql = `select u_id,folder_name,m_url,m_total_long,m_artist,m_album,m_album_url
from music_mark,
     music
where u_id = '${uId}'
  and folder_name = '${folderName}'
  and music.m_id = music_mark.m_id`;
  console.log(sql);

  //数据库认证
  MyQuery(sql, data => {
    console.log(`data is ${data[0]}`);
    if(data.length > 0) {
      //获取成功并返回数据
      res.json(data);
    } else {
      //匹配失败
      res.json({state: false, msg: '没有查询到歌曲信息'});
    }
  });
});
module.exports = router
