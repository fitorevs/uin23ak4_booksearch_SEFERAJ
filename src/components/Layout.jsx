import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <a href="/" className="logo">LOGO</a>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="search">Search</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; 2024 Fitore Victoria Seferaj</p>
            </footer>
        </>
    )
}
