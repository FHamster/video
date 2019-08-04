var video = document.getElementById('video')
var isPlay = false
var play = document.getElementById('play')
var imgs = document.getElementsByTagName('img')

var program = document.getElementById('program')
var programBar = document.getElementById('programBar')
var nowTime = document.getElementById('nowTime')
var endTime = document.getElementById('endTime')

var full = document.getElementById('full')

var volume = document.getElementById('volume')
var v_program = document.getElementById('v_program')
var v_bar = document.getElementById('v_bar')
// var volumeNumber = 0.5;
var isMute = false

var collect = document.getElementById('collect')

var videoList = []
var thisVideo
var user

var title = document.getElementById('title')
var produceMain = document.getElementById('produceMain')
var listMain = document.getElementById('listMain')

var lis = document.getElementsByTagName('li')

window.onload = function () {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:3000/api/video/',
    success: function (res) {
      for (var i = 0; i < 5; i++) {
        videoList.push(res.data[i])
      }
    }
  })

  // user 获取

  // thisVideo 需获取

  //写入thisVideo的数据
  pushVideo(thisVideo)

  for (var i = 0; i < 5; i++) {
    var li = document.getElementById('number' + i)
    li.childNodes[1].src = videoList[i].pic//封面图
    li.childNodes[3].childNodes[1].innerHTML = videoList[i].v_title
    li.childNodes[3].childNodes[3].innerHTML = getTime(videoList[i].v_long)
    li.onclick = function () {
      for (var j = 0; j < videoList.length; j++) {
        if (videoList[j].title == li.childNodes[3].childNodes[1].innerHTML) {
          thisVideo = videoList[j]
          pushVideo(thisVideo)
          break
        }
      }
    }
  }

  // console.log(lis[0].childNodes[3].childNodes[3].innerHTML);

}

//将 video 的信息写在页面上
function pushVideo (nowVideo) {
  title.innerHTML = nowVideo.v_title//标题
  video.src = nowVideo.v_url//url地址
  video.poster = nowVideo.v_pic//封面图
  endTime.innerHTML = getTime(nowVideo.v_long)//时长
  produceMain.innerHTML = nowVideo.v_spec//简介
}

//视频点击播放及暂停
play.onclick = function () {
  if (isPlay) {
    play.src = 'img/video/on/play.png'
    video.pause()
    isPlay = false
  } else {
    play.src = 'img/video/on/stop.png'
    video.play()
    isPlay = true
  }
}
video.onclick = function () {
  if (isPlay) {
    play.src = 'img/video/off/play.png'
    video.pause()
    isPlay = false
  } else {
    play.src = 'img/video/off/stop.png'
    video.play()
    isPlay = true
  }
}

//图标hover改变颜色
for (var i = 0; i < imgs.length; i++) {
  imgs[i].onmouseenter = function () {
    var str = this.src
    // console.log(str);
    str = str.replace(/off/, 'on')
    this.src = str
  }
  imgs[i].onmouseout = function () {
    var str = this.src
    // console.log(str);
    str = str.replace(/on/, 'off')
    this.src = str
  }
}

//播放进度条
program.onclick = function (e) {
  var ev = window.event || e
  var cha = ev.clientX - program.offsetLeft
  // console.log(cha,program.offsetWidth);
  programBar.style.width = cha / program.offsetWidth * 100 + '%'
  video.currentTime = 204 * cha / program.offsetWidth
}
video.addEventListener('timeupdate', function () {
  nowTime.innerHTML = getTime(video.currentTime)
  programBar.style.width = video.currentTime / 204 * 100 + '%'
})

//获取指定格式时间
function getTime (t) {
  var mTime = parseInt(t / 60)
  var sTime = parseInt(t % 60)
  if (mTime < 10) {
    mTime = '0' + mTime
  }
  if (sTime < 10) {
    sTime = '0' + sTime
  }
  return mTime + ':' + sTime
}

//全屏
full.onclick = function () {
  if (video.requestFullscreen) {
    video.requestFullscreen()
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen()
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen()
  }
}

//声音
//进度条
v_program.onclick = function (e) {
  var ev = window.event || e
  var cha = ev.clientX - v_program.offsetLeft
  // console.log(cha,v_program.offsetWidth);
  v_bar.style.width = cha / v_program.offsetWidth * 100 + '%'
  video.volume = cha / v_program.offsetWidth
}
//按钮
volume.onclick = function () {
  if (isMute) {
    volume.src = 'img/video/on/volume.png'
    v_bar.style.width = video.volume * 100 + '%'

    video.muted = false
    isMute = false
  } else {
    volume.src = 'img/video/on/mute.png'
    v_bar.style.width = '0'
    video.muted = true
    isMute = true
  }
}

//收藏
collect.onclick = function () {
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/api/mark',
    data: {
      vId: thisVideo.id,
      uId: user.id,
    },
    success: function (res) {
      console.log(res)
    },
    error: function (e) {
      console.log('错误：' + e.responseText)
    }
  })
}
