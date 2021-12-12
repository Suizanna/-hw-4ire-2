//1 Задача.
var num = 2;
function func(num) {
  var num;
  console.log("num in func:", num); //10
  num = 5;
}

func(10);
console.log(num); //2

//2 Задача. which  html tags are used to create  dropdown? //<select> и <option> 
{/* <form action="#">
  <label for="lang">Language</label>
  <select name="languages" id="lang">
    <option value="javascript">JavaScript</option>
    <option value="php">PHP</option>
    <option value="java">Java</option>
    <option value="golang">Golang</option>
    <option value="python">Python</option>
    <option value="c#">C#</option>
    <option value="C++">C++</option>
    <option value="erlang">Erlang</option>
  </select>
  <input type="submit" value="Submit" />
</form> */}
 
//3 Задача. В каком порядке цифры 1–4 будут выводиться на консоль при выполнении приведенного ниже кода?
// (function () {
//     console.log(1);
//     setTimeout(function () {
//       console.log(2);
//     }, 1000);
//     setTimeout(function () {
//       console.log(3);
//     }, 0);
//     console.log(4); //1,4,3,2
//   })();


//4 Задача. What will the code below output to the console?
console.log('typeof:', typeof 1); //number
console.log('typeof:', typeof String); //function
//typeof String - Это связано с тем, что String на самом деле является глобальным конструктором. Он используется для создания строк!
console.log('typeof:', typeof typeof 1); //string
console.log('typeof:', typeof null) //object


// console.log('ЗАДАЧА 5');
//5 Задача. Получить первое слова из строки.
const text = "Hello world";
console.log(text.slice(0, 5));
console.log(text.replace('world', ''));
console.log(text.split(' ')[0]) ;

const text2 = ['Hello', 'world'];
console.log(text2.splice(1, 2));


// 6 Задача. Подсчитать сколько раз повторяется каждая буква.
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel erat erat. Nullam sed accumsan risus. Integer est velit, bibendum quis mi sit amet, euismod egestas ex."

const report = {};

for(const letter of lorem.toLowerCase()) {
    if (' .,;!#'.includes()) {
        continue;
    }
    if (letter in report) {
        report[letter]++;
    } else {
        report[letter] = 1;
    }
}
console.log(report);


  