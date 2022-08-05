function p() {
    return new Promise((resolve,reject)=>{
        resolve('hello');

});
};

p().then((n)=>console.log(n));

async function p2(){ //async를 지정해주면 Promise를 리턴하는 함수로 만들어준다
    return 'hello2'; 
}

p2().then((n)=>console.log(n));