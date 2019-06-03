import { splash } from 'docz-plugin-splash'

export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    public: './public',
    base: '/rf-filereceiver/',
    title: 'rf-filereceiver',
    description: 'A component which interacts with user click, and download file via downloadjs',
    plugins: [splash()]
  }
}
