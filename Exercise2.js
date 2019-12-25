var x = -5;
var y = 22;

function new_array(a,b){
  var odd;
  var array = [];
  var i;
  var k;

while (a<=b){
  odd = 0;
  for (k = Math.abs(a); Math.floor(k) !==0; k =Math.floor(k / 10)){
    i = k % 10;
    if(i % 2 != 0){
      odd += 1;
    }
  }
  if (odd === 0) {
    array.push(a);
  }
  a ++;
}
 console.log(array);
return(array);
}
new_array(x, y);

