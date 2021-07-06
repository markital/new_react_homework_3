// import {useEffect, useState} from "react";
import {getUsers} from "../Services/Api";
import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        getUsers().then(value => setUsers([...value.data]));
    }, [])
    return (
        <div>
            {users.map(value => <User item={value}/>)}
        </div>
    )
};
