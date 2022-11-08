import React from 'react';
import {Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials} from './components';
// @ts-ignore
import style from './style.js'

const App = () => {
    return (
        <div className='bg-black w-full overflow-hidden'>

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
            <div className={`${style.paddingX} ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Stats/>
                    <Business/>
                    <Billing/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default App;