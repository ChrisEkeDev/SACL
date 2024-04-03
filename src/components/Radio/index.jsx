import React, { useState, useRef, createRef, useEffect } from 'react';
import './styles.scss';
import { BiRadioCircle, BiRadioCircleMarked  } from 'react-icons/bi';
import { checkboxAnimations } from '../../constants/animations';
import { KEY_PRESS } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';

const RadioButton = React.forwardRef((props, ref) => {
    const { id, name, value, checked, onChange, label, handleKeyDown } = props;

    return (
        <div
            ref={ref}
            className={`radio--button ${checked && 'radio--checked'}`}
            tabIndex={0}
            role="radio"
            onClick={() => onChange(value)}
            onKeyDown={handleKeyDown}
            aria-checked={checked}
            id={id}
        >
            <div className='wrapper'>
                <AnimatePresence>
                    {
                        checked &&
                        <motion.span
                            id={`checked-${name}`}
                            {...checkboxAnimations}
                            className={`radio--icon icon--checked`}
                        >
                            <BiRadioCircleMarked />
                        </motion.span>
                    }
                </AnimatePresence>
                <span
                    id={`unchecked-${name}`}
                    className={`radio--icon`}
                >
                    <BiRadioCircle  />
                </span>
            </div>

            <input
                type="radio"
                id={`${id}-input`}
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="radio--input"
                style={{ display: 'none' }}
            />
            <label htmlFor={id} className={`radio--label ${checked && 'label--checked'}`}>
                {label}
            </label>
        </div>
    )
})

function RadioGroup(props) {
    // const [selectedValue, setSelectedValue] = useState('');
    const radiosRef = useRef([]);
    const { name, label, value, error, setValue, radios } = props;


    const handleKeyDown = (e, value, index) => {
        console.log(value)
        let newIndex = index;
        if (KEY_PRESS.DOWN(e) || KEY_PRESS.RIGHT(e)) {
            newIndex = (index + 1) % radios.length;
        } else if (KEY_PRESS.UP(e) || KEY_PRESS.LEFT(e)) {
            newIndex = (index - 1 + radios.length) % radios.length;
        } else if (KEY_PRESS.ENTER(e)) {
            setValue(value);
            return;
        }
        radiosRef.current[newIndex].current.focus();
    };

    useEffect(() => {
        radiosRef.current = radios.map((_, i) => radiosRef.current[i] || createRef());
    }, [radios]);

    return (
        <fieldset className="radios--wrapper" role="radiogroup">
            <legend className='radio--title'>{label}</legend>
            {radios.map((radio, i) => (
                <RadioButton
                    key={radio.id}
                    ref={radiosRef.current[i]}
                    tabIndex={-1}
                    id={radio.id}
                    name={name}
                    value={radio.value}
                    checked={value === radio.value}
                    onChange={setValue}
                    label={radio.label}
                    handleKeyDown={(e) => handleKeyDown(e, radio.value, i)}
                />
            ))}
        </fieldset>
    )
}

export default RadioGroup
