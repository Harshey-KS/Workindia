import React from 'react';
import styled from 'styled-components';

const BottomNav = () => (
  <NavContainer>
    <NavItem active />
    <NavItem />
    <NavItem />
    <NavItem />
  </NavContainer>
);

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f5;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 16%;
  margin-bottom:150px;
`;

const NavItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? 'green' : '#ccc')};
`;

export default BottomNav;
