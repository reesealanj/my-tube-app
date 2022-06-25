import { forwardRef } from "react"

const Notifications = forwardRef(({ onClick, href, startingValue }, ref) => {
  return (
    <a className='cursor-pointer w-10 h-10 rounded bg-stone-300 hover:bg-stone-200 text-2xl text-center flex justify-center items-center relative' ref={ref} href={href} onClick={onClick}>
      🔔
      { startingValue > 0 &&
        <>
          <span className='absolute top-0 right-0 z-10 rounded-full p-1 text-base text-center flex justify-center translate-x-1 -translate-y-1'>
            🔴
          </span>
          <span className='absolute top-0 right-0 z-10 rounded-full p-1 text-sm text-white font-semibold text-center flex justify-center flex justify-center  -translate-x-1 -translate-y-0.2'>
            {startingValue}
          </span>
        </>
      }
    </a>
  )
})

export default Notifications