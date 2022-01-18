import React, { useContext } from 'react'
import "./style.css"
import { FaPlus } from 'react-icons/fa'


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

function TodoNotFound({setShowingAddDialog}) {

    return(<div className='TodoNotFound'>
        <h2 className='title'> No Todo's found </h2>
        <p className='sub-title'> Nothing to worry about, we can fix this </p>
        <button className='primary'
            onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
            <FaPlus/> Add one now
        </button>
    </div>)
}

function TodoEmptySearch({text}) {
    return (<div className='TodoEmptySearch'>
        <h2 className='title'> No Todo's found </h2>
        <p className='sub-title'> We couln't find Todo's that contained </p>
        <p className='sub-title'> "{text}" in their name </p>
    </div>)
}

export {TodoLoading, TodoError, TodoNotFound, TodoEmptySearch}