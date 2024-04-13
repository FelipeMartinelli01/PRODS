document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const searchTerm = document.getElementById("searchInput").value.toLowerCase();

        const products = document.querySelectorAll(".product");

        products.forEach(function(product) {
            const productTitle = product.querySelector("h3").innerText.toLowerCase();

            if (productTitle.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");

    function isPageScrolledToBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    window.addEventListener("scroll", function() {
        if (isPageScrolledToBottom()) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    });
});

