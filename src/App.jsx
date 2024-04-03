import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard';
import SearchResults from './components/SearchResults';

function App() {
  // Standard søkeforespørsel
  const defaultQuery = "James Bond";

  // Tilstand for å lagre hentede bokdata
  const [books, setData] = useState([]);

  // Tilstand for å håndtere gjeldende søkeforespørsel
  const [currentQuery, setQuery] = useState(defaultQuery);

  // Tilstand for å lagre forrige søkeforespørsel
  const [prevSearch, updatePrevSearch] = useState(defaultQuery);

  // Funksjon for å hente data fra Open Library API
  const fetchData = async (searchQuery) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchQuery}`);
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("error", error); // Logger eventuelle feil til konsollen
      return [];
    }
  };

  // Effekt-hook for å hente bokdata når den gjeldende søkeforespørselen endres
  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchData(currentQuery);
      setData(fetchedBooks); // Oppdaterer bøker-tilstanden med hentede data
    };
    getBooks();
  }, [currentQuery]);

  return (
    <Layout> {/* Omgir applikasjonen med Layout-komponenten */}
      <Routes>
        {/* Rute for å vise BookCard-komponenten */}
        <Route index element={<BookCard books={books} setQuery={setQuery} />} /> 
        {/* Rute for å vise SearchResults-komponenten */}
        <Route path="search/*" element={<SearchResults books={books} setQuery={setQuery} currentQuery={currentQuery} prevSearch={prevSearch} updatePrevSearch={updatePrevSearch} />} />
      </Routes>
    </Layout>
  );
}

export default App;
