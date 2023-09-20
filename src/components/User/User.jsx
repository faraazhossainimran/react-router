import { Link } from "react-router-dom"

const User = ({user}) => {
    const {id, name, email,phone} = user
    return (
        <div className="container mx-auto p-4 border-4 m-4 border-indigo-500/50 rounded-lg">
           <div className="text-center">
           <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`} className="py-8">
                <button className="btn text-xl text-[blue] font-semibold my-8">Show details</button>
            </Link>
           </div>
        </div>
    )
}

export default User