import styled from 'styled-components'
import colors from '../../Colors'

const Information = styled.div`
    overflow: hidden;
    > :first-child {
        padding-left: 40px;
        .info-background{
            left: 0;
            background: linear-gradient(90deg, rgba(61,36,77,1) 70%, rgba(42,23,54,1) 100%);
        }
    }
    > :nth-child(2) {
        padding-right: 40px;
        .info-background{
            right: 0;
            background: linear-gradient(90deg, rgba(61,36,77,1) 70%, rgba(42,23,54,1) 100%);
        }
    }
`;

const Panel = styled.div`
    margin: auto;
    max-width: 1080px;
    width: 100%;
    min-height: 450px;
    height: 69vh;
    display: flex;
    align-items: center;
    position: relative;

    > img {
        width: 400px;
    }
    > div {
        width: 100%;
        height: 330px;
        display: flex;
        flex-direction: column;
        
        .panel-info {
            padding: 35px 40px;
            margin-top: 20px;
            flex: 1;
            position: relative;
            p {
                font-size: 5px;
            }
            
            .info-background {
                position: absolute;
                height: 100%;
                background-color: #3D244D;
                
                top: 0;
                z-index: -10;
                right: -4.2vw;
                left: -200px;
            }
        }
    }
    h1 {
        font-size: 2.5em;
        margin: 0 40px;
        color: #8468A4;
    }
`;

const CommissionsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    span {
        font-size: 1.9em;
    }
    > :first-child {
        > :first-child {
            color: #8468A4;
            text-decoration: underline;
        }

        span {
            color: #ECDDF2;
        }
    }
`;



export { Information, Panel, CommissionsInfo }