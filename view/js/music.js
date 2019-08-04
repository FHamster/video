var audio = document.getElementById('audio');
var play = document.getElementById('play');
var bfq = document.getElementById('bfq');
// var gnum = document.getElementById('gum');
var gul = document.getElementById('gul');
var main = document.getElementById('main');
var pic = document.getElementById('pic');
var te = document.getElementById('te');
var uimg = document.getElementById('uimg');
var uname = document.getElementById('uname');
var playbtn = document.getElementById('playbtn');
var mnum = document.getElementById('mnum');
var rlist = document.getElementById('rlist');
var controlbar = document.getElementById('controlbar');
var btnGrop =  document.getElementById('btnGroup');
var pre = document.getElementById('pre');
var next = document.getElementById('next');
var mpic = document.getElementById('mpic');
var ngname = document.getElementById('ngname');
var ngspan = document.getElementById('ngspan');
var progress = document.getElementById('progress');
var pbtn = document.getElementById('pbtn');
var progressbar = document.getElementById('progressBar');
var nowTime = document.getElementById('nowTime');
var endTime = document.getElementById('endTime');
var simg = document.getElementById('simg');
var vol = document.getElementById('vol');
var volbar = document.getElementById('volbar');
var bimg = document.getElementById('bimg');

var isSound = false;
var isSingle = false;
var isPlay = false;
var mlist = [
    // {
    //     name:''//歌曲名,
    //     time:'',//时长
    //     singer:'',//歌手
    //     from:'',//专辑
    //     purl:'',//专辑图片路径
    //     murl:'',//歌曲路径
    // }
];
var gdlist = [
    // {
    //     index:'',
    //     name:'',//名字
    //     num:'',//歌曲数量
    //     url:'',//图片路径
    // }
];
var nowIndex = 0;
var uid = '001';


simg.onclick = function () {
    if(!isSound){
        simg.src='img/mjingyin.png';
        isSound = true;
        audio.volume = 0;
        volbar.style.width = '0';
    }else{
        console.log(1);
        simg.src ='img/msound.png';
        isSound = false;
        false// audio.volume = 0.3;
        volbar.style.width = '30%';
    }
}

bimg.onclick = function () {
    if(!isSingle){
        bimg.src = 'img/mdanqu.png';
        isSingle = true
    }else {
        bimg.src = 'img/mshunxu.png';
        isSingle = false;
    }
}

vol.onclick = function (e) {
    var cha = e.clientX - vol.offsetLeft;
    volbar.style.width = cha / vol.clientWidth * 100 + '%';
    audio.volume = cha / vol.clientWidth;
    if(audio.volume > 0.05){
        simg.src ='img/msound.png';
    }
    else {
        simg.src='img/mjingyin.png';
    }
}

progress.onclick = function (e) {
    console.log(e.clientX + " " + progress.offsetLeft + " " + progress.clientWidth);
    var cha = e.clientX - progress.offsetLeft;
    progressbar.style.width = cha / progress.clientWidth * 100 + '%';
    audio.currentTime = audio.duration * cha / progress.clientWidth;
    var pos = -10 + cha / progress.clientWidth * 500 -5;
    if(pos > -10){
        pbtn.style.marginLeft = pos + 'px';
    }else {
        pbtn.style.marginLeft = -9 + 'px';
    }
}

function toTime(t) {
    var m = parseInt(t / 60);
    var s = parseInt(t % 60);
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return m + ':' + s;
}

audio.addEventListener('timeupdate', function () {
    nowTime.innerText = toTime(audio.currentTime);
    progressBar.style.width = audio.currentTime / audio.duration * 100 + '%';
    var pos = -10 + audio.currentTime / audio.duration * 500 -5;
    if(pos > -13){
        pbtn.style.marginLeft = pos + 'px';
    }else {
        pbtn.style.marginLeft = -12 + 'px';
    }

})

var waitTime = setTimeout(function () {
    //判断当前加载情况
    if (audio.readyState > 2) {
        endTime.innerText = '/'  + toTime(audio.duration);
        clearTimeout(waitTime);
    }
}, 1000);

play.onclick = function () {
    if (!isPlay) {
        play.src = 'img/mpause.png';
        audio.play();
        isPlay = true;
    } else {
        play.src = 'img/mplay-w.png';
        audio.pause();
        isPlay = false;
    }
}

pre.onclick = function () {
    nowIndex --;
    if(nowIndex < 0){
        nowIndex = mlist.length - 1;
    }

    if(mlist.length){
        audio.src = mlist[nowIndex].murl;
        ngname.innerText = mlist[nowIndex].name;
        ngspan.innerText = mlist[nowIndex].singer;
    }
}

next.onclick = function () {
    if(mlist.length){
        nowIndex ++;
        nowIndex %= mlist.length;
        audio.src = mlist[nowIndex].murl;
        ngname.innerText = mlist[nowIndex].name;
        ngspan.innerText = mlist[nowIndex].singer;
    }
}



function getGe(){
    let str =`http://127.0.0.1:3000/api//apiTest/gdlist`;
    console.log(str);
    $.ajax({
        type:'GET',
        contentType: 'application/json;charset=UTF-8',
        url:str,
        // data:{
        //     uId:uid
        // },
        // dataType: "json",
        success: function (res) {
            console.log(res)
        },
        //请求失败回调函数
        error: function (e) {
            console.log(e.status)
            console.log(e.responseText)
        }
    })
}

function showGedan() {


}

window.onload = function () {
    getGe();
}