"use strict"

var a = 'Test1';
let b = 'Test2';

console.log(b);

function testVar(){
  var a =30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
function testLet(){
  let a = 30;
  if(true){
    let a = 30;
    console.log(a);
  }
  console.log(a);
}
testLet();

for(let i=0;i<10;i++){
  console.log(i);

}
console.log(i);

const colors = [];
colors.push('red');
colors.push('blue');
colors = 'Green';
console.log(colors);
