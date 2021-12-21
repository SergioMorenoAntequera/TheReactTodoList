import { useState } from "react";

export const useLocalStorage = (name, defaultValue) => {
    var inLocalStorage = JSON.parse(localStorage.getItem(name))
    const [storageItem, setStorageItem] = useState(inLocalStorage ?? defaultValue)

    var storageItemAux = [...storageItem]

    const _setLocalElement = (newValue) => {
        localStorage.setItem(name, JSON.stringify(newValue))
        setStorageItem(newValue) 
    }

    if(inLocalStorage === null) {
        _setLocalElement(defaultValue)
    }
    if(inLocalStorage !== null  && JSON.stringify(storageItemAux) !== JSON.stringify(inLocalStorage)) {
        storageItemAux = inLocalStorage
        setStorageItem(storageItemAux)
    }
    return [storageItemAux, _setLocalElement]
}