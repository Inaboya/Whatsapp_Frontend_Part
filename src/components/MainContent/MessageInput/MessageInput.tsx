import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import Pusher from "pusher-js";
import axios from "axios";
import styles from "./MessageInput.module.scss";
import { GlobalStateContext } from "../../../context/GlobalState";
import { CgAddR } from "react-icons/cg";
import { AiOutlineAudio, AiOutlineSend } from "react-icons/ai";

// const ENDPOINT = "http://localhost:3050";
// let socket, selectedChatCompare;
// let user = {
//   name: "Test",
//   _id: "123xxx",
// };

interface MessageDataInputs {
  [key: string]: any;
}

const MessageInput: React.FC<MessageDataInputs> = ({ conversations }) => {

  const { accessToken } = useContext(GlobalStateContext)
  const [inputs, setInputs] = useState("");

  console.log(accessToken, "checking for token")

  const sendMessage = async () => {
    // e.preventDefault();

    try {
      if (inputs !== "") {
        await axios.post(
          "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
          {
            text: inputs,
          }, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        setInputs("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.message__input}>
      <p> 😊 </p>
      <i>
        <CgAddR />
      </i>

      <input
        type="text"
        onChange={(e) => setInputs(e.target.value)}
        value={inputs}
        placeholder="Type a message"
        onKeyPress={(e) => {
          e.key === "Enter" && sendMessage();
        }}
      />

      <button onClick={sendMessage} type="submit">
        <AiOutlineSend />
      </button>

      <i>
        <AiOutlineAudio />
      </i>
    </div>
  );
};

export default MessageInput;
