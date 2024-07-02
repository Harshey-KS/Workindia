
import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shipping, setShipping] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, price, shipping };
    onAddItem(newItem);
    setName('');
    setPrice('');
    setShipping('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        type="number"
        placeholder="Item Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <FormSelect
        value={shipping}
        onChange={(e) => setShipping(e.target.value)}
      >
        <option value="" disabled>Select Shipping Method</option>
        <option value="Same Day Shipping">Same Day Shipping</option>
        <option value="None">None</option>
      </FormSelect>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  background-color: #f0f0f5;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  width:90%
`;

const FormInput = styled.input`
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
`;

const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export default AddItemForm;
