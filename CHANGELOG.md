# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/anran758/mincloudx/compare/v0.1.1...v0.4.0) (2024-04-19)

### Bug Fixes

- **cli:** fix the issue where build fails in the absence of `ts-loader` dependency ([3e87715](https://github.com/anran758/mincloudx/commit/3e8771531d9a0f8cbaf8bd9fb2c11bcb393c9e11))
- **faas:** fixed the issue where createFaas could not be called properly ([00b0b19](https://github.com/anran758/mincloudx/commit/00b0b194ab165332fd3c9058649e89ce9e99e8f7))
- fix reading incorrect configuration for client_id ([df37a2c](https://github.com/anran758/mincloudx/commit/df37a2c8896a4b610a9c9afc48172da076b86f89))
- fixed the issue for `upload` command verbose log call error, add ([707993d](https://github.com/anran758/mincloudx/commit/707993d736753853e3d14fc8b1b617e5c59608be))
- fixed the issue where environment variables were not working correctly ([b57d924](https://github.com/anran758/mincloudx/commit/b57d924c9143ca84d4a7b653aed1daa6bf3f2918))
- **io:** io `find` operator should support offset and limit configuration ([2e068eb](https://github.com/anran758/mincloudx/commit/2e068eb81aa2fce1d0fdb150ab83d0467b9059a3))
- **io:** when the user sets plain, the find operator should return a data list, not object ([91a6c4b](https://github.com/anran758/mincloudx/commit/91a6c4b20a7024fd5f660ed0df6c953571d7be1a))

### Features

- `faas debug` support select cloud function ([c66d624](https://github.com/anran758/mincloudx/commit/c66d624b4fbd6ff31218a424694f9e08453955e6))
- 💥 add `faas upload` command, refactor `faas deploy` and other faas command params ([6ecff0b](https://github.com/anran758/mincloudx/commit/6ecff0bc52a3b5f3592d2f3a310c3626c1319847))
- add basic architecture to IO package ([3fd29c6](https://github.com/anran758/mincloudx/commit/3fd29c67a36da47ae831d31dbfc5c4379c03305d))
- add faas deploy command ([b6a5ab1](https://github.com/anran758/mincloudx/commit/b6a5ab18cd842941ae903871360ddc2f688376fb))
- added `faas mock` command to support invoking cloud function with mock data ([e066fc1](https://github.com/anran758/mincloudx/commit/e066fc107d63bb55e2f6f128429f93f7618ffba8))
- added baas sdk lib as a local project test, supplement type ([01f3cc6](https://github.com/anran758/mincloudx/commit/01f3cc6ab6a993a0f27f2c14deb1ec525e7c3c52))
- **cli:** cli faas debug command supports continuous debugging ([fc06472](https://github.com/anran758/mincloudx/commit/fc06472b46cb3ae3fffcddc0406fe44df94d4c3b))
- **cli:** support `faas debug` command ([0b6b3cf](https://github.com/anran758/mincloudx/commit/0b6b3cfbfc6594eb8ad1bc9d2e74ee4d057a3dd3))
- enhance faas deploy command to support deploying all cloud functions ([5fc0f8d](https://github.com/anran758/mincloudx/commit/5fc0f8d0e808ccc80a09ef4ab578de47b7c65a11))
- faas build supports single file ([a8a5cbd](https://github.com/anran758/mincloudx/commit/a8a5cbdc1a0db637fa8586c86f3adfbe28eb74d4))
- **faas:** add baas/faas type ([735b09d](https://github.com/anran758/mincloudx/commit/735b09d41de4f8659d765315a3dfb1d62f5b96f5))
- **faas:** add createFaas, complete basic implementation ([64a557a](https://github.com/anran758/mincloudx/commit/64a557a85aa64995e0a44a432d1f93b9f1a18306))
- **faas:** add new faas framework package, add jest framework, introduced jest for code testing ([12e48dd](https://github.com/anran758/mincloudx/commit/12e48dd7d07a8334f3f3ee52ce39bae807e93f6d))
- **io:** introduce `first` operator to efficiently retrieve the initial record ([56e9bbe](https://github.com/anran758/mincloudx/commit/56e9bbe1a1a22947380ee9289f6a19eae19b8f53))
- **io:** io support crud function, update faas-demo example ([d67f377](https://github.com/anran758/mincloudx/commit/d67f377c564d0935679c06d2c5c357d064321aae))
- **io:** support the `createMany` command to create many records ([e956c85](https://github.com/anran758/mincloudx/commit/e956c8541b403af50d5895c9c4c33161f246cfc3))
- **io:** support the `deleteMany` method for IO ([fcec4e3](https://github.com/anran758/mincloudx/commit/fcec4e3a292d88fb21695f767f8d64f641312655))
- **io:** support the `updateMany` method for IO, update document ([fe08bf6](https://github.com/anran758/mincloudx/commit/fe08bf6c75af054444a71197ecd815fb4b17f926))
- **io:** supports `count` function to fetch data count ([8e5273a](https://github.com/anran758/mincloudx/commit/8e5273ab80caa340fd6362481a2aa5d0b34c4d74))
- **io:** supports find to find lists of data ([ef4ceac](https://github.com/anran758/mincloudx/commit/ef4ceace80c70705c2462a62efd3dcdd9feb44e4))
- support faas build command ([13f705e](https://github.com/anran758/mincloudx/commit/13f705eb623b62d531ffc5825f0d60aed6e1c6ec))
- **types:** abstract the common TypeScript type files into the a separate package ([cc8fc2c](https://github.com/anran758/mincloudx/commit/cc8fc2cb64865a330043afc800150aca7abca6d1))
- **type:** support dynamic return via plain param ([8307f1c](https://github.com/anran758/mincloudx/commit/8307f1cfc864cc08f148e6cb184faa331c8445d8))

### Performance Improvements

- **cli:** abstract common configuration ([3ae22dc](https://github.com/anran758/mincloudx/commit/3ae22dc30c1086f3dd89a758a473c8dc1965b6b6))
- **cli:** introduce inquirer to enhance security when entering password during login ([7462292](https://github.com/anran758/mincloudx/commit/7462292dbf246df719d04c5089780bae085e91e3))
- **io:** unify the usage of BaaS.TableObject ([5b3132f](https://github.com/anran758/mincloudx/commit/5b3132f8d1e35ad038b3b222b0e9b52867f4868f))
- modify the usage of faas-demo ([c80e152](https://github.com/anran758/mincloudx/commit/c80e1523668e40887a115e0732d73055d9e9a490))
- use npmlog instead of default log ([b1294c3](https://github.com/anran758/mincloudx/commit/b1294c32ee4b808b4a779a888e029351dcaa6618))
