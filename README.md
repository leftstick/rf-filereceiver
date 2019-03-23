# rc-download

[![NPM version][npm-image]][npm-url]
![][travis-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via downloadjs

## Install

### yarn

```bash
yarn add rc-download
```

### npm

```bash
npm install --save rc-download
```

## Import

### ES2015

```javascript
import RcDownload from 'rc-download'
```

### CommonJS

```javascript
const RcDownload = require('rc-download')
```

## Usage

```javascript
import RcDownload from 'rc-download'

function Example() {
  return (
    <RcDownload
      url="http://leftstick.github.io/rc-download/public/example.txt"
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

[MIT License](https://raw.githubusercontent.com/leftstick/rc-download/master/LICENSE)

[npm-url]: https://npmjs.org/package/rc-download
[npm-image]: https://badge.fury.io/js/rc-download.png
[travis-url]: https://api.travis-ci.com/leftstick/rc-download.svg?branch=master
[david-url]: https://david-dm.org/leftstick/rc-download.png
[dt-url]: https://img.shields.io/npm/dt/rc-download.svg
[license-url]: https://img.shields.io/npm/l/rc-download.svg
