import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// En funksjonell komponent for å vise søkeresultater
export default function SearchResult({ books, setQuery, currentQuery, prevSearch, updatePrevSearch }) {
    const [search, setSearch] = useState(""); // Tilstand for søketeksten
    const [errorMessage, setErrorMessage] = useState(""); // Tilstand for feilmelding ved ugyldig søk

    useEffect(() => {
        setQuery(prevSearch); 
    }, []);

    // Funksjon for å håndtere innsending av søket
    const handleSubmit = (e) => {
        e.preventDefault(); // Forhindrer standard oppførsel ved innsending av skjema
        if (search.length >= 3) { // Sjekker om søketeksten er minst 3 tegn lang
            setQuery(search); // Setter søkeforespørsel til den nye søketeksten
            updatePrevSearch(search); // Oppdaterer forrige søk med den nye søketeksten
            setErrorMessage(""); // Nullstiller feilmeldingen hvis søket er gyldig
        } else {
            setErrorMessage("Enter at least 3 characters"); // Setter feilmelding hvis søket er ugyldig
        }
    };

    // Funksjon for å håndtere endringer i søketeksten
    const handleChange = (e) => {
        setSearch(e.target.value); // Oppdaterer søketeksten basert på endringer i input-feltet
    };

    return (
        <section>
            {/* Søkefelt */}
            <div className="searchBar">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="search" placeholder="James Bond" onChange={handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>
                {/* Viser feilmeldingen hvis den er satt */}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
            {/* Tittel for søkeresultater */}
            <h2>Results: {currentQuery}</h2>
            {/* Seksjon for visning av søkeresultater */}
            <section className="searchPage">
                {/* Mapper gjennom søkeresultatene og viser informasjon om hver bok */}
                {books?.map(item =>
                    <article key={item.key} className="bookcard-search">
                        {console.log(item.id_amazon)}
                        {console.log(item.isbn)}
                        <h3>{item.title}</h3> {/* Tittel på boken */}
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="BookCover" /> {/* Bilde av bokomslaget */}
                        <p>Author: {item.author_name}</p> {/* Forfatter av boken */}
                        <p>First published in: {item.first_publish_year}</p> {/* Første publisering av boken */}
                        <p>Average rating: {item.ratings_average}</p>  {/* Gjennomsnittlig vurdering av boken. NB! Klarte ikke få opp all ratings. */}
                        {/* Knapp for å kjøpe boken på Amazon, avhengig av ISBN-nummer.*/}
                        <button className={item.isbn ? "available" : "not-available"}>
                            <Link to={("id_amazon" in item) ? `https://www.amazon.com/s?k=${item.id_amazon[0]}` : (item.isbn ? `https://www.amazon.com/s?k=${item.isbn[0]}` : "#")}>
                                {("id_amazon" in item || item.isbn) ? "Buy on Amazon" : "No link available"}
                            </Link>
                        </button>
                    </article>
                )}
            </section>
        </section>
    );
}
