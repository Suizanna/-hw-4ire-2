// На уроке 
// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее

let x;
let number = prompt("Введите число", x);
const array = [];

function Array(х) {

for (let i = 0; i <= number; i ++) {
  array.push("х");
 
}
console.log(array)
return array;
}

Array();

//2 вариант
const printX = (num) => {
  let arr = [];
  let str = '';
  for (let i = 0; i < num; i++) {
  str+='x';
  arr.push(str);
  }
  console.log(arr)
  return arr;
  }
  printX(7);

//3 вариант
function arrCr(x){
  let i = 1;
  console.log(Array.from({ length: x }, () => 'x'.repeat(i++)));
  }
  arrCr(10);


// 2 задание
// Ф-ция возвращает имя города и количество людей.
function City1 (name, population) {
console.log(name, population);
return {name, population}
//или
  // let city = {
  //   name,
  //   population,
  // };
  // return city;

}

console.log(City1("Kharkov", 111));