console.log(1)
setTimeout(function(){
    console.log(2);
},1000)
console.log(3)
//this is the first example

var promise = new Promise(function(resolve,reject){
    resolve(1);
})
promise.then(function(data){
    console.log(data);
});
//firstly we are creating a new promise 
// and pass a call back function 
/*
which means the function will be call backed later on and i am resolving the promise immediately 
basically we can perform some heavy calculation which can take lets say 3 min 4min or whatever , so after this promise is resovled only then i will be calling the next call back function that is line no11  
*/