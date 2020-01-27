let rawInstructions = document.getElementsByTagName('pre')[0].innerHTML;
//return one big string with insructions

let cleanInstructions = rawInstructions.split("\n", rawInstructions.match(/\n/g).length).map(function(v){
  return v.split("");
});

const keyPad = [
  [1],
  [2,3,4],
	[5,6,7,8,9],
  [10,11,12],
  [13]
];

let letters = {
  10 : 'A',
  11 : 'B',
  12 : 'C',
  13 : 'D'
}

let position = 5;
let positionIndex = 2;
let code = [];
    
cleanInstructions.forEach(function(element){
  element.map(function(el){
    if(el == "U"){
      if(position == 13 || position == 3){
          position -= 2;
          positionIndex -= 1;
        }else if( position >=6 && position <= 8 || position >=10 && position <= 12){
          position -= 4;
          positionIndex -= 1;
        }
    }else if(el == "R" && keyPad[positionIndex].indexOf(position) < keyPad[positionIndex].length -1){
      position += 1;
    }else if(el == "D"){
      if(position == 1 || position == 11){
          position += 2;
          positionIndex += 1;
        }else if(position >=2 && position <= 8){
          position += 4;
          positionIndex += 1;
        }
    }
    else if(el == "L" && keyPad[positionIndex].indexOf(position) > 0){
      position -= 1; 
    }
  }) 
  code.push(position);
})

//console.log(code);
  
function convertNum(code){
  code.forEach(function(entry, i){
    if(entry >= 10){
      let str = entry.toString();
      code[i] = str.replace(str, letters[entry]); 
    }
  });
  
  return code;
}
console.log(convertNum(code));



//ans = [7, 4, 2, 3, 'A']