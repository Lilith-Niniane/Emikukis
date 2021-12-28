import styled, { keyframes, css } from 'styled-components'
import colors from '../../Colors'
import ReactPlayer from 'react-player'

const animIn = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
    }
`
const animOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
`
const Main = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    left: 250px;
    height: 100vh;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    
    ${props => props.opened === null ?
        css`visibility: hidden;`
        :
        css`animation: ${props => props.opened ? animIn : animOut} 0.5s forwards;`
    }

    &::after {
        content: '';
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: ${colors.deepPurple};
        position: absolute;
        opacity: 0.9;
        z-index: -1;
    }

    img {
        height: 100%;
        object-fit: cover;
        opacity: 1;
        display: block;
        margin: auto;
    }
    p {
        position: absolute;
        right: 30px;
        top: 10px;
        font-size: 1.5em;
        font-weight: bold;
        color: ${colors.textLight};
        
        &:hover {
            cursor: pointer;
        }
    }
    > div {
        height: fit-content !important;
        width: 100% !important;
    }
    video {
        display: block;
        height: 100% !important;
        width: 100% !important;
    }
`

const PicDisplay = props => {
    return (
        <Main opened={props.opened} >
            {props.img ? props.img.type === 'img' ?
                <img  src={props.img.src} alt="" />
            : props.img.type === 'vid' ?
                <ReactPlayer
                    className='video-player'
                    url={(props.img.src)}
                    playing={props.opened}
                    loop
                    controls
                />
            : null : null}
            <p onClick={() => props.close(false)}>✘</p>
        </Main>
    )
}

export default PicDisplay
