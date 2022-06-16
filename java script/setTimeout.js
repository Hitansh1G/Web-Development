console.log(1);
setTimeout(function(){
    console.log(2);
},1000)
console.log(3);
//output will be 1 3 2
console.log(1);
setTimeout(function(){
    console.log(2);
},0)
console.log(3);
//output will still ibe 1 3 2
/*
why ?
settimeout is not java script function , it is given to us by the browser 
and some other 
dom are also given to us by browser api 
settimeout eventually has no effect on javascript
settimeout is called at the end everytime 
*/
