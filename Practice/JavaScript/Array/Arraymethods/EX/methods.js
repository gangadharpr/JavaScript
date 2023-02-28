var marks = [35, 36, 37, 38, 99]

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
console.log(marks.indexOf(38))// find the indexd value of specified element length
console.log(marks.slice(1,3))//find specified indexed length value
console.log(marks.length)//print the array total lenth
console.log(marks[marks.length-1])
