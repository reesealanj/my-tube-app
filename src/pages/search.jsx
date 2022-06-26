import { useRouter } from 'next/router'

function Search({}) {

  const { query } = useRouter()

  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Search</h1>
      <h3 className='text-2xl font-bold mb-4'>Results for: {query.q}</h3>
      <span className='text-7xl'>🔍</span>
    </div>
  )
}

export default Search