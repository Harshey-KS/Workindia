
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HeaderSearch from '../components/HeaderSearch';

import ItemList from '../components/ItemList';
import BottomNav from '../components/BottomNav';

const ExplorePage = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter(item =>
    item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
      <HeaderSearch />
      <ItemList items={filteredItems} />
      <BottomNav />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
 
`;

export default ExplorePage;
