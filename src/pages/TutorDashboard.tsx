import React from 'react';
import AppNav from '../components/AppNav';
import Classes from '../components/Classes';
import StatsCard from '../components/ui/StatsCard';
import StudentListWrapper from '../components/StudentList'; 

const statsData = [
    { amount: 3, description: "Active Classes" },
    { amount: 47, description: "Total Students" },
    { amount: 12, description: "Active Assessments" },
    { amount: 89, description: "Pending Grades" },
];

const TutorDashboard = () => {
    return (
        <div className="px-3 py-2">
            <AppNav userName="John Doe" />

            <div className="mt-4 flex space-x-2">
                {statsData.map((stat) => (
                    <StatsCard
                        key={stat.description}  // added key here
                        amount={stat.amount}
                        description={stat.description}
                    />
                ))}
            </div>

            <div className="flex space-x-2 mt-4">
                <Classes />
            </div>

            {/* Add the student list below */}
            <div className="mt-6">
                <StudentListWrapper />
            </div>
        </div>
    );
};

export default TutorDashboard;
