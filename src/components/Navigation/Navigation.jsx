import NavItem from "./subcomponents/NavItem"

const Navigation = ({}) => {
  
  const menuItems = [
    {
      href: '/',
      title: 'Home',
      icon: '🏠'
    },
    {
      href: '/upload',
      title: 'Upload',
      icon: '🎞️'
    },
    {
      href: '/subscriptions',
      title: 'Subscriptions',
      icon: '📚'
    },
  ];

  return (
    <aside className='bg-stone-300 w-full md:w-60 flex space-between flex-col'>
      <ul className='mt-1 mb-auto'>
        {menuItems.map(({href, title, icon}) => {
          return <NavItem href={href} text={title} key={title} icon={icon} />
        })}
      </ul>
      <ul className=''>
        <NavItem href='/profile' text='Profile' key='Profile' icon={'👨🏼‍🦲'} />
        <NavItem href='/settings' text='Settings' key='Settings' icon={'⚙️'} />
      </ul>
    </aside>
  )
}

export default Navigation