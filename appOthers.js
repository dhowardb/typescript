"use strict";
//in typescript rewriting classes
class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } //converted as properties
    print() {
        console.log(this.name);
    }
}
