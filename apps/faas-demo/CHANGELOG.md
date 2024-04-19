# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.4.0](https://github.com/anran758/mincloudx/compare/v0.1.1...v0.4.0) (2024-04-19)

### Bug Fixes

- **faas:** fixed the issue where createFaas could not be called properly ([00b0b19](https://github.com/anran758/mincloudx/commit/00b0b194ab165332fd3c9058649e89ce9e99e8f7))

### Features

- added `faas mock` command to support invoking cloud function with mock data ([e066fc1](https://github.com/anran758/mincloudx/commit/e066fc107d63bb55e2f6f128429f93f7618ffba8))
- added baas sdk lib as a local project test, supplement type ([01f3cc6](https://github.com/anran758/mincloudx/commit/01f3cc6ab6a993a0f27f2c14deb1ec525e7c3c52))
- **io:** introduce `first` operator to efficiently retrieve the initial record ([56e9bbe](https://github.com/anran758/mincloudx/commit/56e9bbe1a1a22947380ee9289f6a19eae19b8f53))
- **io:** io support crud function, update faas-demo example ([d67f377](https://github.com/anran758/mincloudx/commit/d67f377c564d0935679c06d2c5c357d064321aae))
- **io:** support the `createMany` command to create many records ([e956c85](https://github.com/anran758/mincloudx/commit/e956c8541b403af50d5895c9c4c33161f246cfc3))
- **io:** support the `deleteMany` method for IO ([fcec4e3](https://github.com/anran758/mincloudx/commit/fcec4e3a292d88fb21695f767f8d64f641312655))
- **io:** support the `updateMany` method for IO, update document ([fe08bf6](https://github.com/anran758/mincloudx/commit/fe08bf6c75af054444a71197ecd815fb4b17f926))
- **io:** supports `count` function to fetch data count ([8e5273a](https://github.com/anran758/mincloudx/commit/8e5273ab80caa340fd6362481a2aa5d0b34c4d74))
- **io:** supports find to find lists of data ([ef4ceac](https://github.com/anran758/mincloudx/commit/ef4ceace80c70705c2462a62efd3dcdd9feb44e4))
- **types:** abstract the common TypeScript type files into the a separate package ([cc8fc2c](https://github.com/anran758/mincloudx/commit/cc8fc2cb64865a330043afc800150aca7abca6d1))

### Performance Improvements

- modify the usage of faas-demo ([c80e152](https://github.com/anran758/mincloudx/commit/c80e1523668e40887a115e0732d73055d9e9a490))
- use npmlog instead of default log ([b1294c3](https://github.com/anran758/mincloudx/commit/b1294c32ee4b808b4a779a888e029351dcaa6618))
