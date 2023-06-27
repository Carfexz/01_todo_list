import { useState } from "react"

// ! Типы для экшенов
const actionTypes = {
    ADD_POST: 'ADD_POST',
    EDIT_POST: 'EDIT_POST',
    DEL_POST: 'DEL_POST',
    CHANGE_POST_IS_COMPLETE: 'CHANGE_POST_IS_COMPLETE',
}

// ! Изначальное состояние 
const initialState = {
    posts: [
        { id: 1, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false },
        { id: 2, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false },
        { id: 3, title: 'Get up at 6:30', body: 'Marathon training, 1/30 days', isComplete: false },
    ],
    currentPostId: null,
}

// ! Структура экшена
const editPostAction = {
    type: '',
    payload: {},
}

// ! Редьюсер
const postReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return state;
            break;
        case actionTypes.EDIT_POST:
            return state;
            break;
        case actionTypes.DEL_POST:
            return state;
            break;
        case actionTypes.CHANGE_POST_IS_COMPLETE:
            return state;
            break;
        default:
            return state;
            break;
    }
}

// ! Функции для создания экшенов 
export const addPostActionCreator = (payload) => {
    return {
        type: actionTypes.ADD_POST,
        payload: payload,
    }
}

export const editPostActionCreator = (payload) => {
    return {
        type: actionTypes.EDIT_POST,
        payload: payload,
    }
}

export const delPostActionCreator = (payload) => {
    return {
        type: actionTypes.DEL_POST,
        payload: payload,
    }
}

export const changePostIsCompleteActionCreator = (payload) => {
    return {
        type: actionTypes.CHANGE_POST_IS_COMPLETE,
        payload: payload,
    }
}

export const usePostSlice = () => {
    const [state, setState] = useState(initialState)

    const addPost = () => {
        return (payload) => {
            setState((prevState) => {
                return postReducer(prevState, addPostActionCreator(payload))
            })
        }
    }

    return {
        state,
        addPost,
    }
}