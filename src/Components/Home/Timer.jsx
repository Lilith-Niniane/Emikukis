import { useState, useRef, useEffect, Fragment } from 'react'
import { TimerBG, TimerBar, ImageBtn, ImgBtnContainer } from './TimerStyles';

const Timer = (props) => {
    const timer = useRef(0);
    const direction = useRef(1);
    const [time, setTime] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    const SetIndex = (value) => {
        props.changeIndex(prev => prev + value)
        timer.current = 0
        setTime(timer.current)
        direction.current = value;
    }

    useEffect(() => {
        setStartTimer(props.focused)
    }, [props.focused])

    useEffect(() => {
        let interval = null;
        
        if (startTimer) {
            interval = setInterval(() => {
                if (timer.current < 100) {
                    timer.current += 0.1;
                }
                else {
                    SetIndex(direction.current);
                }
                setTime(timer.current)
            }, 4)
        }

        return () => clearInterval(interval)
    }, [startTimer])

    return (
        <Fragment>
            <TimerBG>
                <TimerBar style={{width: `${time}%`}}/>
            </TimerBG>
            <ImgBtnContainer>
                <div>
                    <ImageBtn onClick={() => SetIndex(-1)}>{'‹'}</ImageBtn>
                </div>
                <div>
                    <ImageBtn onClick={() => SetIndex(1)}>{'›'}</ImageBtn>
                </div>
            </ImgBtnContainer>
        </Fragment>
    )
}

export default Timer
