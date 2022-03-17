import React, { useState, useEffect, useContext } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import styles from "./Message.module.scss";
import TextMessage from "./TextMessage/TextMessage";
import ImageMessage from "./ImageMessage/ImageMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
import MessageInput from "../MessageInput/MessageInput";
// import AudioMessage from "./AudioM/AudioMessage";
import { RiLock2Line } from "react-icons/ri";
import { GlobalStateContext } from "../../../context/GlobalState";

interface selectedFileType {
  [key: string]: any;
}


const Message: React.FC <selectedFileType> = ({ selectedFile }) => {
  const { accessToken } = useContext(GlobalStateContext)
  const [conversations, setConversations] = useState([] as any);
  const [receiver, setReceiver] = useState(false);

  console.log(selectedFile, "this is the file I selected at message component");
  

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // console.log(res.data)

        const { messages } = res.data;

        setConversations(messages);

        // console.log(messages);
      } catch (error: any) {
        console.log(error._message);
      }
    };

    getChats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(conversations, "incoming messages from message component");

  

  return (
    <div className={styles.message__container}>
      <div className={styles.encryption}>
        <i>
          <RiLock2Line />
        </i>
        <p>
          Messages are end-to-end encrypted. No one outside of this chat, not
          even WhatsApp can read or listen to them click to learn more.
        </p>
      </div>
      <div className={styles.messageContainer}>
        <TextMessage reciever={receiver} selectedFile={ selectedFile } setConversations={ setConversations} conversations={conversations} />

        {/* <AudioMessage /> */}
      </div>
    </div>
  );
};

export default Message;
