import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
// import pages
import Home from './pages';
import Contact from './pages/Contact'
import Domestic from './pages/DomesticAnimals'
import Wild from './pages/WildAnimals';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarDropdown from './components/NavbarDropdown';

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    useEffect(()=>{
        const hideMenu = () =>{
            if(window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
                console.log('i resized')
            }

        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    });

    return ( 
        <>
           <Navbar toggle={toggle} />
           <NavbarDropdown isOpen = {isOpen} toggle={toggle} />
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/wild-animals' component={Wild} />
               <Route path='/domestic-animals' component={Domestic} />
               <Route path='/contact' component={Contact} />
           </Switch>
          
           <Footer />
        </>
    );
}

export default App;