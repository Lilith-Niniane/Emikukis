import React, { Fragment } from 'react'
import { Info, Img } from './EmotesStyles'
import { useTranslation } from 'react-i18next'

const Emotes = () => {
    const [t] = useTranslation('service')
    return (
        <Fragment>
            <h1>-{t('emote.title')}-</h1>
            <Img src='.\Portfolio\Emotes\EmotesShowDisplay.png' alt="" />
            <Info>
                <div>
                    <h2>- 1 {t('emote.emote-badges')}: 8€</h2>
                    <h2>- 3 {t('emote.emote-badges')}: 24€</h2>
                    <h2>- 6 {t('emote.emote-badges')}: 45€</h2>
                </div>
                <p>{t('emote.position')}</p>
                <div className='sizes-note'>
                    <div className='data'>
                        <p style={{width: '200%'}}>{t('emote.sizes')}</p>
                        <p style={{width: '150%'}}>112x112, 56x56 and 28x28 ({t('emote.emotes')})</p>
                        <p>72x72, 36x36 {t('emote.and')} 18x18 ({t('emote.badges')})</p>
                    </div>
                    <div className='images'>
                        <img style={{width: '85px', height: '85px'}}  src='.\Portfolio\Emotes\EmoteSizeDisplay.png' />
                        <img style={{width: '150px', height: '150px'}}  src='.\Portfolio\Emotes\EmoteSizeDisplay.png' />
                        <img style={{width: '230px', height: '230px'}} src='.\Portfolio\Emotes\EmoteSizeDisplay.png' />
                    </div>
                    
                </div>
            </Info>
        </Fragment>
    )
}

export default Emotes
