import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

function Form({ formProps, children, onSubmit, sections }) {
    const {
        title,
        description,
        label
    } = formProps;

    return (
        <form className={`form--wrapper ${sections === 2 && 'form--wrapper--wide'}`} onSubmit={onSubmit} noValidate>
            {title && <h3 className='form--title'>{title}</h3>}
            {description && <small className='form--description'>{description}</small>}
            <div className={`form--inputs ${sections === 2 && 'form--grid'}`}>
                {children}
            </div>
            <Button
                type="submit"
                styles="primary button--full"
                label={`${label}`}
                action={onSubmit}
            />
        </form>
    )
}

export default Form
