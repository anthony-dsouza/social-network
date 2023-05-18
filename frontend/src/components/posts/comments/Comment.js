import { Link } from "react-router-dom";
import classes from './Comment.module.css'

// import profile from '../../assets/profile.svg'
import Avatar from '../../UI/Avatar';
    

function Comment(props) {
    return (
    <>
        <div className={classes["author"]}>
        <Link to={`/profile/${props.authorId}`} >
            <Avatar className={classes["comment-avatar"]} id={props.authorId} src={props.avatar} alt="" width={"50px"}/>
        </Link>
        <Link to={`/profile/${props.authorId}`} >
            <div><p className={classes["details"]}>{`${props.fname} ${props.lname} ${props.nname}`}</p></div>
        </Link>
        </div>
        <div className={classes["create-at"]}>{props.createdAt.split(".")[0]}</div>
        <div className={classes.content}>{props.message}</div>
        {props.image && <div><img src={props.image} alt="" width={"100px"}/></div>}
    </>
    );
}

export default Comment;