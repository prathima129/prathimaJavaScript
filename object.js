/* Objects are of
Read
Write
Update
Delete
Example:
*/
let person={
    fname:"Prathima",
    lname:"Shrestha",
    age:19,
    email:"prathima.shrestha@gmail.com"
}
console.log(person)

//To add a new key in an object like for exaple i want to add my contact number

person.contactnumber=8106869139 //add
console.log(person)

//To update the existing value for example i want to update my age

person.age=20; //update
console.log(person)

//To delete the key for example if i want to delete my email key

delete person.email //delete
console.log(person)

/*Array:collection of data and its type
it stores data in an index format starts with */

let fruits = ["Apple","Mango","Orange"]
console.log(fruits)

let cities=["Hyd","Mumbai","Delhi","Kolkata"]
console.log(cities)

let friends=["Rahman","Is","An","Idiot","Boy"]
console.log(friends)
console.log(friends[0])

cities[2]="NP" //updating array element
cities[4]="TN" //add element
console.log(cities)

delete cities[0] //delete the array
console.log[cities]