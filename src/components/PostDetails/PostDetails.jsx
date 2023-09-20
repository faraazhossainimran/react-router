import { useLoaderData } from "react-router-dom"

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {id, title, body} = post;
    console.log(title);
    return (
        <div className="container mx-auto">
            
           <div className="text-center py-16">
           <h1 className="text-3xl">{title}</h1>
            <p className="text-xl">{body}</p>
           </div>
        </div>
    )
}

export default PostDetails