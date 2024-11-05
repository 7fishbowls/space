import "../styles/header.css";
import { FaStar } from "react-icons/fa";

function Header() {
    return (
        <>
        <header className="logo">
            <h2>Space.</h2>
            <FaStar className="icon_star" />
        </header>
        </>
    );
}

export default Header;