import { useState } from "react";

export const useLocalStorage = (name, defaultValue) => {
    let inLocalStorage = localStorage.getItem(name)
    let parsedLocalStorage;

    if(!inLocalStorage) {
        console.log(inLocalStorage)
        localStorage.setItem(name, JSON.stringify(defaultValue));
        parsedLocalStorage = defaultValue;
    } else {
        parsedLocalStorage = JSON.parse(inLocalStorage);
    }

    const [storageItem, setStorageItem] = useState(parsedLocalStorage)

    const _setLocalElement = (newValue) => {
        localStorage.setItem(name, JSON.stringify(newValue))
        setStorageItem(newValue) 
    }
    
    return [storageItem, _setLocalElement]
}