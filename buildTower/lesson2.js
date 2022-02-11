// Задача 1. Развернуть массив
let arr = [1, 2, 3, 30, 90];

function fn1 (arr) {
    return arr.reverse();
};
console.log(fn1(arr));

// 2вар.
let arr2 = [1, 2, 3, 30, 90];

function fn2 (a) {
    res = [];
    for (let i = a.length -1; i >= 0; i--) {
        res.push(a[i]);
    }
    return res;
};
console.log(fn2(arr2));


// Задача 2
// Давайте поменяем местами значения переменных a и b, используя деструктурирующее присваивание:
let a = 1;
let b = 2;

[a, b] = [b, a];
a; // => 2
b; // => 1


// Задача 3. от 1 до 10 вывести
let x = 0;
while(x < 3){
    x++;
    console.log('x', x);
} ;

//2вар.
function fn(num) {
  let arr = [];
for(let i = 0; i <= num -1; i ++) {
arr.push(i);
// console.log('num', arr[i]);
}
return arr;
}
console.log(fn(3));


// Задача 4. Башня
const buildTower = (numOfFloors) => {
    const tower = [];
    for(let i = 1; i <= numOfFloors; i++) {
        const spaces = ' '.repeat(numOfFloors - i); 
        //numOfFloors - i - spaces between symbols
        const floorSym = '*'.repeat(i * 2 - 1);
        tower.push(`${spaces}${floorSym}${spaces}`);
    }
    return tower;
}
console.log(buildTower(10).join('\n'));

