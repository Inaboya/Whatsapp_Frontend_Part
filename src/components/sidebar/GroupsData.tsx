import React, { useContext, useEffect, useState } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";
import Spinner from "../common/Spinner";

const GroupsData: React.FC = () => {
  const [chat, setChat] = useState("");
  const { data, getGroups, setShowMessages, startChat, setGroupDetail } =
    useContext(GlobalStateContext);

  const { groups } = data;

  useEffect(() => {
    getGroups && getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeChat = (groupId: string) => {
    setChat(groupId);

    const partner = groups?.allgroups.filter(
      (active: any) => active.id === groupId
    );
    console.log("maroooon 5", partner[0]);
    setGroupDetail!(partner[0]);
    setShowMessages!(true);
  };

  // useEffect(() => {
  //   startChat!(chat);
  // }, [chat]);

  // const [redirect, setRedirect] = useState(false);

  // const showChat = () => {
  //   setShowMessages!(true);
  // };

  return (
    <div>
      {groups.length === 0 ? (
        <div className={styles.friends__data}>
          <Spinner />
          <h4
            style={{ textAlign: "center", fontSize: "16px", display: "block" }}
          >
            No Group included yet
          </h4>
        </div>
      ) : (
        groups?.allgroups.map((group: any, index: string) => {
          return (
            <div
              key={index}
              className={styles.friends__data}
              onClick={activeChat.bind(this, group.id)}
            >
              <div className={styles.profile__Header}>
                <img
                  src={group.groupImage}
                  className={styles.profile__img}
                  alt=""
                />
                <div className={styles.profile__info}>
                  <h2>{group.groupName ? group.groupName : ""}</h2>
                  <p>ha ha ha oh man</p>
                </div>
              </div>
              <div className={styles.extra}>
                <span>05:15pm</span>
                <i>
                  <BsPinAngle />
                </i>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GroupsData;
