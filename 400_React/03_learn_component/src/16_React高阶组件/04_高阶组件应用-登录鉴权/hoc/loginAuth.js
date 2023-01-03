// 判断是否登录，登录才允许跳转该组件
function loginAuth(OriginComponent) {
  return props => {
    // 从 localStorage 中获取 token
    const token = localStorage.getItem("token")

    if(token) {
      return <OriginComponent {...props} />
    }else{
      return <h4>请先登录，再进行跳转到对应的页面中</h4>
    }
  }
}

export default loginAuth