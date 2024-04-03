import { Link } from "react-router-dom";

// En funksjonell komponent for layouten av applikasjonen
export default function Layout({ children }) {
    return (
        <>
            {/* Header-seksjonen */}
            <header>
                <nav>
                    {/* Logo med lenke til startsiden */}
                    <a href="/" className="logo">LOGO</a>
                    {/* Navigasjonsmeny med lenker til hjemmesiden og søkesiden */}
                    <ul>
                        <li><Link to="/">Home</Link></li> {/* Lenke til hjemmesiden */}
                        <li><Link to="search">Search</Link></li> {/* Lenke til søkesiden */}
                    </ul>
                </nav>
            </header>
            {/* Hovedseksjonen */}
            <main>
                {children} {/* Inkluderer barnkomponenter */}
            </main>
            {/* Footer-seksjonen */}
            <footer>
                <p>&copy; 2024 Fitore Victoria Seferaj</p>
            </footer>
        </>
    );
}
