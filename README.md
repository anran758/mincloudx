# mincloudx

![Github lerna version (branch)](https://img.shields.io/github/lerna-json/v/anran758/mincloudx)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GitHub](https://img.shields.io/github/license/anran758/mincloudx)](https://github.com/anran758/mincloudx/blob/master/LICENSE)

[知晓云](https://cloud.minapp.com/)是一个云开发平台，提供云端数据库、内容存储、云函数、微信小程序云开发等多项云服务。同时，知晓云还提供可视化建站、表单、消息通知、短信验证码等功能，为开发者提供全方位的云端开发服务。

🔧 mincloudx 是围绕着知晓云云开发的生态库，旨在扩充原有的功能以简便工作。

## Development

mincloudx 的开发是基于 [Monorepo](https://en.wikipedia.org/wiki/Monorepo) 的项目组织方式。我们使用 [Lerna](https://lerna.js.org/) 作为包管理器，并且将所有相关的软件包都存储在一个 Git 仓库中。

有关 Monorepo 项目的开发和发布规范，请参阅 [Monorepo 项目的开发与发布规范](./docs/dev-and-deploy.md)。

## Community

- 💬 可以在 [GitHub Discussions](https://github.com/anran758/mincloudx/discussions) 上与其他用户交流。
- 🚨 或是在 [GitHub Issues](https://github.com/anran758/mincloudx/issues) 上报告问题或提出功能请求。

## TODO

以下是 mincloudx 目前的开发计划，如果你有任何意见或建议，欢迎提 issue 或联系我们。

- [x] [[packages/cli](./packages/cli/README.md)] 生成知晓云应用数据表对应的 typescript 类型
- [ ] [[packages/io](./packages/io/README.md)] 整合通用 io 模块
- [ ] [[apps/web-demo](./apps/web-demo/README.md)] web 页面开发模板
- [ ] [[apps/faas-demo](./apps/faas-demo/README.md)] 云函数开发模板
- [ ] 云函数框架
- [ ] 小程序模板
- [ ] Taro 模板
