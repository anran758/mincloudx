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

`master` 分支是受保护的，不允许直接操作 `master` 分支。经过测试确认无误后，需要通过 Github 提出 Pull Request ，并且经过审核后再合并至 master 分支中。

在 `master` 分支执行 `npx nx run release`
