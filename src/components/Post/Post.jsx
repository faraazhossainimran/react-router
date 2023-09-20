import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
const {title, id} = post;
const navigate = useNavigate()
const handleDetails = () => {
    navigate(`/post/${id}`)
}
    return (
        <div className="container mx-auto">
            <h1 className="text-xl"> {title}</h1>
            {/* <Link></Link> */}
            <Link to={`/post/${id}`}>show details</Link>
            <button onClick={handleDetails}>Click to show details</button>
        </div>
    )
}

export default Post