import { useState, useEffect } from 'react';
import { ScrollReference } from '../ScrollReference';
import { Panel, Background, Main } from './InformationPanelStyles';

const InformationPanel = props => {
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        setFocused(props.focused)
    })
 
    return (
        <Main>
            <ScrollReference height={props.height} ref={props.scrollRef} />
            <Panel left={props.left} focused={focused}>
                <img src={focused ? props.animatedImg : props.staticImg} />
                {props.children}
            </Panel>
            <Background left={props.left} focused={focused}>
                <div />
            </Background>
        </Main>
    )
}

export default InformationPanel
