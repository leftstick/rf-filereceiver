# react-component-download

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via downloadjs

## Install

### yarn

```bash
yarn add react-component-download
```

### npm

```bash
npm install --save react-component-download
```

## Import

### ES2015

```javascript
import RcDownload from 'react-component-download'
```

### CommonJS

```javascript
const RcDownload = require('react-component-download')
```

## Usage

```javascript
import RcDownload from 'react-component-download'

function Example() {
  return (
    <RcDownload
      url="https://leftstick.github.io/react-component-download/public/example.txt"
      responseType="blob"
      fileName="test.txt"
      fileMIMEType="text/plain"
    >
      <button>try me</button>
    </RcDownload>
  )
}
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/react-component-download/master/LICENSE)

[npm-url]: https://npmjs.org/package/react-component-download
[npm-image]: https://badge.fury.io/js/react-component-download.png
[david-url]: https://david-dm.org/leftstick/react-component-download.png
[dt-url]: https://img.shields.io/npm/dt/react-component-download.svg
[license-url]: https://img.shields.io/npm/l/react-component-download.svg
