import "./compiled.css"
import Switch from './components/switch.js';
import Input from './components/input.js'
import Button from './components/button.js'
import Output from './components/output.js'
import Modal from './components/modal.js'
import { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState('days')
  const [visible, setVisible] = useState(false)
  const [amount, setAmount] = useState(null)
  const [inputValues, setInputValues] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {setVisible(false)}, [])

  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/src/compiled.css" />
    </head>
    <body>
        <Modal showModal={showModal} setShowModal={setShowModal} errorMessage={errorMessage} />
        <div class="flex h-screen justify-center items-center">
          <div class="text-center">
            <h1 class=" text-7xl font-black font-sans">
              Age Converter
            </h1>

            <div class="flex mt-4 static justify-center text-lg">
              <div class="mx-2">
                Change to 
              </div>
              <div class="px-1 py-0 w-56 grid grid-cols-3  bg-gray-300 rounded-md shadow-lg" >
                <Switch state={state} setState={setState}/>
              </div>
            </div>

            <div class="grid grid-cols-8 px-10">
              <div class="mt-10 h-12 col-start-3 col-span-3 rounded-xl shadow-xl bg-gray-300">
                <Input class="justify-center" inputValues={inputValues} setInputValues={setInputValues}/>
              </div>
              <div class="mt-10 col-start-6 col-span-1">
                <Button setVisible={setVisible} amount={amount} setAmount={setAmount}
                inputValues={inputValues} setInputValues={setInputValues} setShowModal={setShowModal} setErrorMessage={setErrorMessage}/>
              </div>
            </div>
            <Output mode={state} visible={visible} amount={amount} setAmount={setAmount}/>
          </div>
        </div>
    </body>
    </html>
  );
}

export default App;