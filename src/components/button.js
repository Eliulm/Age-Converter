import React from "react";
import moment from "moment"

function Button(props) {
    const inputValues = props.inputValues

    const calculate = () => {
        props.setVisible(false)
        if (inputValues.length === 8) {
            let inputString = ""
            for (let input in inputValues) {
                inputString += inputValues[input] }
            
            if (moment(inputString, "DDMMYYYY", true).isValid()) {
                let birthday = new Date(inputString.substring(4, 8), inputString.substring(2,4), inputString.substring(0,2))
                let thisMoment = new Date()
                const differenceTime = thisMoment.getTime() - birthday.getTime()
                let differenceOutput = []
                //compute in days, minutes and seconds
                differenceOutput[0] = Math.round(differenceTime / (1000 * 3600 * 24))
                differenceOutput[1] = Math.round(differenceTime / (1000 * 60))
                differenceOutput[2] = Math.round(differenceTime / (1000))

                props.setVisible(true)
                props.setAmount(differenceOutput)
            } else {
                props.setShowModal(true)
                props.setErrorMessage("the entered date is not valid. Check for DD-MM-YYYY.")
            }
        } else {
            props.setShowModal(true)
            props.setErrorMessage("the form hasn't been completely filled")
        }
    }

    return (
        <div class="ml-5">
            <svg onClick={() => calculate()} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" 
             class="feather feather-arrow-left-circle h-12 w-12 current-fill text-blue-800 transition hover:-translate-x-2 hover:scale-90 hover:text-red-700 transform focus:text-green-700">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
        </div>
    )
}

export default Button;

/*<img src={require("./arrow.svg").default} alt="svg here" height="50" width="50"/>*/