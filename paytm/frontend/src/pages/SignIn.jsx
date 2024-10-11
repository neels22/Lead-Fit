import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

import { Button } from "../components/Button";
import { SubHeading } from "../components/SubHeading";

import { BottomWarning } from "../components/BottomWarning";
export function Signin() {
    function onChange() {
        console.log("hi")
    }

    return(

        <div className="flex justify-center items-center h-screen">
        <div className="text-center border border-blue-500 w-2/4 rounded-2xl pb-5 bg-slate-200">

            <Heading label={"Sign In"}/>

            <SubHeading label={"This is sign in page"}/> 

            <InputBox onChange={onChange} placeholder={"Username"} label={"Your Username"}/>
            <InputBox onChange={onChange} placeholder={"Password"} label={"Your Password"}/>

            <Button label={"Sign In"}/>

            <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
        </div>

    )
}