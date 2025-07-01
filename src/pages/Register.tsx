import Navbar from "../components/Navbar";
import SignIn from "../components/register/SignIn";

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="px-5 ">
                <SignIn />
            </div>
        </>
    );
};

export default Register;
