var signUp = document.getElementById('signUp')
var signIn = document.getElementById('signIn')
var inReg = document.getElementById('inReg')
var userName = document.getElementById('userName')
var password = document.getElementById('userPassword')
var login = document.getElementById('login')
var uName = document.getElementById('uName')
var ueamil = document.getElementById('uemail')
var uPassword = document.getElementById('uPassword')
var back = document.getElementById('back')
var upReg = document.getElementById('upReg')

inReg.onclick = function () {
  signIn.style.display = 'none'
  signUp.style.display = 'block'
}

back.onclick = function () {
  signIn.style.display = 'block'
  signUp.style.display = 'none'
}

login.onclick = function () {
  var user = userName.value
  var pwd = password.value
  console.log(user)
  console.log(pwd)

  $.ajax({
    type: 'POST',//post get delete put
    //请求的媒体类型
    // contentType: 'application/json;charset=UTF-8',
    //请求地址
    url: 'http://127.0.0.1:3000/api/auth',
    //数据，json字符串
    data: { userId: user, psw: pwd },

    //请求成功回调函数
    success: function (data) {
      if (data.state) {
        let uId = data.u_id
        let url = `http://localhost:3000/myVideoView?uId=${uId}`
        window.location.href = url
      } else {
        alert(data.message)
      }
    },
    //请求失败回调函数
    error: function (e) {
      console.log(e.status)
      console.log(e.responseText)
    }
  })
}

upReg.onclick = function () {
  console.log('upReg')
  var user = uName.value
  var pwd = uPassword.value
  //改成昵称了
  var eml = ueamil.value
  $.ajax({
    type: 'POST',//post get delete put
    //请求的媒体类型
    // contentType: 'application/json;charset=UTF-8',
    //请求地址
    url: 'http://127.0.0.1:3000/api/user',
    //数据，json字符串
    data: { uId: user, uNickname: eml, uPsw: pwd },

    //请求成功回调函数
    success: function (data) {
      alert(data.message)
    },
    //请求失败回调函数
    error: function (e) {
      console.log(e.status)
      console.log(e.responseText)
    }
  })
}
