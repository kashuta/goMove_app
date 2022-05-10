import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from "../../images";


const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    }
}

const Header = () => {
    return (
        <div id="home" className="app__header" >
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1, delayChildren: 1, ease: "easeInOut"}}
                className="app__header-img">
                <img src={images.logocircle} alt="logo"/>
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.circle} alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="app__header-info"
            >

                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">                     
                        <div>
                            <p className="p-text">We are providing world’s largest cost of living database. It`s  global database of quality of life informations including lot of indicators like perceived crime rates, and quality of healthcare, among many other statistics.</p>
                            <h1 className="head-text"> Let's try to discover it!</h1>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Header;
