import { useEffect } from "react";

const ChatBar = () => {
    useEffect(
        () => {
            const chatSocket = new WebSocket("ws://localhost:8080/user-message");

            chatSocket.onopen = () => console.log("chat connected");
            chatSocket.onclose = () => console.log("Bye chat");
            chatSocket.onerror = (err) => console.log("chat ws Error!");

            chatSocket.onmessage = (msg) => {
                console.log(msg.data);
                const resp = JSON.parse(msg.data);
                if (resp.label === "list-user") {
                    console.log("list-user");
                } else if (resp.label === "chat-msg") {
                    console.log("chat-msg");
                }
            };
        },[]);
};