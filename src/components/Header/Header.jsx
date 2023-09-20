import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="container mx-auto">
            <ul className="flex p-4 mx-auto">
                <Link to={'/'} className="p-2">Home</Link>
                <Link to={'/about'} className="p-2">About</Link>
                <Link to={'/users'} className="p-2">Users</Link>
                <Link to={'/posts'} className="p-2">Posts</Link>
                {/* <li className="p-2">Home</li>
                <li className="p-2">About</li>
                <li className="p-2">Users</li> */}
            </ul>
        </div>
    )
}

export default Header