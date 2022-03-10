import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageInput from "../../MessageInput/MessageInput";
import styles from "./TextMessage.module.scss";

interface MessageDataInputs {
  [key: string]: any;
}
const TextMessage: React.FC<MessageDataInputs> = ({
  conversations,
  reciever,
}) => {
  return (
    <div className={`${styles.textM} ${reciever ? styles.recipant : ""}`}>
      {conversations.map((conversation: any, index: number) => (
        <div key={index}>
          
          <p>
            {conversation.text}
          </p>
          <span>{ conversation.createdAt }</span>
        </div>
      ))}
    </div>
  );
};

export default TextMessage;
