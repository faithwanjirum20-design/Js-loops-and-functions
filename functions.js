// A function is a block of code designed to perform a specific task.
//A function cannot run unless its called

function greet(){
    console.log("hello")
}
greet()

//functions with parameters-variables
function greetUser(name){
    console.log("hello "+name)

}
//Argument-this is exact value passed unside a function 
greetUser("john")
greetUser("mary")
greetUser("mike")

function add(x,y,z){
    console.log(x+y+z)
}
add(5,10,70)

//Functions with return values
function tatolPrice(Price,quantity){
return price*quantity
}
let amaount=totalPrice(1000,6)
console.log(amaount)

function area(length,width){
    return length*width

}

let results=area(20,50)
console.log(results)

//functions with conditional statements
function checkAge(age){
    if(age<=180){
        console.log("you are an adult")

    }else{
        console.log("you are a minor")
    }
}
checkAge(20)
checkAge(15)

//function with default parameter
function greetings(name="guest"){
    console.log("hello +name")

}
greetings()
greetings("Benjamin")

