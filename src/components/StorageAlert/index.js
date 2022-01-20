import React from 'react';
import "./style.css"
import { CustomModalDialog } from '../Modal';
import withStorageListener from './withStorageListener';

function StorageAlert({change, setChange, setSynchronized}) {

    if(!change) return <></>
    
    return (<CustomModalDialog 
        customClasses="StorageAlert" 
        setShowing={setChange}
        title="Changes detected">
        

        <p className='bold'>
            Oh wait a minute...
        </p>
        <p> We have detected changes made in the todo app in another instance of it. </p>
        
        <div className="ctas">
            <button className="secondary" type="button" onClick={()=>{setChange(false)}}>Cancel</button>
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

const StorageAlertWithStorageListener = withStorageListener(StorageAlert)
export { StorageAlertWithStorageListener }
