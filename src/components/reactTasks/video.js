import React from 'react'

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.video.image} />
        <p>{this.props.video.name}</p>
        <p>{this.props.video.title}</p>
        <p>{this.props.video.views}</p>
        <p>{this.props.video.date}</p>
      </div>
    )
  }
}
