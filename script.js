let x =5;

console.log(x)

let a = [56,76,89,2,0]

console.log(a)

console.log(a.length)

a.push(a)
console.log(a[100])

let b = ["car", "`bike`", "truck"]

console.log(b)      
console.log(b[1])

for (let i = 0; i <b.length; i++) {
    console.log('foo', i, b[i]);
}

let rectangle = {width: 25, height:50, area:()=>{return 25*50}}


let area = () => 25*50

let person1 = {name: 'nana', age: 46}
let person2 = {name: 'jeff', age: 18}
let person3 = {name: 'ava', age: 15}

let people=[person1, person2, person3]

console.log((person1.age + person2.age +person3.age) / 3)

for (let i=0; i<people.length; i++) {
    sum += people[i].age;
}

console.log(sum / people.length);