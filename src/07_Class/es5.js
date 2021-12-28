/*
 * ES5와 ES6의 클래스 문법 비교
 */

var ES5 = function (name) {
  this.name = name;
};

ES5.staticMethod = function () {
  return this.name + " staticMethod";
};

ES5.prototype.method = function () {
  return this.name + " method";
};

var es5Instance = new ES5("es5");
console.log(ES5.staticMethod()); // ES5 staticMethod
console.log(es5Instance.method()); // es5 method

var ES6 = class {
  constructor(name) {
    this.name = name;
  }

  static staticMethod() {
    return this.name + " staticMethod";
  }

  method() {
    return this.name + " method";
  }
};

var es6Instance = new ES6("es6");
console.log(ES6.staticMethod()); // ES6 staticMethod
console.log(es6Instance.method()); // es6 method

/*
 * ES6의 클래스 상속
 */

var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
};

var Square = class extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  getArea() {
    console.log("size is :", super.getArea());
  }
};

const sq = new Square(10);
sq.getArea(); // size is : 100
