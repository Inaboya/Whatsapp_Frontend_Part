import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import styles from "./AudioMessage.module.scss";
import { BsStopFill } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

const AudioMessage: React.FC = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
    });
  return (
    <div className={styles.Audio}>
      {/* <div className="loader-container">
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
        <div className="rectangle-3"></div>
        <div className="rectangle-3"></div>
        <div className="rectangle-2"></div>
        <div className="rectangle-1"></div>
      </div> */}
      {/* <div className={styles.audio__main_div}> */}
      <audio src={mediaBlobUrl!} controls className={styles.main_audio} />
      {/* </div> */}
      <div className={styles.audio_div}>
        <i onClick={startRecording}>
          <AiOutlinePlayCircle />
        </i>

        <i onClick={stopRecording}>
          <BsStopFill />
        </i>
      </div>
    </div>
  );
};

export default AudioMessage;
