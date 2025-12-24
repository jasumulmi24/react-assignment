import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="expenses">Expenses</NavLink>
            <NavLink to="weather">Weather</NavLink>
        </nav>

        </>
    )
}
