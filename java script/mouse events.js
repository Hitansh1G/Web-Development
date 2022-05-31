var box = document.getElementById('outer');

outer.addEventListener('mouseover',function(){
    console.log('mouse over');
})
outer.addEventListener('mouseout',function(){
    console.log('mouse out');
})

// var searchinput = document.getElementById('search');
// searchinput.addEventListener('keypress',function(){
//     console.log('mouse out');
// })
document.addEventListener('keydown',function(event){
    console.log('key down', event.keyCode);
})