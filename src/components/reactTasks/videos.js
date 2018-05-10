import React from 'react'
import Video from './video'
import Uploads from './upload'

export default class Videos extends React.Component {
  render() {
    return <div> {_.map(this.props.uploads, (video, i) => <Video key={i} video={video} />)} </div>
  }
}
