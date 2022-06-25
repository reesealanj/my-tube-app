import classNames from 'classnames'
import VideoGridItem from './VideoGridItem'

const VideoGrid = ({ videos, classes }) => {

  const containerClasses = classNames(classes, 
    'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
  )

  return (
    <div className={containerClasses}>
      { videos && videos.map((video, idx) => {
        return (<VideoGridItem video={video} classes='' key={`video-${idx}`} />)
      })}
    </div>
  )
}

export default VideoGrid