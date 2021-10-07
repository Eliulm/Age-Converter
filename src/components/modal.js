import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Modal (props) {
    return(
        <AnimatePresence exitBeforeEnter>
            {props.showModal && (
                <motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    initial= {{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-red-100 outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between py-2 px-3 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-bold text-red-700">
                                Error
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => props.setShowModal(false)}
                            >
                                <svg className="h-8 w-8 current-fill bg-red-600 text-red-200 rounded-full hover:scale-90 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> 
                                
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-2 flex-auto">
                            <p className="my-4 text-blueGray-500 text-xl leading-relaxed text-red-400">
                                {props.errorMessage}
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                <button  onClick={() => {props.setShowModal(false)}} className="px-3 py-2 bg-green-600 text-white font-bold rounded-lg transform hover:scale-90">
                                    retry!
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}



export default Modal