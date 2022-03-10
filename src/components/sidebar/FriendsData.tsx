import React, { useContext, useEffect, useState } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";
import Spinner from "../common/Spinner";

const FriendsData: React.FC = () => {
  const [chat, setChat] = useState("");
  const { data, getFriends, setShowMessages, startChat, setFriendDetail } =
    useContext(GlobalStateContext);

  const { friends } = data;

  console.log(friends, "friends data");
  

  useEffect(() => {
    getFriends && getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeChat = (friendId: string) => {
    setChat(friendId);

    const partner = friends?.friends.filter(
      (active: any) => active._id === friendId
    );
    setFriendDetail!(partner[0].friendId);
    setShowMessages!(true);
  };

  useEffect(() => {
    startChat!(chat);
  }, [chat]);

  // () => console.log("I just clicked me!!!", friend._id)
  return (
    <div>
      {friends.length === 0 ? (
        <div className={styles.friends__data}>
          <Spinner />
          <h4 style={{ textAlign: "center", margin: "auto", fontSize: "16px" }}>
            No Friend included yet
          </h4>
        </div>
      ) : (
        friends?.friends.map((friend: any, index: string) => {
          return (
            <div
              key={index}
              className={styles.friends__data}
              onClick={activeChat.bind(this, friend._id)}
            >
              <div className={styles.profile__Header}>
                <img
                  src={friend.friendId.avatar}
                  className={styles.profile__img}
                  alt=""
                />
                <div className={styles.profile__info}>
                  <h2>
                    {`${friend.friendId.firstName} ${friend.friendId.lastName}`
                      ? `${friend.friendId.firstName} ${friend.friendId.lastName}`
                      : `${friend.friendId.phoneNumber}`}
                  </h2>
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

export default FriendsData;
