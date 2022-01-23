import { useEffect, useReducer, useState } from "react";



const actionTypes = {
    showing: "SHOWING",
    loading: "LOADING",
    error: "ERROR",
    unSynchronized: "UNSYNCRONIZED",
}
const reducerObject = (state, payload) => ({
    [actionTypes.showing]: {
        ...state,
        storageItem: payload,
        unSynchronized: false,
        loading: false,
        error: false
    },
    [actionTypes.loading]: {
        ...state,
        loading: true,
        error: false,
    },
    [actionTypes.error]: {
        ...state,
        loading: false,
        error: true,
    },
    [actionTypes.unSynchronized]: {
        ...state,
        unSynchronized: true,
        error: false,
        loading: true,
    },
})
const reducer = (state, action) => {
    if(reducerObject(state, action.payload)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    }
    return state
}
export const useLocalStorage = (name, defaultValue) => {
    const initState = {
        storageItem: defaultValue,
        loading: true,
        error: false,
        unSynchronized: false,
    }
    const [state, dispatch] = useReducer(reducer, initState);
    console.log(state)

    const onShow = (storageItem) => dispatch({type:actionTypes.showing, payload:storageItem})
    const onLoading = () => dispatch({type:actionTypes.loading})
    const onError = () => dispatch({type:actionTypes.error})
    const onUnSyncronized = () => dispatch({type:actionTypes.unSynchronized})
    
    const [storageItem, setStorageItem] = useState(defaultValue)
    const [synchronized, setSynchronized] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    try {
        useEffect(() => {
            setTimeout(() => {
                let inLocalStorage = localStorage.getItem(name)
                let parsedLocalStorage;
                
                if(!inLocalStorage) {
                    localStorage.setItem(name, JSON.stringify(defaultValue));
                    parsedLocalStorage = defaultValue;
                } else {
                    parsedLocalStorage = JSON.parse(inLocalStorage);
                }
                
               onShow(parsedLocalStorage)
            }, 1000);
        }, [synchronized])
    } catch(error) {
        onError()
    }
    
    
    const setLocalElement = (newValue) => {
        try {
            localStorage.setItem(name, JSON.stringify(newValue))
            onShow(newValue)
        } catch (error) {
            onError()
        }
    }

    const auxSetSynchronized = (state) => {
        setLoading(true);
        setSynchronized(state);
    }
    
    return {
        storageItem, 
        setLocalElement,
        auxSetSynchronized,
        loading, 
        error
    }
}