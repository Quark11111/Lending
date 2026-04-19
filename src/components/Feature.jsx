import { useState } from 'react'

import './Feature.css'

const Feature = (props) => {
    const [likes, setLikes] = useState(0)

    return (
        <div className="feature-card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button onClick={() => setLikes(likes + 1)}>Like: {likes}</button>
        </div>
    )
}

export default Feature