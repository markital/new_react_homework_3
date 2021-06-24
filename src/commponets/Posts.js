import Post from "./Post";
import React, {useEffect, useState} from "react";
export default function Posts(){

    const [post, setPost] = useState([]);
    console.log(post);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);
    return (
        <div>
            {post.map(value => <Post id={value.id} userId={value.userId} title={value.title }/>)}
        </div>)
}
