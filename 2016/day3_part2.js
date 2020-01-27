let rawInstructions = document.getElementsByTagName('pre')[0].innerHTML.trim();

let cleanInstructions = rawInstructions.split(" ");
let arr = [];
let newArr = [];
let lastArr = [];
let count= 0;

var filtered = cleanInstructions.filter(function (el) {
  return el != "";
});

while(filtered.length){
 arr.push(filtered.splice(0,3)); 
}

for(i = 0; i < 3; i++){
  console.log(i);
  arr.forEach(function(r){
     newArr.push(r[i]);
  });
}

while(newArr.length){
 lastArr.push(newArr.splice(0,3)); 
}


lastArr.forEach(function(el){
  if(parseInt(el[0]) + parseInt(el[1]) > parseInt(el[2]) && parseInt(el[0]) + parseInt(el[2]) > parseInt(el[1]) && parseInt(el[1]) + parseInt(el[2]) > parseInt(el[0]) ){
    count += 1;
  }
})

console.log(count);




// ans = 1577

