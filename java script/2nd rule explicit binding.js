const john = {
    name:"john",
};
function ask(){
    console.log(this,this.name);
}
//output - undefined 
ask()

 
/*
explicit binding means that we will tell js that the valye of this inside the function we are calling shuold be this 

*/

ask.call(john) 

//output - {name:"john"}"john"
//            undefined


ask.apply(john)

//output - {name:"john"}"john"
//          undefeined 

var raj = {
    name : "raj",
    greet:function(){
        console.log('hello',this);
    }
}
raj.greet()
 // output - hello {name:"raj",greet:f}
 var localAsk = raj.greet;

 localAsk()
 //we can use the hard binding rule , and tell function that hey when u call this local ask the value of this inside this shuold be sum object
 //we bind the fucntion using the bind method 

var localGreet = raj.greet.bind(raj);
//earlier we just passed the greet function like raj.greet and then called the localask function it gives the window object coz it was looking at the call site 
//now what does a bind function do , whenevr we call a fucntion using .bind , it will bascially return me a new function and as function would set to be localgreet and then i can go ahead and call localgreet
//so i am doing by bind is that i am telling bind that this function that u returned to localgreet should have the valye of this as the raj object 
//bascailly  what i am doing is that bind function will not call the greet function right away , oit will return a new function 
