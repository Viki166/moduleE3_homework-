//Задание 1
let arr = [0,'Null', 'Undefined', 'NaN', ,2,3,'4','5', 0, 1 ,9 ];
let evenNumCounter = 0;
let oddCounter = 0;
let zeroElementCounter = 0;
function  getValueArray(x) {
    for (i = 0; i <x.length; i++){
        if (Number.isInteger(x[i])) {
            if (x[i] %2 ==0 && x[i] != 0){
                evenNumCounter +=1;
            }else if (x[i] == 0) {
                zeroElementCounter +=1;
            }else {
                oddCounter +=1;
            }
        }
}
console.log("Количество четных элементов в массиве - " + evenNumCounter);
console.log("Количество нечетных элементов в массиве - " + oddCounter);
console.log("Количество нулей - " + zeroElementCounter);
}
getValueArray(arr);

//Задание 2
let randomNum = Math.floor(Math.random()*1001);
let count = 0;
console.log(randomNum);
function calcPrimeNumger(x) {
    for (i = 1; i<=500; i++){
        let value = x/i;
        if (Math.round(value) == value){
            count+=1;
}
}
 checkValue = count <3 && x !=1 && x !=0 ?'True':'False';
}
calcPrimeNumger(randomNum);
console.log(checkValue);

//Задание 3
function setNum(x) {
    return function(y) {
        return x + y;
    }
}
const checkVal = setNum(2);
console.log(checkVal(5));

//Задание 4
function getNum(x,y){
let num = x;
let timeId = setInterval(function () {  
    console.log(num);
    if (num == y) {
        clearInterval(timeId);
    }
    if (x<y){
        num ++;
    }else{
        num --;
    }
}, 1000);
}
getNum(5,-15);

//Задание 5
const getNumDegree = (x,n) => {
    if (Number.isInteger(x) && x >0 && Number.isInteger(n) && n > 0){
console.log(x**n);
}
}
getNumDegree(5,4);
