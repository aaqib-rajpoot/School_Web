document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const studentID = document.getElementById('studentID').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const enrollmentDate = document.getElementById('enrollmentDate').value;

    // Create a student object
    const student = {
        studentID,
        firstName,
        lastName,
        dob,
        gender,
        email,
        phone,
        course,
        enrollmentDate
    };

    // Save to local storage
    let students = localStorage.getItem('students');
    if (students) {
        students = JSON.parse(students);
    } else {
        students = [];
    }

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // Reset form
    this.reset();

    // Alert the user
    alert('Student added successfully!');
});
