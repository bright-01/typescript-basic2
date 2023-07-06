// 기존 스타일
var a = 10;

function f() {
    var message = "hello world";
}

function f2() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}

setTimeout(function (){
    for (var i = 0; i < 10; i++ ){
        console.log(i); // 1,2,3,4,5,6,7,8,9,10 ? x 10,10,10,10,10,10,10,10,10,10 o
    }

}, 100)


let hello: string = "hello!";

function f3(input: boolean) {
    let a = 100;
    if (input) {
        let b: number = a +1;
        return b;
    }
    // return b;

}

