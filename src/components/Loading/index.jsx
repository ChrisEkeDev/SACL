import React from 'react';
import { motion } from 'framer-motion';
import { BiLoaderAlt } from 'react-icons/bi'
import { loadingIconAnimations, loadingTextAnimations, modalAnimations  } from '../../constants/animations';
import './styles.scss';

function Loading() {
  return (
    <motion.div
        layout
        className='loading--wrapper'
        {...modalAnimations}
    >
        <motion.span
            {...loadingIconAnimations}
            layout
            className='loading--icon'
        >
            <BiLoaderAlt />
        </motion.span>
        <motion.span
            role="alert"
            aria-live="polite"
            className='loading--label'
            {...loadingTextAnimations}
        >
            Loading. Please wait...
        </motion.span>
    </motion.div>
  )
}

export default Loading
