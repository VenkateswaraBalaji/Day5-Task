//Create a class Hero, which has the following keys
//name
//power
//weapon    Default --> 15 m/s
//speed     Birthyear --> 2020
//Birthyear
//There should be a way to calculate the age of the Hero
// "  " " way for the Hero to say a phrase that the user will pass
// There should be a way to attack, when it is executed, Hero should say --> "I am attacking with ...(power"
// 3 Heros

class Hero {
    constructor(n,p,w,s=15,B=2010) {
        this.name = n;
        this.power = p;
        this.weapon = w;
        this.speed = s;
        this.Birthyear = B;
    } 
age(){
    return Number(new Date().getFullYear()) - this.Birthyear;
}
say(speech){
    console.log(speech)
}
attack(){
    console.log(`I am attacking with power = ${this.power} and weapon = ${this.weapon}`)
}
    
}
const h1 = new Hero("Superman","Fly","Laser",100,1990);
const h2 = new Hero("Batman","Boxing","Guns",115,1995);
const h3 = new Hero("Spiderman","Karate","Misile",105,1998);

h1.say("I am Superman")
console.log(h2.age())
h3.attack()