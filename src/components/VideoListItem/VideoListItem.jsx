import classNames from 'classnames'

const VideoListItem = ({ video, containerClasses }) => {

  const divClasses = classNames(containerClasses, '')

  return (
    <div className={divClasses}>
      { video && 
        <h1>{video.title}</h1>
      }
    </div>
  )
}

export default VideoListItem