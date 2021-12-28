import React from 'react'
import { Main, Content } from './ServiceStyles'

const Service = props => {
    return (
        <Main opened={props.service === props.activeService ? true : false}>
            <p className='close' onClick={() => props.close(null)}>✘</p>
            <Content>
                {props.children}
            </Content>
        </Main>
    )
}

export default Service
