
function display() {
    let rows = ""
    for (user of users) {
        rows = rows + `<tr>
                             <td>${user.id}</td>
                             <td>${user.name}</td>
                             <td>${user.email}</td>
                             <td>${user.gender}</td>
                        </tr>`
    }

    document.getElementById('tbody_Data').innerHTML = rows
}