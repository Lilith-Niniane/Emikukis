import React, { Fragment, useRef, useEffect, useState } from 'react'
import { Featured, Main } from './FeaturedWorkStyles'
import linksJson from './FeaturedLinks.json'
import { ScrollReference } from '../ScrollReference'
import Timer from './Timer';

const FeaturedWork = props => {
    const GetLinks = () => {
        const data = []
        for(var i in linksJson) data.push(linksJson[i])
        return data
    }
    const links = useRef(GetLinks())
    const [cover, setCover] = useState(links.current[0])
    const [prevCover, setPrevCover] = useState()
    const [imgIndex, setImgIndex] = useState(0)
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        setFocused(props.focused)
    })
    useEffect(() => {
        const linksArr = links.current
        if (imgIndex < 0) setImgIndex(linksArr.length - 1)
        else if (imgIndex >= linksArr.length) setImgIndex(0)
        else {
            setPrevCover(cover)
            setCover(linksArr[imgIndex])
        }
    }, [imgIndex])
    useEffect(() => {
    }, [focused])

    return (
        <Main focused={focused}>
            <ScrollReference ref={props.scrollRef} />
            <Featured key={cover} cover={cover} prevCover={prevCover} />
            <Timer focused={focused} changeIndex={imgIndex => setImgIndex(imgIndex)} />
        </Main>
    )
}

export default FeaturedWork
