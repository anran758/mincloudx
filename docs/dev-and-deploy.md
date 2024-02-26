# Monorepo 项目的开发与发布规范

> 下述将对开发与部署做对应的约束

本项目采用 monorepo 的组织结构，使用 lerna 作为包管理器。

## 新增功能或新增 package

当需要新增功能或新增 package 时，需要切换到对应的 feature 分支。例如需要在 cli 中扩展新的功能，则需要切换至 feature/cli 中进行开发。
在项目中优先通过 `git flow` 来处理版本控制。

```bash
# 创建新分支
git flow feature start cli

# or
git checkout develop  # 切换至开发分支
git checkout -b feature/cli  # 新分支的代码将基于 develop
```

## 完成功能开发并测试通过

当在 `feature` 分支中完成功能开发并测试通过后，将开发分支的代码合并至 develop 分支中：

```bash
git flow feature finish cli

# or
git checkout develop
git merge --no-ff feature/cli
git branch -d feature/cli
```

## 发布

开启新的 release 分支，准备发布。

```bash
git flow release start v0.1.1
```

通过 `lerna` 更新 package 发版。

> 注意，若 package 是需要编译源码的话，请确保 `package.json` 中含有 `prepublishOnly` 的 hook 做构建相关的工作，确保上传到 npm 的代码是最新的。

```bash
lerna publish --no-private

# lerna version 会自动升级项目中的包版本号。具体的说它会做以下事情：

# 1. 检查项目中的所有包的当前版本号和它们的依赖关系，确定下一个版本号（根据 semver 规范）。
# 2. 更新每个包的 package.json 文件中的版本号字段。
# 3. 提交更新后的 package.json 文件和版本变更记录到 Git 仓库。
# 4. 为每个更新后的包创建 Git tag。
# 5. 将更新后的包发布到适当的 registry。
```

`master` 分支是受保护的，不允许直接操作 `master` 分支。经过测试确认无误后，需要通过 Github 提出 Pull Request ，并且经过审核后再合并至 master 分支中。

合并到 `master` 分支后需要关闭 `release` 分支：

```bash
git flow release finish v0.1.1
```

由于 `release` 分支已经被合并到 `master` 中，因此默认会跳过合并 `master` 的步骤，只会合并到 `develop` 中，并删除 `release` 分支。
