import { useEffect, useState } from "react";

export const useLocalStorage = (name, defaultValue) => {
    const [storageItem, setStorageItem] = useState(defaultValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    try {
        useEffect(() => {
            setTimeout(() => {
                let inLocalStorage = localStorage.getItem(name)
                let parsedLocalStorage;
                
                if(!inLocalStorage) {
                    console.log(inLocalStorage)
                    localStorage.setItem(name, JSON.stringify(defaultValue));
                    parsedLocalStorage = defaultValue;
                } else {
                    parsedLocalStorage = JSON.parse(inLocalStorage);
                }
        
                setStorageItem(parsedLocalStorage)
                setLoading(false)
            }, 1000);
        }, [])
    } catch(error) {
        setError(error)
    }
    
    
    const setLocalElement = (newValue) => {
        try {
            localStorage.setItem(name, JSON.stringify(newValue))
            setStorageItem(newValue)    
        } catch (error) {
            setError(error)
        }
    }
    
    return {storageItem, setLocalElement, loading, error}
}