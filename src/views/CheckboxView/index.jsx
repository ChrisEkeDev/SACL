import React, { useState } from 'react';
import Page from '../../components/Shared/Page';
import Checkbox from '../../components/Checkbox';
import './styles.scss';

function CheckboxView() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <Page>
            <section className='wrapper main--display checkbox--display'>
                <article className='article--wrapper'>
                    <h5 className='article--title'>Checkbox Selected</h5>
                    <Checkbox
                        name="selected"
                        label="This checkbox is selected."
                        checked={true}
                        onChange={null}
                    />
                </article>
                <article className='article--wrapper'>
                    <h5 className='article--title'>Checkbox Unselected</h5>
                    <Checkbox
                        name="unselected"
                        label="This checkbox is not selected."
                        checked={false}
                        onChange={null}
                    />
                </article>
                <article className='article--wrapper'>
                    <h5 className='article--title'>Checkbox in Action</h5>
                    <Checkbox
                        name="newsletter"
                        label="Click to select and deselect the checkbox."
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </article>

            </section>
        </Page>
  )
}

export default CheckboxView
