import React from 'react';
import Page from '../../components/Shared/Page';
import Input from '../../components/Input/TextInput';
import { INPUTS_DATA } from '../../constants';
import './styles.scss';

function Inputs() {
  return (
    <Page>
      <section className='wrapper main--display inputs--display'>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Text Input</h5>
          <Input {...INPUTS_DATA.TEXT_INPUT} />
        </article>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Text Input w Icon</h5>
          <Input {...INPUTS_DATA.ICON_TEXT_INPUT} />
        </article>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Text Area Input</h5>
          <Input {...INPUTS_DATA.TEXTAREA_INPUT} />
        </article>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Text Input w Error</h5>
          <Input {...INPUTS_DATA.ERROR_TEXT_INPUT} />
        </article>
      </section>
    </Page>
  )
}

export default Inputs
