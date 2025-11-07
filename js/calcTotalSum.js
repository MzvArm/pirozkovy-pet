function calcTotalSum() {
    const orderWrapper = document.querySelector(".order-wrapper")
    const priceItems = orderWrapper.querySelectorAll(".order-item-price")
    const totalSum = document.querySelector(".total-sum")

    let total = 0

    // Обходим все элементы с ценами в корзине

    priceItems.forEach(function (item) {

        // Находим количество товара

        const amount = item.closest(".order-item").querySelector("[data-counter]")

        // Добавляем сумму товара в общую стоимость

        total += parseInt(item.textContent) * parseInt(amount.textContent)


    })

    // Отобразим общую сумму на странице

    totalSum.textContent = total

}