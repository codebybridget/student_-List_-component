interface TabProps {
    title: string;
    linkTo: string;
}
interface ActionTabProps {
    tabs: TabProps[];
}
const ActionTabs = ({ tabs }: ActionTabProps) => {
    return (
        <div className="flex space-x-3">
            {tabs.map((tab) => (
                <a href={tab.linkTo} className="py-2 px-4 bg-gray-300 text-sm">
                    {tab.title}
                </a>
            ))}
        </div>
    );
};

export default ActionTabs;
