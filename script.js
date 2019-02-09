const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    const res = JSON.parse(xhttp.responseText);
    let output = '';
    for( i = 0; i < 20; i++ ) {
        output += `
                    <tr>
                        <td>${res[i].id}</td>
                        <td>${res[i].employee_name}</td>
                        <td>${res[i].employee_age}</td>
                        <td>${res[i].employee_salary}</td>
                    </tr>
                    </table`;
    }
    document.getElementById('uls').innerHTML = output;
}
xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees")
xhttp.send();
