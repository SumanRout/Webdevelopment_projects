import { Routes,Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./Pages/auth/login"
import AuthRegister from "./Pages/auth/Register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./Pages/admin-view/dashboard"
import AdminProducts from "./Pages/admin-view/product"
import AdminOrder from "./Pages/admin-view/order"
import AdminFeatures from "./Pages/admin-view/features"

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<AuthLogin/>}/>
        <Route path="register" element={<AuthRegister/>} />

        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="orders" element={<AdminOrder/>}/>
        <Route path="feature" element={<AdminFeatures/>}/>


        </Route>
      </Routes>

    </div>
    
  )
}

export default App
