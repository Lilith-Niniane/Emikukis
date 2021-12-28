import React, { Fragment } from 'react'
import { Image, Info } from './DetailedCharacterStyles'
import { useTranslation } from 'react-i18next'

const DetailedCharacter = () => {
    const [t] = useTranslation('service')
    return (
        <Fragment>
            <h1>-{t('detailed.title')}-</h1>
            <Image url='./Images/Featured2.png' />
            <Info>
                <div>
                    <h2>{t('detailed.bust')}: 50€</h2>
                    <h2>{t('detailed.waist')}: 100€</h2>
                    <h2>{t('detailed.full')}: 180€</h2>
                </div>
                <div>
                    <p>{t('detailed.includes')}</p>
                    <p>*{t('detailed.extra')} 45/175€</p>
                </div>
            </Info>
        </Fragment>
    )
}

export default DetailedCharacter
