# rf-filereceiver

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A component which interacts with user click, and download file via [downloadjs](https://github.com/rndme/download)

## Install

### yarn

```bash
yarn add rf-filereceiver
```

### npm

```bash
npm install --save rf-filereceiver
```

## Import

### ES2015

```javascript
import RfReceiver from 'rf-filereceiver'
```

### CommonJS

```javascript
const RfReceiver = require('rf-filereceiver')
```

## Usage

```javascript
import RfReceiver from 'rf-filereceiver'

function Example() {
  return (
    <RfReceiver
      url="https://leftstick.github.io/rf-filereceiver/public/example.txt"
      fileName="test.txt"
      fileMIMEType="text/plain"
    >
      <button>try me</button>
    </RfReceiver>
  )
}
```

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/rf-filereceiver/master/LICENSE)

[npm-url]: https://npmjs.org/package/rf-filereceiver
[npm-image]: https://badge.fury.io/js/rf-filereceiver.png
[david-url]: https://david-dm.org/leftstick/rf-filereceiver.png
[dt-url]: https://img.shields.io/npm/dt/rf-filereceiver.svg
[license-url]: https://img.shields.io/npm/l/rf-filereceiver.svg
