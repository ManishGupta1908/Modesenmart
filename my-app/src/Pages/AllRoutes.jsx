import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Womens from "./Womens"
import Checkout from "./Checkout"
import Thankyou from "./Thankyou"
function AllRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Checkout" element={<Checkout />}></Route>
            <Route path="/Women" element={<Womens />}></Route>
            <Route path="/Thankyou" element={<Thankyou />}></Route>
        </Routes>
    )
}

export default AllRoutes;