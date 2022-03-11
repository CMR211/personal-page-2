window.addEventListener("scroll", () => scrolling(), { passive: true })

const sectionsDimensions = Array(4)
    .fill()
    .map((section, index) => {
        const sectionEl = document.getElementById(`section-${index + 1}`)
        return sectionEl.clientHeight
    })

const sectionsEndings = Array(4)
    .fill()
    .map((section, index) => {
        let ending = 0
        for (let i = 0; i <= index; i++) {
            ending += sectionsDimensions[i]
        }
        return ending
    })

let scrollable = true
function scrolling() {
    if (!scrollable) return
    let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
    console.log(Math.abs(currentScroll - sectionsEndings[0]))
    if (Math.abs(currentScroll - sectionsEndings[0]) < 200) {
        document.getElementById("section-2").scrollIntoView()
        scrollable = false
        setTimeout((scrollable = false), 200)
    }
}
