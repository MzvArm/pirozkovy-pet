// Открытие модального окна

document.getElementById("open-modal-button").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
})

// Закрытие модального окна через кнопку

document.getElementById("close-modal-button").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("open")
})

// Закрытие модального окна через Esc

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
})

// Закрытие модального окна через клик вне его области

document.querySelector("#modal .modal-box").addEventListener("click", event => {
    event._isClickWithInModal = true
})

document.getElementById("modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove("open")
})


// Скрипт для корзины

// Добавил прослушку на всё окно
window.addEventListener("click", function (event) {

    let counter

    // Проверяем клик по кнопкам счётчика

    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {

        // Находим ближайшего родителя

        const counterWrapper = event.target.closest(".counter");

        // Находим счётчик

        counter = counterWrapper.querySelector("[data-counter]")
    }

    // Проверка: является ли элемент по которому был совершён клик кнопкой "Плюс"
    if (event.target.dataset.action === "plus") {

        // Увеличиваем счётчик на единицу
        counter.innerText = ++counter.innerText
    }

    // Проверка: является ли элемент по которому был совершён клик кнопкой "Минус"
    if (event.target.dataset.action === "minus") {

        // Проверяем чтобы счётчик был больше 1
        if(parseInt(counter.innerText) > 1) {

            // Уменьшаем счётчик на единицу
            counter.innerText = --counter.innerText
        }
    }
})
