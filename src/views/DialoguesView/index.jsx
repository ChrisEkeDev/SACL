import React, { useState } from 'react';
import Page from '../../components/Shared/Page';
import Dialogue from '../../components/Dialogue';
import { DIALOGUE_DATA } from '../../constants';
import Button from '../../components/Button/Button';

function DialoguesView() {
  const [ isDialogueOpen, setIsDialogueOpen ] = useState(false);

  const openDialogue = () => setIsDialogueOpen(true);
  const closeDialogue = () => setIsDialogueOpen(false);

  return (
    <Page>
      <section className='wrapper main--display'>
        <article className="wrapper article--wrapper">
          <h5 className='article--title'>Dialogue</h5>
          <Button
            styles="primary"
            label="Open Dialogue 1"
            action={openDialogue}
          />
          <Dialogue
            isOpen={isDialogueOpen}
            onClose={closeDialogue}
            dialogue={DIALOGUE_DATA.DIALOGUE_1}
          />
        </article>
      </section>
    </Page>
  )
}

export default DialoguesView
