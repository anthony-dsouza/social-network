import Post from "./Post";

import classes from './AllPosts.module.css'

function AllPosts(props) {
    return <div className={classes.container}>
        {props.posts.map((post) => (
         <Post
        key={post.id}
        id={post.id}
        avatar={post.avatar}
        fname={post.fname}
        lname={post.lname}
        nname={post.nname}
        content={post.content}
        image={post.image}
        date={post.date} 
        />
        ))}
    </div>
}

export default AllPosts;