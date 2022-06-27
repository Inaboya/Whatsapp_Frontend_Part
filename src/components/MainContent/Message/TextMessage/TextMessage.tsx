import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./TextMessage.module.scss";

interface IText {
  reciever?: boolean;
}

const TextMessage: React.FC<IText> = ({ reciever }) => {


  
  return (
    <div className={`${styles.textM} ${reciever ? styles.recipant : ""}`}>
      <p>
        Helo, this is the first message I told you to expect, I do hope you
        recieve this in good faith
      </p>
      <span>12:35pm</span>
    </div>
  );
};

export default TextMessage;
