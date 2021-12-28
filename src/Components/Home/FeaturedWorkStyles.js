import styled, { keyframes } from 'styled-components'

const Main = styled.section`
    transition: 0.7s;
    width: 100%;
    height: 100vh;
    margin-top: 100px;
    position: relative;
    opacity: ${props => props.focused ? '1' : '0.5'};
`;

const animateOpactiy = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Featured = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: red;
    background-image: url(${props => props.prevCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
   
    &::after {
        content: '';
        animation: ${animateOpactiy} 1s;
        background-image: url(${props => props.cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export { Main, Featured }