import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
const initialstate={
    userName:'',
    email:'',
    password:''
}
function onSubmit(){

}
function AuthRegister(){
    const [formData,setFormData]=useState(initialstate)
    return (
        <div className="max-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
                <p>Already have an account <Link className="font-medium text-fuchsia-950 hover:bg-pink-500" to='/auth/login'>Login</Link></p>
            </div>
            <CommonForm formControls={registerFormControls} buttonText={"sign up"} formData={formData} setFormData={setFormData} onSubmit={onSubmit} className='bg-blue-700'>

            </CommonForm>
           
        </div>
    )
}
export default AuthRegister;