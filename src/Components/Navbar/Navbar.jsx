import { NavContainer, Nav, Img, Links, ExternalLinks } from './NavbarStyles'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FloatingOptions from './FloatingOptions'
import { faAddressBook, faConciergeBell, faHome, faLanguage, faQuestionCircle, faShieldAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [t, i18n] = useTranslation('navbar')
    const setLanguage = value => {
        i18n.changeLanguage(value)
        window.localStorage.setItem('lang', value)
    }
    const ContactRedirect = () => {
        if (window.confirm(t('contact-redirect'))) {
            window.location.href='https://emikukis.wixsite.com/emixcp/copia-de-about-me';
        }
    }

    return (
        <NavContainer>
            <Nav>
                <Links>
                    <Img src='./Images/LogoSquare.png' />
                    <ul>
                        <li className={window.location.pathname === '/Emikukis' ? 'current': 'normal'}><a href='/'><FontAwesomeIcon icon={faHome} /> {t('home')}</a></li>
                        <FloatingOptions className={
                           window.location.pathname === '/Emikukis/artwork' ? 'current' :
                           window.location.pathname === '/Emikukis/vtuber' ? 'current' :
                           window.location.pathname === '/Emikukis/emotes' ? 'current' :
                           'normal'
                        }>
                            <p><FontAwesomeIcon icon={faSuitcase} /> {t('portfolio')} <span>⋗</span></p>
                            <ul>
                                <li><a href='/Emikukis/artwork'>ArtWork</a></li>
                                <li><a href='/Emikukis/vtuber'>2dVtuber</a></li>
                                <li><a href='/Emikukis/emotes'>Emotes/Badges</a></li>
                            </ul>
                        </FloatingOptions>
                        <li className={window.location.pathname === '/Emikukis/services' ? 'current': 'normal'}><a href='/Emikukis/services'><FontAwesomeIcon icon={faConciergeBell} /> {t('services')}</a></li>
                        <li className={window.location.pathname === '/Emikukis/tos' ? 'current': 'normal'}><a href='/Emikukis/tos'><FontAwesomeIcon icon={faShieldAlt}  /> {t('tos')}</a></li>
                        <li className={window.location.pathname === '/Emikukis/faqs' ? 'current': 'normal'}><a href='/Emikukis/faqs'> <FontAwesomeIcon icon={faQuestionCircle} />{t('faqs')}</a></li>
                        <FloatingOptions>
                            <p><FontAwesomeIcon icon={faLanguage} size='lg' /> {t('language')} <span>⋗</span></p>
                            <ul>
                                <li onClick={() => setLanguage('en')}><a>English</a></li>
                                <li onClick={() => setLanguage('es')}><a>Español</a></li>
                            </ul>
                        </FloatingOptions>
                        <li className='normal'><a onClick={() => ContactRedirect()}><FontAwesomeIcon icon={faAddressBook}/> {t('contact')}</a></li>
                    </ul>
                </Links>
                <ExternalLinks>
                    <a href="https://www.twitch.tv/emikukis" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitch} size='lg' />
                    </a>
                    <a href="https://twitter.com/emixcp" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size='lg' />
                    </a>
                    <a href="https://www.instagram.com/emikukiss/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </a>
                    <a href="https://discord.gg/6JKBxsbFhT" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDiscord} size='lg' />
                    </a>
                </ExternalLinks>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
