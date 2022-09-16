# mincloud

增强基于[知晓云](https://cloud.minapp.com/)开发的生态库

## 开发

### 添加新的 Package

通过 lerna create 创建新的 package

``` bash
npx lerna create @mincloud/<new_package_name> [packages|apps] --access restricted --es-module
```

生成后通过命令行进入新的 package 文件夹，可以借助 cli 相关的工具快速生成一个模板，基于模板进行开发。

### package 内部引用包

``` bash
# 添加 @mincloud/core package
npx lerna add @mincloud/core
```
