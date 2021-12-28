import React, { Fragment } from 'react'
import { Main } from './ChibiStyles'
import { Image, Info } from './DetailedCharacterStyles'
import { useTranslation } from 'react-i18next'

const Chibi = () => {
    const [t] = useTranslation('service')
    return (
        <div>
            <h1>-Chibi/Chobi-</h1>
            <Main style={{marginBottom: '100px'}}>
                <Image url='./Portfolio/Art/img16.png' />
                <Info>
                    <div>
                        <h2 style={{fontWeight: 'bold'}}>Chibi:</h2> 
                        <h2>{t('chibi.bust')}: 10€</h2>
                        <h2>{t('chibi.full')}: 30€</h2>
                    </div>
                    <div>
                        <p>{t('chibi.includes')}</p>
                        <p>*{t('chibi.extra')}: 8/25€</p>
                    </div>
                </Info>
            </Main>
            <Main>
                <Info>
                    <div>
                        <h2 style={{fontWeight: 'bold'}}>Chobi:</h2> 
                        <h2>{t('chibi.bust')}: 10€</h2>
                        <h2>{t('chibi.full')}: 30€</h2>
                    </div>
                    <div>
                        <p>{t('chibi.includes')}</p>
                        <p>*{t('chibi.extra')}: 8/25€</p>
                    </div>
                </Info>
                <Image url='./Portfolio/Art/img15.png' />
            </Main>
        </div>
    )
}

export default Chibi
