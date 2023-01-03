import { PureComponent } from "react";

// 给一些需要特殊数据的组件，注入 props
function enhancedUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        userInfo: {
          name: 'codercgx',
          lever: 99
        }
      }
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />
    }
  }

  return NewComponent
}

export default enhancedUserInfo