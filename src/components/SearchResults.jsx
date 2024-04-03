import React, { useEffect, useState } from "react";

export default function SearchResult({ books, setQuery, currentQuery, prevSearch, updatePrevSearch }) {
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setQuery(prevSearch);
    }, [prevSearch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length >= 3) {
            setQuery(search);
            updatePrevSearch(search);
            setErrorMessage(""); // Nullstiller feilmeldingen hvis søket er gyldig
        } else {
            setErrorMessage("Enter at least 3 characters"); // Setter feilmelding hvis søket er ugyldig
        }
    };

    /**
     * Handles the input change.
     * 
     * @param {Object} e - The event object.
     */
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <section>
            <div className="searchBar">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="search" placeholder="James Bond" onChange={handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>
                {errorMessage && <p className="error">{errorMessage}</p>} {/* Viser feilmeldingen hvis den er satt */}
            </div>
            <h2>Results: {currentQuery}</h2>
            <section className="searchPage">
                {books?.map(item =>
                    <article key={item.key} className="bookcard-search">
                        <h3>{item.title}</h3>
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="BookCover" />
                        <p>Author: {item.author_name}</p>
                        <p>First published in: {item.first_publish_year}</p>
                        <p>Average rating: {item.ratings_average}</p> 
                        <button>
                            <a href={`https://www.amazon.com/s?k=${item.isbn ? item.isbn[0] : null}`} className={item.isbn ? "buy" : "soldout"}>{item.isbn ? "Buy on Amazon" : "Sold out"}</a>
                        </button>
                    </article>
                )}
            </section>
        </section>
    );
}
