import styled from "styled-components";
import colors from '../../Colors'

const Main = styled.div`
    padding: 40px 0;
`;

const Header = styled.header`
    text-align: center;
    h1 {
        font-size: 2em;
        color: ${colors.lightPurple};
        margin-bottom: 30px;
    }
    h2 {
        font-size: 1.3em;
        color: ${colors.textLight};
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 10px;
    }
`;

const ServicesDisplay = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 90%;
    margin: 60px auto;
    
    > div {
        flex: 1 0 25%;
        background-color: ${colors.purple};
        margin: 30px ;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        transition: 0.5s;
        position: relative;

        &::before {
            transition: 0.3s;
            content: '';
            position: absolute;
            border-radius: 10px;
            border: 4px solid ${colors.purple};
            top: -2px;
            right: -2px;
            bottom: -2px;
            left: -2px;
            z-index: -10;
        }

        &:hover {
            cursor: pointer;
            transform: scale(1.06);

            &::before {
                content: '';
                top: -10px;
                right: -10px;
                bottom: -10px;
                left: -10px;
                z-index: -10;
            }
        }
    }
`;

const LastNotice = styled.section`
    width: 85%;
    padding: 40px 0;
    margin: auto;
    text-align: center;

    h4 {
        color: ${colors.textLight};

    }
    ul {
        background-color: ${colors.purple};
        border-radius: 5px;
        padding: 30px;
    }
    li {
        font-size: 0.85em;
        margin-bottom: 30px;
    }
`;

export { Main, Header, ServicesDisplay, LastNotice }