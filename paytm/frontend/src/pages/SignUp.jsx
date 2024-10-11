import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";

export function Signup() {
    
function onChange() {
    console.log("hi")
}

    return(
        <div className="flex justify-center items-center h-screen">
        <div className="text-center border border-blue-500 w-2/4 rounded-2xl pb-5 bg-slate-200">

            <Heading label={"Sign Up"}/>
            <SubHeading label={"This is sign up page"}/>
            <InputBox onChange={onChange} placeholder={"Name"} label={"Your Name"}/>
            <InputBox onChange={onChange} placeholder={"Username"} label={"Your Username"}/>
            <InputBox onChange={onChange} placeholder={"Password"} label={"Your Password"}/>
            <InputBox onChange={onChange} placeholder={"Email"} label={"Your Email"}/>

            <Button label={"Sign Up"}/>
            <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
        </div>
    )
}