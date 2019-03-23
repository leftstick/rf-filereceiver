# rf-download

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via downloadjs

## Install

### yarn

```bash
yarn add rf-download
```

### npm

```bash
npm install --save rf-download
```

## Import

### ES2015

```javascript
import RfDownload from 'rf-download'
```

### CommonJS

```javascript
const RfDownload = require('rf-download')
```

## Usage

```javascript
import RfDownload from 'rf-download'

function Example() {
  return (
    <RfDownload
      url="https://leftstick.github.io/rf-download/public/example.txt"
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

[MIT License](https://raw.githubusercontent.com/leftstick/rf-download/master/LICENSE)

[npm-url]: https://npmjs.org/package/rf-download
[npm-image]: https://badge.fury.io/js/rf-download.png
[david-url]: https://david-dm.org/leftstick/rf-download.png
[dt-url]: https://img.shields.io/npm/dt/rf-download.svg
[license-url]: https://img.shields.io/npm/l/rf-download.svg
