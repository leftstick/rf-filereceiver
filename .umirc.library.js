import { splash } from 'docz-plugin-splash'

export default {
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    public: './docs/public',
    src: './docs',
    hashRouter: true,
    themeConfig: { mode: 'light' },
    base: '/rc-download',
    title: 'rc-download',
    description: 'A component which interacts with user click, and download file via downloadjs',
    plugins: [splash()]
  }
}
