import React from 'react'

export const Header = ({ fields, ...props }) => {
  return (
    <header className='absolute code w-100 flex justify-between items-center ph5 pv2 white z-1'>
      <h2>{fields.heading}</h2>
      <nav className='flex list'>
        {fields.navigation && Object.values(fields.navigation[0]).map(i => <li className='mh2'><a className='link white' href={`#${i}`}>{i}</a></li>)}
      </nav>
    </header>
  )
}
