let students = [];

function addStudent() {
    let username = document.getElementById("name").value;
    let usermarks = parseInt(document.getElementById("marks").value);

    let student = {
        "name" : username,
        "marks" : usermarks
    };

    students.push(student);
    //console.log(students);
    displayStudents();

}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = ""; // Clear the table before displaying new data

    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total += students[i].marks;

        let status = "fail";

        if(students[i].marks >= 35) {
            status = "pass";
        }else {
            status = "fail";
        }
        table.innerHTML += `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].marks}</td>
                <td>${status}</td>
            </tr>
        `;
    }

    //display total marks
    document.getElementById("total").textContent = total;

    let average = 0;
    if (students.length > 0) {
        average = total / students.length;
    }
    document.getElementById("Average").textContent = average;
}