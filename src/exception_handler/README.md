# React Native 异常处理

分两个部分：

1、使用 `componentDidCatch` 对子组件异常处理

2、使用 `global.ErrorUtils` 对异步等异常进行处理

## 使用

### CatchComp组件

```jsx
import CatchComp from './exception_handler/catch_comp'

class App extends Component {
    render () {
        return (
            <CatchComp allowedInDevMode={true}>
                <ExampleComp/>
            </CatchComp>
        )
    }
}
```

#### 参数

* onClose: Function,
* title: string,
* message: string,
* children: React.ChildrenArray<React.Node>,
* headerStyle: StyleSheet.Styles,
* allowedInDevMode: boolean, 开发环境下是否启用异常处理，因开发环境已有现成异常报错，所以可以将此字段设置为false

### error_guard.js

具体使用参考 `guard_comp.js`，也可直接使用此文件来进行异常处理