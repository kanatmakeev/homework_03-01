// homework_03-01
// task_1 .Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
const a = 10;
const b = 3;
const rezult = (a % b);

if (rezult != 0) {
	alert('Делится с остатком ' + rezult);
} else {
	alert('Делится, результат деления: ' + (a / b));
}

// Text2 2.Возведите 2 в 10 степень. Результат запишите в переменную st.
const a1 = 2;
const b1 = 10;
const st = (a1 ** b1);

if (true) {
	alert('rezultat ' + st);
} 

// task3 Имеется три переменные a = 1, b = 2, c = " белых медведей". Сложите переменные так, чтобы в результате получилось выражение: "12 белых медведей". 
const a2 = 1;
const b2 = 2;
const c2 = ' белых медведей'
const sum = (a2 + b2 + c2);

alert('total ' + a2 + b2 + c2);

// Task4 Запустив следующий код, вы получите число 16. Что нужно изменить, чтобы получить число 15? let a = 5; let b = 10, let c ; c = ++a + b--; 
let a3 = 5; let b3 = 10; let c3; 
alert (c3 = a3 + b3); 

// Task5  Запустив следующий код, вы получите число 30. Ваша задача расставить приоритетные скобки () так, чтобы получить число -390. const x = 15 * 4 + 25 - 55; 
const x = 15 * (4 + 25 - 55); 
alert(x);

// additional task1
let h = 23;
let w = 10;
let s;
alert(s = h * w / 2);

// additional task2
// найти объем цилиндра
// высотой 10м (hC) и диаметром основания 4м (dC), результат поместите в переменную v. 
// формула объема цилиндра v=Pi*dc*hc (pi=3.14)
let hc = 10;
let dc = 4;
let v;
alert(3.14 * 4 * 10);