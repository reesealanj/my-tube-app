const ViewVideo = ({ videoId }) => {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>View Video</h1>
      <h3 className='text-2xl font-bold mb-4'>Video {videoId}</h3>
      <span className='text-7xl'>📽️</span>
    </div>
  )
}

export default ViewVideo

export async function getServerSideProps({ query: { id }}) {
  return {
    props: {
      videoId: id
    }
  }
}