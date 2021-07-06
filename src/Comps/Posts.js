import {getPosts} from "../Services/Api";
import {useEffect, useState} from "react";
import User from "./Post";
import Post from "./comments/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        getPosts().then(value => setPosts([...value.data]));
    }, [])
    return (
        <div>
            {posts.map(value => <Post item={value}/>)}
        </div>
    )
};
