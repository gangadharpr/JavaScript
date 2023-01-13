let employees=[{id:101,Name:"ram",salary:40000},
{ id: 102, Name: "Sonia", salary: 55000 },
{ id: 102, Name: "Sonia", salary: 55000 }]

function display(){
    var rows=""
    setTimeout(()=>{
        employees.forEach((employee)=>{
    rows=rows+ `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.Name}</td>
                    <td>${employee.salary}</td>
                    </tr>`
             
    })
    document.getElementById('tbody_Data').innerHTML=rows
},[3000])}