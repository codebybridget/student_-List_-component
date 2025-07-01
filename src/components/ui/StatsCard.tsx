interface StatsCardProps {
    amount: number;
    description: string;
}
const StatsCard = ({ amount, description }: StatsCardProps) => {
    return (
        <div className="w-full bg-sky-50 border border-sky-100 py-3 flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center">
                <p className="text-blue-600 text-3xl font-extrabold">
                    {amount}
                </p>
                <p className="text-gray-700 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default StatsCard;
