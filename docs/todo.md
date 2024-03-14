# TODO

Here is an overview of the upcoming development plans and strategies for `mincloudx`:

### Packages

- **@mincloudx/cli**: Core development of the command-line interface tools.
  - [x] `login` command
  - [x] `type` command
  - [x] Cloud Functions (`faas`) related commands:
    - [x] `build`
    - [x] `upload`
    - [x] `deploy`
    - [x] `mock`
    - [x] `debug`
- [x] **@mincloudx/faas**: Cloud functions development framework, completed.
- [x] **@mincloudx/types**: Common TypeScript type definitions, completed.
- [ ] **@mincloudx/io**: Input/output handling utilities, pending development.

### Others

- [ ] **Monorepo Template Project**: will provide a template for quickly starting projects.
- [ ] **Test Cases and Code Coverage**: aimed at ensuring code quality and stability.
  - [x] integration
  - [ ] e2e
- [ ] **Documentation Auto Generation**: to simplify documentation maintenance.
- **CI**
  - [x] lint/build/test
  - [ ] release: to implement an automated version control and release process.

As packages are iteratively updated, we will also continuously improve and update the demo project.

This description is more structured, making the status and plans of each project clear at a glance, facilitating team members and followers of the project to quickly grasp the development trajectory of the project.
