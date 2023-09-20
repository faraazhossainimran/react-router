import { Link } from "react-router-dom";


const Post = ({post}) => {
const {title, id} = post;
    return (
        <div className="container mx-auto">
            <h1 className="text-xl"> {title}</h1>
            {/* <Link></Link> */}
            <Link to={`/post/${id}`}>show details</Link>
        </div>
    )
}

export default Post