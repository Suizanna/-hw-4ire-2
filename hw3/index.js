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
 console.log('array', array);