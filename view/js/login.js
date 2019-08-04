var signUp = document.getElementById('signUp');
var signIn = document.getElementById('signIn');
var inReg = document.getElementById('inReg');
var userName = document.getElementById('userName');
var password = document.getElementById('userPassword');
var login = document.getElementById('login')
var uName = document.getElementById('uName');
var ueamil = document.getElementById('uemail');
var uPassword = document.getElementById('uPassword');
var back = document.getElementById('back');
var upReg = document.getElementById('upReg');

inReg.onclick = function () {
    signIn.style.display = 'none';
    signUp.style.display = 'block';
}

back.onclick = function () {
    signIn.style.display = 'block';
    signUp.style.display = 'none';
}

login.onclick = function () {
    var user = userName.value;
    var pwd = password.value;
    $.ajax({

    })
}

upReg.onclick = function () {
    var user = uName.value;
    var pwd = uPassword.value;
    var eml = ueamil.value;
    $.ajax({

    })
}
