import styled from 'styled-components'
import colors from '../../Colors';

const NavContainer = styled.div`
    width: 250px;
    height: 100vh;
`;

const Nav = styled.div`
    margin: 0px;
    padding: 25px 0;
    background-color: ${colors.darkPurple};
    width: inherit;
    height: 100vh;
    position: fixed;
    box-sizing: border-box;
    z-index: 100;
    border-right: 2px solid ${colors.purple};
    display: flex;
    flex-direction: column;
`;

const Links = styled.div`
    flex: 1;

    a:hover {
    }
    .current {
        color: #131313;
        box-shadow: -10px 0px 15px 0 rgb(19, 19, 19, 0.6);
        background-color: ${colors.purple};
        background: ${`
            linear-gradient(90deg, ${colors.darkPurple}
            0%, ${colors.purple} 10%, ${colors.purple} 90%,
            ${colors.darkPurple} 100%);
        `};
        a:hover {
            text-decoration: none;
        }
    }
    > ul {
        padding: 0;
        
        svg {
            margin-right: 10px;
            transform: scale(0.8);
        }
        span {
            color: ${colors.textLight};
            font-size: 1em;
            margin-left: 10px;
            transform: rotate(90deg);
        }
        > li {
            padding: 3px 30px;
            margin-bottom: 5px;

            a, p {
                font-size: 0.8em;
                color: ${colors.textLight};
                text-decoration: none;
                transition: 0.3s;
            }
            
        }
        .normal a:hover {
            color: ${colors.lightPurple};
            text-decoration: none;
        }
    }
`;

const ExternalLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 150px;
    

    svg {
       color: ${colors.text};
       transition: 0.3s;
    }
    svg:hover {
        color: ${colors.lightPurple};
    }
`;

const Img = styled.img`
    width: 140px;
    margin: auto;
    margin-bottom: 30px;
    display: block;
`;

export { NavContainer, Nav, Img, Links, ExternalLinks }