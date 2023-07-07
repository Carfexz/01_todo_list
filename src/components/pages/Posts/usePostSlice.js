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
        { id: 1, title: 'Get up at 6:30 1', body: 'Marathon training, 1/30 days', isComplete: false },
        { id: 2, title: 'Get up at 6:30 2', body: 'Marathon training, 1/30 days', isComplete: false },
        { id: 3, title: 'Get up at 6:30 3', body: 'Marathon training, 1/30 days', isComplete: false },
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

    const stateCopy = JSON.parse(JSON.stringify(state))
    const id = action.payload

    switch (action.type) {
        case actionTypes.ADD_POST:
            const { title, body } = action.payload

            const newPost = {
                id: Date.now(),
                title,
                body
            }

            return {
                ...stateCopy,
                posts: [...stateCopy.posts, newPost]
            }
        case actionTypes.EDIT_POST:

            return state;
        case actionTypes.DEL_POST:

            const err = [...stateCopy.posts].filter(posts => posts.id !== id)

            return {
                ...stateCopy,
                posts: err
            };
        case actionTypes.CHANGE_POST_IS_COMPLETE:

            const index = stateCopy.posts.findIndex((posts) => posts.id === id)
            if (index === -1) return stateCopy

            const foundTodo = stateCopy.posts[index]
            stateCopy.posts[index] = { ...foundTodo, isComplete: !foundTodo.isComplete }

            return {
                ...stateCopy,
            }
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

    const addPost = (payload) => {
        setState((prevState) => {
            return postReducer(prevState, addPostActionCreator(payload))
        })
    }

    const delPost = (payload) => {
        setState((prevState) => {
            return postReducer(prevState, delPostActionCreator(payload))
        })
    }

    const completePost = (payload) => {
        setState((prevState) => {
            return postReducer(prevState, changePostIsCompleteActionCreator(payload))
        })
    }

    return {
        state,
        completePost,
        delPost,
        addPost,
    }
}

