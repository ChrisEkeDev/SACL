import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

function Card({data}) {
  return (
    <article
      className='card--wrapper'
      role="region"
      aria-labelledby="card--title"
      tabIndex={0}
    >
      <h3 className='card--title'>{data.title}</h3>
      <p className='card--body'>{data.content}</p>
      <Button
          styles="primary button--full"
          label={data.actionLabel}
          action={data.action}
      />
    </article>
  )
}

export default Card
