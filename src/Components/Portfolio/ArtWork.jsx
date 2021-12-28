import React, { useEffect, useState, useRef } from 'react'
import PicDisplay from './PicDisplay'
import styled from 'styled-components'
import colors from '../../Colors'
import ReactPlayer from 'react-player'

const Main = styled.div`
    padding-top: 50px;
    width: 100%;
    h1 {
        color: ${colors.textLight};
        text-align: center;
        font-size: 1.5em;
        border-bottom: 1px solid ${colors.textLight};
        width: 50%;
        padding-bottom: 10px;
        margin: auto;
        margin-bottom: 30px;
        font-weight: normal;
    }
`
const Gallery = styled.div`
    width: 100%;
    padding: 0 20px 20px;
    column-count: 3;
`
const Pic = styled.div`
    margin-bottom:  20px;
    overflow: hidden;
    position: relative;
    background: ${`radial-gradient(circle, ${colors.lightPurple}  0%, ${colors.darkPurple} 90%);`};

    > p {

    }
    * {
        transition: 0.5s;
    }
    .cover {
        top: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: rgb(56, 56, 56, 0.5);

        .title {
            position: relative;
            top: 20px;
            color: white;
            text-align: center;
            margin: auto;
            padding: 5px 10px;
        }
        .top {
            transition-delay: 0.1s;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            clip-path: polygon(0% 0%, 100% 0, 100% 16%, 100% 100%, 0 100%);
            background-color: rgb(39, 39, 39, 0.2);
        }
        .bot {
            transition-delay: 0.1s;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            clip-path: polygon(0 150%, 0% 100%, 64% 100%);
            background-color: rgb(26, 26, 26, 0.2);
        }
        .arrow {
            color: ${colors.textLight};
            position: absolute;
            right: 25px;
            bottom: -100px;
            font-size: 3em;
            transform: rotate(-90deg);
        }
    }
    img, video {
        width: 100%;
        display: block;
    }
    &:hover {
        cursor: pointer;
        .cover {
            top: 0;
            background-color: rgb(56, 56, 56, 0.5);

            .top {
                clip-path: polygon(0% 0%, 100% 0, 100% 16%, 33% 100%, 0 100%);
            }
            .bot {
                clip-path: polygon(0 60%, 0% 100%, 64% 100%);
            }
        }
        img, video {
            transform: scale(1.08);
        }
        .arrow {
            transform: rotate(0);
            bottom: 10px;
        }
    }
`

const ArtWork = props => {
    const [imageRoute, setImageRoute] = useState()
    const [showImage, setShowImage] = useState(null)
    const PicRoute = data => {
        setImageRoute(data)
        setShowImage(true)
    }
    
    return (
        <Main>
            {props.children}
            <Gallery>
                {typeof props.gallery == 'object' ? props.gallery.map(e =>
                    <Pic onClick={() => PicRoute({src: e.src, type: e.class})} key={e.src}>
                        {e.class == 'img' ?
                            <img className=''  src={e.src} />
                        : e.class == 'vid' ?
                            <ReactPlayer
                                width='100%' height='100%'
                                url={(e.src)}
                                playing
                                muted
                                loop
                            />
                        : null}
                        <div className='cover'>
                            <p className='title'>{e.title}</p>
                            <p className='arrow'>⋗</p>
                            <div className='top' />
                            <div className="bot"></div>
                        </div>
                    </Pic>
                ) : null}
            </Gallery>
            <PicDisplay opened={showImage} close={setShowImage} img={imageRoute} />
        </Main>
    )
}

export default ArtWork
