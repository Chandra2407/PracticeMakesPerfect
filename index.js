"use strict";
{
    var a;
    let b;
    const c = 1;
}

if(true){
    var a;
    let b;
    const c = 1;
    foo()
    function foo(){
        console.log("foo1");
    }
    let d
}
foo()