
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
[{"item":"123","COUNT(item)":"1"},{"item":"333","COUNT(item)":"2"},{"item":"999","COUNT(item)":"1"}].flatMap(a=> a['COUNT(item)']).reduce((a,b)=>Number(a)+Number(b))
https://learn.javascript.ru/let-const

js strange behavior

foo();
a();

function foo() {
console.log(3);
}

var a = function() {
  console.log(2);
};

--------------------------------
