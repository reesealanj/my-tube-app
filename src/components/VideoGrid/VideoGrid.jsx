import classNames from 'classnames'
import VideoGridItem from './VideoGridItem'

const VideoGrid = ({ videos, classes }) => {

  const videoThumbnails = [
    '/img/thumbnail-1.jpg',
    '/img/thumbnail-2.jpg',
    '/img/thumbnail-3.jpg',
    '/img/thumbnail-4.jpg',
    '/img/thumbnail-5.jpg',
  ]

  const getRandomVideoThumb = () => {
    return videoThumbnails[Math.floor((Math.random() * videoThumbnails.length))]
  }

  const containerClasses = classNames(classes, 
    'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 cursor-pointer'
  )

  return (
    <div className={containerClasses}>
      { videos && videos.map((video, idx) => {
        return (
          <VideoGridItem 
            video={video}
            videoThumb={getRandomVideoThumb()}
            classes='' 
            key={`video-${idx}`} 
          />)
      })}
    </div>
  )
}

export default VideoGrid