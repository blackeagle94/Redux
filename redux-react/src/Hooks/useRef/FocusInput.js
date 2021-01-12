import React, {useEffect, useRef} from 'react'

function FOcusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        // focus input element
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default FOcusInput
