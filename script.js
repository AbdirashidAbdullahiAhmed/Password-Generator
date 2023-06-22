const password1 = document.getElementById("password1") 
const password2 = document.getElementById("password2")
let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function getRandomChar(){
    const randomChar=Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function getPassword(){
    
    let password = ""
    for (let i = 0; i < 15; i ++){
        password += getRandomChar()
    }
    
  return password
    
}

function generate(){
   
   password1.textContent = getPassword()
   password2.textContent = getPassword()
   
}

generate()







