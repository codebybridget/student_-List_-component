import AppNav from "../components/AppNav";
import Classes from "../components/Classes";
import StatsCard from "../components/ui/StatsCard";
import StudentList from "../components/studentList/studentList"; 

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
                {statsData.map((stat, index) => (
                    <StatsCard
                        key={index}
                        amount={stat.amount}
                        description={stat.description}
                    />
                ))}
            </div>

            <div className="mt-6">
                <Classes />
            </div>

            <div className="mt-6">
                <StudentList /> {/* ✅ Added student list here */}
            </div>
        </div>
    );
};

export default TutorDashboard;
