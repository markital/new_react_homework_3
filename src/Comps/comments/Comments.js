
import {useEffect, useState} from "react";
import Comment from "./Comment";
import {getComments} from "../../Services/Api";


export default function Comments() {
    const [comment, setComments] = useState([]);
    useEffect(()=> {
        getComments().then(value => setComments([...value.data]));
    }, [])
    return (
        <div>
            {comment.map(value => <Comment item={value}/>)}
        </div>
    )
};
