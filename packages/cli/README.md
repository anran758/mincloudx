# @mincloud/cli

> 知晓云数据表 JSON 信息转为 typescript 类型文件

## Usage

通过 yarn 安装:

``` bash
# 安装到开发依赖中
yarn add -D @mincloud/cli

# 通过 npx 使用

# 查看现有命令
mincloud-cli -h
```

### type

> 根据知晓云数据表转换成对应的 TypeScript 类型文件

**直接通过本地读取 schema 信息读取数据:**

进入知晓云控制面板后，打开浏览器开发者工具，在 network 找到 `dserve/v1.8/schema/?offset=0&limit=200` 这条请求，并将 response 保存为 `_schema.json` 文件放置与 package.json 同级目录中。

![copy response](static/network-save-response.png)

``` bash
# 生成类型，默认读取当前目录下的 _schema.json 文件来生成 TypeScript 类型文件
mincloud-cli type 
```

TODO:

- [ ] 支持通过 ClientId 自动拉取 schema 数据表信息进行转换。

## Development

在命令行执行命令:

``` shell
yarn generator
```

---

项目初始化使用 `yarn install` 或 `yarn` 安装依赖时会自动将 bin 安装到 node_modules 中。若在开发过程中修改了 bin 名称，可通过 `yarn link` 重新关联。

## TODO

- [x] 接入编译器/打包工具
- [x] 脚本提供自定义配置 (commander)
- [x] 封装为可供其他 package 使用的 cli 库
- [ ] Test Case
