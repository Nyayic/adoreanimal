import React from 'react'

const Contact = () => {
    return (
        <div className="bg-yellow-100 h-screen justify-center items-center flex flex-col">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl  font-black mb-14">
             Contact Us
            </h1>
            <div className="bg-yellow-50 h-100 p-20 shadow justify-center items-center flex flex-col">
                <h3>Phone: 
                    <span> +256780482684</span>
                </h3>
                <h3>Email: 
                    <span> info@adoreanimals.com</span>
                </h3>
                <h3>Website:
                    <span> www.adoreanimals.com</span>
                </h3>
            </div>
        </div>
    )
}
export default Contact
