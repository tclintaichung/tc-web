const obj = {
  name: 'tclin',
  age: 68
};

console.log(obj);

const obj1 = new Object();
obj1.name = 'may';
console.log(obj1);

class Obj {
  constructor(name) {
    this.name = name;
  }
}

const myObj = new Obj('wang');
console.log(myObj.name);

let myMap = new Map();
let age = null;
let name = '';
myMap.set(name, 'tclin');
myMap.set(age, 68);

console.log(myMap);
