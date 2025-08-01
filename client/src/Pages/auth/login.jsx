
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
const initialstate={
    email:'',
    password:''
}
function onSubmit(){

}
function AuthLogin(){
    const [formData,setFormData]=useState(initialstate)
    return (
        <div className="max-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
                <p>Don't have an account <Link className="font-medium text-fuchsia-950 hover:bg-pink-500" to='/auth/register'>Register</Link></p>
            </div>
            <CommonForm formControls={loginFormControls} buttonText={"sign in"} formData={formData} setFormData={setFormData} onSubmit={onSubmit} className='bg-blue-700'>

            </CommonForm>
           
        </div>
    )
}
export default AuthLogin;