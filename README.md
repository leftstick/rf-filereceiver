# react-4-download

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via downloadjs

## Install

### yarn

```bash
yarn add react-4-download
```

### npm

```bash
npm install --save react-4-download
```

## Import

### ES2015

```javascript
import RfDownload from 'react-4-download'
```

### CommonJS

```javascript
const RfDownload = require('react-4-download')
```

## Usage

```javascript
import RfDownload from 'react-4-download'

function Example() {
  return (
    <RfDownload
      url="https://leftstick.github.io/react-4-download/public/example.txt"
      responseType="blob"
      fileName="test.txt"
      fileMIMEType="text/plain"
    >
      <button>try me</button>
    </RfDownload>
  )
}
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/react-4-download/master/LICENSE)

[npm-url]: https://npmjs.org/package/react-4-download
[npm-image]: https://badge.fury.io/js/react-4-download.png
[david-url]: https://david-dm.org/leftstick/react-4-download.png
[dt-url]: https://img.shields.io/npm/dt/react-4-download.svg
[license-url]: https://img.shields.io/npm/l/react-4-download.svg
