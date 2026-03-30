//map()-used to transform every item in an array into something new

let numbers=[1,2,3,4,5]
let doubled=numbers.map((num)=>{
   return num*2 
})
console.log(doubled)

let names=["ann","Brian","Chris"]
let upperNames=names.maps((name)=>{
    return name.toUppercase()
})
console.log(upperNames)
//.filter() used to select items that meets a condition.
let marks=[40,56,34,70,85]
let passedStudents=marks.filter((mark)=>{
 return mark>=50
})
let fruits=["apple","banana","avocado","Orange"]
let afruits=fruits.filter((fruit)=>{
return fruits.startsWith("a")
})
console.log(afruits)

//.find Used to get first item that matches a condition.

let scores=[5,10,12,50,70]
let results=scores.find((score)=>{
    return score>10
})
console.log(result)

let students=("Ann","Brian","Chris")
let studentLength=students.find((student)=>{
    return student.length>4
    
})
console.log(studentLeng)