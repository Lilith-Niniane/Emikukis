import styled from 'styled-components'

const TimerBG = styled.div`
    background-color: rgba(22, 14, 26, 0.7);
    width: 100%;
    height: 5px;
    overflow: hidden;
`;

const TimerBar = styled.div`
    height: inherit;
    background-color: rgb(132, 104, 164);
`;

const ImgBtnContainer = styled.div`
    display: block;
    width: 100%;
    height: 99.5%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    > div {
        height: 100%;
        position: relative;
        padding: 0 5px;

        &:hover {
            cursor: pointer;
            > button {
                transform: scale(1.5) translate(0, -25%);
                opacity: 100%;
            }
        }
    }
`;

const ImageBtn = styled.button`
    opacity: 70%;
    position: relative;
    top: 50%;
    transform: translate(0, -25%);
    transition: 0.5s;
    height: 50px;
    width: 50px;
    background-color: rgba(22, 14, 26, 0.7);
    border: none;
    color: #ECDDF2;
    margin: auto;
    font-size: 2em;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`;

export { TimerBG, TimerBar, ImageBtn, ImgBtnContainer }