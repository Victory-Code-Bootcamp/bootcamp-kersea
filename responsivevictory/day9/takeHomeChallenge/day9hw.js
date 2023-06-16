function largestNumber(a, b) {
  return Math.max(a, b);
}
console.log(largestNumber(3, 8));

function divisable(a, b) {
  if (a % b == 0) return true;
  else return false;
}
console.log(divisable(6, 2));

const birthday = new Date("August 19, 1975 23:15:30");
const dayOfBirthday = birthday.getDay();
function getDayOfBirthday(dayOfBirthday) {
  switch (dayOfBirthday) {
    case 0:
      console.log("Monday");
      break;
    case 1:
      console.log("tuesday");
      break;
    case 2:
      console.log("wednesday");
      break;
    case 3:
      console.log("thursday");
      break;
    case 4:
      console.log("Friday");
      break;
    default:
      console.log("Not a valid");
  }
}

console.log(getDayOfBirthday(dayOfBirthday));

function calcSum(a, b) {
  if (a == NaN || b == NaN) return "Please provide valid numbers";
  else if (a == undefined || b == undefined) return 0;
  else if (a == null || b == null) return 0;
  else if (Math.round(a) + Math.round(b) >= 100) return "To large of a number";
  else return Math.round(a) + Math.round(b);
}
console.log(calcSum(2, 3));
console.log(calcSum(8.5, 4.0));
console.log(calcSum(undefined, 7));
console.log(calcSum(null, 9));
