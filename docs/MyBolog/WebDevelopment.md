## react方面

### 1.useEffect和useLayoutEffect的区别

**useEffect**
`useEffect` 是在组件渲染到屏幕之后异步执行的。这意味着它不会阻塞浏览器的绘制过程，可以用于大多数副作用场景，比如数据获取、订阅或者手动修改DOM当组件更新后等。

*   **使用场景**: 用于大部分没有严格的执行时序要求的副作用操作。
*   **执行时机**: 在全部DOM变更完成后，浏览器绘制之后异步执行。
*   **影响**: 因为是异步执行，不会阻塞页面的可视化渲染。

**useLayoutEffect**
`useLayoutEffect` 的执行时机更接近于类组件的 `componentDidMount` 和 `componentDidUpdate` 生命周期方法。它在DOM更新完成后同步执行，但在浏览器进行绘制前。

*   使用场景: 适用于需要同步调整布局的副作用操作。如果需要在DOM变化后立即同步执行一些操作（比     如读取DOM布局并同步重绘），就可以用 `useLayoutEffect`。
*   执行时机: 在所有DOM变更之后同步执行，但在浏览器绘制之前。
*   影响: 因为阻塞了浏览器的绘制，如果执行复杂或长时间运算，可能会导致性能问题或视觉上的卡顿。

**区别**

*   执行时机: `useEffect` 是异步执行，不会阻塞浏览器的绘制；而 `useLayoutEffect`                 是同步执行，在所有DOM变更之后立即运行，但这会延迟浏览器的绘制。

*   适用场景: 一般推荐默认使用`useEffect`，只有在涉及到需要在布局渲染阶段同步执行的DOM操作或有严格的顺序要求时，才使用 `useLayoutEffect`。

由于 `useLayoutEffect` 会在绘制前执行，如果操作耗时过长，可能会导致用户感觉到卡顿。因此，除非必要，否则建议优先使用 `useEffect`。

原文链接：<https://blog.csdn.net/Constantiny/article/details/139013503>

## 打包工具方面

### 1.vite和webpack的区别

**webpack**
Webpack 打包过程：

*   从一个入口文件开始，基于代码文件中的所有 import，export，require 构建依赖树；
*   编译 JS/CSS 等模块；
*   使用算法排序、重写、连接代码；
*   优化。

开发环境的 Webpack：

*   打包所有代码；
*   启动 webpack-dev-server 托管打包好的代码；
*   启动 websocket 处理热更新 HMR。

应用规模越大，启动和热更新代码越慢。及时启动了热更新，每次代码变更也需要重新生产 Bundle 文件。

**vite**
Vite 是旨在提升开发者体验的下一代 JavaScript 构建工具，核心借助了浏览器的原生 ES Modules 和像 esbuild 这样的将代码编译成 native code 的打包工具。
Vite 主要有两方面组成：

*   一个开发服务器，基于 ESM 提供丰富的内建能力，比如速度快到惊人的模块热更新（HMR）；
*   一套构建指令，使用 rollup 进行代码打包，且零配置即可输出用于生产环境的高度优化的静态代码。

Vite 的核心能力和 `webpack` + `webpack-dev-server` 相似，但是在开发者体验上有一些提升：

无论项目大小有多大，启动应用都只需更少的时间；
无论项目大小有多大，`HMR（Hot Module Replacing）`热更新都可以做到及时响应；
按需编译；
零配置，开箱即用；
Esbuild 能力带来的 Typescript/jsx 的原生支持。

大型的 JavaScript 项目在开发和生产环境有比较差的性能表现，往往是因为我们使用的构建工具没有充分做到并行处理、内存优化和缓存。

原文链接：<https://juejin.cn/post/7106136866381889573>
