//data received from the server is the string from.
// convert it into json

var jsobj={
 firstname:'vamshi',
 lastname:'urumadla',
 age:24,
 gender:'male'
};

console.log(jsobj);
var jsonobj= JSON.stringify(jsobj);
console.log(jsonobj)
var stringObj=JSON.parse(jsonobj);
console.log(stringObj);

var d = '{"lastname":"hello", "reason":"to check the obj", "result":"successful"}';
var dJson = JSON.parse(d);
console.log(dJson);

var txt = '{"myobj":{"name":"Akhil", "gender":"i dont know"}}'
var jo=JSON.parse(txt)
console.log(jo);
