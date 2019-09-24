import { ajax } from './helper/xhr'
import PropTypes from 'prop-types'
import React from 'react'
import download from 'downloadjs'

class RfReceiver extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    method: PropTypes.string,
    headers: PropTypes.object,
    fileName: PropTypes.string,
    fileMIMEType: PropTypes.string,
    onProgress: PropTypes.func
  }

  static defaultProps = {
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
    const { url, method, fileMIMEType, fileName, headers, onProgress } = this.props
    if (e && e.preventDefault) {
      e.preventDefault()
    }
    this._fireOriginalClick(e)

    ajax({
      url: isString(url) ? url : url(),
      method: methodValidator(method) || 'GET',
      responseType: 'blob',
      headers: headers || {},
      onProgress: event => {
        onProgress && onProgress(event)
      }
    })
      .then(response => {
        download(response, getFileName(fileName, url), fileMIMEType)
      })
      .catch(err => {
        onProgress &&
          onProgress({
            loaded: 0,
            total: 0,
            complete: 0
          })
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

export default RfReceiver

function getFileName(fileName, url) {
  if (fileName) {
    return fileName
  }
  if (!url) {
    return ''
  }
  const splitWithSlash = url.split('/')
  const lastPiece = splitWithSlash.pop()
  if (!lastPiece) {
    return ''
  }
  return lastPiece.split('?')[0] || 'downloaded'
}

function isString(url) {
  return Object.prototype.toString.call(url) === '[object String]'
}

function methodValidator(method) {
  if (method === null || method === undefined) {
    return method
  }

  const methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'OPTIONS', 'PATCH']
  if (!isString(method) || !methods.includes(method.toUpperCase())) {
    throw new TypeError(
      "The value of rf-filereceiver's method accepts: GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH"
    )
  }

  return method
}
