import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

import Navigation from "../Navigation/Navigation"
import Notifications from './subcomponents/Notifications'
import Search from './subcomponents/Search'

const Layout = ({ children }) => {

  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const onSearchQueryChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const onSearchQueryClear = (event) => {
    setSearchQuery('')
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <header 
        className='bg-stone-400 sticky top-0 h-14 flex px-5 justify-between items-center font-semibold'
      >
        <Link href='/'>
          <a className='text-4xl'>📺 MeTube</a>
        </Link>
        <Search 
          placeholder='what can you get into...' 
          onSubmit={() => { router.push(`/search?q=${searchQuery}`)}}
          value={searchQuery}
          onChange={onSearchQueryChange}
          onClear={onSearchQueryClear}
        />
        <Link href='/notifications' passHref>
          <Notifications startingValue="4"/>
        </Link>
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <Navigation />
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}

export default Layout