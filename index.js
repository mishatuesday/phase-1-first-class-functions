function receivesAFunction (someFunction) {
    someFunction();
}

function returnsANamedFunction() {
    return function flubby() {console.log("this is flubby") }
}

function returnsAnAnonymousFunction() {
    return function () { console.log("I'm anonymous") }
    return func
}