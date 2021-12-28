import styled from 'styled-components'
import colors from '../../Colors';

const Image = styled.div`
    flex: 2;
    width: 500px;
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
`
const Info = styled.div`
    flex: 1;
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        margin-bottom: 50px;
    }
`

export { Image, Info }