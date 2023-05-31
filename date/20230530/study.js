// [1]
// function helloFunc(){
//   console.log('helloFunc');
// }

// helloFunc();


// [2]
// function returnFunc(){
//   return 'returnFunc';
// }

// let a = returnFunc();
// console.log(a);

// [3]
// 함수 선언
// function sum(a, b){ //a와 b는 매개변수(prameters 파라미터)
//   return a + b;
// }

// // 재사용
// let a = sum(1, 2); //1과 2는 인수(Arguments 아규먼트)
// let b = sum(a, 12);
// let c = sum(b, 4);
// let d = sum(a, b);

// console.log(a, b, c, d, a+d);

// [4]
// function hello(){ //기명함수:이름이 있는 함수
//   // console.log('Hello~');
//   return 'Hello~';
// }

// let world = function(){ //익명함수:이름이 없는 함수
//   console.log('World~');
// }

// hello(); //hello~
// world(); //world~

// [5]
const heropy = {
  name: 'HEROPY',
  age: 85,
  // 메소드
  getName: function(){
    return this.name;
  }
};

const hisname = heropy.getName();
console.log(hisname); //HEROPY
// 혹은
console.log(heropy.getName()); //HEROPY
console.log(heropy.name); //HEROPY