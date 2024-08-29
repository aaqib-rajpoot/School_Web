document.addEventListener('DOMContentLoaded', function() {
    // Retrieve student data from Local Storage
    let students = localStorage.getItem('students');
    if (students) {
        students = JSON.parse(students);

        const studentTableBody = document.querySelector('#studentTable tbody');

        // Loop through students and create table rows
        students.forEach(student => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.studentID}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.dob}</td>
                <td>${student.gender}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.course}</td>
                <td>${student.enrollmentDate}</td>
            `;

            studentTableBody.appendChild(row);
        });
    } else {
        // Display a message if no data is found
        const studentTableBody = document.querySelector('#studentTable tbody');
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 9;
        cell.textContent = 'No records found';
        row.appendChild(cell);
        studentTableBody.appendChild(row);
    }
});
