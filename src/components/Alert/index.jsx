import React from 'react'
import { BiCheckCircle, BiErrorCircle, BiInfoCircle, BiError, BiX } from 'react-icons/bi'
import IconButton from '../Button/IconButton';
import { clickableAnimations } from '../../constants/animations';
import { motion } from 'framer-motion';
import './styles.scss';

function Alert({ alert, onClose }) {
    if (!alert) return null

    const renderIcon = () => {
        switch(alert.type) {
            case 'info': return <BiInfoCircle />; break;
            case 'warning': return <BiError />; break;
            case 'error': return <BiErrorCircle />; break;
            case 'success': return <BiCheckCircle />; break;
        }
    }

    return (
        <motion.div
            className="alert--wrapper"
            {...clickableAnimations}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <span className={`alert--icon alert--${alert.type}`}>
                {renderIcon()}
            </span>
            <small className='alert--message'>{alert.message}</small>
            <IconButton
                styles="alert--close"
                label="Close Alert"
                action={onClose}
                icon={BiX}
            />
        </motion.div>
    )
}

export default Alert
