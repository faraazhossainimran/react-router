import { Link, NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <div className="container mx-auto">
            <ul className="flex p-4 mx-auto text-3xl">
                <NavLink to={'/'} className="p-2">Home</NavLink>
                <NavLink to={"/about"} className="p-2">About</NavLink>
                <NavLink to="/users" className={"p-2"}>Users</NavLink>
                <NavLink to={'/posts'} className="p-2">Posts</NavLink>
            </ul>
        </div>
    )
}

export default Header