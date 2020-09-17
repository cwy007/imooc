/**
 ********************************辅助方法***************************************
 */
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

/**
 ********************************顶部***************************************
 */
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

/**
 ********************************主体***************************************
 */
var inputs = {
  username: byId('username'),
  password: byId('password'),
  nameZhCn: byId('nameZhCn'),
  idNum: byId('idNum'),
  email: byId('email'),
  telephone: byId('telephone'),
}
var patterns = {
  username: /^[a-zA-Z]\w{5,29}$/, //6-30位字母、数字或'_'，字母开头
  password: /^\S{6,20}$/, //6-20位字母、数字或符号。
  p_low: /^\d+$|^[a-zA-Z]+$|^[^\s\da-zA-Z]+$/, //内容是纯数字、纯字母或者纯符号，密码强度为低
  p_normal: /^[^a-zA-Z]+$|^[^\d]+$|^[\da-zA-Z]+$/, //是两种类型的结合，密码强度为一般
  p_high: /\d+[a-zA-Z]+[^\s\da-zA-Z]|[a-zA-Z]+[^\s\da-zA-Z]+\d|[^\s\da-zA-Z]\d+[a-zA-Z]/, //是三种类型的结合，那么密码强度为高
  nameZhCn: /^[\u4e00-\u9fa5a-zA-Z]{3,30}$/i, //姓名只能包含中文或者英文,且中文字符在2-15之间，英文字符在3-30个之间。
  idNum: /^\d{17}[\dxX]$/, //18位数字，最后一位可以是大写或者小写的x。
  email: /^[\w\-]+@[\w\-]+\.[\w\-]+$/, //@符号前面可以是数字、大小写字母，符号“_或-”，@后面是数字、大小写字母，符号“_或-”加上符号"."再以数字、大小写字母，符号“_或-”为结尾
  telephone: /^1[^12]\d{9}$/, //第一位必须是数字1，第二位不能是1和2，必须是11位数字。
}

var checkResults = {};
var errMsgs = {
  username: "6-30位字母、数字或'_'，字母开头",
  password: '请输入6-20位字母、数字或符号',
  nameZhCn: '姓名只能包含中文或者英文,且字符在3-30个之间！',
  idNum: '请输入18位身份证号码',
  email:'请输入正确的邮箱',
  telephone: '您输入的手机号码不是有效的格式！',
}
var successMsgs = {
  username: '用户名输入正确',
  password: '',
  nameZhCn: '姓名输入正确',
  idNum: '号码输入正确',
  email: '邮箱格式正确',
  telephone: '手机格式正确',
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

// 姓名填写规则
getElem('.name-rule').addEventListener('mouseover', function() {
  getElem('.name-rule-content').style.display = 'block';
})
getElem('.name-rule').addEventListener('mouseout', function () {
  getElem('.name-rule-content').style.display = 'none';
})

// 密码确认框
function checkPasswordConfirm() {
  var tips = getInputTipsOf('password_confirm');
  if (this.value == '') {
    tips.innerHTML = '输入框不能为空';
    tips.style.color = 'red';
  } else if (this.value != inputs['password'].value) {
    tips.innerHTML = '两次密码输入不一致，请重新输入';
    tips.style.color = 'red';
  } else {
    tips.innerHTML = '两次输入一致';
    tips.style.color = 'green';
  }
}
byId('password_confirm').addEventListener('blur', checkPasswordConfirm);

// 用户名、登录密码、姓名、证件号码、邮箱
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

// 下一步按钮
byId('nextBtn').addEventListener('click', function() {
  var results = Object.values(checkResults);
  if (!results.includes(false)) {
    location.href = 'http://www.imooc.com';
  }
})
