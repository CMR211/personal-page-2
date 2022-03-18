backToTop()

function backToTop() {
    document.getElementById("backToTop").addEventListener("click", () => {
        disableScrollSnap = true
        document.querySelector("#section-1").scrollIntoView()
        setTimeout(() => (disableScrollSnap = false), 1000)
    })
}
