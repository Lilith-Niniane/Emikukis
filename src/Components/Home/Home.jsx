import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FeaturedWork from './FeaturedWork';
import InformationPanel from './InformationPanel';

const Home = () => {
    const [t] = useTranslation('home')
    const [focusedSections, setFocusedSections] = useState([true, false, false])
    
    const scrollRefs = useRef([])
    const scrollToIndex = useRef(0)
    const updateScroll = useRef(true)
    
    const SetScrollToIndex = (value) => {
        scrollToIndex.current += value
        updateScroll.current = false
        ScrollTo(scrollToIndex.current)
    }

    useEffect(() => {
        if (window.confirm(t('alert'))) {
            window.location.href='https://emikukis.wixsite.com/emixcp';
        }
        const handleScroll = () => {
            const refs = scrollRefs.current
            const scrollLimits = 50
            const { y } = refs[scrollToIndex.current].getBoundingClientRect()
            if (updateScroll.current) {
                if (y < -scrollLimits) SetScrollToIndex(1)
                else if (y > scrollLimits) SetScrollToIndex(-1)
            }
            else {
                if (y > -scrollLimits && y < scrollLimits) updateScroll.current = true
            }

            const arr = []
            for (let i = 0; i < focusedSections.length; i++) {
                const { y } = refs[i].getBoundingClientRect()
                if (y > -scrollLimits && y < scrollLimits) arr.push(true)
                else arr.push(false)
            }
            setFocusedSections(arr)
        }

        const arr = []
        for (let i = 0; i < scrollRefs.current.length; i++) {
            if (i == scrollToIndex.current) arr.push(true)
            else arr.push(false)
        }
        setFocusedSections(arr)

        window.addEventListener('scroll', handleScroll);
        return () =>  window.removeEventListener('scroll', handleScroll);
    }, [])

    const AddToScrollRefs = obj => {
        if (obj && !scrollRefs.current.includes(obj)){
            scrollRefs.current.push(obj)
        }
    }
    const ScrollTo = (value) => {
        window.scroll({
            top: window.scrollY + scrollRefs.current[value].getBoundingClientRect().y,
            behavior: 'smooth'
        })
    }

    return (
        <React.Fragment>
            <div>
                <InformationPanel height={'50%'} left={false} scrollRef={obj => AddToScrollRefs(obj)} focused={focusedSections[0]}
                    animatedImg='./Images/EmikukisYei.gif' staticImg='./Images/EmikukisYei.png'>
                    <div>
                        <h1>{t('commissions.title')}</h1>
                        <div>
                            <div className='in-l'>
                                <span style={{color: '#8468A4', textDecoration: 'underline'}}>{t('commissions.waiting')}</span> 
                                <span style={{color: '#ECDDF2'}}> {t('commissions.waiting-status')}</span>
                            </div>
                            <span className='op'>EmiXcP - {t('commissions.profession')}</span>
                            <p className='in-l'>{t('commissions.email-notice')} {'>>'}Emixcpartist@gmail.com{'<<'}</p>
                        </div>
                    </div>
                </InformationPanel>
                <InformationPanel left={true} scrollRef={obj => AddToScrollRefs(obj)} focused={focusedSections[1]}
                    animatedImg='./Images/EmikukisXD.gif' staticImg='./Images/EmikukisXD.png'>
                    <div>
                        <h1>{t('about.title')}</h1>
                        <div className='panel-info'>
                            <p className='in-l'>{t('about.greeting')}</p>
                            <p className='in-r'>{t('about.desc1')}</p>
                            <br />
                            <p className='in-l'>{t('about.desc2')}</p>
                            <div className='info-background' />
                        </div>
                    </div>
                </InformationPanel>
            </div>
            <FeaturedWork scrollRef={obj => AddToScrollRefs(obj)}
                focused={focusedSections[2]} />
        </React.Fragment>
    )
}

export default Home
