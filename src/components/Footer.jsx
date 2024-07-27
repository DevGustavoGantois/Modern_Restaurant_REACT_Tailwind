import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
  return (
    <footer className='mb-8 mt-20'>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link, index) => {
                return (
                    <a key={index} href={link.href} target='_blank' rel='noopenernoreferrer'>
                        {link.icon}
                    </a>
                )
            })}
        </div>
        <p className='mt-8 text-center tracking-tighter text-neutral-500'>
            &copy;2024 devgustavogantois. Todos os Direitos Reservados.
        </p>
    </footer>
  )
}

export default Footer
