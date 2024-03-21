# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.4](https://github.com/anran758/mincloudx/compare/@mincloudx/cli@0.2.3...@mincloudx/cli@0.2.4) (2024-03-21)

### Bug Fixes

- fixed the issue for `upload` command verbose log call error, add ([707993d](https://github.com/anran758/mincloudx/commit/707993d736753853e3d14fc8b1b617e5c59608be))

## [0.2.3](https://github.com/anran758/mincloudx/compare/@mincloudx/cli@0.2.2...@mincloudx/cli@0.2.3) (2024-03-11)

### Bug Fixes

- **faas:** fixed the issue where createFaas could not be called properly ([00b0b19](https://github.com/anran758/mincloudx/commit/00b0b194ab165332fd3c9058649e89ce9e99e8f7))

### Features

- **faas:** add createFaas, complete basic implementation ([64a557a](https://github.com/anran758/mincloudx/commit/64a557a85aa64995e0a44a432d1f93b9f1a18306))

## [0.2.2](https://github.com/anran758/mincloudx/compare/@mincloudx/cli@0.2.1...@mincloudx/cli@0.2.2) (2024-03-01)

### Bug Fixes

- **cli:** fix the issue where build fails in the absence of `ts-loader` dependency ([3e87715](https://github.com/anran758/mincloudx/commit/3e8771531d9a0f8cbaf8bd9fb2c11bcb393c9e11))

### Features

- `faas debug` support select cloud function ([c66d624](https://github.com/anran758/mincloudx/commit/c66d624b4fbd6ff31218a424694f9e08453955e6))
- 💥 add `faas upload` command, refactor `faas deploy` and other faas command params ([6ecff0b](https://github.com/anran758/mincloudx/commit/6ecff0bc52a3b5f3592d2f3a310c3626c1319847))
- **cli:** support `faas debug` command ([0b6b3cf](https://github.com/anran758/mincloudx/commit/0b6b3cfbfc6594eb8ad1bc9d2e74ee4d057a3dd3))

### Performance Improvements

- **cli:** introduce inquirer to enhance security when entering password during login ([7462292](https://github.com/anran758/mincloudx/commit/7462292dbf246df719d04c5089780bae085e91e3))
- use npmlog instead of default log ([b1294c3](https://github.com/anran758/mincloudx/commit/b1294c32ee4b808b4a779a888e029351dcaa6618))

## [0.2.1](https://github.com/anran758/mincloudx/compare/@mincloudx/cli@0.2.0...@mincloudx/cli@0.2.1) (2024-02-26)

### Bug Fixes

- fixed the issue where environment variables were not working correctly ([b57d924](https://github.com/anran758/mincloudx/commit/b57d924c9143ca84d4a7b653aed1daa6bf3f2918))

### Features

- added `faas mock` command to support invoking cloud function with mock data ([e066fc1](https://github.com/anran758/mincloudx/commit/e066fc107d63bb55e2f6f128429f93f7618ffba8))
- faas build supports single file ([a8a5cbd](https://github.com/anran758/mincloudx/commit/a8a5cbdc1a0db637fa8586c86f3adfbe28eb74d4))

## 0.2.0 (2024-02-07)

### Build System / Dependencies

- change project version release process ([1542a32a](https://github.com/anran758/mincloudx/commit/1542a32a1c9e4afa72dc70040134d8c186a6f37d))

### Chores

- update version ([87940004](https://github.com/anran758/mincloudx/commit/8794000461d9b87cb3be3167c102e3c061a9efd4))
- remove npm static file ([df2d0f94](https://github.com/anran758/mincloudx/commit/df2d0f9422a567bb4179e3f3118966ff9c6ed22b))

### Documentation Changes

- update cli document ([40d29ea2](https://github.com/anran758/mincloudx/commit/40d29ea2d149cc124379c0b8977d6bc42aaa0826))

### New Features

- enhance faas deploy command to support deploying all cloud functions ([5fc0f8d0](https://github.com/anran758/mincloudx/commit/5fc0f8d0e808ccc80a09ef4ab578de47b7c65a11))
- add faas deploy command ([b6a5ab18](https://github.com/anran758/mincloudx/commit/b6a5ab18cd842941ae903871360ddc2f688376fb))
- support faas build command ([13f705eb](https://github.com/anran758/mincloudx/commit/13f705eb623b62d531ffc5825f0d60aed6e1c6ec))
- add basic workspace package ([90a739c3](https://github.com/anran758/mincloudx/commit/90a739c37835a2945654bfcb11616f64b0e278c2))

### Bug Fixes

- fix reading incorrect configuration for client_id ([df37a2c8](https://github.com/anran758/mincloudx/commit/df37a2c8896a4b610a9c9afc48172da076b86f89))

### Performance Improvements

- modify the usage of faas-demo ([c80e1523](https://github.com/anran758/mincloudx/commit/c80e1523668e40887a115e0732d73055d9e9a490))

### Refactors

- \*_cli:_- standardize parameter spelling style ([a6ee7230](https://github.com/anran758/mincloudx/commit/a6ee72308fc986fc0877e427340cae0afa4cc2d0))

## 0.1.1 (2024-01-19)

### Chores

- update lerna version configuration ([94d881ea](https://github.com/anran758/mincloudx/commit/94d881eacbcd66303c2fae15fb3dd428b10e4213))

### Documentation Changes

- correct the cli package npm badge、modify cli command description ([adca9a55](https://github.com/anran758/mincloudx/commit/adca9a55486863ce4307b7c4f380ed715d16622b))
- update README ([1ed3edd7](https://github.com/anran758/mincloudx/commit/1ed3edd79cd503ea9a4278bd6a02cbbd9c20cec9))

## 0.1.0 (2024-01-18)

### Build System / Dependencies

- enhance webpack configuration for the faas demo ([a3af8ac5](https://github.com/anran758/mincloudx/commit/a3af8ac5f550b61dfb2e66f48ce500b8d3b79f97))

### Chores

- rename project name ([42fd2554](https://github.com/anran758/mincloudx/commit/42fd25541f3265c499cd1f70976cae1ee2950957))
- use config-conventional instead of config-angular for commit lint configuration ([38c390b6](https://github.com/anran758/mincloudx/commit/38c390b691deb28f87774f583a11385f4b41b60d))

### Documentation Changes

- update README ([5b255680](https://github.com/anran758/mincloudx/commit/5b2556803cc4e02fb9020161d8ca9656ae7cccd3))
- update deployment documentation ([b5204fa0](https://github.com/anran758/mincloudx/commit/b5204fa02c97acf651766cc821f9698b07a08c4a))
- update deployment documentation ([7e6deb56](https://github.com/anran758/mincloudx/commit/7e6deb561753b73c8114ee351717e30995bb090c))

### New Features

- \*_faas:_- integrate Webpack as build tool, adopt TypeScript syntax in faas-demo ([52d3c077](https://github.com/anran758/mincloudx/commit/52d3c0777a942b5b38bf5414cb5000895d674188))

### Performance Improvements

- \*_cli:_- 📦 introduce Webpack to reduce bundle size: 145KB -> 10KB ([56b26885](https://github.com/anran758/mincloudx/commit/56b26885708e214f72bf1e1b1c3ded79662406ec))

### Refactors

- 💥 rename CLI global command name, adjust CLI type command generation ([f06020ef](https://github.com/anran758/mincloudx/commit/f06020ef9d6e8644d58d6ecc4cc8b5803c0e6751))

## 0.0.2 (2023-04-23)

### Build System / Dependencies

- 🔧 add prettier and modify eslint ([5f24c6f9](https://github.com/anran758/mincloud/commit/5f24c6f94055187633234fcffc294c127b2ddec5))

### Documentation Changes

- modify deploy document ([6d3bb6b0](https://github.com/anran758/mincloud/commit/6d3bb6b0a60d6aaec1958fc9b157465c93c9eab8))
- add development and deployment information in README ([8a5760c6](https://github.com/anran758/mincloud/commit/8a5760c69d394e0c9bd52c79d344932e2b10056f))

### New Features

- 🔧 add eslint, lint-staged for project constraint ([12bc412e](https://github.com/anran758/mincloud/commit/12bc412e6f90d5229279e3c78f1eb8b3b0eac9a6))
- add husky, commitizen, commitlint for project constraint ([44632f13](https://github.com/anran758/mincloud/commit/44632f1351b0135fc336f02ae09f13deba22ee3c))

### Code Style Changes

- 🎨 apply prettier formatting to codebase ([cbfa85de](https://github.com/anran758/mincloud/commit/cbfa85de99ea08ca0d25326d45602da8f1434cc2))

## 0.0.1 (2023-03-16)

### Chores

- **cli:**
  - package.json add keywords ([43460116](https://github.com/anran758/mincloud/commit/4346011684503eebc5bb4d8e60188062ef54a114))
  - remove type command schemaFile short flag ([42c091a5](https://github.com/anran758/mincloud/commit/42c091a50ac8afaf636643d461fb67a16e92bae3))
- add @types/node for the Node.js environment ([1f6d6f6f](https://github.com/anran758/mincloud/commit/1f6d6f6f503f886772672edcab63fa7ae9aa3579))
- update package keywords and README description ([67469971](https://github.com/anran758/mincloud/commit/6746997108f6bc969af6d32b07e40ca25aa21749))

### Documentation Changes

- **cli:**
  - add MIT LICENSE、update README and package.json description ([198a5529](https://github.com/anran758/mincloud/commit/198a55294cc819daa544c4ec729b5c57bb5d31ba))
  - 📝 the commands usage instructions are updated ([9a11e9ae](https://github.com/anran758/mincloud/commit/9a11e9ae6815397f33430f93bf34cfe722522e9c))
- update README ([94c044e9](https://github.com/anran758/mincloud/commit/94c044e9950781c9a777bf5168c6cbc511a2fe12))
- 📄 add license ([ab0527f0](https://github.com/anran758/mincloud/commit/ab0527f0c3ff424e99138196a973ac4de7dab378))
- prepare cli package README ([92a64749](https://github.com/anran758/mincloud/commit/92a647495b2bcf341eb9772cf19a75250177b6f6))

### New Features

- **cli:**
  - command type supports downloading data tables from minapp and converting them into .d.ts files ([fe9c6b0d](https://github.com/anran758/mincloud/commit/fe9c6b0d8bcfc0212132af949fb766d677026bcf))
  - add login command ([e01606d8](https://github.com/anran758/mincloud/commit/e01606d82c5ae48067690f23506e24504c3ea58a))
  - added mincloud login API, support read and write rc configurations. ([d04ce254](https://github.com/anran758/mincloud/commit/d04ce254ff1030d92d0deff65290fa909fce2885))
  - encapsulated basic HTTP request tools ([ca6cba8b](https://github.com/anran758/mincloud/commit/ca6cba8bb4dceb338c513e40364212eafe15a59d))

### Bug Fixes

- \*_cli:_- fixed the problem that only one login token can be stored ([22a365ad](https://github.com/anran758/mincloud/commit/22a365ad9d0abc03dd7aa3736980a2943c771c61))

### Refactors

- **cli:**
  - 💥 rename the cli command name and optimizes option names ([5a74581d](https://github.com/anran758/mincloud/commit/5a74581d8467b7bf31313c2a2e7147207cbd2255))
  - improve implementation of cli type command ([485af091](https://github.com/anran758/mincloud/commit/485af09115de81b55400d9e977ede590db185a8a))
- 🚚 Adjust the code directory structure ([61e35684](https://github.com/anran758/mincloud/commit/61e35684fc823449f4731f3fd477a6bb2749412f))

## 0.0.1-alpha.0 (2023-01-05)

### Chores

- change package version ([13a1c27c](https://github.com/anran758/mincloud/commit/13a1c27cf01230a6eb47ad44c1f8edea19e5a89b))
- reset faas-demo package version ([1854aeb9](https://github.com/anran758/mincloud/commit/1854aeb9a4a475981364ad57ef6816fe3f4120cf))
- remove node-demo app ([f3ca6fa7](https://github.com/anran758/mincloud/commit/f3ca6fa7a06715ab69845656981e6e1a4b1ff22a))

### Documentation Changes

- supplementary cli README ([01339854](https://github.com/anran758/mincloud/commit/0133985474e1361b0a4622a524d7f1896fce149a))
- completed todo ([5b1d232c](https://github.com/anran758/mincloud/commit/5b1d232c9844b147f0b6ba5753bd130bacf5371b))

### New Features

- \*_convert-types:_- 支持通过 commander 方式，提供配置生成文件 ([2c9aa484](https://github.com/anran758/mincloud/commit/2c9aa484d181b0fd03bf2739ec35eb352550ed7f))
- convert-types package add typescript base architecture ([40ee76fd](https://github.com/anran758/mincloud/commit/40ee76fd6707ed70b941c236b76485f08af45f00))
- 🎉 add a simplified implementation of generating a mincloud database table scheme a ts type file ([547d7b61](https://github.com/anran758/mincloud/commit/547d7b61aa6262862986f2656ce59973a25d968f))
- 🎉 add faas-demo ([a2ca8c83](https://github.com/anran758/mincloud/commit/a2ca8c83a54d0fd2a6f3d48b516aa6704e22ef30))
- add node-demo ([0a65ceb9](https://github.com/anran758/mincloud/commit/0a65ceb907e071162248a6456293ff5f968892a7))
- add web-demo, core package use webpack ([c83d86b9](https://github.com/anran758/mincloud/commit/c83d86b992aca0d11f04b98966cb4f9a3bafd596))

### Other Changes

- **convert-types:**
  - 实现完全转换为 typescript 实现 ([c3789d86](https://github.com/anran758/mincloud/commit/c3789d8663836ec23e1b3e370d4674677dfe2bd7))
  - 添加 webpack + ts 基础架构，对实现逻辑做拆分与优化 ([50cc593b](https://github.com/anran758/mincloud/commit/50cc593bc428cc775aecaaaf0411c8e456bd7b46))

### Refactors

- packages/convert-types migrated to packages/cli ([370425dd](https://github.com/anran758/mincloud/commit/370425dd8aff753b34a2a8b15ca9237e1069d4e3))

### Tests

- faas-demo 引用 convert-types 生成类型 ([25fba37c](https://github.com/anran758/mincloud/commit/25fba37cf04974e7d33fccb5625675efeb9e8c20))
