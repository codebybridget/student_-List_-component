import ActionTabs from "./ui/ActionTabs";

const actionTabData = [
    { title: "Dashboard", linkTo: "/" },
    { title: "My Classes", linkTo: "/" },
    { title: "Assessment", linkTo: "/" },
];

interface AppNavProps {
    userName: string;
}

const AppNav = ({ userName }: AppNavProps) => {
    return (
        <div className="w-full bg-gray-200 border border-gray-200 p-2 flex justify-between items-center">
            <div className="text-blue-600 text-2xl">TopBoard</div>
            <ActionTabs tabs={actionTabData} />
            <div>
                <span className="bg-blue-200 rounded-full text-4xl uppercase p-1">
                    {userName.split(" ")[0][0] + userName.split(" ")[1][0]}
                </span>
            </div>
        </div>
    );
};

export default AppNav;
