import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>I think you should go to home</h1>
            <Link to="/">Back home</Link>
        </div>
    )
}

export default NotFound