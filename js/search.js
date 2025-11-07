

const searchInput = document.querySelector(".input")
const toggleSearch = document.querySelector(".products-from-search")
const productsFromSearch = document.querySelector(".products-from-search")

const productSearch = document.querySelectorAll(".product-name")

const searchArray = []


productSearch.forEach(item => {

    const productInfoSearch = {

        id: ("#" + item.getAttribute("id")),
        name: item.innerText
    }

    searchArray.push(productInfoSearch)
})

console.log(searchArray)


searchInput.addEventListener("input", () => {
    const input = searchInput.value.toLowerCase();
    productsFromSearch.innerHTML = ""

    const filteredProducts = searchArray.filter(item => item.name.toLowerCase().includes(input))

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = product.name
        link.href = product.id
        // link.target = "_blank"

        li.appendChild(link)
        productsFromSearch.appendChild(li)
    })

    if (input !== "" && filteredProducts.length > 0) {
        toggleSearch.classList.add("active-search")
    } else {
        toggleSearch.classList.remove("active-search")
    }

})

document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !productsFromSearch.contains(event.target)) {
        toggleSearch.classList.remove("active-search")
    }
})