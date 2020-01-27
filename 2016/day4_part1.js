let rawInstructions = document.getElementsByTagName('pre')[0].innerHTML.split("\n");

//console.log(rawInstructions);

let string = "aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]";

let total = 0;
let arrTracker = [];

rawInstructions.forEach(function(e){
  let newArr = [];
  
  let letter = e.split("");
  
  let index = letter.indexOf('[');
  
  letter.splice(index, 10);
 
    letter.sort().map(function(e){
    if(e.match(/[a-z]/i)){
       newArr.push(e);
      }
  });
  
  let newObj = newArr.reduce((obj, item) => {
    
    if(!obj[item]){
      obj[item] = 0;
    }
    return obj;
 
  },{});
  
  let blankObj = newArr.reduce((obj, item) => {  
    if(item === item){
      if(!obj[item]){
        obj[item] = 0;
      }
      obj[item] = obj[item] + 1;
    }else{
      obj[item] = obj[item] - 1;
    } 
    return obj
    }, newObj)
 
var sortable = [];
for (var char in newObj) {
    sortable.push([char, newObj[char]]);
}
//console.log(sortable);
sortable.sort(function(a, b) {
  return b[1] - a[1];
});
  
 let arr = sortable.slice(0,5);
// console.log(arr);
  let r = [];
  
  arr.forEach(function(e){
    r.push(e[0]);
  });

  let finalArr = [];
  arr.sort(function(a,b){
    //console.log(b + " " + a);
    if(a[1] == b[1]){
      finalArr.push(b); 
    }
  });

 
   if(r.join("") === e.substring(e.length-6, e.length-1)){
   
     total += parseInt(e.substring(e.length-10, e.length-7));
    arrTracker.push(e);
     }
 //console.log(total);
  console.log(JSON.stringify(arrTracker));
});




  //answer is 278221