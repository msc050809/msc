let num = [1,2,3,4,5]; //매개변수로 배열의 인자받기
let numMap = num.map(val=>val*2); //해당인자에 변화를 준뒤 반환하는방식

console.log(numMap); //map은 요소들에게 일괄적으로 함수를 적용하고 싶을때사용

let fruits = ["apple", "bannana", "orange"];
let fruitsfilter = fruits.filter(word=>word.length>5);

console.log(fruitsfilter)

let numbers=[6,7,8,9];
let numberssum =numbers.reduce((acc,cur)=>{
    console.log(acc,cur);
    return acc+cur;
});
console.log(numberssum)