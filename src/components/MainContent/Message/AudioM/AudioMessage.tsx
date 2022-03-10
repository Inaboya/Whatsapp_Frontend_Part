import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioMessage: React.FC = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl!} controls />
    </div>
  );
};

export default AudioMessage;
