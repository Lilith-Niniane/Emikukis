import styled from 'styled-components'
import colors from '../../Colors';

const Image = styled.div`
    background-image: url('./Portfolio/vtuber/vtube7.png');
    background-size: 180%;
    background-repeat: no-repeat;
    background-position: 50% 46%;
    width: 400px;
    height: 800px;
    border-left: 4px dashed ${colors.text};
    position: relative;

    > div {
        position: absolute;
        width: 100%;
        top: 38%;
        bottom: 0;
        border-top: 4px dashed ${colors.text};
    }
`

const Info = styled.div`
    margin-left: 40px;
    h3 {
        margin: 5px 0;
    }
    ul {
        margin: 0;
        padding-left: 20px;
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 38%;
        margin-bottom: 100px;
    }
`

export { Image, Info }