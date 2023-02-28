var marks = [35, 36, 37, 38, 99]

//for loop
for (var i=0; i<=marks.length-1;i++){ //using for loop-print all elements in array
    console.log(marks[i])
}

//while loop
var i=0;
while(i<=marks.length-1){
    console.log(marks[i])
    i++;
}
//do while loop
var i=0;
do{
    console.log(marks[i])
    i++;
}
while(i<=marks.length-1);

//for of loop

for (mark of marks){
    console.log(marks)
}
