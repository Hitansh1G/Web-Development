var promise = new Promise(function(resolve,reject){
    resolve('Resolved');
});
promise.then(data=>console.log(data));
// Resolved
//we can write the above whole code like this too 
Promise.resolve('resolved').then(data=>console.log(data));

//another way is to write like this

async function asynctask(){
    return "resolved";
}
//whenever i write async in front of a function it implies that the function will return a promise
