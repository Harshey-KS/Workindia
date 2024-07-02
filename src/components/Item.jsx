import React from 'react';
import styled from 'styled-components';

const Item = ({ item }) => (
  <ItemContainer>
    <ImagePlaceholder />
    <ItemDetails>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>MRP: ₹{item.price}</ItemPrice>
      {item.shipping && <Shipping>{item.shipping}</Shipping>}
    </ItemDetails>
  </ItemContainer>
);

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f0f0f5;
`;

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  color: gray;
`;

const Shipping = styled.div`
  font-size: 12px;
  color: green;
`;

export default Item;
