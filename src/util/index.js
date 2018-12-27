// 对象深克隆
function deepCloneObj(obj) {
  var newObj = {};
  if (!obj || typeof obj !== 'object') {
    return newObj
  }
  for (var i in obj) {
    if (typeof obj[i] === 'object' && !obj[i] instanceof Array) {
      newObj[i] = deepCloneObj(obj[i]);
    } else if (typeof obj[i] === 'object' && obj[i] instanceof Array) {
      newObj[i] = [].concat(obj[i]);
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}

//中文验证
function isChinese(value) {
  var reg = /[\u4e00-\u9fa5]+/;
  return reg.test(value);
}

//邮箱验证
function isEmail(mail) {
  var reg = /^([\w+])+@\w+([.]\w+)+$/;
  return reg.test(mail);
}

//手机号码验证
function isPhone(phone) {
  var reg = /^1((3[0-9])|(8[0-9])|(5[^4])|(4[5789])|(7[35678]))\d{8}$/;
  return reg.test(phone);
}

//产生min-max之间的随机数[min,max),包头不包尾
function randomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return;
  }
  return Math.random() * (max - min) + min;
}

//产生min-max之间的随机整数[min, max] 包头包尾
function randomIntNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//返回任意长度的随机字符
function randomStr(length) {
  if (typeof length !== 'number') {
    return;
  }
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < length; ++i) {
    const rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.slice(rand, rand + 1);
  }
  return str;
}


//返回十六进制格式的颜色
function randomHexColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
//返回RGB格式的颜色值
function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ',' + g + ',' + b + ")";
}

let util = {
  deepCloneObj,
  isChinese,
  isEmail,
  isPhone,
  randomRgbColor,
  randomHexColor,
  randomStr,
  randomNumber,
  randomIntNumber

}
export default util