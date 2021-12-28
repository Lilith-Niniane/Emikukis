import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../Colors';

const animateOpactiy = keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }
    100% {
        visibility: visible;
        opacity: 1;
    }
`;

const animateOpactiy2 = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        visibility: hidden;
        opacity: 0;
    }
`;

const ListElement = styled.li`
    position: relative;
    &:hover {
        > div {
            animation: ${animateOpactiy} 0.3s forwards;
        }
        p {
            color: ${colors.lightPurple};
            cursor: pointer;
        }
        span {
            color: ${colors.lightPurple};
            transform: rotate(0deg);
        }
    }
    span {
        transition: 0.3s;
        display: inline-block;
    }

    > div {
        visibility: hidden;
        animation: ${animateOpactiy2} 0.3s forwards;
        position: absolute;
        width: 200px;
        left: 100%;
        background-color: ${colors.purple};
        padding: 8px 8px;
        top: 0;
        z-index: -1;
        border-radius: 5px;

        ul {
            text-align: start;
        }

        li, a {
            font-size: 15px !important;
            font-weight: bold;
        }
        a {
            width: 100%;
            display: block;
            padding: 10px 10px;
        }
        li {
            color: ${colors.textLight};
            border-bottom: 1px solid ${colors.lightPurple};
            &:last-child {
                border-bottom: none;
            }
            
            &:hover {
                a {
                    border-radius: 5px;
                    color: ${colors.textLight} !important;
                    background-color: ${colors.darkPurple};
                    text-decoration: none;
                }
                cursor: pointer;
            }
        }
    }
`;


const FloatingOptions = props => {
    return (
        <ListElement className={props.className}>
            {props.children[0]}
            <div>
                {props.children[1]}
            </div>
        </ListElement>
    )
}

export default FloatingOptions
