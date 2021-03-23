import React, {useContext} from "react"
import {Context} from '../Context'

function Photos() {
    const data = useContext(Context)
    console.log(data)

    return (
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos
