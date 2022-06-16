// callbacks is a function which can be passed with arguement to another function and which is basically invoked sometime later in future
// they are used to complete some routine or sequence of actions . 

function greet(name,callback){
    console.log(`HI ${name}`);
    callback();
}
function askquestion(){
    console.log('how are you?');
}
greet('john',askquestion);
