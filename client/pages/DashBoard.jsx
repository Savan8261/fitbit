import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function DashBoard() {
    return (
        // <div className="d-flex ">
        //     <div className="">
        //         <Sidebar />
        //     </div>
        //     <div className="">

        //         <Outlet />
        //     </div>
        // </div>

        <div >
            <div style={{ position: "fixed" }}>
                <Sidebar />
            </div>
            <div style={{ width: "78%", float: "right", margin: "auto" }}>
                <Outlet />
            </div>
        </div >



    )
}
