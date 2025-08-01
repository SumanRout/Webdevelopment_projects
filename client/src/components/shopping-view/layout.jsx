import ShoppingHeader from "./header";
import { Outlet } from "react-router-dom";


function ShoppingLayout(){
    return (
        <div className='flex flex-col bg-white overflow-hidden '>
            {/* common header */}
            <ShoppingHeader></ShoppingHeader>
            <main className='flex flex-xol w-full'>
                <Outlet/>
            </main>


        </div>
    )
}
export default ShoppingLayout