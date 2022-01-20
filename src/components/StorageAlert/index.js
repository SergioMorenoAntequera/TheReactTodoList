import React from 'react';
import withStorageListener from './withStorageListener';

function StorageAlert({change, setChange, update}) {
    if(!change) return <></>
    return (<>
        <p>Hemos detectado cambios en otra ventana</p>
        <button onClick={()=>{
                update(JSON.parse(change));
                setChange(null)
            }}>
            OK 
        </button>
    </>);
}

const StorageAlertWithStorageListener = withStorageListener(StorageAlert)
export { StorageAlertWithStorageListener }
