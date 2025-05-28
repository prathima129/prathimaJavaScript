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