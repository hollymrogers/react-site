import React from 'react'
import videoFromObject from './videoFromObject'

export default class Video extends React.Component {
  render() {
    return <div>{this.props.uploads.map(videos => <videoFromObject videos={videos} />)}</div>
  }
}
