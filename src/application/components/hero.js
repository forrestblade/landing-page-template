import React from 'react'

export const Hero = ({ fields, props }) => {
  return (
    <section className='hero code cover flex justify-center min-vh-100' style={{ backgroundImage: `url(${fields.hero_image})` }}>
      <div className='background-image bg-black-60 w-100 flex justify-center'>
        <div className='hero-content-area self-center tc'>
          <h1 className='f-headline fw2 white-90 mb0 lh-title self-center'>{fields.heading}</h1>
          <h3 className='fw1 f-subheadline white-80 mt3 mb4 self-center'>{fields.subheading}</h3>
          <a href='#promo' className='f4 no-underline grow dib v-mid bg-blue self-center white ba b--blue ph4 pv3 mb3'>{fields.call_to_action}</a>
        </div>
      </div>
    </section>
  )
}
