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

            // Проверяем находится ли товар (счётчик) в корзине и равен ли он "1"

        } else if (event.target.closest(".order-wrapper") && parseInt(counter.innerText) === 1) {

            // Удаляем товар из корзины

            event.target.closest(".order-item").remove()

            // Проверка и переключение статуса корзины

            toggleEmptyBasket()

            // Пересчёт общей суммы в корзине

            calcTotalSum()


        }

    }

    // Проверяем клик на + или - внутри корзины

    if (event.target.hasAttribute("data-action") && event.target.closest(".order-wrapper")) {

        // Пересчёт общей суммы в корзине

        calcTotalSum()
    }

})