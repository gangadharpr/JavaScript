var marks = ["lavanya", "bavani", "sonia", "vani", "meena"]
var remove=marks.shift()//removing item form the start
console.log(marks)
console.log(remove)
marks.unshift(45)// adding item start position
console.log(marks)
console.log(remove)
marks.push(6)//Adding item in array last element
console.log(marks)
var remove=marks.pop()//removing last element of the array
console.log(marks)
console.log(marks.indexOf("sonia"))// find the indexed value of specified element
console.log(marks.slice(2,3))//find specified indexed value
console.log(marks.length)//print the array total lenth
