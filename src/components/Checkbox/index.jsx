import React from 'react';
import { KEY_PRESS } from '../../constants';
import './styles.scss';
import { BiSolidCheckboxChecked  , BiCheckbox   } from 'react-icons/bi';
import { checkboxAnimations } from '../../constants/animations';
import { AnimatePresence, motion } from 'framer-motion';

function Checkbox(props) {
    const { label, name, checked, onChange } = props;

    const handleClick = (e) => {
        e.preventDefault();
        onChange({ target: { checked: !checked } });
    };

    const handleKeyDown = (e) => {
        e.preventDefault();
        if (KEY_PRESS.ENTER(e)) handleClick(e)
    }

    return (
        <motion.div
            className='checkbox--wrapper'
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="checkbox"
            aria-checked={checked}
            aria-labelledby={name + '-label'}
        >
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                className="checkbox--input"
            />
            <label
                htmlFor={name}
                className={`checkbox--label ${checked && 'checkbox--checked'}`}
                id={name + '-label'}
            >
                <div className='wrapper'>
                    <AnimatePresence>
                        {
                            checked &&
                            <motion.span
                                id={`checked-${name}`}
                                {...checkboxAnimations}
                                className={`checkbox--icon icon--checked`}
                            >
                                <BiSolidCheckboxChecked  />
                            </motion.span>
                        }
                    </AnimatePresence>
                    <span
                        id={`unchecked-${name}`}
                        className={`checkbox--icon`}
                    >
                        <BiCheckbox   />
                    </span>
                </div>

                {label}
            </label>
        </motion.div>
    )
}

export default Checkbox
