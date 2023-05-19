"use strict";
class Yongdo {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    walk() {
        //
    }
}
class RideBike {
    constructor(person) {
        this.person = person;
    }
    ride() {
        console.log(`${this.person.name}의 나이는 ${this.person.age}입니다.!!!`);
    }
}
const rideBike = new RideBike(new Yongdo(32, "yongdo"));
rideBike.ride();
let testMap = {
    title: 'zz',
    desc: "ss"
};
let testMap2 = Object.assign(Object.assign({}, testMap), { title: "111" });
console.log(testMap2);
