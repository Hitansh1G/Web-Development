function sayhello(){
    sec=1;
    // console.log("hello");
    console.log("after" , sec);
    sec++;
    if(sec == 10){
        clearInterval();
    }
}
setTimeout(sayhello,2000);//print hello after 2 sec
setInterval(sayhello,2000);//print hello after ever 1 sec