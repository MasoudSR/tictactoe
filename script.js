const gameButtons = document.querySelectorAll(".btn")

const gameButtonsHandler = (event) =>{  
    console.log(event.target.id)
}

gameButtons.forEach(btn=>{
    btn.addEventListener("click" , gameButtonsHandler)
})
