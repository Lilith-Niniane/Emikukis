import React, { useRef, Fragment } from 'react'
import { Main, TermsSection } from './TermsOfServiceStyles'
import { useTranslation } from 'react-i18next'

const TermsOfService = () => {
    const [t] = useTranslation('tos')
    return (
        <Main>
            <header>
                <h3>{t(`notice`)}</h3>
                <h1>{t(`title`)}</h1>
            </header>
            {Object.keys(t('terms', {returnObjects: true})).map((e, n) =>
                <TermsSection key={`${e}-section`} right={n % 2 == 0 ? false : true}>
                    <h2>{t(`terms.${e}.title`)}</h2>
                    <ul>
                        {Object.keys(t(`terms.${e}.list`, {returnObjects: true})).map(i =>
                            <li key={`${e}-${i}`}>{t(`terms.${e}.list.${i}`)}</li>
                        )}
                    </ul> 
                </TermsSection>
            )}
        </Main>
    )
}

export default TermsOfService
