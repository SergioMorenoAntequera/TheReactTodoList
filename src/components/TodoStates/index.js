import React from 'react'
import "./style.css"


function TodoLoading() {
    let repeat = []
    for (let i = 0; i <5; i++) {
        repeat.push(i)
    }
    return(<div className='TodoLoading'> 
        {repeat.map((i)=>
            <div className='TodoItem skeleton-dark' key={i}> 
                <div className='LeftPart'>
                    <div className='skeleton-darker'> </div>
                    <p className='skeleton-darker' style={{width:Math.round(Math.random() * 200)+50+"px"}}> </p> 
                </div>
                <div> </div>
            </div>
        )}
    </div>)
}

function TodoError() {
    return(<div className='TodoError'>
        <p> Oh waw wtf </p>
    </div>)
}

function TodoNotFound() {
    return(<div className='TodoNotFound'>
        <p> No hemos encntrao naica </p>
    </div>)
}

export {TodoLoading, TodoError, TodoNotFound}