import React from 'react'
import ImageOne from '../images/01-removebg-preview.png'
import ImageTwo from '../images/02-removebg-preview.png'

const WhatWeDo= () => {
    return (
        <>
       
            <div className="pt-10 bg-whatwedo bg-no-repeat w-full">
                <div className="flex items-center text-white px-10 flex-col w-full  md:text-center">
                    <h1 className="text-5xl font-bold leading-tight">
                        What is your Favourite Animal?
                    </h1>
                    {/* <p className="leading-tight text-2xl mr-10 mb-8 md:text-right">
                        Learn more about it              
                    </p> */}
                </div>
                
                <div className="container mt-40  mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="flex px-20 flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                
                        <p className="leading-normal text-2xl mb-8 text-green-900">
                            Make a difference and learn about the different animals the universe has. Their classification, Way of life, Their status and many more interesting things.
                        </p>
                      
                    </div>
                    {/* -Right Col */}
                    <div className="w-full md:w-1/2 px-10 mb-12 justify-center flex-end">
                        <img className="w-full mt-10 md:w-2/2 z-50" src={ImageOne} alt="Ablestate Screening" />
                    </div>

                </div>

                <div className="container  mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="w-full md:w-1/2 px-10 mb-12 justify-center flex-end">
                        <img className="w-full md:w-2/2 z-50" src={ImageTwo} alt="Ablestate Interview" />
                    </div>
                    {/* -Right Col */}
                    <div className="flex px-20 flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
                       
                        <p className="leading-normal text-2xl mb-8 text-green-900">
                            Learn about fun facts of varius animals. Both Domestic and Wild. Isn't this interesting?
                         </p>
                        
                    </div>
                    
                    

                </div>

                
            </div>

            
        </>
    )
}

export default WhatWeDo

