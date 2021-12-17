import {ActionTypes} from '../constants/actionTypes';

export const setAllUsers = (users) => {
    return {
        type: ActionTypes.SET_ALL_USERS,
        payload: users
    }
}

export const setPage = () => {
    return {
        type: ActionTypes.SET_PAGE,
    }
}

export const setLoading = (status) => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: status
    }
}

export const setSelectedUser = (user) => {
    return {
        type: ActionTypes.SET_SELECTED_USER,
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: ActionTypes.REMOVE_USER
    }
}

export const setSelectedUsersHistory = (historyUser) => {
    return {
        type: ActionTypes.SET_SELECTED_USERS_HISTORY,
        payload: historyUser
    }
}

export const setUserFriends = (userFriends) => {
    return {
        type: ActionTypes.SET_USER_FRIENDS,
        payload: userFriends
    }
}

export const setFriendsPage = () => {
    return {
        type: ActionTypes.SET_FRIENDS_PAGE,
    }
}

export const setFriendsLoading = (bool) => {
    return {
        type: ActionTypes.SET_FRIENDS_LOADING,
        payload: bool
    }
}

