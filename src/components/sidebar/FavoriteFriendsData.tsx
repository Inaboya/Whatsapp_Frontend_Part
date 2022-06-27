import React, { useContext, useEffect, useState } from "react";
import styles from "./FriendsData.module.scss";
import { GlobalStateContext } from "../../context/GlobalState";
import { BsPinAngle } from "react-icons/bs";
import Spinner from "../common/Spinner";

const FavoriteFriendsData: React.FC = () => {
  const [chat, setChat] = useState("");
  const {
    data,
    getFavoriteFriends,
    setShowMessages,
    startChat,
    setFriendDetail,
  } = useContext(GlobalStateContext);

  const { favoriteFriendsList } = data;

  useEffect(() => {
    getFavoriteFriends && getFavoriteFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeChat = (friendId: string) => {
    setChat(friendId);
    const partner = favoriteFriendsList?.favoriteFriendsList.filter(
      (active: any) => active._id === friendId
    );

    setFriendDetail!(partner[0]);
    setShowMessages!(true);
  };

  useEffect(() => {
    chat && startChat!(chat);
  }, [chat]);

  return (
    <div>
      {favoriteFriendsList?.favoriteFriendsList.length === 0 ||
      data === undefined ? (
        <div className={styles.friends__data}>
          <Spinner />
          <h4 style={{ textAlign: "center", fontSize: "16px" }}>
            No Favorite Friend included yet
          </h4>
        </div>
      ) : (
        favoriteFriendsList?.favoriteFriendsList.map(
          (friend: any, index: string) => {
            return (
              <div
                key={index}
                className={styles.friends__data}
                onClick={activeChat.bind(this, friend.id)}
              >
                <div className={styles.profile__Header}>
                  <img
                    src={friend.avatar}
                    className={styles.profile__img}
                    alt=""
                  />
                  <div className={styles.profile__info}>
                    <h2>
                      {`${friend.firstName} ${friend.lastName}`
                        ? `${friend.firstName} ${friend.lastName}`
                        : `${friend.phoneNumber}`}
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
          }
        )
      )}
    </div>
  );
};

export default FavoriteFriendsData;
