import React from 'react'
import {Link} from 'react-router-dom'

const NavbarDropdown = ({isOpen, toggle}) => {
    return (
        <div className={
            isOpen ? 
            'grid grid-rows-4 text-center items-center text-white bg-green-600' 
            : 'hidden'
            } onClick={toggle}
            >
                <Link className='p-4' to='/'>Home</Link>
                <Link className='p-4' to='/wild-animals'>Wild Animals</Link>
                <Link className='p-4' to='/domestic-animals'>Domestic Animals</Link>
        </div>
    )
}

export default NavbarDropdown