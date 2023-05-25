const b = new Boolean(false);
if (b);         // 참으로 평가
if (b == true); // 거짓으로 평가

document.write(new Boolean(b));
document.write(new Boolean(b == true));
document.write(b == true);

var now = new Date;
var now2 = new Date();
var br = "<br/>";

document.write(now);
document.write(br);
document.write(now2);

// setItem
window.localStorage.setItem('name', 'anna');
window.localStorage.setItem('age', '20');
window.localStorage.setItem('접속 시간', new Date());

// window.open('./d.html');

 
// getItem
const name = window.localStorage.getItem('name');
const age = window.localStorage.getItem('age');
const loginTime = window.localStorage.getItem('접속 시간');
const dTime = window.localStorage.getItem('체류 시간');
 
// 결과 출력
document.write(name); // anna
document.write('<br/>');
document.write(age);  // 20

document.write(loginTime);
document.write(dTime);