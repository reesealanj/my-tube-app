import { useState } from 'react'
import Image from "next/image"
import classNames from 'classnames'
import { useRouter } from 'next/router'

const VideoGridItem = ({ video, videoThumb, classes }) => {

  const THUMBNAIL_WIDTH = 180
  const THUMBNAIL_HEIGHT = 1620/16

  const [hovered, setHovered] = useState(false)
  const [loading, setLoading] = useState(true)

  const lengthPillClasses = classNames('rounded-md absolute top-[55%] right-1 text-white font-normal', {
    'bg-stone-500': hovered,
    'bg-stone-700': !hovered
  })

  const playButtonClasses = classNames('absolute top-[30%] left-[45%] text-2xl', {
    'invisible': !hovered
  })

  const containerClasses = classNames(classes, 
    'flex flex-col relative rounded-md', {
      'bg-stone-200': !hovered,
      'bg-stone-100 font-semibold': hovered
    })

  const imageClasses = classNames({
    '': hovered
  })

  const router = useRouter()

  return (
    <div 
      className={containerClasses} 
      onMouseEnter={() => {setHovered(true)}} 
      onMouseLeave={() => {setHovered(false)}}
      onClick={() => {router.push(`/video/${video.id}`)}}
    >
      <Image 
          src={videoThumb}
          width={THUMBNAIL_WIDTH * 1.25}
          height={THUMBNAIL_HEIGHT * 1.25}
          alt={video.description}
          className={imageClasses}
      />
      <div className={playButtonClasses}>
        ⏯
      </div>
      <div className={lengthPillClasses}>
        {video.videoLength}
      </div>
      <div className='inline-flex flex-row items-baseline justify-between px-4'>
        <span className='text-base'>{video.title}</span>
        <span className='text-xs'>{video.views} views</span>
      </div>
      <div className='inline-flex flex-row items-baseline px-4 pb-2'>
        <span className='text-xs text-muted'>@{video.author}</span>
      </div>
    </div>)
}

export default VideoGridItem