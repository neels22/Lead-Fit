import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";


export function Signup() {
    
function onChange() {
    console.log("hi")
}

    return(
        <div className="flex justify-center items-center h-screen">
        <div className="text-center border border-blue-500 w-2/4 rounded-2xl pb-5 bg-slate-200">

            <Heading label={"Sign Up"}/>

            <InputBox onChange={onChange} placeholder={"Name"} label={"Your Name"}/>
            <InputBox onChange={onChange} placeholder={"Username"} label={"Your Username"}/>
            <InputBox onChange={onChange} placeholder={"Password"} label={"Your Password"}/>
            <InputBox onChange={onChange} placeholder={"Email"} label={"Your Email"}/>

        </div>
        </div>
    )
}