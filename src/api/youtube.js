import axios from 'axios'
const key = 'AIzaSyBbYa9U4IzZFiF51LzIwgzpTUIp3sxHPPQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: key,
    maxResults: '10',
    part: 'snippet'
  }
})
