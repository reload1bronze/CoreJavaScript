var a = 1;

function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }

  inner();
  console.log(a); // 1
}

outer();
console.log(a); // 1

//

function a(x) {
  console.log(x); // 1
  var x;
  console.log(x); // 1
  var x = 2;
  console.log(x); // 2
}

a(1);

//

function a() {
  console.log(b); // function b
  var b = "bbb";
  console.log(b); // bbb

  function b() {}

  console.log(b); // bbb
}

a();

//

function a() {}

a();

var b = function () {};
b();

var c = function d() {};
c();
d(); // Error

//

console.log(sum(1, 2)); // 3
console.log(multiply(3, 4)); // multiply is not a function

function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
};

//

var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined
    var a = 3;
  };
  inner();
  console.log(a); // 1
};
outer();
console.log(a); // 1
