import NavItem from './subcomponents/NavItem'

const Navigation = () => {
  
  const menuItems = [
    {
      href: '/',
      title: 'Home',
      icon: 'ð '
    },
    {
      href: '/upload',
      title: 'Upload',
      icon: 'ðïļ'
    },
    {
      href: '/subscriptions',
      title: 'Subscriptions',
      icon: 'ð'
    },
  ];

  return (
    <aside className='bg-stone-300 w-full md:w-60 flex space-between flex-col max-h-[95vh] sticky top-0 overflow-hidden'>
      <ul className='mt-1 mb-auto'>
        {menuItems.map(({href, title, icon}) => {
          return <NavItem href={href} text={title} key={title} icon={icon} />
        })}
      </ul>
      <ul className=''>
        <NavItem href='/profile' text='Profile' key='Profile' icon='ðĻðžâðĶē' />
        <NavItem href='/settings' text='Settings' key='Settings' icon='âïļ' />
      </ul>
    </aside>
  )
}

export default Navigation