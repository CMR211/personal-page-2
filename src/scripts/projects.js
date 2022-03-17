const ACTION_TYPE = "play reverse play reverse"

createProjects()

function createProjects() {
    const projects = [
        {
            id: 1,
            title: "Crypto app",
            desc: "A simple site to check most popular cryptocurrency and stock prices. Data fetched by two different APIs. Site allows to add your own equities, store them in local storage and see potential gains. Made with react.",
            url: "https://cmr211-crypto-app.netlify.app",
            folder: "./assets/crypto-app/",
            bigImgs: 5,
            smallImgs: 2,
            bgcolor: "#FEF8F3",
            color: "rgb(60, 50, 50)",
        },
        {
            id: 2,
            title: "FEM Space tourism website",
            desc: "My take on frontendmentor.io challenge of creating a responsive space tourism website. As a self goal I have added a possibility to refreshlessly change the language. This was my first project I tried React, learning everything on the fly.",
            url: "https://cmr211-fem-space-tourism-website.netlify.app",
            folder: "./assets/space-tourism-website/",
            bigImgs: 4,
            smallImgs: 4,
        },
        {
            id: 3,
            title: "Advent of code",
            desc: "These are my solutions to advent of code 2021 problems. Solved with javascript. Currently half way done.",
            url: "https://github.com/CMR211/advent-of-code",
            folder: "./assets/advent-of-code/",
            bigImgs: 2,
            smallImgs: 0,
            bgcolor: "#39304a",
            color: "white",
        },
    ]

    for (let project of projects) {
        const div = document.createElement("div")
        div.classList.add("project")
        div.id = `project-${project.id}`

        div.innerHTML = `
            <p class="project__num" id="project__num-${project.id}" >#${project.id}</p>
            <h2 class="project__title" id="project__title-${project.id}" >${project.title}</h2>
            <p class="project__desc" id="project__desc-${project.id}" >${project.desc}</p>
            <a class="project__url"  id="project__url-${project.id}" href=${project.url}>Live site at: ${project.url}</a>
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

    // Animation sequence
    for (let i = 1; i <= projects.length; i++) {
        const timeline = gsap.timeline({
            defaults: { stagger: 0.05 },
            scrollTrigger: {
                id: i,
                trigger: `#project-${i}`,
                start: "top 80%",
                end: "bottom 10%",
                toggleActions: ACTION_TYPE,
            },
        })
        timeline
            .from(`#project__title-${i}`, {
                duration: 0.7,
                opacity: 0,
                x: -1 * 70,
            })
            .from(`#project__num-${i}`, {
                duration: 0.7,
                opacity: 0,
                x: 1 * 70,
            }, "<")
            .from(
                [`#project__desc-${i}`, `#project__url-${i}`],
                {
                    opacity: 0,
                    y: 10,
                },
                ">"
            )
            // Animating the images
            .from(document.querySelector(`#project__grid-${i}`).children, {
                opacity: 0,
                x: -10,
                stagger: 0.3,
            })
    }
}


