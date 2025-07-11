import React from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
  grade: number;
}

interface Props {
  student: Student;
}

const StudentRow: React.FC<Props> = ({ student }) => {
  const gradeColor =
    student.grade >= 90
      ? 'text-green-600'
      : student.grade >= 80
      ? 'text-green-500'
      : 'text-orange-500';

  return (
    <tr className="border-t">
      <td className="p-2">{student.id}</td>
      <td className="p-2">{student.name}</td>
      <td className="p-2">{student.email}</td>
      <td className={`p-2 font-semibold ${gradeColor}`}>{student.grade}%</td>
      <td className="p-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
          View
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
