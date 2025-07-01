interface ButtonProps {
    children: any;
    style: string;
    clickHandler?: () => void; //? makes it optional props
}

const Button = ({ children, style, clickHandler }: ButtonProps) => {
    return (
        <button
            className={`w-full rounded-xl text-center py-3 ${style}`}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
