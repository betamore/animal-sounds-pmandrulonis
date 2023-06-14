function cowSounds(){
    console.log("Cows go MOOOO!")
}
function dogSounds(){
    console.log("Dogs go WOOOF!")
}
function duckSounds(){
    console.log("Ducks go QUACK!")
}
function whatSound(item){
    if(item === "Cow"){
        cowSounds(item)
    } if (item === "Dog"){
        dogSounds(item)
    } if (item === "Duck"){
        duckSounds(item)
    } else{
    return console.log("I am not sure what noise that animal makes")
    }
}


// DONT CHANGE. THIS IS FOR TESTING
let animals = [ "Bat", "Cat", "Cat", "Dog", "Cow", "Duck", "Dog", "Fish", "Cow", "Dog", "Duck", "Duck" ]

for (let animal of animals) {
        whatSound(animal)
}
