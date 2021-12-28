import styled from 'styled-components'
import colors from '../../Colors';

const Img = styled.img`
    width: 350px;
    height: 350px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    height: 650px;
    width: 400px;

    h2 {
        margin: 30px 0;
    }

    .sizes-note {
        width: 200%;
        border-radius: 5px;
        padding: 20px 30px;
        position: relative;
        left: -100%;
        height: 230px;
        display: flex;
        margin-top: 20px;

        .data {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        .images {
            flex: 2;
            position: relative;
            left: -10px;
            top: -20px;

            img {
                margin-right: 5px;
            }
        }
    }
`

export { Info, Img }