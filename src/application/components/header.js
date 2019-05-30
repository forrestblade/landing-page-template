import React from 'react'

export const Header = ({ fields, ...props }) => {
  return (
    <header className='absolute code w-100 flex justify-between items-center ph5 pv2 white z-1'>
      <h2>{fields.heading}</h2>
      <nav className='flex list'>
        {console.log(fields)}
        {fields.navigation && fields.navigation.map(item => <li key={item.item} className='mh2'><a className='link white' href={`#${item.item}`}>{item.item}</a></li>)}
      </nav>
    </header>
  )
}
