
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
[{"item":"123","COUNT(item)":"1"},{"item":"333","COUNT(item)":"2"},{"item":"999","COUNT(item)":"1"}].flatMap(a=> a.item).reduce((a,b)=>a+b)
