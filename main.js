let btnEl = document.getElementById("btn")
let container = document.getElementById("container")

btnEl.addEventListener("click", () => {
    getNotif()
})

function getNotif(){
    let noti = document.createElement("div")
    noti.classList.add("message")
    noti.innerHTML = "I did warn you, Didn't I?"
    container.appendChild(noti)

    setTimeout(function(){
        noti.remove()
    }, 2000)
}