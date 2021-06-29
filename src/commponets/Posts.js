import Post from "./Post";
import React, {useEffect, useState} from "react";
import {getPosts} from "../Services/Api";
export default function Posts(){

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data);
        });
    }, []);

    const onPostsDetails = (id) => {
        console.log(id);
    }
    return (
        <div>
            {posts.map(value => <Post
                key={value.id}
                id={value.id}
                userId={value.userId}
                title={value.title }
                onPostsDetails={onPostsDetails}
            />)}


        </div>)
}
