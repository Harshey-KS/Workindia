import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import AddItemPage from './pages/AddItemPage';
import styled from 'styled-components';
import ItemGridPage from './pages/ItemGridPage';


const App = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/item-grid" element={<ItemGridPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
