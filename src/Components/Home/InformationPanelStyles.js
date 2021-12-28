import styled, { css } from 'styled-components'
import colors from '../../Colors';

const Main = styled.section`
    width: 100%;
    min-height: 450px;
    height: 69vh;
    position: relative;
`;

const Panel = styled.div`
    margin: auto;
    max-width: 950px;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: ${props => !props.left ? 'row' : 'row-reverse'};

    * {
        transition: 0.7s;
    }
    h1 {
        font-size: 2.5em;
        ${props => !props.left ? css`padding-left: 40px;` : css`padding-right: 40px;`}
        color: ${colors.lightPurple};
        height: 60px;
        position: relative;
        top: -15px;
        opacity: ${props => props.focused ?
        '1' : '0.5'};
    }
    > img {
        width: 400px;
    }
    > div {
        flex: 1;
        height: 330px;

        > div {
            height: 270px;
            ${props => !props.left ? css`padding-left: 40px;` : css`padding-right: 40px;`}
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 35px;
            padding-bottom: 35px;
            overflow: hidden;
            
            
            span {
                font-size: 1.8em;
            }
            .in-l {
                transform: ${props => props.focused ?
                'translate(0, 0)' : 'translate(-110%, 0)'};
            }
            .in-r {
                transform: ${props => props.focused ?
                'translate(0, 0)' : 'translate(110%, 0)'};
            }
            .op {
                transition-delay: 0.5s;
                opacity: ${props => props.focused ?
                '1' : '0'};
            }
        }
    }
`;

const Background  = styled.div`
    position: absolute;
    transition: 0.7s;
    ${props => !props.left && css`
        right: 0;
    `}
    height: 270px !important;
    top: calc(50% - 105px);
    background-color: ${colors.purple} !important;
    width: calc(50% + 250px);
    z-index: -1;
    padding: 10px 15px;
    background:  ${props => props.left ?
        `linear-gradient(-90deg, ${colors.purple} 70%, ${colors.darkPurple} 100%)`
        : `linear-gradient(90deg, ${colors.purple} 70%, ${colors.darkPurple} 100%)`
    };

    > div {
        width: 100%;
        height: 100%;
        border-top: 1px solid ${colors.lightPurple};
        border-bottom: 1px solid ${colors.lightPurple};
    }
    opacity: ${props => props.focused ?
        '1' : '0.5'};
`;

export { Panel, Background, Main }