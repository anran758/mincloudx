# @mincloud/convert-types

> 知晓云数据表 JSON 信息转为 typescript 类型文件

## Usage

进入知晓云控制面板后，打开浏览器开发者工具，在 network 找到 `dserve/v1.8/schema/?offset=0&limit=200` 这条请求，并将 response 保存为 `_scheme.json` 文件放置到本项目的根目录。

![copy response](static/network-save-response.png)

在命令行执行命令:

``` shell
node convert-types.js
```

## TODO

- [ ] webpack 模块化处理代码
- [ ] 封装为可供其他 package 使用的 cli 库
- [ ] 脚本提供自定义配置
