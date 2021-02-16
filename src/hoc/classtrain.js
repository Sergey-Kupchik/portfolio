// function DeletUserAction(userID) {
//     this.name = "LOLA"
//     this.payload = {
//         userID
//     }
// }
//
// const a1 = new DeletUserAction(1212)
// const a2 = new DeletUserAction(189731987213)
//
//
// class DeletUserClassAction {
//     constructor(userID) {
//         this.name = "LOLA"
//         this.payload = {
//             userID
//         }
//     }
// }
//
// let b1 = new DeletUserClassAction(1212)
// let b2 = new DeletUserClassAction(189731987213)
//
// const useFabric2 = () => {
//     return {
//         name: name,
//         site: "lalal",
//         dateOfBirth: new Date(1991, 2, 13),
//         hello() {
//             console.log(`I'm ${this.name}, i was born ${this.dateOfBirth}`)
//         }
//     }
// }
//
//
// class UserR {
//     constructor(userID) {
//         this.name = "LOLA"
//         this.payload = {
//             userID
//         }
//     }
//
//     hello() {
//         console.log(`I'm ${this.name} and my ID is ${this.payload.userID}`)
//     }
// }
//
//
// class UserFACK {
//     #sex = "men";
//
//     constructor(name, site, dob) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//     }
//
//     hello() {
//         debugger
//         this.counter++
//         console.log(`I'm ${this.name} i'm from ${this.site} and my i was born in ${this.dateOfBirth} I'm the ${this.#sex}`)
//     }
// }
//
// const u1 = new UserFACK("sergei", "pub", new Date(1991, 2, 13))
// const u2 = new UserFACK("kate", "mar", new Date(1991, 6, 30))
//
//
// class UserFACK2 {
//     #sex = "men";
//
//     constructor(name, site, dob, sex) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//         this.#sex = sex;
//     }
//
//     getSex() {
//         return this.#sex
//     }
//
//     setSex(value) {
//         if (value === "men" || value === "woomen") {
//             this.#sex = value
//         } else {
//             alert("How are you ????")
//         }
//     }
//
//     hello() {
//         this.counter++
//         console.log(`I'm ${this.name} i'm from ${this.site} and my i was born in ${this.dateOfBirth} I'm the ${this.#sex}`)
//     }
// }
//
// const c1 = new UserFACK2("sergei", "pub", new Date(1991, 2, 13), "men")
// const c2 = new UserFACK2("kate", "mar", new Date(1991, 6, 30), "women")
//
//
// class UserFACK3 {
//     #sex = "men";
//
//     constructor(name, site, dob, sex) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//         this.#sex = sex;
//     }
//
//     get sex() {
//         return this.#sex
//     }
//
//     set sex(value) {
//         if (value === "men" || value === "woomen") {
//             this.#sex = value
//         } else {
//             alert("How are you ????")
//         }
//     }
//
//     hello() {
//         this.counter++
//         console.log(`I'm ${this.name} i'm from ${this.site} and my i was born in ${this.dateOfBirth} I'm the ${this.#sex}`)
//     }
// }
//
// const w1 = new UserFACK3("sergei", "pub", new Date(1991, 2, 13), "men")
// const w2 = new UserFACK3("kate", "mar", new Date(1991, 6, 30), "women")
//
//
// class Coder extends UserFACK3 {
//     constructor(name, site, dob, sex, stack) {
//         super(name, site, dob, sex,);
//         this.stack = stack
//     }
//
//     code() {
//         console.log(`hi! I'm ${this.name} and my sex is ${this.sex} my code ${this.stack} is blalbla`)
//     }
//
//     hello() {
//         super.hello();
//         console.log("I'm boss")
//     }
// }


const a= ()=>{
    console.log("AAAAAAAAA")
}