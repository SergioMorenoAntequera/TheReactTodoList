import React from 'react'
import "./style.css"

export function TodoHeader({children, loading}) {

    return (<header className={`${loading? 'loading':''}`}>
        {React.Children.toArray(children)
            .map(child => React.cloneElement(child, {loading})
        )}
    </header>)
}
