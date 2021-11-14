do {
    do {
        F0 = +prompt("Введите первое число");
      }while (isNaN(F0) || F0 == "")
     
      
      do {
       F1 = +prompt('Введите второе число');
      
      }while (isNaN(F1) || F1 == "");
      
      do {
        n = +prompt('Введите третье число');
    
      }while (isNaN(n) || n == "");
      

function fib(F0, F1, n ) {   
if(n > 0) {
    for (let i = 3; i <= n; i++) {
    let F2 = F0 + F1;
      F0 = F1;
      F1 = F2;
    }
    return F1;
  }else 
    for (let i = 3; i <= n; i++) {
    let F2 = F0 - F1;
      F0 = F1;
      F1 = F2;
    }
    return F1;
}
alert(fib(F0, F1, n));

continueFib = confirm("Вы хотите продолжить?");
} while (continueFib === true);


