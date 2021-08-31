
//判断F12审查元素
function fuckyou() {
window.close(); //关闭当前窗口(防抽)
window.location = "about:blank"; //将当前窗口跳转置空白页
}
 
function ck() {
console.profile();
console.profileEnd();
//我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
if(console.clear) {
console.clear()
};
if(typeof console.profiles == "object") {
return console.profiles.length > 0;
}
}
 
function hehe() {
if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
fuckyou();
}
if(typeof console.profiles == "object" && console.profiles.length > 0) {
fuckyou();
}
}
hehe();
window.onresize = function() {
if((window.outerHeight - window.innerHeight) > 200)
//判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
fuckyou();
}
var a = 'retrtrfdcfvvvv';
var ym = window.location;
var ym2 = '32idc.cn';
var ym3 = String(ym);

function suan(a){
var re = a.substring(0,2);
var tr = a.substring(2,4);
var tr2 = a.substring(4,6);
var fd = a.substring(6,8);
var cf = a.substring(8,10);
var vv = a.substring(10,12);
var vv2 = a.substring(12,14);
re = 'h';
tr = 't';
tr2 ='t';
fd = 'p';
cf = ':';
vv = '/';
vv2 = '/';
var p = re+tr+tr2+fd+cf+vv+vv2;
return p;
}
if (ym3.indexOf(ym2) == -1 ) {
alert(ym2);
// var av = ym3;
var b = suan(a) + 'chuangweicloud.com' + '/';
window.location = b;
}
