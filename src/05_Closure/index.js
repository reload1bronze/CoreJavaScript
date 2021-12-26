var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};
var outer2 = outer();
var outer3 = outer();
console.log(outer2()); // 2
console.log(outer2()); // 3
console.log(outer3()); // 2

//

var outer = (function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
})();
console.log(outer());
console.log(outer());
outer = null;
