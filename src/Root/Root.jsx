import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;