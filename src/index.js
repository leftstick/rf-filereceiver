import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import download from 'downloadjs'

class RcDownload extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    responseType: PropTypes.string,
    headers: PropTypes.object,
    fileName: PropTypes.string,
    fileMIMEType: PropTypes.string
  }

  static defaultProps = {
    responseType: 'blob',
    headers: {},
    fileMIMEType: 'application/octet-stream'
  }

  _fireOriginalClick = e => {
    const { children } = this.props
    const childCallback = children.props.onClick
    if (childCallback) {
      childCallback(e)
    }
  }

  _onClick = e => {
    const { url, fileMIMEType } = this.props
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    this._fireOriginalClick(e)

    axios({
      url: isString(url) ? url : url(),
      method: 'GET',
      responseType: 'blob'
    }).then(response => {
      download(response.data || response, getFileName(url), fileMIMEType)
    })
  }

  render() {
    const { children } = this.props
    const child = React.Children.only(children)
    const newChild = React.cloneElement(child, {
      onClick: this._onClick
    })
    return newChild
  }
}

export default RcDownload

function getFileName(url) {
  if (!url) {
    return ''
  }
  const splitWithSlash = url.split('/')
  const lastPiece = splitWithSlash.pop()
  if (!lastPiece) {
    return ''
  }
  return lastPiece.split('?')[0] || ''
}

function isString(url) {
  return Object.prototype.toString.call(url) === '[object String]'
}
