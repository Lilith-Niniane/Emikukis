import React from 'react'
import styled from 'styled-components'
import colors from '../../Colors';

const Main = styled.footer`
    background-color: ${colors.darkPurple};
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.lightPurple};
    
    p {
        font-size: 0.7em;
    }
`;

const Footer = () => {
    return (
        <Main>
            <p>© 2021 Emikukis. Developed by Lilith</p>
        </Main>
    )
}

export default Footer
