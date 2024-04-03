import React from 'react';
import Page from '../../components/Shared/Page';
import Tabs from '../../components/Tab';
import { TABS_DATA } from '../../constants';

function TabsView() {
  return (
    <Page>
      <section className='wrapper main--display'>
          <article className="wrapper article--wrapper">
              <h5 className='article--title'>Tabs</h5>
              <Tabs
                  tabs={TABS_DATA}
              />
          </article>
      </section>
    </Page>
  )
}

export default TabsView
