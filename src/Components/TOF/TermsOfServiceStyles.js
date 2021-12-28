import styled, { css } from "styled-components";
import colors from '../../Colors'

const Main = styled.div`
    width: 100%;
    margin: auto;
    padding-top: 50px;

    h3 {
        font-weight: normal;
        color: #d61b44;
        width: 55%;
        margin: auto;
        margin-bottom: 30px;
    }
    h3, h1 {
        text-align: center;
    }
    h1 {
        font-size: 2.5em;
        color: ${colors.textLight};
    }
`;

const TermsSection = styled.section`
    padding: 0 40px;
    margin-top: 80px;
    ${props => props.right ?
        css`
            text-align: end;
        ` : 
        null
    }
    

    h2 {
        font-size: 2em;
        color: ${colors.lightPurple};
        margin-bottom: 30px;
        padding: 0 20px;
    }
    ul {
        margin-bottom: 60px;
        list-style-type: none;
        padding: 0 40px;

        > li {
            font-size: 1em;
            margin: 20px 0;
            position: relative;

            &::before {
                position: absolute;
                content: '🕷️';
                ${props => props.right ?
                css`
                    right: -40px;
                ` : 
                css`
                    left: -40px;
                `
                }
                
            }
        }
    }
`;

export { Main, TermsSection }