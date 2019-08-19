'use strict';
    var array = [];
let test;
	let kol;
do {
   kol = prompt("Сколько человек Вас было сегодня?", 'Введите цифру');
   } while (isNaN(+kol) || kol === null || +kol < 1 || +kol > 99)

kol = Number(kol);

alert(kol);
 //сколько раз введет столько раз будет задаваться следующий вопрос		
        for (let i = 0; i < kol; i++) {
		let name = prompt("Как зовут гостей?");
		array.push(name); //Добавляет в конец элемент массива в нашем случае новое имя
	}
	console.log(kol);
	console.log(array);
    
 	 var mass = array.map(function(item){ //Переменная mass становится массивом, так как равна массиву array, перебирается при помощи метода и заполняется ответами НА СКОЛЬКО ПОЕЛ
		return +prompt('На сколько поел ' + item + ' ?');
	})
		console.log(mass);


    let vopros = confirm('Заказывали кальян');
        if (vopros == true) {
           var zaKalyan = +prompt('Цена за кальян');//Спрашивает какая цена за кальян
           showKaliyan(); //если заказывали, вызывется фуннкция
        }  //если нет, выводится сообщение
        

   // var zaKalyan = +prompt('Цена за кальян');//Спрашивает какая цена за кальян
function showKaliyan(){    
    let kalyan = [];
        for ( let i = 0; i < array.length; i++) {
        let otvet = confirm(array[i] + " курил кальян?");
        kalyan.push(otvet);             // Массив заполняется true и false, в зависимости что накмешь ОК или CANCEL
    }; 
        alert(kalyan);
   
    kalyan.forEach(function(item, i){ //Просто перебор массива, и вывод в консоль
        if (item == true){
            console.log( array[i] + ',' + ' курил кальян.');// console.log( array[i] + i + '_' +  item + ' Yes');
        }
        else if (item == false){
            console.log( array[i] + ',' + ' не курил кальян.'); //console.log(array[i] + i + '_' +  item + ' No');
        };
    });
    
    let skolkoKyriloChelovek = 0; //В переменную записывается сколько значений true в массиве kalyan
        for (var i = 0; i < kalyan.length; i++) {//изначально переменная равна 0, цикл остановится когда количество элементов массива kalyan закончится , до этого будет перебирать эл по одному
        if(kalyan[i] == true)
            skolkoKyriloChelovek++;//число увеличивается на 1 с каждым найденым true
        }
        console.log('Количество людей куривших кальян: ' + skolkoKyriloChelovek );

    let zaKalyanSCheloveka = zaKalyan / skolkoKyriloChelovek; //За кальян с человека (того кто курил) Общая сумма за кальян делится на количество человек которые его курили
        console.log('За кальян с человека: ' + zaKalyanSCheloveka);

    kalyan.forEach(function(item, i){ //Просто перебор массива, и вывод в консоль
        if (item == true){
            document.write(array[i] + ',' + ' должен: ' +(mass[i] + zaKalyanSCheloveka));// console.log( array[i] + i + '_' +  item + ' Yes');
        }
        else if (item == false){
            document.write( array[i] + ' ' +' не курил.' + 'За еду: ' + mass[i]);  //console.log(array[i] + i + '_' +  item + ' No');
        };
    });
}
    var result = mass.reduce(function(sum, current){ //ПОЧЕМУ СРАБАТЫВАЕТ РАНЬШЕ ФУНКЦИИ??????????
        return sum + current;
    },0 );
        alert("Общий счет должен быть: " + result)

  
	function poel(){ //выводит имя гостя и на какую сумму он поел
		for(let i = 0; i < mass.length; i++){
		alert(array[i] + ',' + "поел на: " + mass[i] );
		}
	}
	poel();









// for (let a=0; a < array.length; a++){
	
// 		mass.push(naskolko);}
 		//console.log(i + ' : ' + 'На сколько поел ' + item + ' ?');//item подставляется элемент массива
 	
 	 	
 	
 	
 	 

 	// let array2 = [];
 	// let naskolko = +prompt('ывппыаппы');
 	// array2.push(naskonko);
 	// console.log(naskolko);
 	
 

 


// function otdyh (){
//     let array = [];
// let kol = +prompt("Сколько человек Вас было сегодня?");
// for (let i = 0; i < kol; i++) {
// let name = prompt("Как зовут соискателей?");
// array.push(name);
// }
// console.log(kol);
// console.log(array);
// }
// otdyh();





// for (let i=0; 0<nas; i++) {
//     array[i]=prompt("Как зовут соискателей?");
// }
    
// console.log(array);






// let display = [];
// let kol = prompt("Сколько человек Вас было сегодня?");
// let nas = kol;
// console.log(nas);

// for (let i=1; 1<nas; i++)  {
//     if (i==nas) {
//         break
//     }
//     {
//         display.push = prompt("Как зовут соискателей?"); 
//     }
// }

// console.log(display);







// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"

// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;
// console.log(options);
// for (let key in options) {
//     console.log('Svoistvo ' + key + ' imeet znachenie ' + options[key]);
// }
// console.log(Object.keys(options).length);






// let arr = ["first", 2, 3, "four", 5];
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (masiv: " + mass + ')');
// });
// console.log(arr);

// let solider = {
//     healt: 400,
//     armor: 100
// };
// let john = {
//     healt: 200
// };
// john.__proto__=solider;
// console.log(john);
// console.log(john.armor);







/*var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
//созд-м обьект, внутри него свойства
var appData = {     
    budget: money, //будет передаваться переменная money которую ввел пользователь
    timeData: time,
    expenses: {}, //созд.новый пуст обьектб. Чтобы созд внутри него свойство или метод appData.expenses[a], или через точку п не[]
    optionalExpenses: {},
    income: [], 
    income: false,
};
for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null // ПРОВЕРКА ЧТО ВХОД ДАННЫЕ БУДУТ СТРОКОЙ (typeoff - проверка типа данных, 
    && a !='' && b !='' && a.length < 50) {  //но промтт и так дает строку,поэтому в данном случае проверка необязательна. //a.length < 50 - не больше
        console.log('done');      // !=null ответ должен быть, если будет ОТМЕНА этот шаг не защитается, !='' - не должен быть пустое поле
        appData.expenses[a] = b;                                      
    } else {                            
        console.log ("bad result");
        i--;
    }

    };
*/














    /*    WHILE //let i = 0;
        while (i < 2){
            i++;
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null // ПРОВЕРКА ЧТО ВХОД ДАННЫЕ БУДУТ СТРОКОЙ (typeoff - проверка типа данных, 
    && a !='' && b !='' && a.length < 50) {  //но промтт и так дает строку,поэтому в данном случае проверка необязательна. //a.length < 50 - не больше
        console.log('done');      // !=null ответ должен быть, если будет ОТМЕНА этот шаг не защитается, !='' - не должен быть пустое поле
        appData.expenses[a] = b;                                      
    } else {                            
        console.log ("bad result");
        i--;
        }
    }
*/

/*  DO WHILE
let i = 0;
do {  
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null // ПРОВЕРКА ЧТО ВХОД ДАННЫЕ БУДУТ СТРОКОЙ (typeoff - проверка типа данных, 
    && a !='' && b !='' && a.length < 50) {  //но промтт и так дает строку,поэтому в данном случае проверка необязательна. //a.length < 50 - не больше
        console.log('done');      // !=null ответ должен быть, если будет ОТМЕНА этот шаг не защитается, !='' - не должен быть пустое поле
        appData.expenses[a] = b;                                      
    } else {                            
        console.log ("bad result");
        i--;
        }

        i++;
    }
        while (i < 2)
    */

    














/*appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 10 && appData.moneyPerDay < 2000){
    console.log("medium уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("max уровень достатка");
} else {
    console.log("ERRoR")
}*/



//////

