import React from 'react'
import { motion } from 'framer-motion';
import { pageTranisitions } from '../../constants/animations';
import { useLocation } from 'react-router-dom'

function Page({children}) {
    const location = useLocation();
    return (
        <motion.main
            {...pageTranisitions}
            className='app--main'
            key={location.pathname}
        >
            {children}
        </motion.main>
    )
}

export default Page
