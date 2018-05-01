import React from 'react'

export default class Videos extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.videos.image} />
        <p>{this.props.videos.name}</p>
        <p>{this.props.videos.title}</p>
        <p>{this.props.videos.views}</p>
        <p>{this.props.videos.date}</p>
      </div>
    )
  }
}
