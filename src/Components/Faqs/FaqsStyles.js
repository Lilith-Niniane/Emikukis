import styled from "styled-components";
import colors from "../../Colors";

const Main = styled.div`
    margin: auto;
    width: 100%;
    max-width: 950px;
    padding: 50px;

    > p, > a {
        display: block;
        text-align: center;
        font-size: 1em;
    }
    > a {
        font-size: 1.5em;  
    }
    .footer {
        color: ${colors.lightPurple};
    }
`;

const Header = styled.header`
    text-align: center;
    margin: auto;
    width: 70%;
    font-size: 1.2em;
    margin-bottom: 50px;

    p {
        margin-bottom: 30px;
    }
`;

const Info = styled.section`
    border-left: 5px solid ${colors.textLight};
    padding: 15px 30px;
    margin: 100px 0;

    h1 {
        color: ${colors.textLight};
        font-size: 1.6em;
        margin-bottom: 30px;
    }
    ul {
        padding-left: 30px;
    }
    li {
        font-size: 1em;
        margin: 15px 0;
        position: relative;

        &::before {
        position: absolute;
        content: '🕷️';
        left: -40px;
        }
    }
`;

const Process = styled.section`
    display: flex;
    width: 80%;
    margin: 0 auto 100px;

    header {
        h4 {
            font-size: 0.9em;
            background-color: ${colors.purple};
            border-radius: 50px;
            padding: 10px 30px;
            color: ${colors.textLight};
        }
    }
    > div {
        display: flex;
        text-align: center;
        border-top: 10px solid ${colors.purple};
        margin-top: 15px;
        margin-left: -5px;
        padding-left: 20px;

        > div {
            flex: 1;
            margin: 0 10px;
            position: relative;
            top: -25px;
            
            .icon {
                background-color: ${colors.purple};
                border-radius: 50%;
                padding: 7px;
                width: 40px;
                height: 40px;
                margin: auto;
                transform: scale(1.7);
                margin-bottom: 30px;

                svg {
                    color: ${colors.textLight};
                }
            }
            h5 {
                font-size: 0.8em;
                height: 25px;
                margin: 20px 0;
                color: ${colors.textLight};
            }
            p {
                font-size: 0.6em;
            }
        }
    }
`;

const Example = styled.section`
    font-size: 1.1em;
    margin: 100px 0;
    position: relative;

    .float  {
        position: absolute;
        right: 20px;
        top: 15px;
        font-weight: bold;
    }
    h5 {
        display: inline-block;
        margin: 0;
        margin-right: 10px;
        font-size: 1.05em;
    }
    span {
        color: ${colors.text};
    }
    .high {
        font-weight: bold;
        color: ${colors.lightPurple};
    }
    .eg-card {
        background-color: ${colors.purple};
        padding: 30px 40px 60px;
        border-radius: 10px;
    }
    .eg {
        margin: 10px 0;
    }
    .img-link {
        margin: auto;
        position: relative;
        top: -30px;
        width: 400px;
        transition: 0.5s;

        > div {
            overflow: hidden;
        }

        img {
            width: 400px;
            border-radius: 10px;
        }
    }
`;


export { Main, Header, Info, Process, Example }