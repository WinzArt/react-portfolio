import { useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, useTrail, animated } from '@react-spring/web'
import { Icon } from '@iconify/react'
import { navLinks } from '../constants'

const Quickball = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prevState) => !prevState)

  const buttonAnimation = useSpring({
    transform: isOpen ? 'scale(0.8)' : 'scale(1)',
    config: { tension: 500, friction: 10 },
  })

  const items = useMemo(() => {
    const angleStep = 180 / (navLinks.length - 1)
    return navLinks.map(({ id, to, title, icon }, index) => {
      const angle = index * angleStep - 0
      const x = Math.sin(angle * (Math.PI / -180)) * 6
      const y = Math.cos(angle * (Math.PI / -180)) * 6
      const position = `translate(${x}rem, ${-y}rem)`
      return { id, to, title, icon, position }
    })
  }, [])

  const itemsAnimation = useTrail(items.length, {
    transform: isOpen
      ? 'scale(1) translate(0, 0)'
      : 'scale(0.5) translate(0, 10rem)',
    opacity: isOpen ? 1 : 0,
    scale: isOpen ? 1 : 0.5,
    pointerEvents: isOpen ? 'auto' : 'none', // new line
    from: {
      transform: 'scale(0.5) translate(0, 10rem)',
      opacity: 0,
      pointerEvents: 'none',
    }, // new line
    config: { tension: 800, friction: 30 },
  })

  const handleNavLinkClick = () => setIsOpen(false)

  return (
    <div className='fixed bottom-40 right-4 z-50 sm:hidden'>
      <animated.button
        className='flex h-14 w-14 items-center justify-center rounded-full bg-primary/50 backdrop-blur-sm'
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
          className='text-2xl text-dark dark:text-light'
        />
      </animated.button>

      <div className='absolute inset-0 -z-10 flex items-center justify-center'>
        {items.map(({ id, to, title, icon, position }, index) => (
          <animated.div
            key={id}
            className='absolute flex h-14 w-14 items-center justify-center rounded-full bg-primary/50 p-[12px] backdrop-blur-sm focus:outline-none'
            style={{
              ...itemsAnimation[index],
              transform: isOpen ? position : 'none',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <NavLink
              to={to}
              onClick={() => setIsOpen(false)}
              className='flex h-full w-full items-center justify-center rounded-md bg-dark bg-opacity-50 shadow-2xl backdrop:blur-sm'
            >
              <Icon
                icon={icon}
                className='text-2xl text-light dark:text-light'
              />
            </NavLink>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Quickball
