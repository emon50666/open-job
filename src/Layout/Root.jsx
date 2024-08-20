import { Outlet,  } from "react-router-dom";
import Navbar from "../components/Header/Navbar";




const Root = () => {

 
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            

            {/* outlate */}
            <Outlet></Outlet>

            {/* footer */}
        </div>
    );
};

export default Root;