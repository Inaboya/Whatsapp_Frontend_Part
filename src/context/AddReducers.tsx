import { Action } from "./index";
import { ActionType } from "./actionType";
import { IChat, User } from "../utils/interface";

interface reducerState {
  data: { [key: string]: any };
  loading: boolean;
  error: string | null;
  accessToken: string;
  user: User;
  showProfilePage: boolean;
  showMessages: boolean;
  currentChat: IChat;
  friendDetail: any;
  groupDetail: any;
}

const AddReducers = (state: reducerState, action: Action): reducerState => {
  switch (action.type) {
    case ActionType.GET_FAVORITE_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, favoriteFriendsList: action.payload },
      };

    case ActionType.GET_FAVORITE_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, friends: action.payload },
      };

    case ActionType.GET_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.GET_GROUPS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: { ...state.data, groups: action.payload },
      };

    case ActionType.GET_GROUPS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case ActionType.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, messages: action.payload },
      };

    case ActionType.GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.GET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
      };

    case ActionType.SHOW_PROFILE_PAGE:
      return {
        ...state,
        showProfilePage: action.payload,
      };

    case ActionType.SHOW_MESSAGES:
      return {
        ...state,
        showMessages: action.payload,
      };

    case ActionType.GET_ACTIVE_CHAT:
      return {
        ...state,
        loading: false,
        currentChat: action.payload,
      };

    case ActionType.GET_ACTIVE_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionType.SET_FRIEND:
      return {
        ...state,
        friendDetail: action.payload,
      };

    case ActionType.SET_GROUP_DETAIL:
      return {
        ...state,
        groupDetail: action.payload,
      };

    default:
      return state;
  }
};

export default AddReducers;
