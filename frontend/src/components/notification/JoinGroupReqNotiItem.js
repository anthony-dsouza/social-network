import { useContext } from "react";
import SmallButton from "../UI/SmallButton";
import { WebSocketContext } from "../store/websocket-context";
import Avatar from "../UI/Avatar";

const JoinGroupReqNotiItem = (props) => {
    const wsCtx = useContext(WebSocketContext);

    const acceptJoinReqHandler = () => {
        console.log("request accepted: ");
        const notiReplyPayloadObj = {};
        notiReplyPayloadObj["label"] = "noti";
        notiReplyPayloadObj["id"] = Date.now();
        notiReplyPayloadObj["type"] = "join-req-reply";
        notiReplyPayloadObj["sourceid"] = props.targetId;
        notiReplyPayloadObj["targetid"] = props.srcUser.id;
        notiReplyPayloadObj["accepted"] = true;
        console.log("gonna send reply (accept) to join req : ", notiReplyPayloadObj);
        if (wsCtx.websocket !== null) wsCtx.websocket.send(JSON.stringify(notiReplyPayloadObj));
    };
    const declineJoinReqHandler = () => {
        console.log("request declined: ");
        const notiReplyPayloadObj = {};
        notiReplyPayloadObj["label"] = "noti";
        notiReplyPayloadObj["id"] = Date.now();
        notiReplyPayloadObj["type"] = "join-req-reply";
        notiReplyPayloadObj["sourceid"] = props.targetId;
        notiReplyPayloadObj["targetid"] = props.srcUser.id;
        notiReplyPayloadObj["accepted"] = false;
        console.log("gonna send reply (decline) to join req : ", notiReplyPayloadObj);
        if (wsCtx.websocket !== null) wsCtx.websocket.send(JSON.stringify(notiReplyPayloadObj));
    };
    
    return (
        <div>
            <Avatar height={50} width={50}></Avatar>
            <h3>{`${props.srcUser.fname} ${props.srcUser.lname} wants to join your group`}</h3>
            <SmallButton onClick={acceptJoinReqHandler}>Accept</SmallButton>
            <SmallButton onClick={declineJoinReqHandler}>Decline</SmallButton>
        </div>
    );
};

export default JoinGroupReqNotiItem;