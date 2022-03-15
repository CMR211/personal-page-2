let disableScrollSnap

genNav()

function genNav() {
    const heroNav = [
        document.querySelector("#section1button"),
        document.querySelector(".down-arrow"),
    ]

    for (let el of heroNav) {
        el.addEventListener("click", () => {
            const section2 = document
                .getElementById("section-2")
                .getBoundingClientRect()

            disableScrollSnap = true

            window.scrollTo({ top: section2.top, behavior: "smooth" })

            setTimeout((disableScrollSnap = false), 1000)
        })
    }
}
