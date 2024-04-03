import React, { useState, useEffect } from 'react';
import Page from '../../components/Shared/Page';
import Loading from '../../components/Loading';
import Button from '../../components/Button/Button';
import { AnimatePresence } from 'framer-motion';
import './styles.scss';

function LoadingView() {
    const [ isLoading, setIsLoading ] = useState(true);

    const handleLoading = () => {
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 7000);
    }, [isLoading]);

    return (
        <Page>
            <section className='wrapper main--display loading--display'>
                <article className="article--wrapper">
                    <h5 className='article--title'>Loading</h5>
                    <Button
                        label="Start Loading"
                        styles="primary"
                        action={handleLoading}
                    />
                    <AnimatePresence>
                        {
                            isLoading &&
                            <Loading />
                        }
                    </AnimatePresence>
                </article>
            </section>
        </Page>
  )
}

export default LoadingView
