import React from 'react';
import { useEffect, useState } from 'react';

function Output (props) {
    const amount = props.amount
    const mode = props.mode 
    const visible = props.visible
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        setSeconds(0)
        setMinutes(0)
        const intervalSec = setInterval(() => {
            setSeconds(c => c + 1)
        }, 1000)
        const intervalMin = setInterval(() => {
            setMinutes(c => c + 1)
        }, 60000)
        return () => {clearInterval(intervalSec);
             clearInterval(intervalMin)}
    }, [amount])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
    }

    if (visible === true) {
        const secondsString = numberWithCommas(amount[2] + seconds)
        const minutesString = numberWithCommas(amount[1] + minutes)
        const daysString = numberWithCommas(amount[0])

        return(
            <div class="grid grid-cols-8 mt-10">
                <div class="col-start-3 col-span-4 h-24 shadow-xl rounded-lg">
                    <span class="text-7xl font-bold">{((mode === 'days') && daysString) || ((mode === 'minutes') && minutesString) || ((mode === 'seconds') && secondsString)}</span>{mode}
                </div>
            </div>
        ) 
        } else {
            return(null)
        }
    }

export default Output;