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
                        <h3>{item.title}</h3> {/* Tittel på boken */}
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="Book Cover" />  {/* Bilde av bokomslaget i mediumstr. */}
                        <p>Author: {item.author_name}</p>  {/* Forfatter av boken */}
                        <p>First published in: {item.first_publish_year}</p> {/* Første publisering av boken */}
                        <p>Average rating: {item.ratings_average}</p> {/* Gjennomsnittlig vurdering av boken. NB! Klarte ikke få opp all ratings.*/}
                        {/* Knapp for å kjøpe boken på Amazon, avhengig av ISBN-nummer. Fikk ikke til å bruke amazon_id*/}
                        <button>
                            <Link to={`https://www.amazon.com/s?k=${("id_amazon" in item) ? item.id_amazon[0] : item.isbn}`} >Buy om Amazon</Link>
                        </button>
                    </article>
                )}
            </div>
        </section>
    );
}
