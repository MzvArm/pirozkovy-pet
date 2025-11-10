const filterCostMin = document.getElementById("filter-cost-min")
const filterCostMax = document.getElementById("filter-cost-max")
const filterCalMin = document.getElementById("filter-calories-min")
const filterCalMax = document.getElementById("filter-calories-max")
const filterSweetType = document.getElementById("sweet")
const filterSavoryType = document.getElementById("savory")
const productForFilter = document.querySelectorAll(".product-item")
const filterInput = document.querySelectorAll("[data-input]")

// Добавляем функцию отслежки ввода для всех input внутри фильтра

filterInput.forEach((input) => {
    function filterFunction() {

        // Создаём функцию фильтра для всех товаров

        productForFilter.forEach((items) => {
            const productPrice = items.querySelector(".product-price").innerText
            const productCalories = items.querySelector(".product-calories").innerText

            // Добавляем сброс класса "none"

            items.classList.remove("none")

            // Пропускаем товар через фильтр и неподходящие скрываем с помощью класса "none"

            if (parseInt(filterCostMin.value) <= parseInt(productPrice) && parseInt(filterCostMax.value) >= parseInt(productPrice)) {
                if (parseInt(filterCalMin.value) <= parseInt(productCalories) && parseInt(filterCalMax.value) >= parseInt(productCalories)) {

                    if (filterSweetType.checked && filterSavoryType.checked) {

                    } else if (filterSweetType.checked) {
                        if (items.classList.contains("savory")) {
                            items.classList.add("none")
                        }
                    } else if (filterSavoryType.checked) {
                        if (items.classList.contains("sweet")) {
                            items.classList.add("none")
                        }
                    } else {
                        items.classList.add("none")
                    }
                } else {
                    items.classList.add("none")
                }

            } else {
                items.classList.add("none")
            }


        })

    }

    // Вызываем функцию фильтра при вводе

    input.addEventListener("input", filterFunction)


})