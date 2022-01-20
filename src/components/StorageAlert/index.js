import React from 'react';
import "./style.css"
import { CustomModalDialog } from '../Modal';
import useStorageListener from './useStorageListener';

function StorageAlert({storageKey, setSynchronized}) {
    const [change, setChange] = useStorageListener(storageKey)

    if(!change) return <></>
    return (<CustomModalDialog 
        customClasses="StorageAlert" 
        setShowing={setChange}
        title="Changes detected"
        modal={true}>
        

        <p className='bold'>
            Oh wait a minute...
        </p>
        <p> We have detected changes made in the todo app in another instance of it. </p>
        
        <div className="ctas">
            <button className="primary" type="button" 
                onClick={()=> {
                    setSynchronized(false);
                    setChange(null)}
                }
            >
                <div> Refresh </div>
            </button>
        </div>
        
    </CustomModalDialog>
    );
}

export { StorageAlert }
