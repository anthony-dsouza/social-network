import styles from "./NewMsgItem.module.css";

const NewMsgItem = (props) => {
    const selfId = +localStorage.getItem("user_id");
    console.log("selfId new msg", selfId);
    return (
        <div className={`${props.sourceid === selfId ? styles["self-msg"] : styles["frd-msg"]}`}>    
        {props.msg}
        </div>
    );
};

export default NewMsgItem;