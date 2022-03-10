function getMonthsSince(now, then) {
    return Math.floor((now.getTime() - then.getTime())/1000/60/60/24/(365/12))
}

function date1 () {
    const el = document.getElementById("date1")
    el.innerText = getMonthsSince(new Date(), new Date("2021-10-01"))
}

date1()
