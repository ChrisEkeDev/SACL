import React from 'react';
import { motion } from 'framer-motion';
import { clickableAnimations } from '../../constants/animations';
import './styles.scss';

function Button(props) {

    const {
      icon: Icon,
      label,
      action,
      disabled,
      styles,
      hidden,
      type
    } = props;

    return (
        <motion.button
            className={`button--wrapper ${styles}`}
            {...clickableAnimations}
            type={type ? type : 'button'}
            onClick={action}
            disabled={disabled}
            hidden={hidden}
        >
            {
                Icon &&
                <span className='button--icon'>
                    <Icon/>
                </span>
            }
            <span className='button--label'>{label}</span>
        </motion.button>
    )
}

export default Button
