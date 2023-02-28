# @mincloud/cli

[![npm version](https://badge.fury.io/js/%40mincloud%2Fcli.svg)](https://badge.fury.io/js/%40mincloud%2Fcli)
[![GitHub release](https://img.shields.io/github/release/anran758/mincloud.svg)](https://GitHub.com/OWNER/REPO/releases/)

基于知晓云的命令行工具，旨在提供一种简单、快捷的方式，帮助开发者快速处理知晓云相关的业务。

### Installation

你可以通过 yarn 或 npm 安装：

``` bash
# 通过 yarn 安装
yarn add @mincloud/cli -D 

# 通过 npm 安装
npm install @mincloud/cli -D 
```

### Usage

``` bash
min-cloud [command] [options]
```

| Commands | Description                   |
| -------- | ----------------------------- |
| login    | 登录知晓云                    |
| type     | 将知晓云数据表转换 TypeScript |

**Global Options:**

- `-V, --version`：输出版本号
- `--envId <envId>`：设置环境 ID
- `-h, --help`：输出帮助信息

### Commands

#### login

``` bash
min-cloud login [options] <clientSecret> [clientId]
```

**Parameter:**

- `clientSecret`: 知晓云应用的密钥。
- `clientId`: 知晓云应用的 clint_id，默认从 rc 文件中读取。

**Example:**

``` bash
min-cloud login myClientSecret myClientId
```

#### type

``` bash
min-cloud type [options]
```

根据知晓云数据表转换成对应的 TypeScript 的 .d.ts 类型文件

- `--fromMinCloud`: 通过读取线上的知晓云数据表信息来转换类型文件。默认为 false。
- `-f, --schemaFile <path>`: 解析本地的 JSON 数据表文件来转换 TypeScript。默认为 "./_schema.json"。
- `--outputDir <path>`: 类型文件的输出目录。默认为 "./typings"。
- `--outputFileName <fileName>`: 类型文件的文件名。默认为 "schema"。

---

转换知晓云的数据表结构为 `.d.ts` 文件主要有两种方案：

**第一种**: 登录知晓云账号后，直接读取线上最新的数据表记录来转换

``` bash
min-cloud type --fromMinCloud
```

**第二种**： 若顾虑安全问题或其他因素考虑，还可以通过直接读取本地的 schema JSON 文件来转换：

进入知晓云控制面板后，打开浏览器开发者工具，在 network 找到 `dserve/v1.8/schema/?offset=0&limit=200` 这条请求，并将 response 保存为 `_schema.json` 文件放置与 package.json 同级目录中。

![copy response](static/network-save-response.png)

``` bash
# 生成类型，默认读取当前目录下的 _schema.json 文件来生成 TypeScript 类型文件
min-cloud type --schemaFile ./_schema.json
```

#### help

输出命令的帮助信息。

**Parameter:**

- `command`: 要输出帮助信息的命令名称

**Example:**

``` bash
# 查看 type 命令的使用方式
min-cloud help type
```

### Development

运行以下命令进行开发：

``` shell
# 监听项目中的文件变化
yarn watch

# 执行本地编译后的 cli 文件
yarn test
```

---

项目初始化使用 `yarn install` 或 `yarn` 安装依赖时会自动将 bin 安装到 node_modules 中。

若在开发过程中修改了 bin 名称，可在对应 package 中先通过 `yarn unlink` 取消关联，再通过 `yarn link` 重新关联。
