var promise = new Promise((resolve,reject)=>{
    //it is used when we have to wait for a task
    // resolve("something went wrong");
    setTimeout(()=>{
        resolve({message:'success'});
    },3000);
});
   
console.log(promise);