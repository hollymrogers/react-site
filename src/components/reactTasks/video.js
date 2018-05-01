import React from 'react'
import VideosFromObject from './videosFromObject'

export default class Video extends React.Component {
  render() {
    return <div>{this.props.videos.map(Videos => <VideosFromObject Videos={Videos} />)}</div>
  }
}
