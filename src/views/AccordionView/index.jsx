import React from 'react';
import Page from '../../components/Shared/Page';
import Accordion from '../../components/Accordion/Accordion';
import { ACCORDION_DATA } from '../../constants';
import './styles.scss';

function Accordions() {
  return (
    <Page>
      <section className='wrapper main--display'>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Accordion</h5>
          <Accordion
              items={ACCORDION_DATA}
          />
        </article>
      </section>
    </Page>
  )
}

export default Accordions
