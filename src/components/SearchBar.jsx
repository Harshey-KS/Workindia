import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className='container'>
      <FiSearch size={20} />
      <SearchInput  placeholder="Search" onChange={handleInputChange} />
    </div>
  );
};


const SearchInput = styled.input`
  border: none;
  border-radius:20px;
  margin-left: 5px;
  flex: 1;
  padding: 5px;
  outline: none;
`;

export default SearchBar;
