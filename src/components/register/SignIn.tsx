import Button from "../ui/Button";
import Input from "../ui/Input";

const SignIn = () => {
    return (
        <form action="" className="flex flex-col space-y-3 mt-5">
            <Input
                labelName="Email Address"
                inputType="email"
                placeholder="Enter your email"
            />
            <Input
                labelName="Password"
                inputType="password"
                placeholder="Enter your password"
            />
            <div>
                <p>I am a :</p>
                <div className="flex space-x-3">
                    <p>
                        <input type="radio" name="userType" id="tutor" /> Tutor
                    </p>
                    <p>
                        <input type="radio" name="userType" id="student" />{" "}
                        Student
                    </p>
                </div>
            </div>
            <div>
                <Button style="text-white bg-blue-600">
                    <span> Sign In</span>
                </Button>
            </div>
            <div>
                <p className="text-sm text-gray-500 text-center">
                    Don't have an account?{" "}
                    <a href="" className="text-blue-400 underline">
                        Sign up here
                    </a>
                </p>
            </div>
        </form>
    );
};

export default SignIn;
