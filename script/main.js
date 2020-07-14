const mainElement = document.querySelector('main')
// const classInputElement = document.querySelector('.classInput')
const fighterNameInput = document.querySelector('.fighterNameInput')
const clericNameInput = document.querySelector('.clericNameInput')
const wizardNameInput = document.querySelector('.wizardNameInput')
const wagonInputElement = document.querySelector('.wagonNumberInput')
const seatButttonElement = document.querySelector('.seatsButton')
const ButttonElement = document.querySelector('.seatsButton')
const detailsElement = document.querySelector('details')



seatButttonElement.addEventListener('click', function () {
    let seats = wagonInputElement.value
    playerWagon = new Wagon(seats)
    //not sure why creating an instance inside of an invent clicker won't work unless you leave off the let/const
    //but creating the instance in the global scope works with const/let
    let myAccordion = new Accordion('wagon', playerWagon)
    myAccordion.appendTo(mainElement)

})

// nameButttonElement.addEventListener("click", function () {
//     let name = nameInputElement.value
//     traveler = new Traveler(name, 'Fighter')
//     playerWagon.join(traveler)

// })


