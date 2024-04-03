import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiErrorCircle } from "react-icons/bi";
import { errorIconAnimations, errorTextAnimations } from '../../constants/animations';
import './styles.scss';

function Input(props) {
    const {
        icon: Icon,
        label,
        name,
        type,
        error,
        required,
        disabled,
        placeholder,
        value,
        setValue,
    } = props;

    return (
        <motion.div className='wrapper input--wrapper'>
            <label htmlFor={name} className='input--label'>{label}</label>
            <motion.span layout className='wrapper input--flex'>
                { Icon && type !== 'textarea' &&
                    <span className='input--icon icon--type'>
                        <Icon />
                    </span>
                }
                {   type === 'textarea' ?
                    <textarea
                        id={name}
                        className={`input--text input--${type}`}
                        aria-invalid={error ? 'true' : 'false'}
                        style={{backgroundColor: error && 'rgba(255, 0, 0, .05)'}}
                        aria-describedby={error}
                        required={required}
                        disabled={disabled}
                        placeholder={placeholder}
                        value={value}
                        onChange={setValue}
                    /> :
                    <input
                        id={name}
                        type={type}
                        className={`input--${type} ${Icon && 'input--w_icon'}`}
                        style={{backgroundColor: error && 'rgba(255, 0, 0, .05)'}}
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error}
                        required={required}
                        disabled={disabled}
                        placeholder={placeholder}
                        value={value}
                        onChange={setValue}
                    />
                }
                <AnimatePresence>
                    {
                        error &&
                        <motion.span
                            id={`error-text-${name}`}
                            { ...errorIconAnimations }
                            hidden={error ? false : true}
                            className='input--icon icon--error'
                        >
                            <BiErrorCircle />
                        </motion.span>
                    }
                </AnimatePresence>
            </motion.span>

            <AnimatePresence>
                {
                    error &&
                    <motion.span
                        id={`error-icon-${name}`}
                        { ...errorTextAnimations }
                        className='input--error'
                        hidden={error ? false : true}
                    >
                            {error}
                    </motion.span>
                }
            </AnimatePresence>

        </motion.div>

    )
}

export default Input
