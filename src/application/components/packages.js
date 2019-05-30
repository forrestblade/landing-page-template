import React from 'react'

export const Packages = ({ fields, ...props }) => {
  return (
    <section id='packages' className='packages'>
      <h3 className='title'>{fields.packages_heading}</h3>
      <p>{fields.packages_description}</p>
      <hr />
      <div className='grid'>
        {fields.packages && fields.packages.map(p => {
          return (
            <li>
              <h4>{p.package}</h4>
              <p>{p.package_description}</p>
            </li>
          )
        })}
      </div>
    </section>
  )
}
