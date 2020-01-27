let rawInstructions = document.getElementsByTagName('span')[0].innerHTML.replace(/['"]+/g, '').split(",");

let finalInstructions = [];

rawInstructions.forEach(function(e){  
  let roomName = e.slice(0,e.length-11).replace(/[-"]+/g, ' ');
  let roomID = e.slice(e.length-10,e.length-7);
 
  let shiftedCharacter= '';
  
  roomName.split('').forEach(function(character){
    let characterPosition = character.charCodeAt(0)-96;
    
      for(i = 1; i <= roomID % 26; i++){
        if(characterPosition < 0){
          return shiftedCharacter += " ";
        }
        if(characterPosition == 26){
          characterPosition = 1;
        }else{
        characterPosition = characterPosition + 1;
        }    
      }
    
    shiftedCharacter += String.fromCharCode(97 + (characterPosition-1));
   
  });   
  finalInstructions.push(shiftedCharacter + "-" + roomID);
});
console.log(finalInstructions);




