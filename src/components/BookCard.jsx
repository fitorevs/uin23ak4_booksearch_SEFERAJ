import { useEffect } from "react"

export default function BookCard({ books, setQuery }) {

    useEffect(() => {
        setQuery("James Bond")
    }, [])

    return (
        <section>
            <div className="bookCard">
                <h1>Find your book</h1>
            </div>
            <div className="homePage">
                {books?.map(item =>
                    <article key={item.key}>
                        <h3>{item.title}</h3>
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt="Book Cover" />
                        <p>Author: {item.author_name}</p>
                        <p>First published in: {item.first_publish_year}</p>
                        <p>Average rating: {item.ratings_average}</p>
                        <button>
                            <a href={`https://www.amazon.com/s?k=${item.isbn ? item.isbn[0] : null}`} className={item.isbn ? "buy" : "soldout"}>{item.isbn ? "Buy on Amazon" : "Sold out"}</a>
                        </button>
                    </article>
                )}
            </div>
        </section>
    )
}