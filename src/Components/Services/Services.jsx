import React, { useState } from 'react'
import Service from './Service'
import { Main, Header, ServicesDisplay, LastNotice } from './ServicesStyles'
import { useTranslation } from 'react-i18next'
import Vtuber from './Vtuber'
import Emotes from './Emotes'
import DetailedCharacter from './DetailedCharacter'
import Chibi from './Chibi'
import NotAvailable from './NotAvailable'

const Services = () => {
    const [t] = useTranslation('services')
    const [service, setService] = useState()

    return (
        <Main>
            <Header>
                <h1>{t('title')}</h1>
                <h2>{t('main-notice.currency')}</h2>
                <p>{t('main-notice.listed')}</p>
                <p>{t('main-notice.commercial')}</p>
            </Header>
            <ServicesDisplay>
                {Object.keys(t('services', {returnObjects: true})).map(e =>
                    <div key={e} onClick={() => setService(e)}>
                        <h3>{t(`services.${e}`)}</h3>
                    </div>
                )}
            </ServicesDisplay>
            <LastNotice>
                <h4>{t('notice.title')}</h4>
                <ul>
                    {Object.keys(t('notice.notices', {returnObjects: true})).map(e =>
                        <li key={e}>{t(`notice.notices.${e}`)}</li>  
                    )}
                </ul>
            </LastNotice>
            <Service activeService={service} service='vtube' close={setService}>
                <a href="/vtuber">{t('link')}</a>
                <Vtuber />
            </Service>
            <Service activeService={service} service='emotes' close={setService}>
                <a href="/emotes">{t('link')}</a>
                <Emotes />
            </Service>
            <Service activeService={service} service='character' close={setService}>
                <a href="/artwork">{t('link')}</a>
                <DetailedCharacter />
            </Service>
            <Service activeService={service} service='chibi' close={setService}>
                <a href="/artwork">{t('link')}</a>
                <Chibi />
            </Service>
            <Service activeService={service} service='sketch' close={setService}>
                <NotAvailable />
            </Service>
            <Service activeService={service} service='design' close={setService}>
                <NotAvailable />
            </Service>
        </Main>
    )
}

export default Services
