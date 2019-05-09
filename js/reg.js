// 当身份证号、密码、验证码为空的时候聚焦就会显示相关提示
$("#one").on("focus", function () {
    if ($(this).val() == '') {
        $("#noticeS").css({
            display: "inline-block",
        })
    }
})
$("#two").on("focus", function () {
    if ($(this).val() == '') {
        $("#twoP").css({
            display: "inline-block",
        })
    }
})
$("#thr").on("focus", function () {
    if ($(this).val() == '') {
        $("#thrP").css({
            display: "inline-block",
        })
    }
})
$(".codeN").on("focus", function () {

    if ($(this).val() == '') {
        $("#fourP").css({
            display: "inline-block",
        })
    }
})
$(".showT").on("blur", function () {
    $(".noticeT").css({
        display: "none",
    })
})
window.onload = function () {
    Reg();
}
// 注册的封闭空间
function Reg() {
    var btn = document.querySelector('.styled-button');
    btn.onclick = function () {
        var err = 0;
        var card = document.querySelector('#one').value;
        var username = document.querySelector('input[name="username"]').value;
        var passwd = document.querySelector('input[name="passwd"]').value;
        var tel = document.querySelector('input[name="tel"]').value;
        var email = document.querySelector('input[name="email"]').value;

        // // 账号信息判断
        // var c_reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
        // if (!c_reg.test(card)) {
        //     alert("身份证号码不正确");
        // }
        // var u_reg = /^[\u4E00-\u9FA5]{2,4}$/; //注意是对整个字符进行验证  ^   $
        // if (!u_reg.test(username)) {
        //     alert('姓名请用汉字书写！');
        //     err++;
        //     // return; //使用return  断点
        // }
        // //密码的验证
        // var p_reg = /^(?=.*\d+)(?=.*\W+)(?=.*[a-zA-Z]+).{8,16}$/;
        // if (!p_reg.test(passwd)) {
        //     alert('密码必填，字母、数字、特殊符号,8~16');
        //     err++;
        //     // return;
        // }

        // // 手机号的验证
        // var tel_reg = /^1[3-9]{1}\d{9}$/;
        // // 接收用户输入的数据
        // if (!tel_reg.test(tel)) {
        //     alert('请输入正确的手机号');
        //     err++;
        //     // return;
        // }
        // var e_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        // if (e_reg == -1 || !e_reg.test(email)) {
        //     alert("邮箱格式不正确");
        // }
        if (!err) {
            let xhr = new XMLHttpRequest();
            xhr.open('post', 'http://localhost:83/regpost');
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhr.send(`card=${card}&username=${username}&passwd=${passwd}&tel=${tel}&email=${email}`);
            // 接收服务器端响应的内容
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // console.log(JSON.parse(xhr.responseText));
                    // {result: "ok"}
                    let data = JSON.parse(xhr.responseText);                  
                    if (data.result == 'ok') { 
                        alert('注册成功');
                        window.location.href = './login.html';
                    }
                    else
                    {
                        alert('该用户已被注册！')
                    }
                }


            }
        }
    }
}



