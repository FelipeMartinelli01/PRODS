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