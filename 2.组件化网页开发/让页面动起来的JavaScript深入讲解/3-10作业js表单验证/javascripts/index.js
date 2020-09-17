// 辅助方法
function getElem(selector) {
  return document.querySelector(selector);
}

function getElems(selector) {
  return document.querySelectorAll(selector);
}

function byId(selector) {
  return document.getElementById(selector);
}

function getInputTipsOf(selector) {
  return getElem('#' + selector + '~' + '.tips');
}

// 顶部
var dropdownToggle = getElem('.dropdown');
var dropdownContent = getElem('.dropdown-content');

dropdownToggle.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
});
dropdownToggle.addEventListener('mouseout', function () {
  dropdownContent.style.display = 'none';
});
dropdownContent.addEventListener('mouseover', function() {
  dropdownContent.style.display = 'block';
})
dropdownContent.addEventListener('mouseout', function () {
  dropdownContent.style.display = 'none';
})

// 主体
var tips = getElems('.tips, .password_tips');
var inputs = {
  username: byId('username'),
  password: byId('password')
}
var patterns = {
  username: /^[a-zA-Z]\w{5,29}$/, //6-30位字母、数字或'_'，字母开头
  password: /^\S{6,20}$/, //6-20位字母、数字或符号。
  p_low: /^\d+$|^[a-zA-Z]+$|^[^\s\da-zA-Z]+$/, //内容是纯数字、纯字母或者纯符号，密码强度为低
  p_normal: /^[^a-zA-Z]+$|^[^\d]+$|^[\da-zA-Z]+$/, //是两种类型的结合，密码强度为一般
  p_high: /\d+[a-zA-Z]+[^\s\da-zA-Z]|[a-zA-Z]+[^\s\da-zA-Z]+\d|[^\s\da-zA-Z]\d+[a-zA-Z]/, //是三种类型的结合，那么密码强度为高
}
var checkResults = {};
var errMsgs = {
  username: "6-30位字母、数字或'_'，字母开头",
  password: '6-20位字母、数字或符号',
}
var successMsgs = {
  username: '用户名输入正确',
  password: '',
}

// 检查密码的强度
function checkPasswordLevel() {
  var colors = getElems('.password-tips .color');
  if (!patterns['password'].test(this.value)) {
    colors[1].style.backgroundColor = '#dcdcdc';
    colors[2].style.backgroundColor = '#dcdcdc';
    return;
  };

  if (patterns.p_low.test(this.value)) {
    colors[1].style.backgroundColor = '#dcdcdc';
    colors[2].style.backgroundColor = '#dcdcdc';
  } else if (patterns.p_normal.test(this.value)) {
    colors[1].style.backgroundColor = 'orange';
    colors[2].style.backgroundColor = '#dcdcdc';
  } else if (patterns.p_high.test(this.value)) {
    colors[1].style.backgroundColor = 'orange';
    colors[2].style.backgroundColor = 'green';
  }
}
inputs['password'].addEventListener('blur', checkPasswordLevel);

function checkFormatOf(selector) {
  inputs[selector].addEventListener('blur', function() {
    var tips = getInputTipsOf(selector);
    if (patterns[selector].test(this.value)) {
      tips.innerHTML = successMsgs[selector];
      tips.style.color = 'green';
      checkResults.username = true;
      if (selector == 'password') {
        tips.style.display = 'none';
      }
    } else {
      tips.innerHTML = errMsgs[selector];
      tips.style.color = 'red';
      checkResults.username = false;

      if (selector == 'password') {
        tips.style.display = 'block';
      }
    }
  })
}

for (var k in inputs) {
  checkResults[k] = false;
  checkFormatOf(k);
}
