import styled from 'styled-components'

export const ScrollReference = styled.div`
    bottom: 50%;
    height: ${props => props.height ? props.height : '50vh'} !important;
    width: 50vw !important;
    position: absolute;
    z-index: -100;
`;