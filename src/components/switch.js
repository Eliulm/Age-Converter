import React from 'react';

function Switch (props) {
    const state = props.state;
        if (state === 'days') {
            return (<div className="bg-blue-800 col-start-1 rounded-md shadow-lg hover:bg-red-800 transform hover:-translate-y-0 hover:scale-110">
                        <button className="font-bold text-gray-200" onClick={() => {props.setState('minutes')}}>{state}</button>
                    </div>
            )
        } else if (state === 'minutes') {
            return (
                    <div className="bg-blue-800 col-start-2 rounded-md shadow-lg hover:bg-red-800 transform hover:-translate-y-0 hover:scale-110">
                        <button className="font-bold text-gray-200" onClick={() => {props.setState('seconds')}}>{state}</button>
                    </div>
            ) 
        } else if (state === 'seconds') {
            return (
                    <div className="bg-blue-800 col-start-3 rounded-md shadow-lg hover:bg-red-800 transform hover:-translate-y-0 hover:scale-110">
                        <button className="font-bold text-gray-200" onClick={() => {props.setState('days')}}>{state}</button>
                    </div>
            )
        }
}

export default Switch;
