import { User } from "../utils/interface";
import { ActionType } from "./actionType";

interface GET_FAVORITE_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_SUCCESS;
  payload: any[];
}

interface GET_FAVORITE_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FAVORITE_FRIENDS_FAILURE;
  payload: string;
}

interface GET_FRIENDS_SUCCESS {
  type: typeof ActionType.GET_FRIENDS_SUCCESS;
  payload: any[];
}

interface GET_FRIENDS_FAILURE {
  type: typeof ActionType.GET_FRIENDS_FAILURE;
  payload: string;
}

interface GET_GROUPS_SUCCESS {
  type: typeof ActionType.GET_GROUPS_SUCCESS;
  payload: any[];
}

interface GET_GROUPS_FAILURE {
  type: typeof ActionType.GET_GROUPS_FAILURE;
  payload: string;
}

interface GET_USER_LOGIN_SUCCESS {
  type: typeof ActionType.GET_USER_LOGIN_SUCCESS;
  payload: { accessToken: string; user: User };
}

interface SHOW_PROFILE_PAGE {
  type: typeof ActionType.SHOW_PROFILE_PAGE;
  payload: boolean;
}

interface SHOW_MESSAGES {
  type: typeof ActionType.SHOW_MESSAGES;
  payload: boolean;
}

interface ADD_FRIEND_SUCCESS {
  type: typeof ActionType.ADD_FRIEND_SUCCESS;
  payload: any;
}

interface ADD_FRIEND_FAILURE {
  type: typeof ActionType.ADD_FRIEND_FAILURE;
  payload: string;
}

interface GET_MESSAGES_SUCCESS {
  type: typeof ActionType.GET_MESSAGES_SUCCESS;
  payload: any[];
}

interface GET_MESSAGES_FAILURE {
  type: typeof ActionType.GET_MESSAGES_FAILURE;
  payload: string;
}

interface ADD_FAVORITE_FRIEND_SUCCESS {
  type: typeof ActionType.ADD_FAVORITE_FRIEND_SUCCESS;
  payload: any;
}

interface ADD_FAVORITE_FRIEND_FAILURE {
  type: typeof ActionType.ADD_FAVORITE_FRIEND_FAILURE;
  payload: string;
}

interface REMOVE_FAVORITE_FRIEND_SUCCESS {
  type: typeof ActionType.REMOVE_FAVORITE_FRIEND_SUCCESS;
  payload: any;
}

interface REMOVE_FAVORITE_FRIEND_FAILURE {
  type: typeof ActionType.REMOVE_FAVORITE_FRIEND_FAILURE;
  payload: string;
}

interface GET_ACTIVE_CHAT {
  type: typeof ActionType.GET_ACTIVE_CHAT;
  payload: any;
}

interface GET_ACTIVE_CHAT_FAILURE {
  type: typeof ActionType.GET_ACTIVE_CHAT_FAILURE;
  payload: any;
}

interface SET_FRIEND {
  type: typeof ActionType.SET_FRIEND;
  payload: any;
}

interface SET_GROUP_DETAIL {
  type: typeof ActionType.SET_GROUP_DETAIL;
  payload: any;
}

export type Action =
  | GET_FAVORITE_FRIENDS_SUCCESS
  | GET_FAVORITE_FRIENDS_FAILURE
  | GET_FRIENDS_SUCCESS
  | GET_FRIENDS_FAILURE
  | GET_GROUPS_SUCCESS
  | GET_GROUPS_FAILURE
  | GET_USER_LOGIN_SUCCESS
  | SHOW_PROFILE_PAGE
  | SHOW_MESSAGES
  | ADD_FRIEND_SUCCESS
  | ADD_FRIEND_FAILURE
  | GET_MESSAGES_SUCCESS
  | GET_MESSAGES_FAILURE
  | ADD_FAVORITE_FRIEND_SUCCESS
  | ADD_FAVORITE_FRIEND_FAILURE
  | REMOVE_FAVORITE_FRIEND_SUCCESS
  | REMOVE_FAVORITE_FRIEND_FAILURE
  | GET_ACTIVE_CHAT
  | GET_ACTIVE_CHAT_FAILURE
  | SET_FRIEND
  | SET_GROUP_DETAIL;
