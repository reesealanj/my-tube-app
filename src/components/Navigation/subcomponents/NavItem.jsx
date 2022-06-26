import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const NavItem = ({ href, text, icon }) => {

  const router = useRouter()
  const isActive = router.asPath === href

  const linkClassNames = classNames('flex p-2 bg-sky-200 rounded hover:bg-sky-400 cursor-pointer', {
    'bg-sky-600 text-white font-bold': isActive,
    'bg-sky-200': !isActive
  })

  return (
    <li className='m-2 font-medium uppercase text-md'>
      <Link href={href}>
        <a className={linkClassNames} href={href}>
          <span className='mr-2 my-auto'>{icon}</span>
          {text}
        </a>
      </Link>
    </li>
  )
} 

export default NavItem