let minute = prompt("Введите минуту (от 0 - 59)", 0),
result;
if(minute < 15)
    result = " Первая"
else if(minute > 15 && minute < 30)
    result = "Вторая"
else if(minute > 30 && minute < 45)
    result = "Третья"
else if(minute > 45 && minute < 60)
    result = "Четвертая"

alert(result)

let arr, lang = prompt("Введите язык(ru/en)", "ru")
arr = (lang == "ru") ? ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'] : ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
alert(arr)

let number = prompt("Введите целое чилсло", 0), 
typeOfNumber, LenOfNumber = number.length;
typeOfNumber = (number >= 0) ? "положительное" : "отрицательное";
alert(`Кол-во цифр в числе ${LenOfNumber}, тип числа ${typeOfNumber}`);

let red = prompt("Горит ли красный?(0 - нет, 1 - да)", 0),
yellow = prompt("Горит ли желтый?(0 - нет, 1 - да)", 0), 
walk;
walk = (red && yellow) ? "можно переходить" : "нельзя переходить";
alert(walk)

for(let i = 0; i <= 12; i++){
    console.log(`Число ${i}`);
}

for(let i = 5; i <= 13; i++){
    console.log(`Число ${i}`);
}

let array = [2,5,8,3,6], sum = 0;
array.forEach(function(item){
    sum+=item;
})
console.log(sum);