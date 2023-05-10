import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

interface post {
  userId: number;
  id: number;
  title: string;
  body: number;
}

function App() {
  const [postList, setPostList] = useState<post[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      ).then((res) => {
        return res.json();
      });
      setPostList(data);
      setLoading(false);
    }
    fetchData();
  }, [search]);
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <span>Search Posts using Debounce</span>
      <input
        type="text"
        placeholder="search posts..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default App;
