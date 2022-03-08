gsap.registerPlugin(ScrollTrigger)
const anim2 = document.querySelectorAll(".anim2")
gsap.from(anim2, {
    scrollTrigger: {
        trigger: "#section-2",
        start: "-20% 40%",
        end: "top 80%",
        toggleActions: "play restart reverse",
        // markers: true,
    },
    duration: 0.5,
    x: 50,
    opacity: 0,
    stagger: 0.5,
})

const projects = [
    {
        id: 1,
        title: "Crypto app",
        desc: "A simple site to check most popular cryptocurrency and stock prices. Data fetched by two different APIs. Site allows to add your own equities, store them in local storage and see potential gains. Made with react.",
        url: "https://cmr211-crypto-app.netlify.app",
        folder: "./assets/crypto-app/",
        imgs: 5,
    }
]

for (let project of projects) {
    const div = document.createElement("div")
    div.classList.add("project")
    div.innerHTML = `
        <div>
        <h2>${project.title}</h2>
        <p>${project.desc}</p>
        <a href="${project.url}>${project.url}</a>
        </div>`
    const img = document.createElement("div")
    img.classList.add("project-img")
    div.appendChild(img)
    document.getElementById("section-2_link").appendChild(div)
    const timer = 4
    let i = 0
    setInterval(()=> {
        i === 5 ? i = 1 : i++
        img.style.background=`url("${project.folder}${i}.png")`
    }, timer*1000)
    gsap.from(img, {opacity:0, duration:timer/2, repeat:-1, yoyo: true,  ease: Expo.easeInOut })
}