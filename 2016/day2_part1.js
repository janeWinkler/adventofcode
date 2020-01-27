let rawInstructions = document.getElementsByTagName('pre')[0].innerHTML;
//return one big string with insructions

let cleanInstructions = rawInstructions.split("\n", rawInstructions.match(/\n/g).length).map(function(v){
  return v.split("");
});
//splits the string into an array by \n, result is 5 items. Map splits each string into array of steps

const keyPad = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

let position = 5;
let positionIndex = 1;
let code = [];
    
cleanInstructions.forEach(function(element){
  element.map(function(el){
    if(el == "U" && position > 3){
      position -= 3;
      positionIndex -= 1;
     
    }else if(el == "R" && keyPad[positionIndex].indexOf(position) < 2){
      position += 1;
     
    }else if(el == "D" && position < 7){
      position += 3;
       positionIndex += 1;
     
    }else if(el == "L" && keyPad[positionIndex].indexOf(position) > 0){
      position -= 1; 
      
    }
  }) 
  code.push(position);
})

console.log(code);

//ans = [5, 3, 2, 5, 5]