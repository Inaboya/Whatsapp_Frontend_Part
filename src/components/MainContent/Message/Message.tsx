import React from "react";
import styles from "./Message.module.scss";
import TextMessage from "./TextMessage/TextMessage";
import ImageMessage from "./ImageMessage/ImageMessage";
import VideoMessage from "./VideoMessage/VideoMessage";
// import AudioMessage from "./AudioM/AudioMessage";
import { RiLock2Line } from "react-icons/ri";

const Message = () => {
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
        <TextMessage />
        <TextMessage reciever={true} />
        <TextMessage />
        <TextMessage reciever={true} />
        <ImageMessage />
        <TextMessage reciever={true} />
        <VideoMessage />
        {/* <AudioMessage /> */}
      </div>
    </div>
  );
};

export default Message;
