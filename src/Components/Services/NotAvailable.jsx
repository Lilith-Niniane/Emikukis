import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

const NotAvailable = () => {
    const [t] = useTranslation('service')
    return (
        <Fragment>
            <h2 style={{fontSize: '4em', textAlign: 'center'}}>{t('not-available')}</h2>
            <div style={{
                marginLeft: '30px',
                width: '800px',
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('./Portfolio/Art/panic.png')`,
                borderRadius: '5px',
                overflow: 'hidden',
            }}></div>
        </Fragment>
    )
}

export default NotAvailable
