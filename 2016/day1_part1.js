let input = "L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4";

let inputArr = input.split(", ");

var heading = "N";
var locX  = 0; //-5
var locY  = 0; //-4

inputArr.forEach( step =>{
  
  let direction = step.charAt(0); 
  let length = parseInt(step.slice(1));
//console.log(direction + " dir");
 
  
  if(heading === "N"){
    console.log(length + " N");
      if(direction === "R"){
         heading = "E";
         locX += length;
      }else{
        heading = "W"; 
        locX -= length;  
      }  
  }else if(heading === "E"){
    console.log(length + " E");
    if(direction === "R"){
         heading = "S";
        locY -= length;
      console.log(locY);
      }else{
         heading = "N";
        locY += length;
        console.log(locY);
      }
  }else if(heading === "S"){
    console.log(length + " S");
    console.log(direction);
    if(direction === "R"){
         heading = "W";
        locX -= length;
      }else{
         heading = "E";
      locX += length;
      }
    
  }else if(heading === "W"){
    console.log(length + " W");
    if(direction === "R"){
         heading = "N";
         locY += length;
      console.log(locY);
      }else{
         heading = "S";
        //console.log(locY);
        //console.log(length + " yoo");
         locY = locY - length;
        //console.log(locY);  
      }
  }
  
});

console.log(locY);
console.log(locX);
let answer = Math.abs(locY) + Math.abs(locX);
console.log(answer);
  

  