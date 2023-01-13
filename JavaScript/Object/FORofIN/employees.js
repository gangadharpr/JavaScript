let employees = ["Dileep", 'Manohar', 'Vasu', "PK", "Balayya", 'Sharuk']
//index           0          1          2       3       4           5
//iterate array using while loop
/*
initilization :  let i = 0
condition st  :  i<=employees.length - 1
incr          : i++
*/

/* let i = 0;
while (i <= employees.length - 1) {
    console.log(employees[i])
    i++
} */
for (employee of employees) {
    console.log(employee)
}