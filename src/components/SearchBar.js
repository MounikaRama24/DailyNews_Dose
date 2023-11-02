import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="input-group mx-2">
      <input
        type="text"
        className="form-control ms-2"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100px' }}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
