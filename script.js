let jmeno = prompt("Zadej jméno:")
let prijmeni = prompt ("Zadej příjmení:")

let jmenobezznaku = jmeno.trim()
let prijmenibezznaku = prijmeni.trim ()

let jmenokonec = jmenobezznaku.slice(0,3)
let prijmenikonec = prijmenibezznaku.slice(0,5)

const domena = "fit.cvut.cz"
const email = jmenokonec + prijmenikonec + "@" + domena
document.body.innerHTML += `<p>Tvuj email je: ${email}</p>`