import React from 'react';
import { motion } from 'framer-motion';
import { clickableAnimations } from '../../constants/animations';
import './styles.scss';

function IconButton(props) {

    const {
      icon: Icon,
      label,
      action,
      disabled,
      styles,
      hidden
    } = props;

    return (
        <motion.button
            aria-label={label}
            className={`icon_button--wrapper ${styles}`}
            {...clickableAnimations}
            type="button"
            onClick={action}
            disabled={disabled}
            hidden={hidden}
        >
            <span className='button--icon'>
                <Icon/>
            </span>
        </motion.button>
    )
}

export default IconButton
