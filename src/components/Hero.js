import React from 'react'
import LandingImage from '../images/01-removebg-preview.png'

const Hero = () => {
    return (
        <>
        <div className="pt-20 bg-green-900 mb-0">
            <div className="container m-0  mx-auto flex flex-wrap flex-col md:flex-row items-center">
                {/* Left Col */}
                <div className="flex px-20 flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                    <h1 className="text-5xl mb-8 font-bold leading-tight text-white">
                        Are you an Animal Lover?
                    </h1>
                    <p className="leading-normal text-2xl mb-8 text-white">
                        Learn Facts about your favorite animal in one place! Ranging from Wild animals and domesticated animals.
                    </p>
                    <button className="mx-auto bg-green-800 lg:mx-0 hover:bg-green-700 text-white font-bold  my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Learn More
                    </button>
                </div>
                {/* -Right Col */}
                <div className="w-full md:w-1/2 px-10 mb-12 justify-center flex-end">
                    <img className="w-full md:w-2/2 z-50" src={LandingImage} alt="Animals Together" />
                </div>

            </div>
        </div>
    </>    
    )
}

export default Hero