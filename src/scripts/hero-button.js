const heroNav = [
    document.querySelector("#section1button"),
    document.querySelector(".down-arrow"),
]

for (let el of heroNav) {
    el.addEventListener("click", () => {
        const section2 = document
            .getElementById("section-2")
            .getBoundingClientRect()
        document
            .querySelector("main")
            .scrollTo({ top: section2.top, behavior: "smooth" })
    })
}
