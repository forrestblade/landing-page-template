import React from 'react'

const Promotion = ({ fields, ...props }) => {
  return (
    <section id='promo' class='promo'>
      <h3 class='title'>{fields.promo_heading}</h3>
      <p>
        {fields.promo_description}
      </p>
      <hr className='w-25 bg-light-purple mb2' />
      <ul class='grid list w-100 flex flex-wrap justify-center'>
        {fields.promo_images && fields.promo_images.map((image, index) => {
          const display = index % 3
            ? <li className='large' style={{ backgroundImage: `url(${image.image})` }} src='' alt='' />
            : <li className='small' style={{ backgroundImage: `url(${image.image})` }} src='' alt='' />
          return display
        })}
      </ul>

    </section>
  )
}

export default Promotion
