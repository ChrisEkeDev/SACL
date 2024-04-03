import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { selectListAnimations, errorIconAnimations, errorTextAnimations, selectTextAnimations } from '../../constants/animations';
import { BiChevronDown, BiErrorCircle } from "react-icons/bi";
import { KEY_PRESS } from '../../constants';
import './styles.scss'


const SelectOption = (props) => {
    const { option, onSelect, selectedOption, idx, optionsCount } = props;
    const isSelected = option?.value === selectedOption;

    const handleKeyDown = (e) => {
        let newIdx = undefined;
        if (KEY_PRESS.DOWN(e)) newIdx = (idx + 1) % optionsCount;
        else if (KEY_PRESS.UP(e)) newIdx = (idx - 1 + optionsCount) % optionsCount;
        if (KEY_PRESS.ENTER(e) || KEY_PRESS.SPACEBAR(e)) onSelect(option);
        if (newIdx !== undefined) {
            setTimeout(() => {
                document.querySelectorAll('[role="option"]')[newIdx].focus()
            }, 0)
        }
    };

    return (
        <li
            onClick={() => onSelect(option)}
            className={`select--option ${isSelected && 'option--selected'}`}
            role='option'
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            aria-selected={isSelected}
        >
            {option.label}
        </li>
    )
}

function Select({label, name, options, setValue, selectedOption, error}) {
    const [ isOpen, setIsOpen ] = useState(false);
    const selectRef = useRef(null);
    const optionsRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setTimeout(() => {
                selectRef.current.focus();
            }, 0);
        }
    }

    const handleKeyDown = (e) => {
        if (KEY_PRESS.ENTER(e) && !isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                const firstOption = optionsRef.current.querySelector('[role="option"]');
                if (firstOption) {
                    firstOption.focus();
                }
            }, 0);
        }
    };

    const handleSelectOption = (option) => {
        setValue(option);
        setIsOpen(false);
        setTimeout(() => {
            if (selectRef.current) {
                selectRef.current.focus();
            }
        }, 0);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [selectRef]);

    useEffect(() => {
        if (isOpen && options.length > 0) {
            const idx = options.findIndex(option => option.value === selectedOption);
            const focusIdx = idx >= 0 ? idx : 0;
            setTimeout(() => {
                const optionsElements = document.querySelectorAll('.select--option');
                if (optionsElements[focusIdx]) {
                    optionsElements[focusIdx].focus();
                }
            }, 0);
        }
    }, [isOpen, options, selectedOption]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (KEY_PRESS.ESCAPE(e) && isOpen) {
                setIsOpen(false);
                setTimeout(() => {
                    selectRef.current.focus();
                }, 0);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    return (
        <motion.div className='wrapper select--wrapper'>
        <label htmlFor={name} className='select--label'>{label}</label>
            <motion.div
                onClick={toggleDropdown}
                className='wrapper select--input'
                tabIndex={0}
                ref={selectRef}
                aria-labelledby={`select-value`}
                role="listbox"
                onKeyDown={handleKeyDown}
                style={{
                    backgroundColor: error && 'rgba(255, 0, 0, .05)',
                    paddingRight: error && '1.75rem'
                }}
            >


                    <span
                        id={`select-value`}
                    >
                    <AnimatePresence mode="wait">
                        {selectedOption !== null ?
                            <motion.div
                                key={selectedOption}
                                id={`selected`}
                                {...selectTextAnimations}
                                className={`select--value value--selected`}
                            >
                                {selectedOption}
                            </motion.div> :
                            <motion.div
                                key={'none-selected'}
                                id={`nothing-selected`}
                                {...selectTextAnimations}
                                className={`select--value`}
                            >
                                Choose an option...
                            </motion.div>
                        }
                    </AnimatePresence>
                    </span>


                <AnimatePresence>
                    {
                        isOpen &&
                        <motion.ul
                            id={name}
                            className='select--options'
                            role="presentation"
                            hidden={!isOpen}
                            {...selectListAnimations}
                            ref={optionsRef}
                        >
                            {options.map((option, i) => (
                                <SelectOption
                                    key={option.id}
                                    idx={i}
                                    option={option}
                                    onSelect={handleSelectOption}
                                    selectedOption={selectedOption}
                                    optionsCount={options.length}
                                />
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>

                <span className={`select--icon `}>
                        <BiChevronDown />
                </span>

                <AnimatePresence>
                    {
                        error &&
                        <motion.span
                            id={`error-icon-${name}`}
                            { ...errorIconAnimations }
                            className='input--icon icon--error'
                        >
                            <BiErrorCircle />
                        </motion.span>
                    }
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {
                    error &&
                    <motion.span
                        id={`error-text-${name}`}
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

export default Select
