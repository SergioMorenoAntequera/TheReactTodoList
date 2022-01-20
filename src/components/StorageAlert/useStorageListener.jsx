import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function useStorageListener(storageKey) {
    const [change, setChange] = useState(null)

    window.addEventListener("storage", (event) => {
        if(event.key != storageKey) return; 
        setChange(event.newValue);
    })

    return([
        change,
        setChange,
    ])
}
