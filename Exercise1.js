//Ecercise 1
var a = [1,3,45,-8,67,34,100];
var b = -5;

function exceeding_element (x, y) {
var new_array = [];
for (var i = 0; i < x.length; i++) {
if (x[i] > y) {
new_array.push(x[i])
}
}
(new_array.length == 0) ? console.log("Such values do not exist!") : console.log(new_array);
return (new_array)
}

exceeding_element(a,b);
© 2019 GitHub, Inc.
