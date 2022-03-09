const projects = [
    {
        id: 1,
        title: "Crypto app",
        desc: "A simple site to check most popular cryptocurrency and stock prices. Data fetched by two different APIs. Site allows to add your own equities, store them in local storage and see potential gains. Made with react.",
        url: "https://cmr211-crypto-app.netlify.app",
        folder: "./assets/crypto-app/",
        bigImgs: 5,
        smallImgs: 2,
        bgcolor: "#fcede0",
    },
    {
        id: 2,
        title: "Advent of code",
        desc: "These are my solutions to advent of code 2021 problems. Solved with javascript. Currently half way done.",
        url: "https://github.com/CMR211/advent-of-code",
        folder: "./assets/advent-of-code/",
        bigImgs: 2,
        smallImgs: 0,
        bgcolor: "#0f0f23",
    },
    
]

for (let project of projects) {
    const div = document.createElement("div")
    div.classList.add("project")
    div.id = `project-${project.id}`

    div.innerHTML = `
        <p class="project__num">#${project.id}</p>
        <h2 class="project__title">${project.title}</h2>
        <p class="project__desc">${project.desc}</p>
        <a class="project__url" href=${project.url}>Live site at: ${project.url}</a>
        <div class="project__grid" id="project__grid-${project.id}"></div>`

    document.getElementById("projects-container").appendChild(div)

    const imgDiv = document.getElementById(`project__grid-${project.id}`)
    for (let i = 0; i < project.bigImgs; i++) {
        const img = document.createElement("img")
        img.classList.add("project__img", "project__img--big")
        img.src = `${project.folder}big${i + 1}.png`
        imgDiv.appendChild(img)
    }
    for (let i = 0; i < project.smallImgs; i++) {
        const img = document.createElement("img")
        img.classList.add("project__img", "project__img--small")
        img.src = `${project.folder}small${i + 1}.png`
        imgDiv.appendChild(img)
    }
}

for (let i = 1; i <= projects.length; i++) {
    gsap.from(document.querySelector(`#project-${i}`).children, {
        scrollTrigger: {
            trigger: `#project-${i}`,
            scroller: "main",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart pause reverse pause",
            markers: true
        },
        opacity: 0,
        y: -20,
        stagger: 0.25,
        duration: 0.5,
    })
}
