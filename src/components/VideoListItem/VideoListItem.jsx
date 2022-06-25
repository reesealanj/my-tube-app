import Image from 'next/image'
import classNames from 'classnames'

const VideoListItem = ({ video, containerClasses }) => {

  const videoThumbnails = [
    '/img/thumbnail-1.jpg',
    '/img/thumbnail-2.jpg',
    '/img/thumbnail-3.jpg',
    '/img/thumbnail-4.jpg',
    '/img/thumbnail-5.jpg',
  ]

  const THUMBNAIL_WIDTH = 180
  const THUMBNAIL_HEIGHT = 1620/16

  const getRandomVideoThumb = () => {
    return videoThumbnails[Math.floor((Math.random() * videoThumbnails.length))]
  }

  const divClasses = classNames(containerClasses, '')

  return (
    <div className={divClasses}>
      { video && 
        <h1>{video.title}</h1>
      }
      <div style={{ maxWidth: 180 + 'px' }}>
        <Image 
          src={getRandomVideoThumb()}
          width={THUMBNAIL_WIDTH}
          height={THUMBNAIL_HEIGHT}
          alt={video.description}
        />
      </div>
      

    </div>
  )
}

export default VideoListItem