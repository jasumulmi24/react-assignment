import { Outlet } from "react-router-dom"
import { NavBar } from "../components/Navbar"

const MainLayout = () => (
    <>
        <NavBar />
         <main>
            <Outlet />
        </main>
    </>
    )
export default MainLayout;