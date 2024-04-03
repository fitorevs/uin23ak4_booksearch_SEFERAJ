import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard';
import SearchResults from './components/SearchResults';

function App() {

  const defaultQuery = "James Bond";


  const [books, setData] = useState([]);

  const [currentQuery, setQuery] = useState(defaultQuery);

  const [prevSearch, updatePrevSearch] = useState(defaultQuery);

  const fetchData = async (searchQuery) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchQuery}`);
      const data = await response.json();
      return data.docs;
    } catch (error) {
      console.error("error", error);
      return [];
    }
  };

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchData(currentQuery);
      setData(fetchedBooks);
    };
    getBooks();
  }, [currentQuery]);

  return (
    <Layout>
      <Routes>
        <Route index element={<BookCard books={books} setQuery={setQuery} />} />
        <Route path="search/*" element={<SearchResults books={books} setQuery={setQuery} currentQuery={currentQuery} prevSearch={prevSearch} updatePrevSearch={updatePrevSearch} />} />
      </Routes>
    </Layout>
  );
}

export default App;
