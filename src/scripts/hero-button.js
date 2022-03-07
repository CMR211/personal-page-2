const heroButton = document.getElementById("hero4")
heroButton.addEventListener("click", () => {
    const section2 = document.getElementById("section-2").getBoundingClientRect()
    window.scrollTo({ top: section2.top, behavior: "smooth" })
})

const 