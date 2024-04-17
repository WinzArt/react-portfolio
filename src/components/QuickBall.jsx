import { useState, useMemo } from 'react'
import { useSpring, useTrail, animated } from '@react-spring/web'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const Quickball = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prevState) => !prevState)

  const buttonAnimation = useSpring({
    transform: isOpen ? 'scale(0.8)' : 'scale(1)',
    from: { transform: 'rotate(0deg)' },
    config: { tension: 500, friction: 10 },
  })

  const items = useMemo(() => {
    const angleStep = 180 / (navLinks.length - 1)
    return navLinks.map((link, index) => {
      const angle = index * angleStep - 0
      const x = Math.sin(angle * (Math.PI / -180)) * 6
      const y = Math.cos(angle * (Math.PI / -180)) * 6
      const position = `translate(${x}rem, ${-y}rem)`
      return {
        ...link,
        position,
      }
    })
  }, [])

  const itemsAnimation = useTrail(items.length, {
    transform: isOpen ? 'translate(0, 0)' : 'translate(0, 10rem)',
    opacity: isOpen ? 1 : 0,
    scale: isOpen ? 1 : 0.5,
    from: { transform: 'translate(0, 10rem)', opacity: 0 },
    config: { tension: 500, friction: 30 },
  })

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className='fixed bottom-40 right-4 z-50 sm:hidden'>
      <animated.button
        className='flex h-14 w-14 items-center justify-center rounded-full bg-primary focus:outline-none'
        style={{ ...buttonAnimation, WebkitTapHighlightColor: 'transparent' }}
        onClick={toggleMenu}
      >
        <Icon
          key={isOpen ? 'close' : 'menu'}
          icon={
            isOpen
              ? 'line-md:menu-to-close-transition'
              : 'line-md:close-to-menu-transition'
          }
          className='text-xl text-white'
        />
      </animated.button>

      <div className='absolute inset-0 -z-10 flex items-center justify-center'>
        {items.map(({ id, title, icon, position }, index) => (
          <animated.div
            key={id}
            className='absolute flex h-14 w-14 items-center justify-center rounded-full bg-primary focus:outline-none'
            style={{
              ...itemsAnimation[index],
              transform: isOpen ? position : 'none',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <NavLink
              to={id}
              activeClassName='bg-purple-700'
              onClick={handleNavLinkClick}
              className='flex h-full w-full items-center justify-center rounded-full'
            >
              <Icon icon={icon} className='text-xl text-white' />
            </NavLink>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Quickball
