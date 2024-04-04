import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookCard({ books, setQuery }) {

    useEffect(() => {
        // Setter søkeforespørsel til "James Bond" ved første lasting
        setQuery("James Bond");
    }, []);

    return (
        <section>
            <div className="bookCard">
                <h1>Discover Your Next Favorite Read: Explore Our Book Universe</h1>
            </div>
            <div className="homePage">
                {/* Mapper gjennom bøkene og viser informasjon om hver bok */}
                {books?.map(item =>
                    <article key={item.key}>
                        {console.log(item.id_amazon)}
                        {console.log(item.isbn)}
                        <h3>{item.title}</h3> {/* Tittel på boken */}
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="Book Cover" />  {/* Bilde av bokomslaget i mediumstr. */}
                        <p>Author: {item.author_name}</p>  {/* Forfatter av boken */}
                        <p>First published in: {item.first_publish_year}</p> {/* Første publisering av boken */}
                        <p>Average rating: {item.ratings_average}</p> {/* Gjennomsnittlig vurdering av boken. NB! Klarte ikke få opp all ratings.*/}
                        {/* Knapp for å kjøpe boken på Amazon, avhengig av ISBN-nummer.*/}
                        <button>
                            <Link to={("id_amazon" in item) ? `https://www.amazon.com/s?k=${item.id_amazon[0]}` : (item.isbn ? `https://www.amazon.com/s?k=${item.isbn[0]}` : "#")}>
                                {("id_amazon" in item || item.isbn) ? "Buy on Amazon" : "No link available"}</Link>
                        </button>
                    </article>
                )}
            </div>
        </section>
    );
}
