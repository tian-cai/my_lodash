//关于随机操作的一些函数

//产生min-max之间的随机数[min,max),包头不包尾
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//产生min-max之间的随机整数[min, max] 包头包尾
function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//返回任意长度的随机字符
function randomStr(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var str = '';
  for (var i = 0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
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
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ',' + g + ',' + b + ")";
}

let random = {
  randomRgbColor,
  randomHexColor,
  randomStr,
  randomIntNumber,
  randomNumber
}
export default random