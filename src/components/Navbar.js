import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
       <nav className="flex  justify-between item-center h-16 bg-green-700 text-white relative shadow-md text-2md nav-fixed" role="navigation">
           <Link to='/' className="pl-8 mt-5 text-lg text-bold nav-item">Adore Animal</Link>
           <div className="px-4 cursor-pointer md:hidden mt-5" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
           </div>
           
           <div className="pr-8 md:block hidden mt-5 ">
            <Link className='p-4 nav-item' to='/'>Home</Link>
            <Link className='p-4 nav-item' to='/wild-animals'>Wild Animals</Link>
            <Link className='p-4 nav-item' to='/domestic-animals'>Domestic Animals</Link>
           </div>
       </nav>
    )
}

export default Navbar;