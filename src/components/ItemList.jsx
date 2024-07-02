import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemList = ({ items }) => (
  <ListContainer>
    {items.length > 0 ? (
      items.map((item, index) => <Item key={index} item={item} />)
    ) : (
      <NoItemsMessage>No items match your search.</NoItemsMessage>
    )}
  </ListContainer>
);

const ListContainer = styled.div`
  margin-bottom: 20px;
`;

const NoItemsMessage = styled.div`
  text-align: center;
  color: gray;
`;

export default ItemList;
