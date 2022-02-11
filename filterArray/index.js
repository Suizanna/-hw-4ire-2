// Реализовать функцию фильтра массива по указанному типу данных

// - Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. 
// Первый аргумент - массив, который будет содержать в себе любые данные,
//  второй аргумент - тип данных.
// - Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].


function filterBy(arr, type) {
    // если тип el !== type добавить в новый массив
    return arr.filter(el => typeof el !== type);
}

console.log(filterBy( ['hello', 'world', 23, '23', null], 'string')); //23, null
console.log(filterBy( [0, undefined], 'string')); // 0, undefined
console.log(filterBy( [], "number")); // []


//2 вариант
function filterBy(arr, type) {
 return arr.reduce((res, item) => { 
     if ( typeof item != type) { 
        res.push(item);
        } 
        return res;
    }, []); 
}

const array = filterBy(['hello', 'world', 23, '23', null], 'string');
console.group("#STRING IS FILTRED");
 console.log('array', array);
 console.groupEnd("#STRING IS FILTRED");


//3 вариант
const array3 = ["hello", "world", 23, "23", null, undefined];

function filterBy(array, type) {
  const allTypes = [
    "string",
    "boolean",
    "number",
    undefined,
    "object",
    "bigint",
    null,
  ];

  if (!allTypes.includes(type)) {
    return `${type} такого типа данных не существует!`;
  }
  if (!Array.isArray(array)) {
    return `${array} не массив, мы не можем работать дальше!`;
  }
  if (type === null || type === undefined) {
    return array.filter((element) => element !== type);
  }
  return array.filter((element) => typeof element !== type);
}

console.log(array3);
console.log("filterBy string", filterBy(array3, "string"));
console.log(filterBy(array3, "str"));
console.log("filterBy null", filterBy(array3, null));
console.log(filterBy("string", "string"));
console.log("filterBy undefined", filterBy(array3, undefined));