import React, { Fragment } from 'react'
import { Image, Info } from './VtuberStyles'
import { useTranslation } from 'react-i18next'

const Vtuber = () => {
    const [t] = useTranslation('service')
    return (
        <Fragment>
            <h1>-VTuber / Live2D-</h1>
            <Image>
                <div />
            </Image>
            <Info>
                <div>
                    <div>
                        <h2>{t('vtuber.half-body')}: 500€</h2>
                        <h3>{t('vtuber.at-start')}</h3>
                        <ul>
                            <li>{t('vtuber.create-illus')}</li>
                            <li>{t('vtuber.movement')}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t('vtuber.half-body')}: 250€</h2>
                        <h3>{t('vtuber.rigging')}</h3>
                        <ul>
                            <li>{t('vtuber.your-design')}</li>
                        </ul>
                    </div>
                    <h2>{t('vtuber.half-only')}: 250€</h2>
                </div>
                <div>
                    <div>
                        <h2>{t('vtuber.full-body')}: 800€</h2>
                        <h3>{t('vtuber.at-start')}</h3>
                        <ul>
                            <li>{t('vtuber.create-illus')}</li>
                            <li>{t('vtuber.movement')}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>{t('vtuber.full-body')}: 300€</h2>
                        <h3>{t('vtuber.rigging')}</h3>
                        <ul>
                            <li>{t('vtuber.your-design')}</li>
                        </ul>
                    </div>
                    <h2>{t('vtuber.full-only')}: 500€</h2>
                </div>
            </Info>
        </Fragment>
    )
}

export default Vtuber
