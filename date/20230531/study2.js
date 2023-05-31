// HTML 요소(Element) 1개 검색/찾기
let boxEl = window.document.querySelector('.box');
console.log(boxEl);

// // HTML 요소에 적용할 수 있는 메소드!
// boxEl.addEventListener();

// // 인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1, 2);

// // 1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);

// // 2 - 핸들러(Handler, 실행할 함수)
// boxEl.addEventListener('click', function(){
//   console.log('Click~!');
// });

// 이벤트 실행예제1
// boxEl.addEventListener('click', function(){
//   console.log('Click!!');
// });

// 요소의 클래스 정보 객체 활용
// boxEl.classList.add('active');
// // console.log(boxEl.classList);
// let isContains = boxEl.classList.contains('active');
// console.log(isContains); //true

// boxEl.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// console.log(isContains); //false

boxEl.addEventListener('click', function(){
  let isContains = boxEl.classList.contains('active');
  // if(!isContains){
  //   boxEl.classList.add('active');
  // } else {
  //   boxEl.classList.remove('active');
  // }
  // !isContains ? boxEl.classList.add('active') : boxEl.classList.remove('active');
});