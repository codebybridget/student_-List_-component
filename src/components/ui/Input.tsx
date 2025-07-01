interface InputProps {
    labelName: string;
    inputType: string;
    placeholder: string;
}
const Input = ({ labelName, inputType, placeholder }: InputProps) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor={labelName} className="w-full">
                {labelName}
            </label>
            <input
                type={inputType}
                className="w-full py-3 px-1 border border-gray-100 rounded-xl"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
