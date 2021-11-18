// eslint-disable-next-line no-unused-vars
function addRow(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;

    var row = `<tr>
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${city}</td>
                </tr>`;

    document.getElementById("table").innerHTML += row;         
}