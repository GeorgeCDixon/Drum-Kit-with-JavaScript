/* Here for loop created by "i<document.querySelectorAll(".drum").length" to
get the numberOfDrumButtons*/


//Detecting Button Press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting Keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
       
   });


   //Function for the specified sounds for the keys/button
function makeSound(key){

    switch (key) {

        case "w":
            var crash  =new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        
    
        case "a":
            var kick_bass =new Audio("/sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        
        case "s":
            var snare=new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 =new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "j":
            var tom2= new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
      
        default:
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();

}
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    //class added to animation
    activeButton.classList.add("pressed");

    //timeout setup for after 1 sec the animation will pressed will be deleted.
    setTimeout(function(){

        activeButton.classList.remove("pressed");
    },100);

}