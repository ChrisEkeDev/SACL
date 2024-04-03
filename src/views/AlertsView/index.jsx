import React from 'react'
import Page from '../../components/Shared/Page';
import Alert from '../../components/Alert'
import { ALERTS_DATA } from '../../constants';
import './styles.scss';

function AlertsView() {
  return (
    <Page>
        <section className='wrapper main--display alerts--display'>
            <article className="wrapper article--wrapper">
                <h5 className='article--title'>Info Alert</h5>
                <Alert alert={ALERTS_DATA.INFO} onClose={() => alert("Close Info Alert")} />
            </article>
            <article className="wrapper article--wrapper">
                <h5 className='article--title'>Warning Alert</h5>
                <Alert alert={ALERTS_DATA.WARNING} onClose={() => alert("Close Warning Alert")} />
            </article>
            <article className="wrapper article--wrapper">
                <h5 className='article--title'>Error Alert</h5>
                <Alert alert={ALERTS_DATA.ERROR} onClose={() => alert("Close Error Alert")} />
            </article>
            <article className="wrapper article--wrapper">
                <h5 className='article--title'>Success Alert</h5>
                <Alert alert={ALERTS_DATA.SUCCESS} onClose={() => alert("Close Success Alert")} />
            </article>
        </section>
    </Page>
  )
}

export default AlertsView
