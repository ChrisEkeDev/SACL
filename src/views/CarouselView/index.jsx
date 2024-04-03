import React from 'react';
import Page from '../../components/Shared/Page';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import { CAROUSEL_DATA } from '../../constants';

function CarouselView() {
  return (
    <Page>
        <section className='wrapper main--display'>
            <article className="wrapper article--wrapper">
                <h5 className='article--title'>Carousel</h5>
                <Carousel
                    id="carousel-test"
                    items={CAROUSEL_DATA}
                    viewLimit={3}
                    component={Card}
                    width={800}
                    gap={0}
                />
            </article>
        </section>
    </Page>
  )
}

export default CarouselView
