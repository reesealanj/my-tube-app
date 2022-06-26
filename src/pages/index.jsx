import VideoCarousel from '../components/VideoCarousel/VideoCarousel'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import videos from '../config/videos.json'

function Home({}) {

  // sorts videos from highest views -> lowest views
  const viewsSortedVideos = videos.sort((a, b) => {
    if (a.views === b.views) return 0
    if (a.views > b.views) return -1
    if (a.views < b.views) return 1
  })

  const tenMostViewed = viewsSortedVideos.slice(-10)

  return (
    <div className='flex flex-col h-full p-5'>
      <h1 className='text-4xl mb-5 font-bold'>Welcome, Reese</h1>
      {/**
      <VideoCarousel 
        title='Most Viewed'
        videos={tenMostViewed}
        className=''
      />
      */}
      <VideoGrid 
        videos={videos} 
        classes=''
      />
    </div>
  )
}

export default Home
