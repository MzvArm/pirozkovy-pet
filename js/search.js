

const searchInput = document.querySelector(".input")
const toggleSearch = document.querySelector(".products-from-search")
const productsFromSearch = document.querySelector(".products-from-search")
const productSearch = document.querySelectorAll(".product-name")
const searchArray = []

// Добавляем в пустой массив имя и id товаров

productSearch.forEach(item => {

    const productInfoSearch = {

        id: ("#" + item.getAttribute("id")),
        name: item.innerText
    }

    searchArray.push(productInfoSearch)
})

// Отслеживаем ввод через input

searchInput.addEventListener("input", () => {

    // Получаем значения input

    const input = searchInput.value.toLowerCase();
    productsFromSearch.innerHTML = ""

    // Создаём новый массив "отфильтрованных" товаров

    const filteredProducts = searchArray.filter(item => item.name.toLowerCase().includes(input))

    // Создаём "форму" и ссылку для каждого товара

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = product.name
        link.href = product.id

        // Вкладываем теги друг в друга 

        li.appendChild(link)
        productsFromSearch.appendChild(li)
    })

    // Добавляем переключатель окна поиска

    if (input !== "" && filteredProducts.length > 0) {
        toggleSearch.classList.add("active-search")
    } else {
        toggleSearch.classList.remove("active-search")
    }

})

// Добавляем выключение окна поиска через клик вне окна

document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !productsFromSearch.contains(event.target)) {
        toggleSearch.classList.remove("active-search")
    }
})