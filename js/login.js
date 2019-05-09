// 'use strict';

var placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
    inputs = document.querySelectorAll('.styled-input__input');

placeholders.forEach(function (el, i) {
    var value = el.innerText,
        html = '';
    for (var _iterator = value, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var w = _ref;

        if (!value) value = '&nbsp;';
        html += '<span class="letter">' + w + '</span>';
    }
    el.innerHTML = html;
});

inputs.forEach(function (el) {
    var parent = el.parentNode;
    el.addEventListener('focus', function () {
        parent.classList.add('filled');
        placeholderAnimationIn(parent, true);
    }, false);
    el.addEventListener('blur', function () {
        if (el.value.length) return;
        parent.classList.remove('filled');
        placeholderAnimationIn(parent, false);
    }, false);
});

function placeholderAnimationIn(parent, action) {
    var act = action ? 'add' : 'remove';
    var letters = parent.querySelectorAll('.letter');
    letters = [].slice.call(letters, 0);
    if (!action) letters = letters.reverse();
    letters.forEach(function (el, i) {
        setTimeout(function () {
            var contains = parent.classList.contains('filled');
            if (action && !contains || !action && contains) return;
            el.classList[act]('active');
        }, 50 * i);
    });
}
setTimeout(function () {
    document.body.classList.add('on-start');
}, 100);

setTimeout(function () {
    document.body.classList.add('document-loaded');
}, 1800);

// 账号信息的判断
window.onload = function () {
    Reg();
}
function Reg() {
    var btn = document.querySelector('button');
    btn.onclick = function () {
        var err = 0;
        let email = document.querySelector('input[name="email"]').value;
        let passwd = document.querySelector('input[name="passwd"]').value;
        //邮箱的验证
        // var e_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        // if (e_reg == -1 || !e_reg.test(email)) {
        //     alert("邮箱格式不正确");
        // }
        // //密码的验证
        // var p_reg = /^(?=.*\d+)(?=.*\W+)(?=.*[a-zA-Z]+).{8,16}$/;
        // if (!p_reg.test(passwd)) {
        //     alert('密码必填，字母、数字、特殊符号,8~16');
        //     err++;
        //     // return;
        // }
        if (!err) {

            // 把数据提交到服务器   ajax  和服务器进行通信
            // 使用axios发起ajax请求
            axios.post('http://localhost:81/login', {
                email: email,
                passwd: passwd
            }).then(function (response) {
                // 服务器端响应的内容不会直接出现在浏览器页面上
                console.log(response);
                // js各种操作
                if (response.data.r == 'email_not_exist') {
                    alert('账号不存在');
                    return;
                }
                if (response.data.r == 'passwd_err') {
                    alert('密码错误');
                    return;
                }
                window.location.href = './center.html';

            }).catch(function (err) {
                console.log(err);
            });
        }
    }
}


