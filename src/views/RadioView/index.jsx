import React, { useState } from 'react';
import Page from '../../components/Shared/Page';
import { RADIO_OPTIONS } from '../../constants'
import RadioGroup from '../../components/Radio';
import './styles.scss';


function RadioView() {
  const [ selectedOption, setSelectedOption ] = useState(null)

  const handleRadio = (option) => {
    setSelectedOption(option);
  }
  return (
    <Page>
      <section className='wrapper main--display radios--display'>
          <article className="wrapper article--wrapper">
              <h5 className='article--title'>Radios Unselected</h5>
              <RadioGroup
                name="selected"
                label="This radio is selected"
                value={selectedOption}
                error={null}
                setValue={handleRadio}
                radios={RADIO_OPTIONS.FRAMEWORKS}
              />
          </article>
      </section>
    </Page>
  )
}

export default RadioView
