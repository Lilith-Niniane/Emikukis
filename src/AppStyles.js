import styled from "styled-components";
import colors from "./Colors";

const Body = styled.div`
    display: flex;
    color: ${colors.text};
    position: relative;
    height: fit-content;
    overflow: hidden;

    * {
        box-sizing: border-box;
        font-size: 20px
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
    h1, h2, h3, h4, h5, p {
        margin: 0;
    }
    a, span {
        color: ${colors.lightPurple};
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Background = styled.div`
    background-color: ${colors.deepPurple};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 250px;
    z-index: -100;

    img {
        width: 100%;
        opacity: 0.9;
    }
`

export default Body
export { Background }