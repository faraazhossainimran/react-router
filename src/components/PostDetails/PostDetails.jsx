import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    console.log(postId);
    const navigate = useNavigate();
    const {id, title, body} = post;
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="container mx-auto">
            
           <div className="text-center py-16">
           <h1 className="text-3xl">{title}</h1>
            <p className="text-xl">{body}</p>
            <button onClick={handleGoBack} className="btn my-8">Go back</button>
           </div>
        </div>
    )
}

export default PostDetails