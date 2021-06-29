import {useState} from "react";

const Post = ({id, userId, title, onPostsDetails}) => {
    let [post, setPost] = useState(null);
    console.log(post);
    const getPost = (idPost) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + idPost)
            .then(response => response.json())
            .then(json => setPost(json))
    }

    return (
        <div>
            <h3>{id}. {title}
                <button onClick={() => {
                    getPost(id)
                    onPostsDetails(id)
                }}>Post details</button>
            </h3>

            {post && <p>{post.id} {post.body}</p>}
        </div>
    )
}
export default Post;