class Human {
    constructor(name,age){
        this.name = name ;
        this.age  = age ;
    }

    speak(){
        console.log(`my name is ${this.name}`)
    }

    ageValidation(){
        if(this.age >= 18){
            console.log(`allowd to fuck`)
        }
        else{
            console.log('not allowd to fuck')
        }
    }

    walk(){
        console.log('Walking is good for health')
    }

}

let s = new Human('janwar',19);

s.speak()
s.ageValidation()

class GuessNum {
    constructor(range,input){
        this.input = range ;
        this.input = input ;
    }

    getArandomNum(){
         Math.floor(Math.random() * 10) + 1;
        
    }

    isWinner(){
        if(this.getArandomNum === this.input){
            console.log(`winner ${this.getArandomNum} `)
        } else{
            console.log(`Loser ${this.getArandomNum}`)
        }
    }

}

let g = new GuessNum(10,7);

g.getArandomNum()
g.isWinner()