import React from 'react'


function TodoLoading() {
    let repeat = []
    for (let i = 0; i < 10; i++) {
        repeat.push(i)
    }
    return(<>
        {repeat.map((i)=>
            <p key={i}> skeleton </p>
        )}
    </>)
}

function TodoError() {
    return(<>
        <p> Oh waw wtf </p>
    </>)
}

function TodoNotFound() {
    return(<>
        <p> No hemos encntrao naica </p>
    </>)
}

export {TodoLoading, TodoError, TodoNotFound}