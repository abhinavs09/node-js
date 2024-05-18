// Inheritance

class person{
    // also make constructor
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("Do work");
    }
}

class Doctor extends person{
    work(){
        console.log("Treat Patint");
    }
}

let abhi = new Engineer;
