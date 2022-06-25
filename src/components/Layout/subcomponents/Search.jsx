const Search = ({ placeholder, value, onChange, onClear, onSubmit }) => {

  return (
    <div className='w-2/5 inline-flex flex-row align-center justify-center items-end'>
      <input
        type='text'
        value={value}
        className='mt-1 w-full block rounded-md bg-gray-100 focus:bg-white focus:border-gray-300 focus:ring-0'
        onChange={onChange}
        placeholder={placeholder} 
      />
      <button 
        onClick={onSubmit}
        disabled={value === ''}
        className='cursor-pointer ml-1 w-10 h-10 rounded bg-stone-300 hover:bg-stone-200 text-2xl text-2xl flex justify-center items-center relative'>
        🔍
      </button>
      { value !== '' &&
        <button 
          onClick={onClear}
          className='cursor-pointer ml-1 w-10 h-10 rounded bg-stone-300 hover:bg-stone-200 text-xl flex justify-center items-center relative'>
          ❌
        </button>
      }
    </div>
  )
}

export default Search