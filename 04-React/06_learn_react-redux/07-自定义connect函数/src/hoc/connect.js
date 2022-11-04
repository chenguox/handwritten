import { PureComponent } from 'react'
// import store from '../store/index'
import { StoreContext } from './StoreContext'

export function connect(mapStateToProps, mapDispatchToProps, store) {
  return function(WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        console.log('context:', context)
        super(props)
    
        this.state = mapStateToProps(context.getState())
      }
    
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()))
        })
      }
    
      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const params = mapStateToProps(this.context.getState())
        const methods = mapDispatchToProps(this.context.dispatch)

        return <WrapperComponent {...this.props} {...params} {...methods} />
      }
    }

    NewComponent.contextType = StoreContext

    return NewComponent
  }
}

/**
 * 
 * 1、搭建 connect 的结构
 * （1） 接收两个参数 mapStateToProps 和 mapDispatchToProps
 *  (2) 返回一个函数，该函数接收一个组件，返回增强的组件
 * 
 * 2、将映射的 state 和 dispatch 作为新组件的属性值
 * 
 * 3、初始化 this.state 的值，在生命周期中进行订阅和取消
 * 
 * 4、针对 store 耦合度创建，利用 context 将 store 数据传递给组件 (StoreContext)
 * 
 * 5、修改 connect 高阶组件使用 context 
 */

