import React from 'react'
import VideoFromObject from './videoFromObject'

export default class Video extends React.Component {
  render() {
    return <div>{this.props.uploads.map((videos, i) => <VideoFromObject key={i} videos={videos} />)}</div>
  }
}
