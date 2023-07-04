// Define the array of students
var obj = document.getElementById("c1");
obj.style.backgroundColor = " black";

var obj = document.getElementById("c1");
obj.style.Color = " white";

const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree: 'Arts',
      email: 'charlie@example.com'
    }
  ];
  
  // Function to render the student list
  function renderStudentList() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';
  
    students.forEach(student => {
      const row = document.createElement('tr');
  
      // Create table cells for each student property
      Object.values(student).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
  
      // Create Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        fillFormForEdit(student);
      });
      row.appendChild(editButton);
  
      // Create Delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteStudent(student);
      });
      row.appendChild(deleteButton);
  
      tableBody.appendChild(row);
    });
  }
  
  // Function to add a new student
  function addStudent(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const degree = document.getElementById('degree').value;
    const email = document.getElementById('email').value;
  
    const newStudent = {
      ID: students.length + 1,
      name,
      age,
      grade,
      degree,
      email
    };
  
    students.push(newStudent);
    document.getElementById('addStudentForm').reset();
    renderStudentList();
  }
  
  // Function to fill the form for editing a student
  function fillFormForEdit(student) {
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('degree').value = student.degree;
    document.getElementById('email').value = student.email;
  
    const addButton = document.querySelector('#addStudentForm button');
    addButton.textContent = 'Edit Student';
    addButton.removeEventListener('click', addStudent);
    addButton.addEventListener('click', () => {
      updateStudent(student);
    });
  }
  
  // Function to update a student
  function updateStudent(student) {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const degree = document.getElementById('degree').value;
    const email = document.getElementById('email').value;
  
    student.name = name;
    student.age = age;
    student.grade = grade;
    student.degree = degree;
    student.email = email;
  
    const addButton = document.querySelector('#addStudentForm button');
    addButton.textContent = 'Add Student';
    addButton.removeEventListener('click', updateStudent);
    addButton.addEventListener('click', addStudent);
  
    document.getElementById('addStudentForm').reset();
    renderStudentList();
  }
  
  // Function to delete a student
  function deleteStudent(student) {
    const index = students.indexOf(student);
    if (index > -1) {
      students.splice(index, 1);
      renderStudentList();
    }
  }
  
  // Function to filter students by name, email, or degree
  function filterStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchInput) ||
      student.email.toLowerCase().includes(searchInput) ||
      student.degree.toLowerCase().includes(searchInput)
    );
  
    renderStudentList(filteredStudents);
  }
  
  // Attach event listeners
  document.getElementById('addStudentForm').addEventListener('submit', addStudent);
  document.getElementById('searchInput').addEventListener('input', filterStudents);
  
  // Initial rendering of the student list
  renderStudentList();
  