import styles from "./UserChatItem.module.css";
import Avatar from "../../UI/Avatar";
import AvatarForChatOffline from "../../UI/AvatarForChatOffline";
import AvatarForChatOnline from "../../UI/AvatarForChatOnline";
import Card from "../../UI/Card";

const ChatUserItem = (props) => {
    const defaultImagePath = "default_avatar.jpg";

    const openChatboxHandler = () => {
        console.log("user chat item clicked");
        props.onOpenChatbox(props.id);
    };
    
    return (
        <div className={styles["item"]} onClick={openChatboxHandler}>
            {/* {!props.avatar && <AvatarForChatOnline className={styles["chat-avatar"]} src={require("../../../images/"+`${defaultImagePath}`)} alt="" height={"30px"} width={"30px"}/>}
            {props.avatar && <AvatarForChatOnline className={styles["chat-avatar"]} src={props.avatar} alt="" height={"30px"} width={"30px"}/>} */}
            {!props.avatar && <AvatarForChatOffline className={styles["chat-avatar"]} src={require("../../../images/"+`${defaultImagePath}`)} alt="" height={"30px"} width={"30px"}/>}
            {props.avatar && <AvatarForChatOffline className={styles["chat-avatar"]} src={props.avatar} alt="" height={"30px"} width={"30px"}/>}
            <div><p className={styles["details"]}>{`${props.fname} ${props.lname} ${props.nname}`}</p></div>
        </div>
    );
};

export default ChatUserItem;