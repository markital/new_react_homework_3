import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./Comps/Users";
import Posts from "./Comps/Posts";
// import {useEffect, useState} from "react";
// import {getPosts,getUsers} from "./Services/Api";
import Comments from "./Comps/comments/Comments";

export default function App () {
    // const [users, setUsers] = useState([]);
    // useEffect(()=> {
    //     getUsers().then(value => setUsers(value.data));
    // }, [])
    // console.log(users);
    return (
        <Router>
            <div>

                <Link to={"/users"}>to users page</Link>
                <br/>
                <Link to={"/posts"}>to posts page</Link>
                 <br/>
                <Link to={"/comments"}>to comments page</Link>
                <br/>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'} component={Comments}/>}

                </Switch>


    </div>
        </Router>
    );
};