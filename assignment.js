let colours=["red","blue","green","yellow","pink"]
console.log(colours[0])
console.log(colours[2])
console.log(colours[4])

let object=[{name:"car", brand:"mercedes", model:"maybach", year:2022, price:40000},]
let carkeys=Object.keys(object[0])
console.log(carkeys)
let carvalues=Object.values(object[0])
console.log(carvalues)
let carentries=Object.entries(object[0])
console.log(carentries)

//if
if (temperature>30)
    console.log("it's hot")
    if (temperature<=30){
        console.log("it's cold")
}

//else if
    PerformanceMark[marks=100]
 if(marks>=75){
    console.log("Distinction")
 }else if(marks>=60)
    console.log("Credit")
else if(marks>=50){
    console.log("Pass")
}else{
    console.log("Fail")
}

loops
for(let i=5; i<=100; i++){
    console.log(i)
}

//Looping through arrays
let products=["laptop","headphones","tablet","charger","phone"]
for(let i=0; i<products.length; i++){
    console.log(products[i])
}

let Numbers=[1,2,3,4,5,6,7,8,9,10]
for(let num of Numbers){
    console.log(num)
    if(num===10){
        break
    }
}

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let num of numbers){
    if(num===13){
        console.log("number 13 found")
        break
    }
}