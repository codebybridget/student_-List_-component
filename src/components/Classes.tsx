import ClassItem from "./ClassItem";
import Button from "./ui/Button";
const classData = [
    { title: "React Fundamentals", studentCount: 15, assessmentCount: 3 },
    { title: "Advanced Javascript", studentCount: 22, assessmentCount: 5 },
    { title: "Node.JS Backend", studentCount: 10, assessmentCount: 4 },
];

const Classes = () => {
    return (
        <div className="w-full border border-gray-500 bg-gray-100 rounded-xl p-2">
            <h2 className="font-bold">My Classes</h2>
            <div className="flex flex-col space-y-2">
                {classData.map((item) => (
                    <ClassItem
                        title={item.title}
                        studentCount={item.studentCount}
                        assessmentCount={item.assessmentCount}
                    />
                ))}
            </div>
            <div className="mt-4 w-[20%]">
                <Button style="bg-green-700 text-white">
                    <span className="text-sm"> + Create New Class</span>
                </Button>
            </div>
        </div>
    );
};

export default Classes;
