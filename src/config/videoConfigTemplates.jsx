const videos = []
const featuredVideos = []

for (let i = 0; i < 100; i++) {
  let toPush = {
    'id': `video-${i}`,
    'title': `Video ${i}`,
    'description': `This is a video about ${i} things`,
    'views': Math.floor(Math.random() * 1000000),
    'author': 'reesealanj',
    'videoLength': Math.floor(Math.random() * 200)
  }

  videos.push(toPush)
}

module.exports = [
  videos,
  featuredVideos
]