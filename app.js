// I am going to make a digial clock function
const clock = document.querySelector(".clock");


function getTime(){
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let sessions = "AM"

    // I want make a 12 hours clock
    if(hours > 12){
        hours -= 12;
        sessions = "PM"
    }
    // I want hours, minutes and seconds in double digits
    hours = (hours < 10) ? `0${hours}` : hours
    minutes = (minutes < 10) ? `0${minutes}` : minutes
    seconds = (seconds < 10) ? `0${seconds}` : seconds
    // I want to show 12 AM not 00
    if(hours == 00){
        hours = 12
    }

    let time = `${hours} : ${minutes} : ${seconds} ${sessions}`

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(getTime, 1000);
}


getTime()

const fontSelector = document.getElementById("fonts")
const h1 = document.querySelector("h1")

fontSelector.addEventListener("click", () => {
    // h1.classList.add("font-montserrat")
    console.log(fontSelector.value)

    if(fontSelector.value === "default"){
        clock.classList.remove("font-montserrat")
        clock.classList.remove("font-merriweather")
    }
    else if(fontSelector.value === "Montserrat"){
        clock.classList.remove("font-merriweather")
        clock.classList.add("font-montserrat")
    }
    else if(fontSelector.value === "Merriweather"){
        clock.classList.remove("font-montserrat")
        clock.classList.add("font-merriweather")        
    }
})