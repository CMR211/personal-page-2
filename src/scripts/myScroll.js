// initialization
myScrollHandler()

function myScrollHandler() {
    const SEC_HEIGHT = document.getElementById(`section-1`).clientHeight
    const BODY_EL = document.querySelector("body")
    const HTML_EL = document.querySelector("html")

    let snap
    let latestScroll = 0
    let lock = false

    // Toggle mandatory snap on when site loads
    mandatorySnap(true)

    // Initialize event listener
    window.addEventListener("scroll", handleScroll)

    function handleScroll() {
        // If user has clicked on nav links disable scroll snap
        if (disableScrollSnap) return
        latestScroll = window.scrollY
        requestAnim()
    }

    function toggleSnap() {
        lock = false
        if (latestScroll < SEC_HEIGHT) {
            mandatorySnap(true)
            return
        }
        mandatorySnap(false)
    }

    function requestAnim() {
        if (lock) return
        requestAnimationFrame(toggleSnap)
        lock = true
    }

    function mandatorySnap(toggle) {
        if (snap === toggle) return
        for (el of [BODY_EL, HTML_EL]) {
            if (toggle) {
                console.log(
                    "%c Mandatory snap is ON",
                    "color: green; font-weight: bold"
                )
                el.classList.add("snap-mandatory")
                el.classList.remove("snap-proximity")
                snap = true
            }
            if (!toggle) {
                console.log(
                    "%c Mandatory snap is OFF",
                    "color: red; font-weight: bold"
                )
                el.classList.remove("snap-mandatory")
                el.classList.add("snap-proximity")
                snap = false
            }
        }
    }
}

function scrollDiff(current, target) {
    return Math.abs(current - target)
}
