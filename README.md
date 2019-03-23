# react-file-download

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via downloadjs

## Install

### yarn

```bash
yarn add react-file-download
```

### npm

```bash
npm install --save react-file-download
```

## Import

### ES2015

```javascript
import ReactFileDownload from 'react-file-download'
```

### CommonJS

```javascript
const ReactFileDownload = require('react-file-download')
```

## Usage

```javascript
import ReactFileDownload from 'react-file-download'

function Example() {
  return (
    <ReactFileDownload
      url="https://leftstick.github.io/react-file-download/public/example.txt"
      responseType="blob"
      fileName="test.txt"
      fileMIMEType="text/plain"
    >
      <button>try me</button>
    </ReactFileDownload>
  )
}
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/react-file-download/master/LICENSE)

[npm-url]: https://npmjs.org/package/react-file-download
[npm-image]: https://badge.fury.io/js/react-file-download.png
[david-url]: https://david-dm.org/leftstick/react-file-download.png
[dt-url]: https://img.shields.io/npm/dt/react-file-download.svg
[license-url]: https://img.shields.io/npm/l/react-file-download.svg
