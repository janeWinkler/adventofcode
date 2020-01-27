let rawInstructions = document.getElementsByTagName('pre')[0].innerHTML.trim();

let cleanInstructions = rawInstructions.split(" ");
let arr = [];
let count= 0;

console.log(cleanInstructions);//creates one big array
let filtered = cleanInstructions.filter(function (el) {
  return el != "";
});


console.log(filtered);//removes all the blank spaces


while(filtered.length){
 arr.push(filtered.splice(0,3)); 
}

console.log(arr);//creates nested array

arr.forEach(function(el){
  if(parseInt(el[0]) + parseInt(el[1]) > parseInt(el[2]) && parseInt(el[0]) + parseInt(el[2]) > parseInt(el[1]) && parseInt(el[1]) + parseInt(el[2]) > parseInt(el[0]) ){
    count += 1;
  }
})

//console.log(count);


// ans = 862

