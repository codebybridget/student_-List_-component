import Button from "./ui/Button";
interface ClassProps {
    title: string;
    studentCount: number;
    assessmentCount: number;
}

const ClassItem = ({ title, studentCount, assessmentCount }: ClassProps) => {
    return (
        <div className="w-full border border-gray-500 rounded py-3 px-2">
            <p className="font-extrabold">{title}</p>
            <p className="text-sm">
                {studentCount} students . {assessmentCount} assessments
            </p>
            <div className="mt-4 w-[20%]">
                <Button style="bg-blue-600 text-white">
                    <span>View Class</span>
                </Button>
            </div>
        </div>
    );
};

export default ClassItem;
