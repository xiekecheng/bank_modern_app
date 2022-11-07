import React from 'react';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
// @ts-ignore
import style from './style.js'

const App = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>

            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero/>
                </div>
            </div>
        </div>
    );
};

export default App;