window.addEventListener("scroll", () => scrolling(), {passive: true})

const sectionsDimensions = Array(4).fill().map((section,index) =>{
    const sectionEl = document.getElementById(`section-${index+1}`)
    return sectionEl.clientHeight
})

const sectionsEndings = Array(4).fill().map((section,index) => {
    let ending = 0
    for (let i = 0; i<= index;i++) {
        ending += sectionsDimensions[i]
    }
    return ending
})

function scrolling () {
    console.log(sectionsEndings)
}