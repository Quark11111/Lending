import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/about">About Us</Link>
        </nav>
    )
}

export default Navbar