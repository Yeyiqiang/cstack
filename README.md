# 前端充电栈

> 基于Vue3.0 + Ts + Vite构建的项目。

## 目录结构

```bash
├── cstack-app                      # 移动端
├── cstack-components               # 组件库
├── cstack-domain                   # domain
├── cstack-rest                     # rest
├── cstack-service                  # 服务端
├── cstack-utils                    # 工具库
│   ├── src                         # 源代码
│   │   ├── main.ts                    # 入口文件 加载组件 初始化等
│   │   ├── assets                  # 主题 字体等静态资源
│   │   ├── components              # 全局公用组件
│   │   ├── App.vue                 # 入口页面
│   │── vite.config.ts              # vite配置
│   │── tsconfig.json               # ts配置
│   │── tsconfig.node.json          # ts配置
│   └── package.json                # package.json
└── install-yarn.sh                 # 自动构建link
```

## Build Setup

```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```

## 发布

```bash
# 构建打包
npm run build
```
np
## 其它

```bash
# Git提交规范工具
npm install -g commitizen

# 使用commitizen快捷命令
commitizen init cz-conventional-changelog --save --save-exact

# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix

# 依赖别名
npm install 别名@npm:依赖名@版本号
```


## 组件使用说明
### table组件
- 表格组件使用 src/components/table/simple
```html
<!-- 搜索栏，如 输入框、下拉框等元素 -->
<template slot="searchForm">
  ...
</template>

<!-- 表格上方功能按钮，如 新增、编辑 -->
<template slot="funcBtns">
  ...
</template>

<!-- 若不需要显示 搜索栏、搜索、重置按钮，只需要显示功能按钮 -->
<template slot="header">
  ...
</template>

<!-- 表格最后一列 操作 列表显示按钮，row 为当前行数据内容 -->
<template slot="t-opers" slot-scope="{ row }">
  ...
</template>

```