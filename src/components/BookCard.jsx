import { useEffect } from "react";

export default function BookCard({ books, setQuery }) {

    useEffect(() => {
        // Setter søkeforespørsel til "James Bond" ved første lasting
        setQuery("James Bond");
    }, []);

    return (
        <section>
            <div className="bookCard">
                <h1>Find your book</h1>
            </div>
            <div className="homePage">
                {/* Mapper gjennom bøkene og viser informasjon om hver bok */}
                {books?.map(item =>
                    <article key={item.key}>
                        {/* Tittel på boken */}
                        <h3>{item.title}</h3>
                        {/* Bilde av bokomslaget i mediumstr. */}
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="Book Cover" />
                        {/* Forfatter av boken */}
                        <p>Author: {item.author_name}</p>
                        {/* Første publisering av boken */}
                        <p>First published in: {item.first_publish_year}</p>
                        {/* Gjennomsnittlig vurdering av boken */}
                        <p>Average rating: {item.ratings_average}</p>
                        {/* Knapp for å kjøpe boken på Amazon, avhengig av ISBN-nummer. FIkk ikke til å bruke amazon_id*/}
                        <button>
                            <a href={`https://www.amazon.com/s?k=${item.isbn ? item.isbn[0] : null}`} className={item.isbn ? "buy" : "soldout"}>{item.isbn ? "Buy on Amazon" : "Sold out"}</a>
                        </button>
                    </article>
                )}
            </div>
        </section>
    );
}
