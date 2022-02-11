// 1. Пользователь вводит название валюты.
// 2. Затем вводит сумму. 
// 3. Вводит название валюты в которую хочет перевести. 
// 4. Получает ответ. 
// 5. Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
// 6. По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще   раз.  
// 7. Если да - то повторить все о'и. Если нет - выполнить выход из программы. 

    
let usd = 26.25;
let euro = 30.30;
let zloty = 6.000;
let rub = 0.360;
let uah = 1;


do {
    do {
        currency = prompt("Введите валютy: usd euro rub uah zloty").toLowerCase();
      }while (currency !== "usd" && currency !== "rub" && currency !== "euro" && currency !== "uah" && currency !== "zloty");
      
      do {
        sum = +prompt("Введите сумму валюты, которую вы хотите конвертировать: ");
      
      }while (!sum);
      
      do {
        exchange = prompt("Введите валютy в которую хочет перевести: usd euro rub uah zloty").toLowerCase();
      }while (exchange !== "usd" && exchange !== "rub" && exchange !== "euro" && exchange !== "uah" && exchange !== "zloty");

      
switch (currency) {
    case 'usd':
      if (exchange === "uah") {
        alert(sum *(usd / uah));
        break;
      }else if(exchange === "euro"){
        alert(sum *(usd / euro));
        break;
      }else if(exchange === "zloty"){
        alert(sum *(usd / zloty));
        break;
      }else if(exchange === "rub"){
        alert(sum *(usd / rub));
        break;
      }
    
    case 'euro':
      if (exchange === "uah") {
        alert(sum *(euro / uah));
        break;
      }else if(exchange === "usd"){
        alert(sum *(euro / usd));
        break;
      }else if(exchange === "zloty"){
        alert(sum *(euro / zloty));
        break;
      }else if(exchange === "rub"){
        alert(sum *(euro / rub));
        break;
      }
    
    case 'zloty':
      if (exchange === "uah") {
        alert(sum *(zloty / uah));
        break;
      }else if(exchange === "usd"){
        alert(sum *(zloty / usd));
        break;
      }else if(exchange === "euro"){
        alert(sum *(zloty / euro));
        break;
      }else if(exchange === "rub"){
        alert(sum *(zloty / rub));
        break;
      }
    
    case 'rub':
      if (exchange === "uah") {
        alert(sum *(rub / uah));
        break;
      }else if(exchange === "usd"){
        alert(sum *(rub / usd));
        break;
      }else if(exchange === "euro"){
        alert(sum *(rub / euro));
        break;
      }else if(exchange === "zloty"){
        alert(sum *(rub / zloty));
        break;
      }
      
    case 'uah':
      if (exchange === "rub") {
        alert(sum *(uah / rub));
        break;
      }else if(exchange === "usd"){
        alert(sum *(uah / usd));
        break;
      }else if(exchange === "euro"){
        alert(sum *(uah / euro));
        break;
      }else if(exchange === "zloty"){
        alert(sum *(uah / zloty));
        break;
      }
    default:
        alert("Ошибка ввода! Попробуйте ещё.");
        break;
    }
    continueExchange = confirm("Вы хотите продолжить обмен?");
    } while (continueExchange === true);