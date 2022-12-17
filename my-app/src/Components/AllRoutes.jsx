import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/home";
import Login from "../Pages/Login";
import Women from "../Pages/Women";
import Register from "../Pages/Register";

const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Women" element={<Women/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;