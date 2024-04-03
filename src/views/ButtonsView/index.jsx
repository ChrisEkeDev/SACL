import React from 'react';
import Page from '../../components/Shared/Page';
import Button from '../../components/Button/Button';
import IconButton from '../../components/Button/IconButton';
import { BUTTONS_DATA } from '../../constants';
import './styles.scss';
import Tooltip from '../../components/Tooltip';

function Buttons() {
  return (
    <Page>
      <section className='wrapper main--display buttons--display'>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button Primary</h5>
              <Button
                styles="primary"
                {...BUTTONS_DATA.TEXT_BUTTON}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button Secondary</h5>
              <Button
                styles="secondary"
                {...BUTTONS_DATA.TEXT_BUTTON}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button Disabled</h5>
              <Button
                styles="secondary"
                {...BUTTONS_DATA.TEXT_BUTTON}
                disabled={true}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button w/ Icon Primary</h5>
              <Button
                styles="primary"
                {...BUTTONS_DATA.ICON_TEXT_BUTTON}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button w/ Icon Secondary</h5>
              <Button
                styles="secondary"
                {...BUTTONS_DATA.ICON_TEXT_BUTTON}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Text Button w/ Icon Disabled</h5>
              <Button
                styles="secondary"
                {...BUTTONS_DATA.ICON_TEXT_BUTTON}
                disabled={true}
              />
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Icon Button Primary</h5>
              <Tooltip tooltip={BUTTONS_DATA.ICON_BUTTON}>
                <IconButton
                  styles="primary"
                  {...BUTTONS_DATA.ICON_BUTTON}
                />
              </Tooltip>
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Icon Button Secondary</h5>
              <Tooltip tooltip={BUTTONS_DATA.ICON_BUTTON}>
                <IconButton
                  styles="secondary"
                  {...BUTTONS_DATA.ICON_BUTTON}
                />
              </Tooltip>
            </article>
            <article className='article--wrapper'>
              <h5 className='article--title'>Icon Button Disabled</h5>
              <Tooltip tooltip={BUTTONS_DATA.ICON_BUTTON}>
                <IconButton
                  styles="secondary"
                  {...BUTTONS_DATA.ICON_BUTTON}
                  disabled={true}
                />
              </Tooltip>
            </article>
        </section>
    </Page>

  )
}

export default Buttons
