document.getElementById("toggle-snow").addEventListener("click", function () {
    const snowElement = document.getElementById("snow");
    if (snowElement.style.display === "none") {
        snowElement.style.display = "block";
    } else {
        snowElement.style.display = "none";
    }
});
