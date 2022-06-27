import { useEffect, useRef, useState } from "react";
// import styles from "./AudioMessage.module.scss";
// import WaveSurfer from "react-wavesurfer.js";

// const AudioMessage = () => {
//   //   const waveformRef = useRef(null);
//   //   const [position, setPosition] = useState(0);
//   //   const [muted, setMuted] = useState(false);
//   //   console.log(waveformRef);

//   //   useEffect(() => {
//   //     if (waveformRef.current) {
//   //       const wavesurfer = WaveSurfer.create({
//   //         container: waveformRef.current,
//   //       });
//   //     }
//   //   }, []);

//   //   return <div ref={waveformRef}></div>;

//   const [position, setPosition] = useState(0);
//   const [muted, setMuted] = useState(false);

//   const handlePositionChange = (position: number) => {
//     /* ... */
//   };

//   const onReadyHandler = () => console.log("done loading!");

//   return (
//     <WaveSurfer
//       src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
//       //   position={position}
//       onPositionChange={handlePositionChange}
//       onReady={onReadyHandler}
//       //   playing={playing}
//       //   muted={muted}
//     />
//   );
// };

// export default AudioMessage;
