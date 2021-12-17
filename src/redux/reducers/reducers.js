import { ActionTypes } from "../constants/actionTypes";

export const setAllUsersReducer = (state = [], {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_ALL_USERS:
            return [...state, ...payload]
        default:
            return state
    }
}

export const setPageReducer = (state = 1, {type}) => {
    console.log(state)
    switch(type) {
        case ActionTypes.SET_PAGE:
            return state + 1 
        default:
            return state
    }
}

export const setLoadingReducer = (state = false, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_LOADING:
            return payload
        default:
            return state
    }
}

export const setSelectedUserReducer = (state = {}, {type, payload}) => {
        switch(type) {
            case ActionTypes.SET_SELECTED_USER:
                return {...state, ...payload}
            case ActionTypes.REMOVE_USER:
                return {}
            default: 
                return state
        }

}

export const setSelectedUsersHistoryReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_SELECTED_USERS_HISTORY:
                return {...state, ...payload}
            default: 
                return state
    }
}

export const setUserFriendsReducer = (state = [], {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_USER_FRIENDS:
            return [...state, ...payload]
        default:
            return state
    }
}

export const setFriendsPageReducer = (state = 1, {type}) => {
    switch(type) {
        case ActionTypes.SET_FRIENDS_PAGE:
            return state + 1 
        default:
            return state
    }
}

export const setFriendsLoadingReducer = (state = false, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_FRIENDS_LOADING:
            return payload
        default:
            return state
    }
}