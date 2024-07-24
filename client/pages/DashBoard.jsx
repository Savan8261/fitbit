import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function DashBoard() {
    return (
        <div className="d-flex w-100">
            <div className="">
                <Sidebar />
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}
