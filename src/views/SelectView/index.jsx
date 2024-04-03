import React, { useState } from 'react'
import Page from '../../components/Shared/Page';
import Select from '../../components/Select'
import { SELECT_DATA } from '../../constants';
import './styles.scss'

function SelectView() {
  const [ selectedOption, setSelectedOption ] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option.label);
}

  return (
    <Page>
      <section className='wrapper main--display select--display'>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Select</h5>
          <Select
            label='Years of experience'
            name='experience'
            options={SELECT_DATA.EXPERIENCE}
            setValue={handleSelect}
            selectedOption={selectedOption}
          />
        </article>
      </section>
    </Page>
  )
}

export default SelectView
