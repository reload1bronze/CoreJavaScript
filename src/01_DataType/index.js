// 변수 선언과 할당
var a;
a = "abc";

var b = "def";

var c = "abc";
c += "def";

var d = 5;
var e = 5;
d = 7;

var obj1 = { a: 1, b: "bbb" };
obj1.a = 2;

var obj3 = { x: 3, arr: [3, 4, 5] };

//
var a = 10;
var b = a;

var obj1 = { c: 10, d: "ddd" };
var obj2 = obj1;

b = 15;
obj2.c = 20;
obj = { c: 20, d: "ddd" };

a !== b;
obj1 === ojb2;

// 객체의 가변성에 따른 문제점
var user = {
  name: "Consume",
  gender: "Male",
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "Defiler");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다."); // 출력안됨...
}

console.log(user.name, user2.name); // Defiler Defiler
console.log(user === user2); // true
