class vehicle {
    constructor() {
        console.log(this);
    }
}
new vehicle();
/*
now when i press enter what should happen 
we have these 2 blocks
vehicle{}
vehicle{}
first is what the vehicle fucntion returns , vehicle object, its basically an empty object of type vehicle 
in the second output , its basically we are consol loging the that in the function , it says the value of this inside the vehicle is actually a empty object and it is basiclly of type vahicle but why is so 

new keyword do 4 things 
1. it will create a brand new empty object 
2. link the brand new object with another object which is the prototype of the constructor function vehicle
3. the new keyword will call this vehicle fiuncition with the value of this set to the new object . it will do something like this internally
    vehicle.call({})
4.if the fucntion is not returning anything , returns the brand new object 

this is what the new keyword actylly does 


*/ 

function Vehicle(name){
    this.name = name;
    console.log(this);
}
new vehicle('car');
/*
on outputing this 
vehicle{name:"car"}
vehicle{name:"car"}

here we can see what haopends is 
first step happens
it creates a brand new object 
then it links this object to vehicle.protoype
then it calls the vehicle function with this set to be the new empty obect
and thats why when i do this.name this empty object will have the value of this.name
*/