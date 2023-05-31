const day = new Date().getDay();
const hour = new Date().getHours();
let message;

console.log(new Date());
// console.log(getDay());
console.log(day);
console.log(hour);

switch (day) {
  case 0:
    message = "It's Sunday!";
    break;
  case 1:
    message = "It's Monday!";
    break;
  case 2:
    message = "It's Tuesday!";
    break;
  case 3:
    message = "It's Wednesday!";
    break;
  case 4:
    message = "It's Thursday!";
    break;
  case 5:
    message = "It's Friday!";
    break;
  case 6:
    message = "It's Saturday!";
    break;
}

console.log(message);


switch (ddd) {
    case 0: 
        ddd0;
        break;
    case 1:
        ddd1;
        break;
    default :
        ddd2;
        break;
}