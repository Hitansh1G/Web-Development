const counter = (function () {
    // Write the logic here
    let c =0
    function initialize(start){
        c=start
    }
    function increase(){
        c++ 
        return c;
    }
    return {initialize,increase}
})()

