document.getElementById("open-modal-button").addEventListener("click", function() {
    document.getElementById("modal").classList.add("open")
})

document.getElementById("close-modal-button").addEventListener("click", function() {
    document.getElementById("modal").classList.remove("open")
})

window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
})

document.querySelector("#modal .modal-box").addEventListener("click", event => {
    event._isClickWithInModal = true
})

document.getElementById("modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove("open")
})