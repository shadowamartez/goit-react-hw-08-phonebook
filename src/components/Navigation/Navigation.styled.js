import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: #007bff; 
    text-decoration: none; 
    margin: 0 10px; 
    font-weight: bold; 
    font-size: 24px;
`;

export const StyledNavigationContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    `;