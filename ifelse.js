//if else statement

let age=20;
if(age>18){
    console.log("You are eligible for driving")
}
else{
    console.log("You are not eligible for driving")
}

let alive=true;
if(alive==true) {
    console.log("He is Alive")
}
else{ 
    console.log("He is ded")
}

const marks=10;
let grade;
if(marks>=90) {
    grade = "A+";
}
else if(marks>=80){
    grade="A";
}
else if(marks>=70) {
    grade="B";
}
else if(marks>=60){
    grade="C";
}
else if(marks>=50) {
    grade="D";
}
else {
    grade="Fail";
}
console.log(grade);