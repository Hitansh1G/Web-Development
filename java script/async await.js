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
asynctask().then(data=>console.log(data))
// also a way 

function getData(){
    return Promise.resolve('some data');
}
async function abc(){
    const data = await getData();
};
//this absically means that wenevre we call the abc function , get data function will be called , it will bascailly get a prmise , ans as soon as the java scipt encounters the await keyword , it will first suspend the function , in the background after the function is suspended we will wait for the getData task to be completed  and then java script will move on the syncronous code 


