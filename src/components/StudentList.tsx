import React, { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

const LOCAL_STORAGE_KEY = 'studentsData';

const StudentList: React.FC = () => {
  
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedStudents
      ? JSON.parse(savedStudents)
      : [
          { id: 1, name: 'Alice Johnson', age: 20, course: 'React Fundamemtals' },
          { id: 2, name: 'Brian Smith', age: 22, course: 'Advanced Javascript' },
          { id: 3, name: 'Charlie Williams', age: 21, course: 'Node.JS' },
        ];
  });

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newCourse, setNewCourse] = useState('');

  
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingAge, setEditingAge] = useState('');
  const [editingCourse, setEditingCourse] = useState('');

  
  const addStudent = () => {
    const trimmedName = newName.trim();
    const trimmedCourse = newCourse.trim();
    const ageNum = Number(newAge);

    if (!trimmedName || !trimmedCourse || isNaN(ageNum) || ageNum <= 0) {
      alert('Please enter valid Name, Age (>0), and Course');
      return;
    }

    const newStudent: Student = {
      id: students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1,
      name: trimmedName,
      age: ageNum,
      course: trimmedCourse,
    };

    setStudents([...students, newStudent]);
    setNewName('');
    setNewAge('');
    setNewCourse('');
  };

  
  const deleteStudent = (id: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  
  const startEditing = (student: Student) => {
    setEditingId(student.id);
    setEditingName(student.name);
    setEditingAge(student.age.toString());
    setEditingCourse(student.course);
  };

  
  const saveEdit = (id: number) => {
    const trimmedName = editingName.trim();
    const trimmedCourse = editingCourse.trim();
    const ageNum = Number(editingAge);

    if (!trimmedName || !trimmedCourse || isNaN(ageNum) || ageNum <= 0) {
      alert('Please enter valid Name, Age (>0), and Course');
      return;
    }

    setStudents(
      students.map(s =>
        s.id === id
          ? { ...s, name: trimmedName, age: ageNum, course: trimmedCourse }
          : s
      )
    );
    cancelEdit();
  };

  
  const cancelEdit = () => {
    setEditingId(null);
    setEditingName('');
    setEditingAge('');
    setEditingCourse('');
  };

  return (
    <div className="w-screen h-screen p-6 bg-white overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Student List</h2>

      {/* Add New Student Form */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Age"
          value={newAge}
          onChange={e => setNewAge(e.target.value)}
          min={1}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Course"
          value={newCourse}
          onChange={e => setNewCourse(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addStudent}
          className="bg-blue-600 text-white font-semibold rounded px-5 hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 font-semibold border-b border-gray-300 pb-2 mb-3">
        <div>ID</div>
        <div>Name</div>
        <div>Age</div>
        <div>Course</div>
        <div>Actions</div>
      </div>

      {/* Student List */}
      <ul>
        {students.map(student => (
          <li
            key={student.id}
            className="grid grid-cols-5 gap-4 items-center border-b border-gray-200 py-3"
          >
            <div>{student.id}</div>

            {editingId === student.id ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={e => setEditingName(e.target.value)}
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  value={editingAge}
                  onChange={e => setEditingAge(e.target.value)}
                  min={1}
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  value={editingCourse}
                  onChange={e => setEditingCourse(e.target.value)}
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => saveEdit(student.id)}
                    className="bg-green-600 text-white rounded px-4 py-1 hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-300 text-gray-700 rounded px-4 py-1 hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>{student.name}</div>
                <div>{student.age}</div>
                <div>{student.course}</div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => startEditing(student)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}

        {students.length === 0 && (
          <li className="py-8 text-center text-gray-500">No students found.</li>
        )}
      </ul>
    </div>
  );
};

export default StudentList;
