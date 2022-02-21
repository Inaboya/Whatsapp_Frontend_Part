import React, { createContext, useState } from "react";

type ChatContextProviderProps = {
  children: React.ReactNode;
};

type ChatContextType = {
  searchView: boolean;
  isProfile: boolean;
  setSearchView: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [searchView, setSearchView] = useState<boolean>(false);
  const [isProfile, setIsProfile] = useState<boolean>(false);

  return (
    <ChatContext.Provider
      value={{ searchView, setSearchView, isProfile, setIsProfile }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
