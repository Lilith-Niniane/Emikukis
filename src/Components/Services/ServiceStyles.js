import styled from 'styled-components'
import colors from '../../Colors';

const Main = styled.div`
    transition: 0.5s;
    position: fixed;
    background-color: ${colors.darkPurple};
    top: ${props => props.opened ? '0' : '100%'};
    left: 250px;
    right: 0;
    height: 100vh;
    overflow: auto;
    padding: 100px 0 40px;

    * {
        transition: 0.5s;
    }
    .close {
        position: fixed;
        right: 30px;
        top: ${props => props.opened ? '10px' : '100%'};
        font-size: 1.5em;
        font-weight: bold;
        color: ${colors.textLight};
        
        &:hover {
            cursor: pointer;
        }
    }
    a {
        position: fixed;
        left: 280px;
        top: ${props => props.opened ? '10px' : '100%'};
        font-size: 1.5em;
        font-weight: bold;
        color: ${colors.textLight};
        font-size: 1em;
        
        &:hover {
            cursor: pointer;
        }
    }
   
`;

const Content = styled.div`
    max-width: 950px;
    margin: auto;
    display: flex;
    width: fit-content;

    h1 {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 20px;
        left: 0;
        font-size: 1.55em;
        color: ${colors.lightPurple};
        z-index: -1;
    }
    h2 {
        font-size: 1.1em;
    }
    h3 {
        font-size: 0.95em;
    }
    h2, h3 {
        font-weight: normal;
        color: ${colors.textLight};
    }
    p, li {
        font-size: 0.9em;
    }
`;

export { Main, Content }