import React from 'react';
import withStorageListener from './withStorageListener';

function StorageAlert({change, setChange, setSynchronized}) {
    if(!change) return <></>
    return (<>
        <p>Hemos detectado cambios en otra ventana</p>
        <button onClick={()=>{
                console.log(setSynchronized);
                setSynchronized(false);
                setChange(null)
            }}> 
            OK 
        </button>
    </>);
}

const StorageAlertWithStorageListener = withStorageListener(StorageAlert)
export { StorageAlertWithStorageListener }
