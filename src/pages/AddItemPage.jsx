import React, { useState } from 'react';
import styled from 'styled-components';
import AddHeader from '../components/AddHeader';
import AddItemForm from '../components/AddItemForm';
import BottomNav from '../components/BottomNav';

const AddItemPage = ({ onAddItem }) => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <PageContainer>
      <AddHeader />
      <AddItemForm onAddItem={handleAddItem} />
      <BottomNav />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
`;

export default AddItemPage;
