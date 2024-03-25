import RacingAnimals from "./RacingAnimals";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const horse = new Horse("Horse");
const tiger = new Tiger("Tiger")
const dog = new Dog("Dog")
const winner = RacingAnimals.getWinner([horse, tiger, dog]);
console.log(winner);