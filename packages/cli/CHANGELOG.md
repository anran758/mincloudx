# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

## [0.2.1](https://github.com/anran758/mincloudx/compare/v0.2.0...v0.2.1) (2024-02-26)

### Bug Fixes

- fixed the issue where environment variables were not working correctly ([b57d924](https://github.com/anran758/mincloudx/commit/b57d924c9143ca84d4a7b653aed1daa6bf3f2918))

### Features

- added `faas mock` command to support invoking cloud function with mock data ([e066fc1](https://github.com/anran758/mincloudx/commit/e066fc107d63bb55e2f6f128429f93f7618ffba8))
- faas build supports single file ([a8a5cbd](https://github.com/anran758/mincloudx/commit/a8a5cbdc1a0db637fa8586c86f3adfbe28eb74d4))
