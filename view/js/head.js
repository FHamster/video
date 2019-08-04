var loginImg = document.getElementById('loginImg');
var loginName = document.getElementById('loginName');

var uid = '001';

function getHeadbar(){
    let str = `http://127.0.0.1:3000/api/user/${uid}`;
    $.ajax({
        type:'GET',
        contentType: 'application/json;charset=UTF-8',
        url:str,
        success: function (res) {
            console.log(res);
            loginName.innerText = res.u_nickname;
            loginImg.style.backgroundImage = 'url(' + res.u_avator_url + ')';
        },
        //请求失败回调函数
        error: function (e) {
            console.log(e.status)
            console.log(e.responseText)
        }
    })
}
