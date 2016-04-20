function myFunk(a, b, callBack) { //declares a function named myFunk which takes a, b, and a callback function as parameters
    var c = a + b; //declares variable c and stores the value of a + b to it
    return callBack(c); //invokes callback with c as argument and returns the result
}

function boogieWoogie(x) { //declares a function named boogieWoogie which takes x as a parameter
    for (var i = 0; i < x; i++) { // for-loop that starts at i=0 and increments i until it equals x
        console.log("Boogie oogie oogie 'til you just can't boogie no more!"); //logs message to the console - this will run x times
    }
    console.log(".\n.\n.\nI can't boogie no more!"); // one final message when the for-loop is complete
}

myFunk(1, 2, boogieWoogie); // invokes the myFunk function with arguments 1, 2, and the callback boogieWoogie
