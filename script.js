var character = document.getElementById('character');

var start = document.getElementById('start');

// var pause = document.getElementById('pause');

var reset = document.getElementById('reset');



function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left-= 100;    
    if(left >= 0){
        character.style.left = left + "px";
    }
}


function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;    
    if(left < 300){
        character.style.left = left + "px";
    }
}


document.addEventListener("keydown" , event =>{
    if(event.key === 'ArrowLeft'){
        moveLeft();
    }
    
    if(event.key === 'ArrowRight'){
        moveRight();
    }
})


start.addEventListener('click', function(){
    
    var block = document.getElementById("block");
        
    block.classList.add("block-animation");
    
    var counter = 0
    block.addEventListener("animationiteration", ()=>{
        var random = Math.floor(Math.random() * 3);
        left = random * 100;
        block.style.left = left + "px"
        counter++;
    })
    
    
    setInterval(function(){
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        
        if(characterLeft == blockLeft && blockTop < 500 && blockTop > 300){
            alert("Game Over! Your Score Is : " + counter);
            
            block.classList.remove("block-animation");
            
            block.style.left = 0;
            
            block.style.top = 0;
            
            character.style.left = "100px"
        }
    },1)
})


// pause.addEventListener('click', function(){
//     block.style.top = parseInt(window.getComputedStyle(block).getPropertyValue("top")) + "px";
//     block.classList.remove("block-animation");
// });



reset.addEventListener('click', function(){
    block.classList.remove("block-animation");
    block.style.left = 0;
    character.style.left = "100px"
    counter = 0
})
