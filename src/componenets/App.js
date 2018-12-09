import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  onSearchGo = async term => {
    const responce = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: responce.data.items })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div>
        <SearchBar sendToParent={this.onSearchGo} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}

export default App
