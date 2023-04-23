# Monorepo 项目的开发与发布规范

> 下述将对开发与部署做对应的约束

本项目采用 monorepo 的组织结构，使用 lerna 作为包管理器。

## 新增功能或新增 package

当需要新增功能或新增 package 时，需要切换到对应的 feature 分支。例如需要在 cli 中扩展新的功能，则需要切换至 feature/cli 中进行开发。

```bash
# 创建 feature 分支
git checkout develop  # 切换至开发分支
git checkout -b feature/cli  # 新分支的代码将基于 develop

# 或者使用 git flow
git flow feature start cli
```

## 完成功能开发并测试通过

当在 `feature` 分支中完成功能开发并测试通过后，将开发分支的代码合并至 develop 分支中：

```bash
git checkout develop
git merge --no-ff feature/cli
git branch -d feature/cli

# 或者使用 git flow
git flow feature finish cli
```

## 更新 package 版本号

合并分支至 `develop` 中后，需要更新对应 packages 的版本号：

```bash
npx lerna version --conventional-commits
# 选择需要更新的版本号

# 或者使用以下命令，直接指定版本号进行更新
# npx lerna version 0.0.1

# lerna version 会自动升级项目中的包版本号。具体的说它会做以下事情：

# 1. 检查项目中的所有包的当前版本号和它们的依赖关系，确定下一个版本号（根据 semver 规范）。
# 2. 更新每个包的 package.json 文件中的版本号字段。
# 3. 提交更新后的 package.json 文件和版本变更记录到 Git 仓库。
# 4. 为每个更新后的包创建 Git tag。
# 5. 将更新后的包发布到适当的 registry。
```

## 发布至 npm

```bash
npx lerna publish

# lerna publish 命令默认会使用 git tag 打标签并将更新后的包发布至 npm registry。
# 如果不想自动打标签，可以使用 --no-git-tag-version 选项
# 如果不想发布到 registry，可以使用 --skip-npm 选项
```

## 发布至 master 分支

经过测试确认无误后，需要通过 Github 提出 Pull Request ，并且经过审核后再合并至 master 分支中。
