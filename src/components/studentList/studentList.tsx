
import StudentRow from './studentRow';  // Assuming the filename is studentRow.jsx
import students from './students';          // Make sure data.js contains your students array

const StudentList = () => {
  return (
    <div className="rounded-lg border p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 font-semibold">Student ID</th>
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold">Email</th>
            <th className="p-2 font-semibold">Grade</th>
            <th className="p-2 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
