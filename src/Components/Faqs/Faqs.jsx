import React, { useEffect, useRef, useState } from 'react'
import { Main, Header, Info, Process, Example } from './FaqsStyles'
import { useTranslation } from 'react-i18next'
import { ScrollReference } from '../ScrollReference'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faClipboard, faImages } from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const processIcons = [faHandshake, faClipboard, faPencilAlt, faImages ]

const Faqs = () => {
    const [t] = useTranslation('faqs')
    const scroll = useRef()
    const [scrollPos, setScrollPos] = useState(0)

    const panelWidth = (y, yMin, yMax, width) => {
        // Joshua was here
        return width - ((y - yMin) * width / (yMax - yMin))
    }

    useEffect(() => {
        const handleScroll = () => {
            const { y } = scroll.current.getBoundingClientRect()
            const yMin = 50
            const yMax = 250
            if (y < yMax && y > yMin) {
                setScrollPos(panelWidth(y, yMin, yMax, 400))
            }
            else if (y > yMin) setScrollPos(0)
            else if (y < yMax) setScrollPos(400)
        }

        window.addEventListener('scroll', handleScroll);
        return () =>  window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <Main>
            <Header>
                <p>{t('notice')} <a href="/"> {t('homepage')}</a>)</p>
                <p>{t('agree')} <a href='/tos'>T.O.S.</a></p>
            </Header>
            <Info>
                <h1>{t('importan-info.title')}</h1>
                <ul>
                    <li>{t('importan-info.payments')} <a href="http://www.paypal.com/paypalme/emixcp" target="_blank" rel="noopener noreferrer">Paypal</a></li>
                    <li>{t('importan-info.money')}</li>
                    <li>{t('importan-info.date')}</li>
                    <li>{t('importan-info.contact')} <a href="mailto:Emixcpartist@gmail.com">Emixcpartist@gmail.com</a></li>
                </ul>
            </Info>
            <Process>
                <header>
                    <h4>{t('process.title')}</h4>
                </header>
                <div>
                    {Object.keys(t('process.steps', {returnObjects: true})).map((e, x) =>
                        <div key={e}>
                            <div className='icon'>
                                <FontAwesomeIcon icon={processIcons[x]} />
                            </div>
                            <h5>{t(`process.steps.${e}.title`)}</h5>
                            <p>{t(`process.steps.${e}.info`)}</p>
                        </div>
                    )}
                </div>
            </Process>
                <p>{t('send-email')}</p>
                <a href="mailto:Emixcpartist@gmail.com">Emixcpartist@gmail.com</a>
            <Example>
                <ScrollReference ref={scroll} height='60vh' />
                <p className='float'>{t('process.steps.beggin.title')}</p>
                <div className='eg-card'>
                      {Object.keys(t('beggining-eg', {returnObjects: true})).map(e =>
                        <div className='eg' key={e}>
                            <h5>{t(`beggining-eg.${e}.title`)}</h5>
                            {typeof t(`beggining-eg.${e}.info`, {returnObjects: true}) === 'string' ?
                                <span>{t(`beggining-eg.${e}.info`)}</span>
                                :
                                Object.keys(t(`beggining-eg.${e}.info`, {returnObjects: true})).map((i) =>{
                                    if (i === 'high') {
                                        return(<span key={`${e}-${i}`} className='high'>{t(`beggining-eg.${e}.info.${i}`)}</span>)
                                    }
                                    else if (i === 'link') {
                                        const arr = t(`beggining-eg.${e}.info.${i}`).split('#*')
                                        return(
                                            <span key={`${e}-${i}`} className='high'><a href={arr[1]} target="_blank" rel="noopener noreferrer">
                                                {arr[0]}</a></span>
                                        )
                                    }
                                    else {
                                        return(<span key={`${e}-${i}`} >{t(`beggining-eg.${e}.info.${i}`)}</span>)
                                    }
                                })
                            }
                        </div>
                      )}  
                </div>
                <div className='img-link'>
                    <div style={{width: `${scrollPos}px`}}>
                        <a href="https://trello.com/b/Ow7ztDJb/emixcp-queue-3" target="_blank" rel="noopener noreferrer">
                            <img src='./images/WaitList.png' />
                        </a>
                    </div>
                </div>
            </Example>
            <p className='footer'>{t('footer')}</p>
        </Main>
    )
}

export default Faqs
