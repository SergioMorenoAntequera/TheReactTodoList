import React, { useState } from 'react';

export default function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener({storageKey, setSynchronized}) {
        const [change, setChange] = useState(null)

        window.addEventListener("storage", (event) => {
            if(event.key != storageKey) return; 
            setChange(event.newValue);
        })

        return <>
            <WrappedComponent 
                change={change}
                setChange={setChange}
                setSynchronized={setSynchronized}
            />
        </>
    }
}
