import React from 'react'

export default class Category extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.topic} {this.props.type}
        </p>
      </div>
    )
  }
}
