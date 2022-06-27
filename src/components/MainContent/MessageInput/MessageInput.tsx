import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Pusher from "pusher-js";
import axios from "axios";
import styles from "./MessageInput.module.scss";
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

const MessageInput: React.FC = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState({} as MessageDataInputs);

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", user);
  //   socket.on("connection", () => setSocketConnected(true));
  // }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk2NmE4YTliZmFjOWEzMGJlNzk3YSIsImlhdCI6MTY0NTk3ODcyNH0.a--rDRdkWYd5r6wkExrw4GKfcFx_tB7aM7yfA7nPXUU`,
            },
          }
        );

        const { data } = res;
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    };

    getChats();
  }, []);

  console.log(conversations, "convos");

  useEffect(() => {
    const pusher = new Pusher("94d55bd3b0ecf1274ef3", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data: any) => {
      alert(JSON.stringify(data));
    });
  }, []);

  const handleChange = (e: any) => {
    setCurrentChat(e.target.value);
  };

  return (
    <div className={styles.message__input}>
      <p> 😊 </p>
      <i>
        <CgAddR />
      </i>

      <input
        type="text"
        name="message"
        onChange={handleChange}
        placeholder="Say Something..."
      />

      <button type="submit">
        <AiOutlineSend />
      </button>

      <i>
        <AiOutlineAudio />
      </i>
    </div>
  );
};

export default MessageInput;
