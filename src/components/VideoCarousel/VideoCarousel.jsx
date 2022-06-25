import { useState } from 'react'

import VideoListItem from "../VideoListItem/VideoListItem"

const VideoCarousel = ({ videos, title }) => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div>
      { title !== undefined &&      
        <h2 className='text-semibold'>{title}</h2>
      }
      { videos && videos.map((video) => {
        return <VideoListItem video={video} key={video.id}/>
      })

      }
    </div>
  )
}

export default VideoCarousel