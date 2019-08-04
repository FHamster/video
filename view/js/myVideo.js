var cards = document.getElementById('cards');

var list = [{ v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/CGNS-2K-012.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'},
    {v_title:'血腥夜愿',v_url: 'img/video/2K-血腥夜愿.jpg',v_long:'321'}];

//获取我的收藏视频 list

window.onload = function () {
    $.ajax({
        //请求方式
        type: 'GET',//post get delete put
        //请求的媒体类型
        contentType: 'application/json;charset=UTF-8',
        //请求地址
        url: 'http://127.0.0.1:3000/video',
        //数据，json字符串
        // data: {asd: 123},
        //请求成功回调函数
        success: function (result) {
            console.log(result);
            list = result;
            var copyList = list.map(function (item, index) {
                return '<div class="card">\n' +
                    '            <div class="cardChild">\n' +
                    '                <img src="' + item.v_url + '">\n' +
                    '                <div class="produce">\n' +
                    '                    <div class="cardTitle">' + item.v_title + '</div>\n' +
                    '                    <div class="cardTime">' + getTime(item.v_long) + '</div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>'
            });
            console.log(copyList.join(''));
            cards.innerHTML = copyList.join('');
        },
        //请求失败回调函数
        error: function (e) {
            console.log(e.status)
            console.log(e.responseText)
        }
    });
};




function getTime(t) {
    var mTime = parseInt(t/60);
    var sTime = parseInt(t%60);
    if(mTime < 10){
        mTime = '0' + mTime;
    }
    if(sTime < 10){
        sTime = '0' + sTime;
    }
    return mTime + ':' + sTime;
}