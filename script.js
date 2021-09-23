let button = document.getElementsByTagName("button")[0];

function spaceAge() {
    let second = Number(document.getElementsByTagName("input")[0].value);
    let planet = document.getElementsByTagName("select")[0].value;

    let earth = 1
    let mercury = 0.2408467
    let venus = 0.61519726
    let mars = 1.8808158
    let jupiter = 11.862615
    
    let p = document.createElement("p")
    document.getElementsByClassName("result")[0].appendChild(p)

    if (planet === "earth") {
        p.innerText = second + " second is " + second * earth / 31557600 + " Earth-year old on Earth"
    } else if (planet === "mercury") {
        p.innerText = second + " second is " + second * mercury / 31557600  + " Earth-year old on Mercury"
    } else if (planet === "venus") {
        p.innerText = second + " second is " + second * venus / 31557600 + " Earth-year old on Venus"
    } else if (planet === "mars") {
        p.innerText = second + " second is " + second * mars / 31557600 + " Earth-year old on Mars"
    } else if (planet === "jupiter") {
        p.innerText = second + " second is " + second * jupiter / 31557600 + " Earth-year old on Jupiter"
    }
    return spaceAge;
};

button.addEventListener('click', spaceAge())