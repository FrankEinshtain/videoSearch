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

  componentDidMount () {
    this.onSearchGo('puppy')
  }

  onSearchGo = async term => {
    const responce = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: responce.data.items,
      selectedVideo: responce.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div>
        <SearchBar sendToParent={this.onSearchGo} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail
                video={this.state.selectedVideo}
                />
            </div>
            <div className='six wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

export default App
