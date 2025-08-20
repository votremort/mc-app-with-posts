import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
`

export const MenuItem = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: black;

  &.active {
    color: #864f92ff;
  }
  
  &:hover {
    text-decoration: underline;
  }
`