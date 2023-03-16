# mincloud

![Github lerna version (branch)](https://img.shields.io/github/lerna-json/v/anran758/mincloud)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GitHub](https://img.shields.io/github/license/anran758/mincloud)](https://github.com/anran758/mincloud/blob/master/LICENSE)

🔧 mincloud 是围绕着[知晓云](https://cloud.minapp.com/)云开发的生态库。

## 开发

### 添加新的 Package

通过 lerna create 创建新的 package

``` bash
npx lerna create @mincloud/<new_package_name> [packages|apps] --access restricted --es-module
```

生成后通过命令行进入新的 package 文件夹，可以借助 cli 相关的工具快速生成一个模板，基于模板进行开发。

### package 内部引用包

``` bash
# 添加 @mincloud/io package
npx lerna add @mincloud/io
```

## TODO

以下是 mincloud 目前的开发计划，如果你有任何意见或建议，欢迎提 issue 或联系我们。

- [x] [[packages/cli](./packages/cli/README.md)] 生成知晓云应用数据表对应的 typescript 类型
- [ ] [[packages/io](./packages/io/README.md)] 整合通用 io 模块
- [ ] [[apps/web-demo](./apps/web-demo/README.md)] web 页面开发模板
- [ ] [[apps/faas-demo](./apps/faas-demo/README.md)] 云函数开发模板
- [ ] 云函数框架
- [ ] 小程序模板
- [ ] Taro 模板
