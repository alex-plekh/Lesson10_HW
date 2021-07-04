// Массивы и объекты

//1)Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, 4, 5, 'a', 'b', 'c', '6', '7', '8'];
let sumNum = arr.reduce((acc, item) => {
    if (!isNaN(+item)){
        return acc + +item;
    }
    return acc;
},0);
console.log(sumNum);


//2)Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().

let n= +(prompt('Enter n'));
const maxInterval = 10;
let arr = [];
let arrDeg = [];
for (let i = 0; i < n; i++) {
    let item = (Math.random()* maxInterval).toFixed(2);
    let degreeNum =item ** 5;
    arr.push(item);
    arrDeg.push(degreeNum);
}
console.log(arr);
console.log(arrDeg);

//3) Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a. Добавьте в начало массива значение ‘Backbone.js’
// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c. Добавьте в массив значение ‘CommonJS’ вторым элементом
// d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'jQuery') {
        delete arr[i];
        alert('Это здесь лишнее - jQuery');
    }
}
console.log(arr);


//4)Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = 'Как однажды Жак звонарь сломал фонарь головой';
let arr = str.split(' ');
let popper = arr.pop();
arr.splice(1, 1);
arr.splice(3, 0, "однажды");
arr.splice(5, 0, "головой");
str = arr.join(' ');
alert(str);


//5)Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

const person ={
    name : 'Kate',
    age : 20,
    gender : 'f',
    married : false
};
let property = prompt('Enter property');
if(property in person) {
    alert(person[property])
}else {
    person[property] = prompt('Please enter property value');
}
console.log(person);


//6)Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

const phone = {};
phone.brand = prompt('Enter the brand');
phone.model = prompt('Enter model');
phone.resolution = prompt('Enter the resolution');
phone.color = prompt('Enter color');
person.phone = phone;
console.log(person);


//7)Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let currentDate = new Date();
let oldDate = new Date();
let dates = {
    currentDate : currentDate,
    oldDate : new Date(oldDate.setDate(oldDate.getDate() - 365))
};
let newDate = new Date(prompt('Enter date in format  yyyy-MM-dd'));
console.log(dates);
console.log(newDate);
console.log(newDate >= dates.oldDate && newDate <= dates.currentDate);


//8)Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];
for (; ;) {
    let num = prompt('Enter the number');
    if (!isNaN(+num) && num){
        arr.push(+num);
    }else if (num){
        alert('You enter NaN');
    }else{
        break;
    }
}
let val = arr.reduce((acc, item) => {
   return acc += item
}, 0);
alert('sum of numbers - ' + val);


// 9)Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

let arr = [[]];
for (let i = 1; i < 10; i++) {
    arr[i-1] = [];
    for (let j = 1; j < 10; j++) {
        arr[i-1].push(`${i} x ${j} = ${i * j}`);
    }
}
console.log(arr);


//10)Создайте структуру данных, полностью описывающую html-разметку картинки.

const htmlImg = {
    src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: '',
    style: 'border: 1px solid #ccc',
    width: 200
};