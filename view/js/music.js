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
    {
        name:'The Black Case',//歌曲名,
        time:'01:42',//时长
        singer:'KillerBlood',//歌手
        from:'Cytus-Prologue-',//专辑
        purl:'http://p2.music.126.net/753pgNXuQ93-Bakdzbqryw==/2489294325303322.jpg?param=177y177',//专辑图片路径
        murl:'http://music.163.com/song/media/outer/url?id= 4916191.mp3 ',//歌曲路径
    },{
        name: 'tief=blau',//歌曲名,
        time:'04:03',//时长
        singer:'Foxtail-Grass Studio',//歌手
        from:'monocolotion',//专辑
        purl:'http://p2.music.126.net/JIDe8pSNjYcXi5g6TbB1pQ==/5746047766839678.jpg?param=177y177',//专辑图片路径
        murl:'http://music.163.com/song/media/outer/url?id= 27669791.mp3 ',//歌曲路径
    },{
        name: '意难忘',//歌曲名,
        time:'04:28',//时长
        singer:'蔡小虎',//歌手
        from:'思相枝',//专辑
        purl:'http://p2.music.126.net/dmqfLxjTvVjzyTxMASvL4A==/61572651156176.jpg?param=177y177',//专辑图片路径
        murl:'http://music.163.com/song/media/outer/url?id= 68968.mp3 ',//歌曲路径
    }, {
        name: 'はなしらべ',//歌曲名,
        time:'05:20',//时长
        singer:'郁原ゆう',//歌手
        from:'THE IDOLM@STER MILLION LIVE! M@STER SPARKLE 05',//专辑
        purl:'http://p2.music.126.net/2Ckgr-MI7NrvfqcDr3iUkQ==/109951163104652897.jpg?param=177y177',//专辑图片路径
        murl:'[图片]http://music.163.com/song/media/outer/url?id= 37176242.mp3 ',//歌曲路径
    }
];
var gdlist = [
    {
        index:'12345678',
        name:'Cytus-Prologue-',//名字
        num:'35',//歌曲数量
        url:'http://p2.music.126.net/753pgNXuQ93-Bakdzbqryw==/2489294325303322.jpg?param=177y177',//图片路径
    }, {
        index:'2',
        name:'monocolotion',//名字
        url:'http://p2.music.126.net/JIDe8pSNjYcXi5g6TbB1pQ==/5746047766839678.jpg?param=177y177',//图片路径
    },{
        index:'1',
        name:'思相枝',//名字
        url:'http://p2.music.126.net/dmqfLxjTvVjzyTxMASvL4A==/61572651156176.jpg?param=177y177',//图片路径
    },{
        index:'3',
        name:'THE IDOLM@STER MILLION LIVE! M@STER SPARKLE 05',//名字
        url:'http://p2.music.126.net/2Ckgr-MI7NrvfqcDr3iUkQ==/109951163104652897.jpg?param=177y177',//图片路径
    }
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
        audio.play();
    }
}

next.onclick = function () {
    if(mlist.length){
        nowIndex ++;
        nowIndex %= mlist.length;
        audio.src = mlist[nowIndex].murl;
        ngname.innerText = mlist[nowIndex].name;
        ngspan.innerText = mlist[nowIndex].singer;
        audio.play();
    }
}

playbtn.onclick = function () {
    if(mlist.length){
        nowIndex = 0;
        audio.src = mlist[nowIndex].murl;
        ngname.innerText = mlist[nowIndex].name;
        ngspan.innerText = mlist[nowIndex].singer;
        audio.play();
    }else{
        alert('当前歌单无歌曲');
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
    var copyList = gdlist.map(function (item,index) {
        return `<li onclick=choose(${index})" class="${index == nowIndex?'ongblock':''}">
                <div  class="gblock clearFloat">
                <img src="${item.url}">
                <div  class="gbname">${item.name}</div>
                </div>
                </li>`
    })

    gul.innerHTML = copyList.join('');
}

window.onload = function () {
    // getGe();
    showGedan();
}