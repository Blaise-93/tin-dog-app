// Remember to import the data and Dog class!
import { Dog } from './Dog.js'
import { dogs } from './data.js'

const dogDisplay = document.querySelector('.dog-display')
let recentDogIndex = 0
let recentDog = new Dog(dogs[recentDogIndex])

document.getElementById("btn-dog-like").addEventListener('click', accepted)
render()

function render() {
    dogDisplay.innerHTML = recentDog.getDogHtml()
}


function getNewDog() {
    recentDogIndex++
    recentDog = new Dog(dogs[recentDogIndex])
    render()

}

function accepted() {
    recentDog.setMatchObjects(true)
    getNewDog()
}

const  backgroundEl = document.getElementById("background")


