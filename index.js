import { Dog } from './Dog.js'
import { dogs } from './data.js'

const likeBadgeEl = document.getElementById("likeBadge")
const noBadgeEl = document.getElementById("nopeBadge")
const buttonContainerEl = document.getElementById("buttonContainer")
const dogProfileEl = document.getElementById("dogProfiles")


let recentDogIndex = 0
let isWaiting = true


function renderHtml(){
    const dogDisplayHtml = new Dog(dogs[recentDogIndex]).getDogHtml()
    dogProfileEl.innerHTML= dogDisplayHtml
}

buttonContainerEl.addEventListener("click", (e)=>{
    if(e.target.id == "heartButton" && isWaiting){
        Dog.hasBeenliked = true
        isWaiting = false
        likeBadgeEl.style.visibility= "visible"
        nextDogProfile()
    }
    
    else if(e.target.id === "crossButton" && isWaiting){
        isWaiting = false
        noBadgeEl.style.visibility= "visible"
        nextDogProfile()
    }
    
    else if(e.target.id === "restartButton"){
            reset()
    }
})


function nextDogProfile(){
    Dog.hasBeenSwiped = true
    setTimeout(()=>{
        recentDogIndex++
        likeBadgeEl.style.visibility= "hidden"
        noBadgeEl.style.visibility= "hidden"
            recentDogIndex > dogs.length-1 ? endMessage() : renderHtml()
            isWaiting = true
},1800)

} 


function endMessage(){
    dogProfileEl.innerHTML= `
        <div class = "end-message-box">
            <h2>You have seen all the dogs, go to the dog park or something.</h2>
        </div>`
    buttonContainerEl.innerHTML=`
    <button class ="restart-button button" id = "restartButton">Start Again?</button>`    
}


function reset(){
    recentDogIndex = 0
    buttonContainerEl.innerHTML= `                    
        <button class = "button cross-button" >
            <img src = "images/icon-cross.png" id = "crossButton" class = "button-image cross" alt = "cross icon, nope button"></img>
        </button>
        <button class = "button heart-button" >
            <img src = "images/icon-heart.png" id = "heartButton" class = "button-image heart" alt = "heart icon, like button"></img>
        </button>`
    renderHtml()
}
renderHtml()
