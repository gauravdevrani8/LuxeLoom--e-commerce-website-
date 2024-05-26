import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="text-center rounded-lg text-white">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full py-2 text-gray-600 border-2 border-gray-400 p-1"
                >
                    Buy Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative  z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md mt-36 transform overflow-hidden  p-2 text-left align-middle shadow-xl transition-all bg-white">

                                    <section>
                                        <div className="flex flex-col  items-center justify-center py-8 mx-auto lg:py-0">
                                            <div className="w-full h-50 rounded md:mt-0 sm:max-w-md xl:p-0">
                                                <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
                                                    <form className="space-y-4 md:space-y-6" action="#">
                                                        <div className="relative">
                                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                                                            <input
                                                            value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className="border-b-2 border-gray-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white transition-transform transform-gpu focus:outline-none focus:scale-105" required />
                                                        </div>
                                                        <div className="relative">
                                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                                                            <input 
                                                            value={address} onChange={(e) => setAddress(e.target.value)}type="text" name="address" id="address" className="border-b-2 border-gray-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white transition-transform transform-gpu focus:outline-none focus:scale-105" required />
                                                        </div>
                                                        <div className="relative">
                                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                                                            <input 
                                                            value={pincode} onChange={(e) => setPincode(e.target.value)}type="text" name="pincode" id="pincode" className="border-b-2 border-gray-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white transition-transform transform-gpu focus:outline-none focus:scale-105" required />
                                                        </div>
                                                        <div className="relative">
                                                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                                                            <input 
                                                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}type="text" name="mobileNumber" id="mobileNumber" className="border-b-2 border-gray-300 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-white transition-transform transform-gpu focus:outline-none focus:scale-105" required />
                                                        </div>
                                                    </form>
                                                    <button onClick={buyNow} type="button" className="focus:outline-none w-full text-white bg-black outline-0 font-medium text-sm px-5 py-2.5">Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
