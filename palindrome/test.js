
console.log(null == undefined); // true
console.log(null === undefined); // false

// alert(20e-1['toString'](2) ) // 10




function palindromeCheck(str) {
    let  check = str.toLowerCase();
       // Переворачиваем строку и возвращаем результат сравнения
        check = str.split("").reverse().join('');  
         return str === check;
}

const a = palindromeCheck("NaaN");
console.log(a);



