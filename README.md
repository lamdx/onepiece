# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## vue3.x & typeScript & vite

- [xushanpei/vite_vue3_ts: `vue3.x`，`typeScript`， `vite` 搭建一套企业级的开发脚手架 🤖](https://github.com/xushanpei/vite_vue3_ts)

## 创建版本库

- 选择一个合适的地方创建一个空目录
- 创建一个版本库

```shell
git init
```

## 搭建第一个 Vite 项目

- [Vite 中文网](https://vitejs.cn/guide/#scaffolding-your-first-vite-project)

> Vite 需要 Node.js 版本 >= 12.0.0

- 使用 NPM

```shell
npm init vite@latest
```

## eslint & prettier

### eslint & prettier 依赖安装

```shell
npm i eslint eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier @typescript-eslint/parser -D

npm i prettier eslint-config-prettier -D
```

```shell
# 安装 eslint
npm i eslint --save-dev
# 安装 eslint 插件
npm i eslint-plugin-vue --save-dev

npm i @typescript-eslint/eslint-plugin --save-dev

# eslint-plugin-prettier 使用 prettier 代替 eslint 格式化
npm i eslint-plugin-prettier --save-dev

# typescript parser
npm i @typescript-eslint/parser --save-dev

# 安装 prettier
npm i prettier --save-dev

# 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效
# 安装插件 eslint-config-prettier，关闭可能与 prettier 冲突的规则
npm i eslint-config-prettier --save-dev
```

### 项目下新建 .eslintrc.js

- 配置 eslint 校验规则

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier 的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // prettier
    // "prettier/prettier": "error",
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        bracketSpacing: true
      },
      {
        usePrettierrc: false
      }
    ],

    // https://eslint.org/docs/rules/
    // eslint校验不成功后，error 或 2 则报错，warn 或 1 则警告，off 或 0 则无提示
    // 禁止出现 console
    // 'no-console': 'warn',
    // 禁用 debugger
    'no-debugger': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止出现空函数
    'no-empty-function': 'warn',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止多次声明同一变量
    'no-redeclare': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 禁止自我赋值
    'no-self-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许 delete 变量
    'no-delete-var': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'warn',
    // 强制使用一致的缩进
    indent: 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度 4
    'max-depth': 'warn',
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量 20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 禁止出现 ;
    semi: ['warn', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',

    // vue 组件相关配置  https://eslint.vuejs.org/rules/
    // 要求组件名称始终为多字
    'vue/multi-word-component-names': 'off'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
};
```

### 项目下新建 .eslintignore

```
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist
```

### 项目下新建 .prettier.js

```js
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ],
  arrowParens: 'always'
};
```

## 配置 husky + lint-staged

- 使用 husky + lint-staged 助力团队编码规范，husky&lint-staged 安装推荐使用 mrm，它将根据 package.json 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged，因此请确保在此之前安装并配置所有代码质量工具，如 Prettier 和 ESlint

```shell
npm i mrm -D --registry=https://registry.npm.taobao.org
```

- husky 是一个为 git 客户端增加 hook 的工具；安装后，它会自动在仓库中的 .git/ 目录下增加相应的钩子；比如 pre-commit 钩子就会在你执行 git commit 的触发

- 那么我们可以在 pre-commit 中实现一些比如 lint 检查、单元测试、代码美化等操作；当然，pre-commit 阶段执行的命令当然要保证其速度不要太慢，每次 commit 都等很久也不是什么好的体验

- lint-staged，一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具；这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了呀，可能导致项目改动很大

- 所以这个 lint-staged，对团队项目和开源项目来说，是一个很好的工具，它是对个人要提交的代码的一个规范和约束

### 安装 lint-staged

- mrm 安装 lint-staged 会自动把 husky 一起安装下来

```shell
npx mrm lint-staged
```

- 安装成功后会发现 package.json 会增加以下配置

```json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{ts,tsx,vue,js,jsx}": "eslint --cache --fix"
  }
}
```

- 我们要结合 prettier 代码格式化，所以修改一下配置

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": ["eslint --fix", "prettier --write", "git add"]
  }
}
```

## vant

- Vue 3 项目，安装最新版 Vant

```shell
npm i vant
```

### 按需引入组件（推荐）

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
};
```

## router

```shell
npm i vue-router
```

### vite.config.js 配置别名路径

```js
import { defineConfig } from 'vite';
const path = require('path');
defineConfig({
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

```shell
# Cannot find name 'require'. Do you need to install type definitions for node
npm install @types/node --save-dev
```

- 然后在 tsconfig.json 中添加配置 types

```json
{
  "types": ["node"]
}
```

## axios

```shell
npm i axios
```

### tsconfig.json 配置别名路径

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## pinia

```shell
npm i pinia
```

## less

- 虽然 vite 原生支持 less/sass/scss/stylus，但是你必须手动安装他们的预处理器依赖

```shell
npm i less -D
```

```shell
npm i clipboard
```

## vconsole

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteVConsole } from 'vite-plugin-vconsole';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: path.resolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
      localEnabled: true, // 本地开启
      enabled: false, // 生产关闭
      config: {
        maxLogNumber: 1000,
        theme: 'dark'
      }
    })
  ]
});
```
