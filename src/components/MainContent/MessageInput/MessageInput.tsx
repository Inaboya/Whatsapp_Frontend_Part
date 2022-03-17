import React, { useEffect, useState, useContext, useRef } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import styles from "./MessageInput.module.scss";
import { GlobalStateContext } from "../../../context/GlobalState";
import { CgAddR } from "react-icons/cg";
import { AiOutlineAudio, AiOutlineSend } from "react-icons/ai";
import { useReactMediaRecorder } from "react-media-recorder";
// import Message from "../Message/Message";
import FileInputMessage from "../Message/FileInputMessage/FileInputMessage";
import Picker from "emoji-picker-react";
import AudioMessage from "../Message/AudioM/AudioMessage";

// const ENDPOINT = "http://localhost:3050";
// let socket, selectedChatCompare;
// let user = {
//   name: "Test",
//   _id: "123xxx",
// };

interface MessageDataInputs {
  [key: string]: any;
}

const MessageInput: React.FC<MessageDataInputs> = ({
  conversations,
  setConversations,
}) => {
  const { accessToken } = useContext(GlobalStateContext);
  const [inputs, setInputs] = useState("");
  const [selectedFile, setSelectedFile] = useState(null as any);
  const hiddenFileInput = useRef(null as any);
  const [previewImage, setPreviewImage] = useState([selectedFile] as any);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [audioComponent, setAudioComponent] = useState(false);

  //audio  recording
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  // console.log(accessToken, "checking for token");

  useEffect(() => {
    const pusher = new Pusher("94d55bd3b0ecf1274ef3", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages: any) => {
      setConversations([...conversations, newMessages]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(conversations, "incoming conversations");

  const sendMessage = async () => {
    // e.preventDefault();

    try {
      if (inputs !== "") {
        await axios.post(
          "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
          {
            text: inputs,
            // mediaType: selectedFile,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setInputs("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle File Submit Upload

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", selectedFile);

    try {
      const res = await axios.post(
        "http://localhost:3050/api/v1/chats/61fa3f7e3517687c2ad8ec22/messages",
        {
          mediaType: formData,
          name: selectedFile.name,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSelectedFile(res.data.mediaType);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Click

  const handleClick = (event: any) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  // Handle File Select

  const handleFileSelect = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  //Emoji Picker

  const onEmojiClick = (event: any, emojiObject: any) => {
    setInputs(`${inputs}${emojiObject.emoji}`);
    setEmojiPicker(!emojiPicker);
  };

  const toggleAudioComponent = () => {
    setAudioComponent(!audioComponent);
  };

  // console.log(selectedFile, "selected file at message input component");

  return (
    <div className={styles.message__input}>
      <p onClick={() => setEmojiPicker(!emojiPicker)}> 😊 </p>

      {emojiPicker && (
        <Picker
          pickerStyle={{
            position: "absolute",
            bottom: "100px",
            left: "200px",
          }}
          onEmojiClick={onEmojiClick}
        />
      )}
      {/* {!selectedFile ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <div> {previewImage}</div>
      )} */}

      {selectedFile && (
        <FileInputMessage selectedFile={selectedFile.url}>
          {selectedFile.url}
        </FileInputMessage>
      )}

      <form onSubmit={handleSubmit}>
        <i onClick={handleClick}>
          <CgAddR />
        </i>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />{" "}
      </form>

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

      {/* <i onClick={startRecording}> <AiOutlineAudio /></i>
      {
        (status === "recording" && (
          <div style={{ display: "block" }}>
            <AudioMessage />
          </div>
        ))
      } */}

      <i onClick={toggleAudioComponent}>
        <AiOutlineAudio />
      </i>
      <div>{audioComponent && <AudioMessage />}</div>
    </div>
  );
};

export default MessageInput;
