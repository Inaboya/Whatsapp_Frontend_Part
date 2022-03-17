import React, { createContext, useState } from "react";

type ChatContextProviderProps = {
  children: React.ReactNode;
};

type ChatContextType = {
  searchView: boolean;
  showAudio: boolean;
  setShowAudio: React.Dispatch<React.SetStateAction<boolean>>;
  isProfile: boolean;
  hideChatDrop: boolean;

  setSearchView: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setHideChatDrop: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [searchView, setSearchView] = useState<boolean>(false);
  const [showAudio, setShowAudio] = useState<boolean>(false);
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [hideChatDrop, setHideChatDrop] = useState<boolean>(true);

  return (
    <ChatContext.Provider
      value={{
        searchView,
        setSearchView,
        isProfile,
        setIsProfile,
        showAudio,
        setShowAudio,
        hideChatDrop,
        setHideChatDrop,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
