var promise = new Promise((resolve,reject)=>{
    //it is used when we have to wait for a task
    // resolve("something went wrong");
    setTimeout(()=>{
        resolve({message:'success'});
    },3000);
});
//the promise will be in the pending state , after 3 sec when we open it.. it will be in fulfilled state .. we have correctly amulated a api call . when we send an api call after a certain amount of time it shows success 
// what to do now 
promise
    .then((data) =>{
        //lets say we have an api .. we have called that data , now how will u access that data .. this above function helps in that
    console.log(data);
    })
    //we can chain the methods like this
    .catch((error)=>{
        //this will be called whenever the promise will be rejected
        console.log('error',error);
    });


