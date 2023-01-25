var a = 'v am shi h'
console.log(a.length)
var ar=[ "var a = vamshi",
'String length'+' = '+a.length,
'String slice()' + " = "+ a.slice(-3,-1),
'String substring()' +" = "+a.substring(2,4),
'String substr()' +" = "+ 'removed from js',
'String replace()' + ' = '+ a.replace('h','a'),
//'String replaceAll()'+' = '+a.replaceAll('a','h'),
'String replace()' + ' = '+ a.replace(a[4],'h'),
'String toUpperCase()',
'String toLowerCase()',
'String concat()',
// 'String trim()' +" = " + a.trim(),
'String trimStart()',
'String trimEnd()',
'String padStart()',
'String padEnd()',
'String charAt()',
'String charCodeAt()',
'String split()'];

var x = document.getElementById('abc');
var ul =document.createElement('ul');
x.appendChild(ul);
 for(var i=0; i<=ar.length-1;i++){
    var li = document.createElement('li');
    li.innerHTML = ar[i];
    ul.appendChild(li);
 };

