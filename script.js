// Модальное окно


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








// Корзина

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
        if (parseInt(counter.innerText) > 1) {

            // Уменьшаем счётчик на единицу
            counter.innerText = --counter.innerText
        }
    }
})


// Обёртка в корзине, куда будут добавляться товары

const orderWrapper = document.querySelector(".order-wrapper");


// Отслеживаем клик на странице

window.addEventListener("click", function (event) {

    // Проверяем, что клик был совершён по кнопку "В корзину"
    if (event.target.hasAttribute("data-in-basket")) {

        // Находим карточку с товаром, внутри которой был совершён клик
        const productItem = event.target.closest(".product-item")

        // Собираем данные товара и записываем в объект

        const productInfo = {
            id: productItem.dataset.id,
            imgSrc: productItem.querySelector(".product-img").getAttribute("src"),
            title: productItem.querySelector(".product-name").innerText,
            weight: productItem.querySelector(".product-weight").innerText,
            calories: productItem.querySelector(".product-calories").innerText,
            price: productItem.querySelector(".product-price").innerText,
            counter: productItem.querySelector("[data-counter").innerText

        }

        // Собранные данные подставляем в шаблон в корзине


        const orderItemHTML = `<div class="order-item">
            <div class="order-item-description">
            <div class="order-item-img">
              <img src=${productInfo.imgSrc} width="40" alt="">
            </div>
            <div class="order-item-title">${productInfo.title}</div>
            <div class="order-item-info">${productInfo.weight} / ${productInfo.calories}</div>
            </div>
            <div class="counter-and-price">
            <div class="counter order-counter">
              <div class="counter-control" data-action="minus">-</div>
              <div class="counter-current" data-counter>${productInfo.counter}</div>
              <div class="counter-control" data-action="plus">+</div>
            </div>
            <div class="order-irem-price">${productInfo.price}</div>
            </div>
          </div>
          `

        orderWrapper.insertAdjacentHTML("beforeend", orderItemHTML)

    }
})
