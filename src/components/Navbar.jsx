import { Link } from "react-router-dom"
import { useState } from "react";

const Navbar = () => {
    
    const [darkMode, setDarkMode] = useState(false);
    return (
        <nav>
            <Link to="/">Main</Link>
            <Link to="/about">About Us</Link>
            
        </nav>
    )
}

export default Navbar