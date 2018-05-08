import React from 'react'
import Video from './video'

export default class Videos extends React.Component {
  render() {
    return <div>{this.props.map((video, i) => <Video key={i} video={video} />)}</div>
  }
}
