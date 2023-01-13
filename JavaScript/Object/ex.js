let emp = {
    id: 101,
    company_Name: 'TCS'
}
console.log(emp)

//read
console.log(emp.id)
//update
emp.company_Name = "TATA C S"
emp.name = "Rahul Gandhi"
emp.sal = 45000
emp.email = "rahul@gmail.com"
console.log(emp)
//delete
delete emp.sal

console.log(emp)