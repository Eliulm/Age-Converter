import React from "react";
import { useMemo } from "react";
import $ from "jquery";

function Input (props) {
    const inputRefs = useMemo(() => Array(8).fill(0).map(i=> React.createRef()), []);
    const inputValues = props.inputValues

    const updateInput = (index, event) => {
        const newInput = [...inputValues]
        newInput[index] = event.target.value
        props.setInputValues(newInput)
    }

    function handleFocus(reference, current) {
        if ($(current).val() === '') {
            if (reference !== 0) {
                inputRefs[reference-1].current.focus()
            }
        } else {
            if (reference !== 7) {
                inputRefs[reference+1].current.focus()
            }
        }
    }

    const css_string = "hover:scale-110 transform font-extrabold text-2xl flex-auto text-center form-control form-control-solid rounded focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
    return(
        <div class="mb-6 justify-center relative">
            <div id="otp" class="flex">
                <input ref={inputRefs[0]} onKeyUp={() => handleFocus(0, "#0")} onInput={(event) => {updateInput(0, event)}} className={"ml-2 mt-2 " + css_string}
                type="text" id="0" maxlength="1" />
                <input ref={inputRefs[1]} onKeyUp={() => handleFocus(1,"#1")} onInput={(event) => {updateInput(1, event)}} className={"ml-1 mt-2 " + css_string}
                type="text" id="1" maxlength="1" />
                    <p class="mx-2.5 text-2xl font-extrabold absolute left-16 top-4 text-gray-700">.</p>
                <input ref={inputRefs[2]} onKeyUp={() => handleFocus(2, "#2")} onInput={(event) => {updateInput(2, event)}} className={"ml-2 mt-2 " + css_string}
                type="text" id="2" maxlength="1" />
                <input ref={inputRefs[3]} onKeyUp={() => handleFocus(3, "#3")} onInput={(event) => {updateInput(3, event)}} className={"ml-1 mt-2 " + css_string}
                type="text" id="3" maxlength="1" />
                    <p class="ml-1 text-2xl font-extrabold absolute left-36 top-4 text-gray-700">.</p>
                <input ref={inputRefs[4]} onKeyUp={() => handleFocus(4, "#4")} onInput={(event) => {updateInput(4, event)}} className={"ml-2 mt-2 " + css_string}
                type="text" id="4" maxlength="1" />
                <input ref={inputRefs[5]} onKeyUp={() => handleFocus(5, "#5")} onInput={(event) => {updateInput(5, event)}} className={"ml-1 mt-2 " + css_string}
                type="text" id="5" maxlength="1" />
                <input ref={inputRefs[6]} onKeyUp={() => handleFocus(6, "#6")} onInput={(event) => {updateInput(6, event)}} className={"ml-1 mt-2 " + css_string}
                type="text" id="6" maxlength="1" />
                <input ref={inputRefs[7]} onKeyUp={() => handleFocus(7, "#7")} onInput={(event) => {updateInput(7, event)}} className={"ml-1 mr-2 mt-2 " + css_string}
                type="text" id="7" maxlength="1" />
            </div>
        </div>
    )
}

export default Input;